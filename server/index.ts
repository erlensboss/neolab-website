import { serve } from "bun";
import { join } from "path";
import { sendContactEmail } from "./email";

const STATIC_DIR = join(import.meta.dir, "../dist");
const PORT = process.env.PORT || 3000;

serve({
  port: PORT,
  hostname: "0.0.0.0",
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/api/contact" && req.method === "POST") {
      return handleContactForm(req);
    }

    const filePath = join(
      STATIC_DIR,
      url.pathname === "/" ? "index.html" : url.pathname,
    );
    const file = Bun.file(filePath);

    if (await file.exists()) {
      return new Response(file, {
        headers: getContentTypeHeaders(filePath),
      });
    }

    const indexFile = Bun.file(join(STATIC_DIR, "index.html"));
    if (await indexFile.exists()) {
      return new Response(indexFile, {
        headers: { "Content-Type": "text/html" },
      });
    }

    return new Response("Not Found", { status: 404 });
  },
});

async function handleContactForm(req: Request): Promise<Response> {
  try {
    const body = await req.json();
    const { name, email, company, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        {
          error:
            "Missing required fields: name, email, and message are required",
        },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json({ error: "Invalid email format" }, { status: 400 });
    }

    await sendContactEmail({ name, email, company, message });

    return Response.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}

function getContentTypeHeaders(filePath: string): Record<string, string> {
  const ext = filePath.split(".").pop()?.toLowerCase();
  const contentTypes: Record<string, string> = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    json: "application/json",
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    svg: "image/svg+xml",
    ico: "image/x-icon",
    woff: "font/woff",
    woff2: "font/woff2",
    ttf: "font/ttf",
    eot: "application/vnd.ms-fontobject",
  };

  return {
    "Content-Type": contentTypes[ext || ""] || "application/octet-stream",
  };
}

console.log(`Server running on http://localhost:${PORT}`);

import { routeMappings, thankYouRoutes } from "../src/lib/routeMapping";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

const SITE_URL = "https://neolab.lv";

const EXCLUDED_LV_PATHS = [
  "/sikdatnes",
  "/personas-datu-apstrade",
  thankYouRoutes.lv,
];

function getPriority(lvPath: string): string {
  if (lvPath === "/") return "1.0";

  if (
    [
      "/seo-un-geo",
      "/ai-automatizacija",
      "/digitala-reklama",
      "/ai-lab",
      "/par-mums",
      "/blog",
    ].includes(lvPath)
  ) {
    return "0.9";
  }

  if (
    lvPath.includes("/ai-automatizacija/") ||
    lvPath.includes("/digitala-reklama/") ||
    lvPath === "/seo-un-geo-pakalpojumi" ||
    lvPath === "/bezmaksas-konsultacija"
  ) {
    return "0.7";
  }

  return "0.6";
}

function getChangeFreq(lvPath: string): string {
  if (lvPath === "/") return "weekly";
  if (lvPath === "/blog") return "weekly";
  if (
    [
      "/seo-un-geo",
      "/ai-automatizacija",
      "/digitala-reklama",
      "/ai-lab",
      "/par-mums",
    ].includes(lvPath)
  ) {
    return "monthly";
  }
  return "yearly";
}

function generateSitemap(): string {
  const today = new Date().toISOString().split("T")[0];

  const includedRoutes = routeMappings.filter(
    (route) => !EXCLUDED_LV_PATHS.includes(route.lv),
  );

  const urlEntries: string[] = [];

  for (const route of includedRoutes) {
    const lvUrl = `${SITE_URL}${route.lv}`;
    const enUrl = `${SITE_URL}${route.en}`;
    const priority = getPriority(route.lv);
    const changefreq = getChangeFreq(route.lv);

    urlEntries.push(`  <url>
    <loc>${lvUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="lv" href="${lvUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${lvUrl}" />
  </url>`);

    // EN page entry
    urlEntries.push(`  <url>
    <loc>${enUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="lv" href="${lvUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${lvUrl}" />
  </url>`);
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join("\n")}
</urlset>`;
}

const sitemap = generateSitemap();
const distDir = join(import.meta.dir, "..", "dist");

if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

const outputPath = join(distDir, "sitemap.xml");
writeFileSync(outputPath, sitemap, "utf-8");

const urlCount = (sitemap.match(/<url>/g) || []).length;
console.log(`Sitemap generated: ${outputPath}`);
console.log(`Total URLs: ${urlCount}`);

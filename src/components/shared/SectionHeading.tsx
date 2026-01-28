import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  chip?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  chip,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <ScrollReveal
      className={`${align === "center" ? "text-center" : ""} ${className}`}
    >
      {chip && (
        <span className="chip mb-4 inline-block">{chip}</span>
      )}
      <h2 className="text-balance mb-4">{title}</h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}

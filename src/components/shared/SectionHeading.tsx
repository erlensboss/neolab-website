import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  chip?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  gradientWord?: string;
}

export function SectionHeading({
  chip,
  title,
  description,
  align = "left",
  className = "",
  gradientWord,
}: SectionHeadingProps) {
  const renderTitle = () => {
    if (!gradientWord) return title;
    
    const parts = title.split(new RegExp(`(${gradientWord})`, 'g'));
    return parts.map((part, idx) => 
      part === gradientWord ? (
        <span key={idx} className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
          {part}
        </span>
      ) : (
        <span key={idx}>{part}</span>
      )
    );
  };

  return (
    <ScrollReveal
      className={`${align === "center" ? "text-center" : ""} ${className}`}
    >
      {chip && (
        <span className="chip mb-4 inline-block">{chip}</span>
      )}
      <h2 className="text-balance mb-4">{renderTitle()}</h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}

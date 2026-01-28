import { motion } from "framer-motion";

interface DiagramNodeProps {
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  delay?: number;
}

export function DiagramNode({ label, icon, active = false, delay = 0 }: DiagramNodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-xl border
        ${active 
          ? "bg-primary/10 border-primary/30 text-primary" 
          : "bg-card border-border text-foreground"
        }
        shadow-neo transition-all duration-300 hover:shadow-card
      `}
    >
      {icon && <span className="text-primary">{icon}</span>}
      <span className="font-medium text-sm">{label}</span>
    </motion.div>
  );
}

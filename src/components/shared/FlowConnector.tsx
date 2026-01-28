import { motion } from "framer-motion";

interface FlowConnectorProps {
  direction?: "horizontal" | "vertical";
  delay?: number;
}

export function FlowConnector({ direction = "horizontal", delay = 0 }: FlowConnectorProps) {
  return (
    <motion.div
      initial={{ scaleX: direction === "horizontal" ? 0 : 1, scaleY: direction === "vertical" ? 0 : 1 }}
      animate={{ scaleX: 1, scaleY: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`
        ${direction === "horizontal" 
          ? "h-px w-12 md:w-20 origin-left" 
          : "w-px h-8 md:h-12 origin-top"
        }
        bg-gradient-to-r from-primary/40 via-primary/20 to-transparent
      `}
    />
  );
}

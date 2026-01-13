import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="font-mono text-xs px-3 py-1.5 border border-border rounded-full hover:border-primary hover:text-primary transition-colors bg-background/50 text-foreground cursor-pointer"
    >
      {language === "pt" ? "EN" : "PT"}
    </motion.button>
  );
};
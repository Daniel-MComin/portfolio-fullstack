"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm font-mono flex items-center gap-1">
            {t("footer.madeWith")} {" "}
            {t("footer.by")}
          </p>

          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/in/luis-daniel-b5a0b7211/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Daniel-MComin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:danielmacmin@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          <p className="text-muted-foreground text-sm font-mono">
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

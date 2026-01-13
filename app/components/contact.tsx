"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, Download } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [cvUrl, setCvUrl] = useState<string | null>(null);
  const { t } = useLanguage();


  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-mono text-3xl md:text-4xl font-bold text-foreground mb-2">
            {t("contact.title")} <span className="text-primary">{t("contact.titleHighlight")}</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />

          <p className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
            {t("contact.description")}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <Mail className="text-primary mb-3" size={28} />
              <h3 className="font-mono font-semibold text-foreground mb-1">{t("contact.email")}</h3>
              <p className="text-muted-foreground text-sm">danielmacmin@gmail.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <Phone className="text-primary mb-3" size={28} />
              <h3 className="font-mono font-semibold text-foreground mb-1">{t("contact.phone")}</h3>
              <p className="text-muted-foreground text-sm">+55 (85) 98793-7960</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
            >
              <MapPin className="text-primary mb-3" size={28} />
              <h3 className="font-mono font-semibold text-foreground mb-1">{t("contact.location")}</h3>
              <p className="text-muted-foreground text-sm">{t("contact.locationValue")}</p>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:danielmacmin@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 font-mono px-8 py-4 bg-primary text-primary-foreground rounded hover:bg-destructive transition-all glow"
            >
              <Send size={18} />
              {t("contact.sendMessage")}
            </motion.a>

            {cvUrl && (
              <motion.a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 font-mono px-8 py-4 border border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Download size={18} />
                {t("contact.downloadCV")}
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
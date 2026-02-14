import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const StatsSection = () => {
  return (
    <section className="section-padding hero-gradient">
      <div className="container-narrow mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Get in Touch with Lendigo Microcare Today
            </h2>
            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              If you're ready to apply for an instant personal loan, Lendigo Microcare is here to help. Our quick loans make it easy for everyone to access funds when needed.
            </p>
            <a href="https://loan.lendigomicrocare.com/login" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 bg-background text-primary hover:bg-background/90"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <p className="text-sm text-primary-foreground/70 mb-2">OVER</p>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">1 Million+</p>
              <p className="text-sm text-primary-foreground/70 mt-2">App Downloads</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <p className="text-sm text-primary-foreground/70 mb-2">OVER</p>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">₹6000 Cr+</p>
              <p className="text-sm text-primary-foreground/70 mt-2">Total Loans Given</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

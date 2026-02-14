import { motion } from "framer-motion";
import { Heart, Gem, CreditCard, TrendingUp } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const useCases = [
  { icon: Heart, label: "Health" },
  { icon: Gem, label: "Wedding" },
  { icon: CreditCard, label: "Credit Card Payments" },
  { icon: TrendingUp, label: "Debt Consolidation" },
];

export const UseCasesSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              No Money? <span className="text-gradient">No Problem!</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Lendigo Microcare is here to help you take away your worries about unexpected sudden budget surges! Whether it's a medical emergency or a special celebration, we've got you covered.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl card-elevated"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <useCase.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-sm">{useCase.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-card rounded-3xl p-8 card-elevated">
              <div className="flex items-start gap-4 mb-6">
                <img src={logo} alt="Lendigo Microcare" className="w-12 h-12 rounded-xl object-contain" />
                <div>
                  <h4 className="font-semibold mb-1">Our Commitment</h4>
                  <p className="text-sm text-muted-foreground">
                    Secure and Transparent Services
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                At Lendigo Microcare, we prioritize security and transparency. We ensure that your data is protected and your transactions are safe. Whether you are using our instant loan app or applying for a digital loan, your information is secure.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We offer transparent communication throughout the loan process. From application to approval, we keep you informed at every step. With Lendigo Microcare, there are no hidden fees or surprises.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

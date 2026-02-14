import { motion } from "framer-motion";
import { TrendingDown, Clock, Wallet } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Quick Loans with Low Credit",
    description:
      "Lendigo Microcare offers quick loans even with low credit score. This makes it easier for those who might not have a perfect credit history, especially newly salaried people.",
  },
  {
    icon: Clock,
    title: "Instant Cash Loans in 1 Hour",
    description:
      "Our fast instant loan app allows you to get online loans with instant approval and minimal paperwork. Perfect for those who need urgent funds for emergencies.",
  },
  {
    icon: Wallet,
    title: "Emergency Loans for All Needs",
    description:
      "From medical loans to travel loans, Lendigo Microcare offers a range of options. Our emergency loan app is designed to provide instant money when you need them most.",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="section-padding bg-foreground text-background">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Benefits of Choosing <span className="text-primary">Lendigo Microcare</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get instant funds with the most trusted personal loan app in India
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-background/10 hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

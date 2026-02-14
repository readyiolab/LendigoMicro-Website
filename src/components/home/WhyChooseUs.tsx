import { motion } from "framer-motion";
import { Zap, CreditCard, Eye } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Swift Approval",
    description:
      "We believe in saving your valuable time. After successfully checking your documents, we approve your loan within minutes and it gets transferred to your account in no time!",
  },
  {
    icon: CreditCard,
    title: "Flexible Payment Terms",
    description:
      "We accept payments through simple flexible methods, be it easy pay or bank transfer. Enhance your lifestyle experience without worrying about the scarcity of funds!",
  },
  {
    icon: Eye,
    title: "Transparent Pricing",
    description:
      "We offer competitive interest rates and APRs that are fair. All costs are truthfully disclosed to the customer. Our policy is to make life fulfilling for you and your family.",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-gradient">Choose Us?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-secondary group-hover:hero-gradient transition-all duration-300 flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

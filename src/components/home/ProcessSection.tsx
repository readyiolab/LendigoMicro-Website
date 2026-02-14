import { motion } from "framer-motion";
import { FileText, ShieldCheck, Banknote } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "Step 1",
    title: "Fill in Basic Details",
    description:
      "Download the Lendigo Microcare app and enter your basic information. Whether it's a personal loan or quick cash, getting started is fast and simple.",
  },
  {
    icon: ShieldCheck,
    step: "Step 2",
    title: "Submit Documents for Verification",
    description:
      "Submit your ID and financial records online. Our smooth verification process ensures a hassle-free experience for urgent or regular loan applications.",
  },
  {
    icon: Banknote,
    step: "Step 3",
    title: "Receive Funds Instantly",
    description:
      "Once verified, the money is transferred to your account instantly. Lendigo Microcare ensures you get funds when you need them most.",
  },
];

export const ProcessSection = () => {
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
            Our Streamlined <span className="text-gradient">3-Step</span> Application Process
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lendigo Microcare makes this process easier, faster and safer for you in every possible way!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="bg-card rounded-2xl p-6 md:p-8 card-elevated h-full">
                <div className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-3">
                  {step.step}
                </span>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

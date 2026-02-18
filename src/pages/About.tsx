import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import {
  Zap, Settings, Sliders, Heart, Eye, Shield, Users, Headphones,
  Award, Building2, TrendingUp, CheckCircle2
} from "lucide-react";

const values = [
  { icon: Zap, title: "Speed", description: "Get funds when you need them most without unnecessary delays. Quick approvals and fast disbursals ensure life never comes to a standstill." },
  { icon: Settings, title: "Efficiency", description: "From application to disbursal, every step is smooth and hassle-free. Our streamlined process saves you both time and effort." },
  { icon: Sliders, title: "Flexibility", description: "Choose loan amounts and repayment tenures that fit your lifestyle. We adapt to your needs instead of forcing rigid structures." },
  { icon: Heart, title: "Empathy", description: "We see more than just numbers — we see people. Every borrower is treated with fairness, dignity, and care." },
  { icon: Eye, title: "Transparent", description: "No fine print, no hidden surprises — just clear terms you can trust. What we promise is exactly what you get." },
  { icon: Shield, title: "Security First", description: "Your data and transactions are protected with advanced security systems. Peace of mind comes built into every loan." },
  { icon: Users, title: "Accessibility", description: "Designed to support salaried, self-employed, and underserved communities alike. Financial help made easy, fair, and inclusive." },
  { icon: Headphones, title: "Customer Support", description: "A dedicated team is always ready to guide you at every step. From queries to repayments, we're here for you." },
];

const stats = [
  { value: "2002", label: "Established", icon: Building2 },
  { value: "1M+", label: "Happy Customers", icon: Users },
  { value: "₹6000Cr+", label: "Loans Disbursed", icon: TrendingUp },
  { value: "4.5★", label: "App Rating", icon: Award },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background section-padding">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container-narrow mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Regulated Since 2002
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Trusted Partner in{" "}
                <span className="text-gradient">Financial Growth</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Lendigo Microcare is a full-service digital lender dedicated to helping people get the money they need to achieve their goals. We're here to make borrowing simple, transparent, and accessible.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                {["Regulated Entity", "ISO Certified", "Bank-Grade Security"].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 px-3 py-2 bg-card rounded-lg card-elevated">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium">{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-card rounded-2xl p-6 card-elevated text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Welcome to Lendigo Microcare, a full-service digital lender dedicated to helping people get the money they need to achieve their goals. Lendigo Microcare is a FinTech company founded with the goal of integrating salaried professionals who had been turned down for credit by traditional banks into the appropriate credit structure.
                </p>
                <p>
                  We are a brand unit of DEVMUNI LEASING & FINANCE LIMITED, an NBFC registered with the RBI in October 2002, under the registration number B_14.02719.
                </p>
                <p>
                  We make every attempt to process your online application fast and easily to get you the money you need. Our team of knowledgeable loan officers is committed to providing tailored service and innovative lending solutions to meet the various needs of each of our clients.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-8 card-elevated"
            >
              <div className="space-y-8">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our goal is to provide our cherished customers with a genuine enriching experience through our unique and creative teamwork. As pioneers in the FinTech sector, we want to build a moral and responsible connection to give our clients more worthwhile prospects.
                  </p>
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Today, one needs a full digital and futuristic environment in the comfort of their home. We give you and your loved ones additional security and a stable financial future! At Lendigo Microcare, we want borrowing to be simple and painless.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Sets Us <span className="text-gradient">Apart</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card rounded-2xl p-6 card-elevated text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RBI Badge */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-primary/5 rounded-3xl p-8 md:p-12"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl hero-gradient flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Regulated Entity (NBFC)</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lendigo Microcare is a brand unit of DEVMUNI LEASING & FINANCE LIMITED, an NBFC registered with the Reserve Bank of India since October 2002. Registration Number: B_14.02719
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

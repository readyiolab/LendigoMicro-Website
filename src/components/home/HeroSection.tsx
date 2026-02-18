import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logo.jpeg";

export const HeroSection = () => {
  const { toast } = useToast();
  const handleComingSoon = () => toast({ title: "Coming Soon!", description: "This feature will be available shortly." });
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background section-padding">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Regulated Entity
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Powering Your Next Step with{" "}
              <span className="text-gradient">Instant Financial</span> Support
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Lendigo Microcare makes borrowing easy with fast approvals, fair terms, and convenient repayment plans. Get funds when you need them most.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="https://loan.lendigomicrocare.com/login" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="hero-gradient border-0 gap-2">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <Button size="lg" variant="outline" onClick={handleComingSoon}>
                Download App
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">5-min Approval</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">No Hidden Fees</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative mx-auto w-72 h-[580px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                  <div className="text-center p-6">
                    <img src={logo} alt="Lendigo Microcare" className="w-32 h-auto mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Lendigo Microcare</h3>
                    <p className="text-sm text-muted-foreground mb-6">Loans Made Easy</p>
                    <div className="space-y-3">
                      <div className="bg-secondary rounded-xl p-4 text-left">
                        <p className="text-xs text-muted-foreground">Loan Amount</p>
                        <p className="text-lg font-bold text-primary">₹50,000</p>
                      </div>
                      <div className="bg-secondary rounded-xl p-4 text-left">
                        <p className="text-xs text-muted-foreground">Status</p>
                        <p className="text-sm font-medium text-accent">✓ Approved</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-20 bg-background rounded-xl p-4 shadow-lg card-elevated"
              >
                <p className="text-xs text-muted-foreground">Approved in</p>
                <p className="text-lg font-bold text-primary">5 mins</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-8 bottom-32 bg-background rounded-xl p-4 shadow-lg card-elevated"
              >
                <p className="text-xs text-muted-foreground">Interest Rate</p>
                <p className="text-lg font-bold text-accent">From 1%</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const logo = "/assets/instant_loan_hero.png";
const person1 = "/assets/person_loan_1.png";
const person2 = "/assets/person_loan_2.png";
const person3 = "/assets/person_loan_3.png";

const heroImages = [
  { src: person1, alt: "Happy young professional checking phone with loan approval" },
  { src: person2, alt: "Couple looking at tablet, planning finances" },
  { src: person3, alt: "Small business owner smiling with approved loan in cafe" },
  { src: logo, alt: "Instant Loan 3D Illustration" }
];

export const HeroSection = () => {
  const { toast } = useToast();
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

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
            <div className="relative flex justify-center items-center h-[580px]">
              <div className="relative w-full max-w-[500px]">
                <Carousel
                  setApi={setApi}
                  opts={{
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {heroImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-[450px] object-cover rounded-3xl drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 top-20 bg-background/90 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-xl card-elevated"
              >
                <p className="text-xs text-muted-foreground font-medium">Approved in</p>
                <p className="text-xl font-bold text-primary">5 mins</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 bottom-32 bg-background/90 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-xl card-elevated"
              >
                <p className="text-xs text-muted-foreground font-medium">Interest Rate</p>
                <p className="text-xl font-bold text-accent">From 1%</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

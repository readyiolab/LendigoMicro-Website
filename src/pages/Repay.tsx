import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link2, FileText, ShieldCheck, Eye, CreditCard, Wallet, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { icon: Link2, text: "Start with the Repayment Link" },
  { icon: FileText, text: "Enter Basic Details" },
  { icon: ShieldCheck, text: "Verify Yourself" },
  { icon: Eye, text: "View Loan Information" },
  { icon: CreditCard, text: "Choose the Payment Amount" },
  { icon: Wallet, text: "Proceed to Payment" },
  { icon: CheckCircle2, text: "Receive Instant Confirmation" },
];

const Repay = () => {
  const { toast } = useToast();
  const [pan, setPan] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pan.length !== 10) {
      toast({ title: "Invalid PAN", description: "Please enter a valid 10-character PAN number.", variant: "destructive" });
      return;
    }
    toast({ title: "OTP Sent", description: "Please check your registered mobile for OTP." });
  };

  return (
    <Layout>
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-narrow mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Repay Your <span className="text-gradient">Loan</span></h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kindly verify the details below before making any transfer. For any queries, please contact us at{" "}
              <a href="mailto:support@lendigomicrocare.com" className="text-primary">support@lendigomicrocare.com</a>
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-3xl p-8 card-elevated">
              <h2 className="text-2xl font-bold mb-2">Login to Repay</h2>
              <p className="text-muted-foreground text-sm mb-8">Please login with your PAN and OTP to repay your loan.</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">PAN Number</label>
                  <Input placeholder="Enter your PAN" value={pan} onChange={(e) => setPan(e.target.value.toUpperCase())} maxLength={10} required className="uppercase" />
                  <p className="text-xs text-muted-foreground mt-2">An OTP will be sent to your registered mobile number</p>
                </div>
                <Button type="submit" className="w-full hero-gradient border-0">Get OTP</Button>
              </form>
              <div className="mt-8 p-4 bg-secondary/50 rounded-xl">
                <p className="text-sm text-muted-foreground text-center">
                  <ShieldCheck className="w-4 h-4 inline-block mr-2 text-primary" />Your data is encrypted and secure
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-xl font-bold mb-6">Simple & Secure Loan Repayment</h3>
              <p className="text-muted-foreground text-sm mb-8">At Lendigo Microcare, we've made loan repayment straightforward and stress-free. Here's how you can do it:</p>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <motion.div key={index} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl">
                    <div className="w-10 h-10 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">{index + 1}</div>
                    <div className="flex items-center gap-3">
                      <step.icon className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm font-medium">{step.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-narrow mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <h3 className="text-2xl font-bold mb-4">Multiple Payment Options</h3>
            <p className="text-muted-foreground mb-8">Choose from various payment methods for your convenience</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["UPI", "Debit Card", "Credit Card", "Net Banking", "Auto Debit"].map((method) => (
                <div key={method} className="px-6 py-3 bg-card rounded-xl card-elevated text-sm font-medium">{method}</div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Repay;

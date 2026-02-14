import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Phone, title: "Contact Us", details: ["+91-9311146939"] },
  { icon: Mail, title: "Send us an email", details: ["support@lendigomicrocare.com"] },
];

const officers = [
  { title: "Grievance Redressal Officer", name: "TARUN KUMAR SAXENA", phone: "+91-9311146939", email: "support@lendigomicrocare.com" },
  { title: "Collections Manager", name: "SHAKTI SINGH SHEKHAWAT", phone: "+91-9311146939", email: "support@lendigomicrocare.com" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", message: "", consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({ title: "Consent Required", description: "Please consent to receive service updates.", variant: "destructive" });
      return;
    }
    toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
    setFormData({ name: "", email: "", phone: "", message: "", consent: false });
  };

  return (
    <Layout>
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-narrow mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in <span className="text-gradient">Touch</span></h1>
            <p className="text-lg text-muted-foreground leading-relaxed">Have a question or need guidance? Our team is ready to listen and help you with the right financial solutions.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-3xl p-8 card-elevated">
              <h2 className="text-2xl font-bold mb-2">We'll get in touch shortly</h2>
              <p className="text-muted-foreground text-sm mb-8">We're here to answer your questions and provide personalized assistance!</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Name</label>
                  <Input placeholder="Enter your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="Enter your email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone Number</label>
                  <Input type="tel" placeholder="Enter your number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea placeholder="Type your message..." rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="consent" checked={formData.consent} onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })} />
                  <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">I consent to SMS, RCS & WhatsApp service updates.</label>
                </div>
                <Button type="submit" className="w-full hero-gradient border-0">Send Message</Button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.title} className="bg-secondary/50 rounded-2xl p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      {info.details.map((detail) => (<p key={detail} className="text-muted-foreground text-sm">{detail}</p>))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Key Contacts</h3>
                {officers.map((officer) => (
                  <div key={officer.name} className="bg-card rounded-2xl p-6 card-elevated">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-primary font-medium mb-1">{officer.title}</p>
                        <h4 className="font-semibold mb-2">{officer.name}</h4>
                        <p className="text-muted-foreground text-sm">{officer.phone}</p>
                        <p className="text-muted-foreground text-sm">{officer.email}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm text-center p-4 bg-secondary/30 rounded-xl">Our customer service experts are here for you 24/7</p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

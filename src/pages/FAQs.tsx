import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Search, MessageCircle, Shield, FileText, CreditCard, Lock } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const faqCategories = [
  {
    title: "General Questions", icon: HelpCircle,
    faqs: [
      { question: "What is a Non-Banking Financial Company (NBFC)?", answer: "A Non-Banking Financial Company (NBFC) is a company registered under the Companies Act that provides financial services like loans and advances. NBFCs are regulated by the Reserve Bank of India (RBI) and are an important part of the financial sector." },
      { question: "What is Lendigo Microcare and how does it work?", answer: "Lendigo Microcare is a digital lending platform that provides instant personal loans to salaried professionals. Simply download our app, fill in your basic details, submit required documents, and receive funds directly in your bank account within minutes of approval." },
      { question: "Is Lendigo Microcare a legitimate company?", answer: "Yes, Lendigo Microcare is a legitimate and RBI-registered NBFC. We are a brand unit of DEVMUNI LEASING & FINANCE LIMITED, registered with RBI since October 2002 (Registration Number: B_14.02719)." },
    ],
  },
  {
    title: "Eligibility & Application", icon: FileText,
    faqs: [
      { question: "Who can apply for a loan with Lendigo Microcare?", answer: "Any salaried individual between 21-55 years of age with a valid PAN card, Aadhaar card, and bank account can apply for a loan with Lendigo Microcare. You should have a minimum monthly income as per our eligibility criteria." },
      { question: "How much can I borrow from Lendigo Microcare?", answer: "You can borrow from ₹5,000 to ₹1,20,000 based on your eligibility, income, and credit profile. The exact loan amount will be determined during the application process." },
      { question: "What documents are required for applying?", answer: "You need to submit your PAN card, Aadhaar card, latest salary slips, and bank statements. Our digital process makes document submission quick and hassle-free." },
      { question: "Do we need any collateral/security?", answer: "No, Lendigo Microcare provides unsecured personal loans. You don't need to provide any collateral or security to apply for a loan with us." },
    ],
  },
  {
    title: "Loan Terms & Repayment", icon: CreditCard,
    faqs: [
      { question: "What is the interest rate on Lendigo Microcare loans?", answer: "Our interest rates start from 1% per month. The exact rate depends on your credit profile, loan amount, and tenure. All interest rates and APR are disclosed transparently before you confirm your loan." },
      { question: "What is the loan tenure?", answer: "Loan tenure ranges from 1 day to 365 days. You can choose a repayment period that suits your financial situation." },
      { question: "How do I repay my loan?", answer: "You can repay through multiple methods including UPI, debit/credit card, net banking, or auto-debit from your bank account. Visit our Repay Loan page to make a payment." },
      { question: "Is there a processing fee?", answer: "Yes, we charge a processing fee of 10% on the loan amount, which is deducted upfront. This is clearly disclosed before you confirm your loan application." },
    ],
  },
  {
    title: "Security & Privacy", icon: Lock,
    faqs: [
      { question: "Is my data safe with Lendigo Microcare?", answer: "Absolutely. We use bank-grade encryption and security measures to protect your personal and financial information. Your data is never shared with unauthorized third parties." },
      { question: "What happens if I miss a payment?", answer: "Missing a payment may result in late payment charges and could affect your credit score. We encourage you to contact our customer support if you're facing difficulties with repayment, and we'll work with you to find a solution." },
    ],
  },
];

const FAQs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-to-b from-secondary/50 to-background section-padding">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="container-narrow mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <MessageCircle className="w-4 h-4" />
                We're Here to Help
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Got Questions?{" "}<span className="text-gradient">We've Got Answers</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Find quick answers to common questions about our loan services, eligibility, repayment options, and more.
              </p>
              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input placeholder="Search for answers..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-12 py-6 text-base bg-card border-border" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="grid grid-cols-2 gap-4">
              {faqCategories.map((category, index) => (
                <motion.div key={category.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.1 }} className="bg-card rounded-2xl p-5 card-elevated">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{category.title}</h3>
                  <p className="text-xs text-muted-foreground">{category.faqs.length} questions</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-4xl">
          {searchQuery && filteredCategories.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
            </motion.div>
          )}
          {(searchQuery ? filteredCategories : faqCategories).map((category, categoryIndex) => (
            <motion.div key={category.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: categoryIndex * 0.1 }} className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="bg-card rounded-xl px-6 border-none card-elevated">
                    <AccordionTrigger className="text-left font-medium hover:no-underline py-5">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center bg-primary/5 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">Can't find the answer you're looking for? Please chat with our friendly team.</p>
            <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl hero-gradient text-primary-foreground font-medium">Contact Support</a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;

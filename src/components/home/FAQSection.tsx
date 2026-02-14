import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "What is a Non-Banking Financial Company (NBFC)?",
    answer:
      "A Non-Banking Financial Company (NBFC) is a company registered under the Companies Act that provides financial services like loans and advances. NBFCs are regulated by the Reserve Bank of India (RBI) and are an important part of the financial sector.",
  },
  {
    question: "What is Lendigo Microcare and how does it work?",
    answer:
      "Lendigo Microcare is a digital lending platform that provides instant personal loans to salaried professionals. Simply download our app, fill in your basic details, submit required documents, and receive funds directly in your bank account within minutes of approval.",
  },
  {
    question: "Who can apply for a loan with Lendigo Microcare?",
    answer:
      "Any salaried individual between 21-55 years of age with a valid PAN card, Aadhaar card, and bank account can apply for a loan with Lendigo Microcare. You should have a minimum monthly income as per our eligibility criteria.",
  },
  {
    question: "How much can I borrow from Lendigo Microcare?",
    answer:
      "You can borrow from ₹5,000 to ₹1,20,000 based on your eligibility, income, and credit profile. The exact loan amount will be determined during the application process.",
  },
  {
    question: "What documents are required for applying?",
    answer:
      "You need to submit your PAN card, Aadhaar card, latest salary slips, and bank statements. Our digital process makes document submission quick and hassle-free.",
  },
];

export const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground">
            Find answers to common questions about our loan services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border-none card-elevated"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-8">
            <Link to="/faqs">
              <Button variant="outline">View All FAQs</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

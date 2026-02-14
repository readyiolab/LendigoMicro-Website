import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

const RefundPolicy = () => {
  return (
    <Layout>
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-narrow mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <RotateCcw className="w-4 h-4" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Refund <span className="text-gradient">Policy</span></h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-4xl">
          <div className="space-y-8">
            <Section title="Overview">
              At Lendigo Microcare, we are committed to providing transparent and fair lending services. This Refund Policy outlines the conditions under which refunds or cancellations are applicable. Please read this policy carefully before availing our services.
            </Section>

            <Section title="Pre-Disbursement Cancellation">
              If you wish to cancel your loan application before the loan amount has been disbursed to your account, you may do so without any charges. The cancellation request must be submitted through the app or by contacting our support team at <a href="mailto:support@lendigomicrocare.com" className="text-primary">support@lendigomicrocare.com</a>. No processing fees or other charges will be applicable for pre-disbursement cancellations.
            </Section>

            <Section title="Post-Disbursement Cancellation (Within 24 Hours)">
              If you wish to cancel your loan within 24 hours of disbursement, you must repay the full principal amount received. Upon successful repayment of the principal, no interest or additional charges will be levied. The cancellation request must be raised within 24 hours of the loan amount being credited to your bank account.
            </Section>

            <Section title="Excess Payment Refund">
              In the event that you make a payment exceeding the outstanding dues (including principal, interest, and any applicable fees), the excess amount will be refunded to your registered bank account. Refunds for excess payments will be processed within 5-7 business days after reconciliation of accounts. You will receive a confirmation notification once the refund has been initiated.
            </Section>

            <Section title="Processing Fee Refund">
              The processing fee charged at the time of loan disbursement is non-refundable, except in cases where the loan is cancelled before disbursement. If the loan is cancelled pre-disbursement and a processing fee was deducted, it will be fully refunded within 5-7 business days.
            </Section>

            <Section title="How to Request a Refund">
              To request a refund or cancellation, you can contact our support team via email at <a href="mailto:support@lendigomicrocare.com" className="text-primary">support@lendigomicrocare.com</a> or call us at <a href="tel:+919311146939" className="text-primary">+91-9311146939</a>. Please provide your registered mobile number, PAN details, and loan reference number for faster processing.
            </Section>

            <Section title="Refund Timeline">
              All eligible refunds will be processed within 5-7 business days from the date of approval. Refunds will be credited to the same bank account from which the payment was received or to which the loan was disbursed. In case of delays beyond 7 business days, please reach out to our support team for assistance.
            </Section>

            <Section title="Non-Refundable Charges">
              The following charges are non-refundable: late payment fees, penal interest on overdue amounts, bounce charges for failed auto-debit transactions, and any third-party verification or documentation charges incurred during the loan process.
            </Section>

            <Section title="Dispute Resolution">
              If you have any disputes regarding refunds, please contact our Grievance Redressal Officer at <a href="mailto:support@lendigomicrocare.com" className="text-primary">support@lendigomicrocare.com</a>. We aim to resolve all grievances within 15 business days of receiving the complaint. All disputes shall be governed by the laws of India and subject to the exclusive jurisdiction of courts in New Delhi, Delhi.
            </Section>

            <Section title="Changes to This Policy">
              Lendigo Microcare reserves the right to modify this Refund Policy at any time. Any changes will be updated on our website and app. Continued use of our services after modifications constitutes acceptance of the updated policy.
            </Section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-card rounded-2xl p-6 md:p-8 card-elevated"
  >
    <h2 className="text-xl font-bold mb-4 text-foreground">{title}</h2>
    <p className="text-muted-foreground text-sm leading-relaxed">{children}</p>
  </motion.div>
);

export default RefundPolicy;

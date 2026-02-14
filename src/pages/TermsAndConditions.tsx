import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <Layout>
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-narrow mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & <span className="text-gradient">Conditions</span></h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-4xl">
          <div className="prose prose-sm max-w-none space-y-8">
            <Section title="Introduction">
              Please review the Terms and Conditions before proceeding. By clicking "I agree" or "I accept," or by downloading, installing, or using the services, you consent to and agree to the terms and conditions outlined in this document. If you do not agree, please refrain from using the services. This agreement is legally binding between you and Lendigo Microcare and its lending partners.
            </Section>

            <Section title="Definitions">
              The term "Application" refers to the digital platform developed by the Company, designed to provide lending services to end users. "Lender" refers to Lendigo Microcare and its lending partners. "Lending Partner" refers to a bank or NBFC associated with the Company for lending. "We" or "the Company" refers to Lendigo Microcare. "Loan" refers to the financial assistance you apply for. "Loan Agreement" refers to the agreement between the Lender and the customer. "App" represents the mobile application. "Outstanding amount" refers to the loan, interest, and fees due. "Platform" includes the mobile app and website. "Services" refer to the loan approval and disbursement processes. "User Data" refers to information provided by the user. "Website" refers to loan.lendigomicrocare.com.
            </Section>

            <Section title="Services">
              Our Services allow you to apply for loans if you meet the requirements specified within the App. You agree that the Company may collect, verify, and validate User Data as required by the Lender. Registration and login are required to access the Services. You must upload necessary information including personal details, financial data, bank information, KYC documents, and other compliance documents. By signing up, you authorize us to import information from third-party platforms and to contact you with personalized communication. Verification is conducted before loan approval. After approval, additional documentation may be required. Loan disbursal will follow the terms outlined in the Loan Agreement. You must repay the loan on specified dates. The Company may track your location until all outstanding dues are cleared. You remain responsible for all actions taken under your User Account. You must ensure confidentiality of your credentials and provide compatible devices for access. The Company may approve or reject registration without notice.
            </Section>

            <Section title="Licence">
              You must download and install the App to use the Services. By using the Services, you confirm that you are of legal age and capable of understanding and accepting these Terms. You are granted a limited, non-transferable license to use the App. The Company may provide updates, but is not obligated to do so. The App is licensed, not sold, and must be used in accordance with these Terms.
            </Section>

            <Section title="Restrictions">
              You must not misuse the Platform or engage in fraud, illegal activities, unauthorized sales, impersonation, harmful behavior, spamming, or uploading malicious files. You agree not to disrupt the Platform or violate applicable laws and regulations.
            </Section>

            <Section title="Content Available">
              The Company does not make warranties regarding content available on the Platform. We are not responsible for any third-party content unless explicitly stated.
            </Section>

            <Section title="Proprietary Rights">
              By registering, you agree that all intellectual property rights belong to the Company. Unauthorized use of trademarks, service marks, or logos is prohibited.
            </Section>

            <Section title="Links to Third-Party Sites">
              The Platform may contain links to external websites. These are independent of the Company, and we do not endorse or warrant any third-party content. Access is at your own discretion.
            </Section>

            <Section title="Third-Party Advertisements">
              Advertisements on the Platform do not constitute endorsements. Interactions with advertisers are solely your responsibility.
            </Section>

            <Section title="Ancillary Services">
              The Platform may offer chat rooms, blogs, reviews, and other services. Use of these services must comply with legal and ethical standards. Expert opinions on the Platform are not guaranteed to be accurate. Information is general and not legal or financial advice.
            </Section>

            <Section title="Termination">
              The Company may terminate these Terms if you violate them, if required by law, or if Services are discontinued. If dues remain unpaid, location tracking may continue until settlement. Upon termination, all rights are revoked and you must cease using the Platform.
            </Section>

            <Section title="Disclaimer of Warranties">
              You use the Platform at your own risk. All services are provided on an "as is," and "as available" basis. The Company disclaims all warranties including merchantability and fitness for a purpose. We do not guarantee uninterrupted, error-free service or accuracy of results. You are responsible for any damages resulting from downloads or reliance on information.
            </Section>

            <Section title="Indemnity">
              You agree to indemnify the Company, its employees, partners, and representatives from any claims arising from your violation of these Terms, infringement of others' rights, misuse of the Platform, or violation of laws.
            </Section>

            <Section title="Limitations of Liability">
              The Company is not liable for any direct or indirect damages arising from inability to use the Platform, delays, performance issues, loss of data, device damage, or any other issues related to the Services.
            </Section>

            <Section title="Force Majeure">
              The Company is not liable for service disruptions caused by events beyond control including natural disasters, internet failures, telecom failures, government regulations, riots, or similar circumstances.
            </Section>

            <Section title="Cancellation and Refund Policy">
              (i) Pre-disbursement cancellation is permitted. (ii) If cancellation occurs within 24 hours after disbursement, the principal must be repaid. (iii) Excess payments will be refunded within 5-7 days after reconciliation.
            </Section>

            <Section title="Privacy Policy">
              Personal information is collected and processed per our Privacy Policy, available on our website. Continued use signifies acceptance of all policies.
            </Section>

            <Section title="Changes">
              The Company may update these Terms at any time. Continued use of the Platform constitutes acceptance of the updated Terms.
            </Section>

            <Section title="Choice of Law and Jurisdiction">
              These Terms are governed by the laws of India. All disputes shall be resolved exclusively in the courts of New Delhi, Delhi.
            </Section>

            <Section title="Miscellaneous">
              By using the Services, you agree to the Terms, Loan Agreement, Application Form, and Privacy Policy. All documents together form the complete agreement. Claims must be filed within one year of use. If any part is invalid, the remainder stays effective.
            </Section>

            <Section title="Violations">
              For concerns or complaints regarding these Terms, contact us at <a href="mailto:support@lendigomicrocare.com" className="text-primary">support@lendigomicrocare.com</a>.
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

export default TermsAndConditions;

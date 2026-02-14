import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-narrow mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Lock className="w-4 h-4" />
              Legal
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy <span className="text-gradient">Policy</span></h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto max-w-4xl">
          <div className="space-y-8">
            <Section title="Introduction">
              This website ("loan.lendigomicrocare.com") and the mobile application (collectively referred to as the "website," "services," or "app") are owned and operated by Lendigo Microcare ("We," "Us," "Our"), a company incorporated under the applicable laws of India with its registered office at Delhi.
            </Section>

            <Section title="Consent">
              By using this platform, you consent to share the information required for availing the services offered. You acknowledge and agree that the app may collect and use your information as outlined in this Privacy Policy for facilitating services in collaboration with financial institutions, partners, and service providers ("Services"). The information collected will be used only for delivering these Services. To access any service offered directly or through partners, you must read, understand, and accept this Privacy Policy. By accepting it, you expressly consent to the collection, retention, analysis, use, and disclosure of your information as described in this document.
            </Section>

            <Section title="Camera and Microphone">
              We may require access to your device's camera and microphone to enable uploading photos, capturing your selfie, recording audio or video for verification, onboarding, KYC processes, or uploading documents. These permissions ensure a smooth user experience during registration or when availing services.
            </Section>

            <Section title="Location">
              Your location details may be collected and monitored to verify your address, determine serviceability, offer personalized promotions, and detect unusual activity for underwriting or fraud investigation. Location data is collected only when you enable location access on your mobile device.
            </Section>

            <Section title="Device">
              We may collect device-related information, including IP address, browser type, operating system version, hardware model, software details, device type, unique identifiers, and timestamps of your visits or activity. This helps us identify authorized devices, prevent fraud, and ensure secure service access.
            </Section>

            <Section title="Phone Storage">
              Phone Storage access is required to upload identity documents, bank statements, or other files necessary during a loan or service application.
            </Section>

            <Section title="SMS">
              We may read SMS headers to identify messages from 6-digit alphanumeric senders for verification and financial transaction analysis. We do not read personal SMS or OTP messages except those sent by us. Collected SMS metadata helps assess income patterns, spending behavior, and fraud detection.
            </Section>

            <Section title="Apps">
              The app collects the list of installed and system applications on your device and securely shares it with our trusted device-intelligence partner, Credeau (via devicesync.credeau.com). This helps detect high-risk apps, VPN usage, and fraud patterns, supporting faster and safer credit approvals. Data is collected only after your explicit consent.
            </Section>

            <Section title="Phone State">
              Phone state information may be collected during onboarding and periodic data sync to check SIM status and network strength. These checks occur on your device, and no personal identifiers, contacts, or call logs are uploaded.
            </Section>

            <Section title="Information We Collect">
              We respect user privacy and ensure transparency in how information is collected, stored, used, transferred, and disposed. SMS logs from 6-digit senders may be accessed to identify financial transactions for income estimation, cash flow analysis, and credit risk assessment. We do not read personal SMS. We collect necessary financial information such as bank account details, credit history, income data, and other details required to determine loan eligibility.
            </Section>

            <Section title="Customer Data">
              Customer Data may include personal details (name, address, date of birth, family details, photos), contact information (email, mobile number), business details (employment, industry, employer), health-related details (disabilities, medical conditions), financial information (bank transactions, loans, credit history), and device information (location, IP address, search queries, cookies, logs, etc.).
            </Section>

            <Section title="PII Data">
              We may collect Personally Identifiable Information (PII) when you apply for any product, register on our site or app, or engage in transactions. This information may be gathered through the website, mobile app, physical forms, or during your association with the company.
            </Section>

            <Section title="Device Data">
              Device Data may be processed after receiving your permission. The mobile app behavior and permissions can be reviewed within your phone settings. Cookies and third-party analytic tools may also collect data to enhance functionality. You may request deletion of Device Data, after which you may need to register again. Personal information is disposed of using secure destruction methods.
            </Section>

            <Section title="Purpose of Information Collected">
              Information collected may be used to provide requested services, share necessary details with partners for credit decisions, investigate violations of our terms, defend legal claims, comply with court orders or law enforcement, prevent fraud, money laundering, or other crimes, and contact you regarding our services via email, SMS, letter, or call.
            </Section>

            <Section title="Third-Party Policies">
              We collaborate with third-party service providers, including banks, NBFCs, credit bureaus, payment gateways, and analytics partners. Their use of information is governed by their respective privacy policies. Once you leave our app or visit a third-party website or application, this Privacy Policy no longer applies. We ensure secure sharing of information and require confidentiality commitments from partners. Third-party service providers may operate in other jurisdictions, and your data may become subject to those local laws.
            </Section>

            <Section title="Retention, Withdrawal & Account Deletion">
              You may access and review your shared information after clearing pending obligations. You may also withdraw consent or request deletion of your account by writing to <a href="mailto:support@lendigomicrocare.com" className="text-primary">support@lendigomicrocare.com</a>. Account deletion stops access to app services but does not affect existing agreements or obligations. We retain information only as long as necessary or legally required. Even after deletion requests, certain data may be retained for purposes such as fraud prevention, security, regulatory compliance, or audits.
            </Section>

            <Section title="Contact">
              For queries regarding this Privacy Policy, please contact: <a href="mailto:support@lendigomicrocare.com" className="text-primary">support@lendigomicrocare.com</a>
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

export default PrivacyPolicy;

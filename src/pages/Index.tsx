import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { LoanCalculator } from "@/components/home/LoanCalculator";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { FAQSection } from "@/components/home/FAQSection";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Lendigo Microcare - Your trusted partner for instant personal loans. Fast approval, 100% secure, and no hidden fees. Apply today!"
        keywords="instant loans, personal loans, quick approval, Lendigo Microcare, fintech loans India"
      />
      <HeroSection />
      <ProcessSection />
      <LoanCalculator />
      <WhyChooseUs />
      <BenefitsSection />
      <UseCasesSection />
      <StatsSection />
      <FAQSection />
    </Layout>
  );
};

export default Index;

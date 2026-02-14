import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { LoanCalculator } from "@/components/home/LoanCalculator";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { StatsSection } from "@/components/home/StatsSection";
import { FAQSection } from "@/components/home/FAQSection";

const Index = () => {
  return (
    <Layout>
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

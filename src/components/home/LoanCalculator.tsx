import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";

export const LoanCalculator = () => {
  const [principal, setPrincipal] = useState(50000);
  const [tenure, setTenure] = useState(180);
  const interestRate = 1; // 1% monthly

  const calculations = useMemo(() => {
    const processingFee = principal * 0.1;
    const netDisbursement = principal - processingFee;
    const interest = (principal * interestRate * tenure) / 100 / 30; // Monthly interest prorated
    const totalPayable = principal + interest;
    const apr = ((interest / principal) * (365 / tenure) * 100).toFixed(2);

    return {
      principal,
      processingFee,
      netDisbursement,
      interest: Math.round(interest),
      totalPayable: Math.round(totalPayable),
      apr,
    };
  }, [principal, tenure]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Personal Loan <span className="text-gradient">Calculator</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Use the slider to set your loan amount and tenure to understand your loan summary
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-6 md:p-10 card-elevated max-w-4xl mx-auto"
        >
          {/* Info badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Interest - 1%
            </div>
            <div className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
              APR {calculations.apr}%
            </div>
            <div className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
              Processing Fee - 10%
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Sliders */}
            <div className="space-y-8">
              {/* Principal Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium text-muted-foreground">
                    Principal Amount
                  </label>
                  <span className="text-lg font-bold text-primary">
                    {formatCurrency(principal)}
                  </span>
                </div>
                <Slider
                  value={[principal]}
                  onValueChange={(value) => setPrincipal(value[0])}
                  min={5000}
                  max={120000}
                  step={5000}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>₹5K</span>
                  <span>₹1.2L</span>
                </div>
              </div>

              {/* Tenure Slider */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium text-muted-foreground">
                    Tenure (Days)
                  </label>
                  <span className="text-lg font-bold text-primary">{tenure} Days</span>
                </div>
                <Slider
                  value={[tenure]}
                  onValueChange={(value) => setTenure(value[0])}
                  min={1}
                  max={365}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>1 Day</span>
                  <span>365 Days</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-secondary/50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-6">Loan Summary</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Principal Amount</span>
                  <span className="font-semibold">{formatCurrency(calculations.principal)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Processing Fee</span>
                  <span className="font-semibold text-destructive">
                    -{formatCurrency(calculations.processingFee)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Net Disbursement</span>
                  <span className="font-semibold text-accent">
                    {formatCurrency(calculations.netDisbursement)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Interest Amount</span>
                  <span className="font-semibold">{formatCurrency(calculations.interest)}</span>
                </div>
                <div className="flex justify-between items-center py-4 bg-primary/10 rounded-xl px-4 -mx-2">
                  <span className="font-semibold">Total Payable</span>
                  <span className="text-xl font-bold text-primary">
                    {formatCurrency(calculations.totalPayable)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

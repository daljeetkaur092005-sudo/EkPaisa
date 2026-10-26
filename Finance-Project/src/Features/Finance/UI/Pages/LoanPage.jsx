
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  Banknote,
  BookOpenText,
  Calculator,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock3,
  FileCheck2,
  Lightbulb,
  LockKeyhole,
  Percent,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import { useMain } from "../../Hooks/useMain";

// ==========================================
// 1. HELPER FUNCTION
// ==========================================
const formatINR = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);

// ==========================================
// 2. FAQ DATA
// ==========================================
const faqItems = [
  {
    question: "What is a personal loan?",
    answer:
      "A  loan is money borrowed from a bank or other lender that is generally repaid in fixed monthly instalments. Depending on the lender's rules, it may be used for expenses such as a planned purchase, a family event, travel or an unexpected bill. Always check the permitted uses in your loan agreement.",
  },
  {
    question: "How is a personal loan EMI calculated?",
    answer:
      "The EMI is calculated using the loan amount, the interest rate and the repayment period. A longer tenure usually lowers the monthly instalment but may increase the total interest paid. The EkPaisa calculator provides an estimate and does not include every lender fee.",
  },
  {
    question: "What affects personal loan eligibility?",
    answer:
      "Lenders may consider your age, income, employment or business stability, existing monthly repayments, credit history and their own internal criteria. Meeting general criteria does not guarantee approval.",
  },
  {
    question: "Which documents may be required?",
    answer:
      "Depending on the lender and your profile, you may be asked for identity and address proof, income proof, recent bank statements and employment or business details. Confirm the current list directly with the lender before applying.",
  },
  {
    question:
      "Is the lowest advertised interest rate always the best option?",
    answer:
      "Not necessarily. Compare the annual rate, APR if provided, processing fees, other charges, total repayment, late-payment rules and prepayment conditions. A lower advertised rate may not mean the lowest overall borrowing cost for every applicant.",
  },
  {
    question: "Does using an EMI calculator mean my loan is approved?",
    answer:
      "No. A calculator only estimates repayments from the values entered. A lender reviews your application and decides whether to approve it and which terms, if any, to offer.",
  },
];

// ==========================================
// 3. PERSONAL LOAN FEATURES
// ==========================================
const personalLoanFeatures = [
  {
    icon: Wallet,
    title: "Unsecured borrowing",
    description:
      "Many  loans do not require property or another asset as collateral. Approval still depends on the lender's checks and terms.",
  },
  {
    icon: Clock3,
    title: "Scheduled repayments",
    description:
      "Repayment is commonly organised into monthly instalments, making it easier to plan for a recurring payment in your budget.",
  },
  {
    icon: Percent,
    title: "Know the full cost",
    description:
      "Look beyond the EMI: interest, processing fees, taxes and other applicable charges can affect the total amount you repay.",
  },
];

// ==========================================
// 4. LOAN TYPES
// ==========================================
const loanTypes = [
  {
    title: "Personal loan",
    tag: "Everyday expenses",
    icon: Wallet,
    description:
      "A flexible borrowing option for eligible personal expenses. Check the agreement for permitted uses, charges and repayment conditions.",
    examples: "Planned purchases, travel or urgent expenses",
  },
  {
    title: "Home loan",
    tag: "Property purchase",
    icon: ShieldCheck,
    description:
      "A loan designed for an eligible home purchase or property-related purpose, usually secured against the property being financed.",
    examples: "Buying or constructing an eligible home",
  },
  {
    title: "Education loan",
    tag: "Study expenses",
    icon: BookOpenText,
    description:
      "Financing for eligible education costs, subject to course, institution, applicant and lender requirements.",
    examples: "Tuition and other approved study costs",
  },
  {
    title: "Vehicle loan",
    tag: "Vehicle purchase",
    icon: Banknote,
    description:
      "Financing for an eligible new or used vehicle. The down payment, security and repayment terms vary by lender.",
    examples: "Buying a car or two-wheeler",
  },
];

// ==========================================
// 5. REUSABLE SECTION LABEL
// ==========================================
const SectionLabel = ({ children }) => (
  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087A3D] sm:text-sm">
    {children}
  </p>
);

// ==========================================
// 6. MAIN COMPONENT
// ==========================================
const LoanPage = () => {
  const { navigate } = useMain();

  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [tenure, setTenure] = useState(5);
  const [openFaq, setOpenFaq] = useState(0);

  // ==========================================
  // SCROLL TO TOP
  // ==========================================
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  // ==========================================
  // SEO METADATA + FAQ SCHEMA
  // ==========================================
  useEffect(() => {
    const previousTitle = document.title;
    const pageTitle = "Personal Loan Guide & EMI Calculator | EkPaisa";

    document.title = pageTitle;

    let description = document.querySelector(
      'meta[name="description"]'
    );

    const createdDescription = !description;

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    const previousDescription = description.content;

    description.content =
      "Explore personal loans with EkPaisa. Learn about loan costs, eligibility factors and repayment terms, and estimate your monthly EMI with our loan calculator.";

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.ekpaisaFaq = "true";
    script.textContent = JSON.stringify(structuredData);

    document.head.appendChild(script);

    return () => {
      document.title = previousTitle;

      if (createdDescription) {
        description.remove();
      } else {
        description.content = previousDescription;
      }

      script.remove();
    };
  }, []);

  // ==========================================
  // EMI CALCULATION
  // ==========================================
  const months = tenure * 12;
  const monthlyRate = interestRate / 1200;

  const emi =
    loanAmount <= 0 || months <= 0
      ? 0
      : monthlyRate === 0
        ? loanAmount / months
        : (loanAmount *
            monthlyRate *
            Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = emi * months;
  const totalInterest = Math.max(0, totalPayment - loanAmount);

  const emiDetails = {
    emi,
    totalPayment,
    totalInterest,
  };

  // ==========================================
  // SCROLL TO CALCULATOR
  // ==========================================
  const scrollToCalculator = () => {
    document.getElementById("emi-calculator")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // ==========================================
  // LOAN AMOUNT HANDLERS
  // ==========================================
  const handleLoanAmountChange = (event) => {
    const rawValue = event.target.value;

    if (rawValue === "") {
      setLoanAmount(0);
      return;
    }

    const value = Number(rawValue);

    if (!Number.isFinite(value)) return;

    setLoanAmount(Math.min(5000000, Math.max(0, value)));
  };

  const handleLoanAmountBlur = () => {
    setLoanAmount((amount) =>
      Math.min(5000000, Math.max(50000, amount || 50000))
    );
  };

  // ==========================================
  // 7. PAGE UI
  // ==========================================
  return (
    <main className="overflow-hidden bg-white font-sans text-[#102016] selection:bg-[#DCEFE2] selection:text-[#075C30]">
      {/* ======================================
          HERO SECTION
      ====================================== */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#F4F8F2] via-white to-[#E7F0E5] px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-16 lg:pb-20 lg:pt-20">
        <div className="pointer-events-none absolute -right-20 top-0 -z-10 h-72 w-72 rounded-full bg-[#DCEFE2]/70 blur-3xl sm:h-96 sm:w-96" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 -z-10 h-48 w-48 rounded-full bg-[#F5C542]/20 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Hero content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#DCEFE2] bg-white/90 px-4 py-2 text-xs font-semibold text-[#087A3D] shadow-sm sm:text-sm">
              <ShieldCheck size={17} />
              Borrow with a clearer plan
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Loan,
              <span className="mt-1 block bg-gradient-to-r from-[#087A3D] to-[#B58B12] bg-clip-text text-transparent">
                explained simply.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-[#5F6F63] sm:text-lg sm:leading-8">
              Understand how a personal loan works, what can affect its cost,
              and how monthly repayments may fit your budget. Use the EkPaisa
              EMI calculator to explore your numbers before you decide.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={scrollToCalculator}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#087A3D] px-5 py-3 font-semibold text-white shadow-lg shadow-[#087A3D]/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#075C30] focus:outline-none focus:ring-4 focus:ring-[#087A3D]/20 sm:px-6"
              >
                Calculate your EMI
                <ArrowRight size={18} />
              </button>

              <a
                href="#personal-loan-basics"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#CFE3D3] bg-white px-5 py-3 font-semibold text-[#087A3D] transition duration-300 hover:border-[#087A3D] hover:bg-[#F7FBF7] focus:outline-none focus:ring-4 focus:ring-[#087A3D]/10 sm:px-6"
              >
                Understand loans
                <ArrowDownRight size={18} />
              </a>
            </div>

            <div className="mt-7 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                "Clear loan basics",
                "Interactive EMI estimate",
                "Costs to compare",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-[#526458]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DCEFE2] text-[#087A3D]">
                    <Check size={14} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero EMI preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#DCEFE2] via-white to-[#F5C542]/40 blur-sm" />

            <div className="relative overflow-hidden rounded-3xl border border-[#DCEFE2] bg-white p-5 shadow-2xl shadow-[#16452A]/10 sm:rounded-[1.75rem] sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#5F6F63]">
                    Example monthly EMI
                  </p>

                  <p className="mt-2 break-words text-3xl font-bold tracking-tight text-[#087A3D] sm:text-4xl">
                    {formatINR(emiDetails.emi)}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#718075]">
                    Your estimate updates as you adjust the calculator.
                  </p>
                </div>

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EAF4EC] text-[#087A3D]">
                  <Calculator size={25} />
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between gap-3 rounded-xl bg-[#F6F9F5] p-3.5">
                  <span className="text-sm text-[#5F6F63]">Loan amount</span>
                  <span className="text-right text-sm font-bold sm:text-base">
                    {formatINR(loanAmount)}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 rounded-xl bg-[#F6F9F5] p-3.5">
                  <span className="text-sm text-[#5F6F63]">Interest rate</span>
                  <span className="text-right text-sm font-bold sm:text-base">
                    {interestRate.toFixed(1)}% p.a.
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 rounded-xl bg-[#F6F9F5] p-3.5">
                  <span className="text-sm text-[#5F6F63]">
                    Repayment period
                  </span>
                  <span className="text-right text-sm font-bold sm:text-base">
                    {tenure} {tenure === 1 ? "year" : "years"}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={scrollToCalculator}
                className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#087A3D] px-5 py-3 font-semibold text-white transition duration-300 hover:bg-[#075C30] focus:outline-none focus:ring-4 focus:ring-[#087A3D]/20"
              >
                Personalise this estimate
                <ArrowRight size={18} />
              </button>

              <p className="mt-3 text-xs leading-5 text-[#718075]">
                Illustrative only. Your available rate and repayment terms may
                differ. Fees are not included in this estimate.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================================
          PERSONAL LOAN BASICS
      ====================================== */}
      <section
        id="personal-loan-basics"
        className="scroll-mt-24 px-5 py-12 sm:px-8 sm:py-14 lg:px-16 lg:py-16"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionLabel>Loan basics</SectionLabel>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              What is a Loan?
            </h2>

            <p className="mt-5 leading-7 text-[#5F6F63] sm:leading-8">
              A  Loan is a sum of money borrowed from a lender and
              repaid over an agreed period, usually through monthly
              instalments. Some personal loans are unsecured, which means
              collateral is not generally required, but the lender still
              reviews the applicant's financial profile.
            </p>

            <p className="mt-4 leading-7 text-[#5F6F63] sm:leading-8">
              People may explore personal loans for a range of eligible
              expenses. Before applying, check the loan's permitted use,
              interest rate, fees, repayment schedule and what happens if a
              payment is late.
            </p>

            <a
              href="#loan-costs"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-[#087A3D] transition hover:gap-3 hover:text-[#075C30]"
            >
              Learn what costs to compare
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-gradient-to-br from-[#087A3D] to-[#075C30] p-6 text-white shadow-lg shadow-[#087A3D]/10 sm:col-span-2 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                  <Lightbulb size={25} />
                </div>

                <h3 className="text-xl font-bold">
                  When might it be considered?
                </h3>
              </div>

              <p className="mt-4 max-w-2xl leading-7 text-white/85">
                When you have a defined expense, understand the repayment
                commitment and have checked that the monthly instalment fits
                your budget without putting essential expenses at risk.
              </p>
            </div>

            <div className="rounded-2xl border border-[#DCEFE2] bg-[#F8FBF7] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#087A3D]/5 sm:p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#087A3D] shadow-sm">
                <FileCheck2 size={22} />
              </div>

              <h3 className="mt-4 font-bold">Check the agreement</h3>

              <p className="mt-2 text-sm leading-6 text-[#5F6F63]">
                Read the lender's terms, fees, due dates and prepayment rules
                before accepting an offer.
              </p>
            </div>

            <div className="rounded-2xl border border-[#F0E2AD] bg-[#FFFBEB] p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#8C6B00]/5 sm:p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#8C6B00] shadow-sm">
                <LockKeyhole size={22} />
              </div>

              <h3 className="mt-4 font-bold">Protect your information</h3>

              <p className="mt-2 text-sm leading-6 text-[#685B35]">
                Apply only through a lender's verified channel and understand
                why your personal details are being requested.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          PERSONAL LOAN FEATURES
      ====================================== */}
      <section className="bg-[#F4F8F2] px-5 py-12 sm:px-8 sm:py-14 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Know the details</SectionLabel>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Personal loan features to understand
            </h2>

            <p className="mt-4 leading-7 text-[#5F6F63]">
              Terms differ between lenders. Use these points as a checklist
              when reading an offer, not as a promise of approval or a specific
              rate.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {personalLoanFeatures.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="rounded-2xl border border-[#DCEFE2] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#087A3D]/10 sm:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF4EC] text-[#087A3D]">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#5F6F63]">
                    {feature.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================
          EMI CALCULATOR
      ====================================== */}
      <section
        id="emi-calculator"
        className="scroll-mt-24 px-5 py-12 sm:px-8 sm:py-14 lg:px-16 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#087A3D] text-white shadow-lg shadow-[#087A3D]/20">
              <Calculator size={25} />
            </div>

            <div className="mt-4">
              <SectionLabel>Plan your monthly budget</SectionLabel>
            </div>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Personal loan EMI calculator
            </h2>

            <p className="mt-3 leading-7 text-[#5F6F63]">
              Enter a loan amount, annual interest rate and tenure to estimate
              your monthly instalment, interest cost and total repayment.
            </p>
          </div>

          <div className="mt-8 grid overflow-hidden rounded-3xl border border-[#DCEFE2] bg-white shadow-xl shadow-[#16452A]/5 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Calculator inputs */}
            <div className="space-y-6 p-5 sm:p-7 lg:p-8">
              {/* Loan amount */}
              <div>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <label htmlFor="loanAmount" className="font-semibold">
                    Loan amount
                  </label>

                  <span className="rounded-lg bg-[#EAF4EC] px-3 py-2 text-sm font-bold text-[#087A3D] sm:text-base">
                    {formatINR(loanAmount)}
                  </span>
                </div>

                <input
                  id="loanAmount"
                  type="range"
                  min="50000"
                  max="5000000"
                  step="25000"
                  value={Math.min(5000000, Math.max(50000, loanAmount))}
                  onChange={handleLoanAmountChange}
                  aria-label="Adjust loan amount"
                  className="h-2 w-full cursor-pointer accent-[#087A3D]"
                />

                <div className="mt-2 flex justify-between text-xs text-[#718075]">
                  <span>₹50,000</span>
                  <span>₹50,00,000</span>
                </div>

                <input
                  aria-label="Enter loan amount in rupees"
                  type="number"
                  min="50000"
                  max="5000000"
                  step="25000"
                  value={loanAmount === 0 ? "" : loanAmount}
                  onChange={handleLoanAmountChange}
                  onBlur={handleLoanAmountBlur}
                  className="mt-4 min-h-12 w-full rounded-xl border border-[#DCE6DB] bg-white px-4 py-3 outline-none transition focus:border-[#087A3D] focus:ring-4 focus:ring-[#087A3D]/10"
                />

                {loanAmount > 0 && loanAmount < 50000 && (
                  <p className="mt-2 text-xs text-[#8C6B00]">
                    Minimum loan amount is ₹50,000.
                  </p>
                )}
              </div>

              {/* Interest rate */}
              <div>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <label htmlFor="interestRate" className="font-semibold">
                    Annual interest rate
                  </label>

                  <span className="rounded-lg bg-[#EAF4EC] px-3 py-2 text-sm font-bold text-[#087A3D] sm:text-base">
                    {interestRate.toFixed(1)}%
                  </span>
                </div>

                <input
                  id="interestRate"
                  type="range"
                  min="5"
                  max="24"
                  step="0.1"
                  value={interestRate}
                  onChange={(event) =>
                    setInterestRate(Number(event.target.value))
                  }
                  className="h-2 w-full cursor-pointer accent-[#087A3D]"
                />

                <div className="mt-2 flex justify-between text-xs text-[#718075]">
                  <span>5%</span>
                  <span>24%</span>
                </div>
              </div>

              {/* Tenure */}
              <div>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <label htmlFor="tenure" className="font-semibold">
                    Repayment tenure
                  </label>

                  <span className="rounded-lg bg-[#EAF4EC] px-3 py-2 text-sm font-bold text-[#087A3D] sm:text-base">
                    {tenure} {tenure === 1 ? "year" : "years"}
                  </span>
                </div>

                <input
                  id="tenure"
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={tenure}
                  onChange={(event) => setTenure(Number(event.target.value))}
                  className="h-2 w-full cursor-pointer accent-[#087A3D]"
                />

                <div className="mt-2 flex justify-between text-xs text-[#718075]">
                  <span>1 year</span>
                  <span>30 years</span>
                </div>
              </div>
            </div>

            {/* EMI results */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#071B10] via-[#087A3D] to-[#0D5A32] p-5 text-white sm:p-7 lg:p-8">
              <div className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full border-[24px] border-white/10" />
              <div className="pointer-events-none absolute -bottom-16 -left-12 h-52 w-52 rounded-full border-[28px] border-[#F5C542]/15" />

              <div className="relative">
                <p className="text-sm font-medium text-white/75">
                  Estimated monthly EMI
                </p>

                <p className="mt-2 break-words text-3xl font-bold tracking-tight sm:text-4xl">
                  {formatINR(emiDetails.emi)}
                </p>

                <p className="mt-2 text-sm text-white/75">
                  {tenure} {tenure === 1 ? "year" : "years"} at{" "}
                  {interestRate.toFixed(1)}% per annum
                </p>

                <div className="mt-6 space-y-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm sm:p-5">
                  <div className="flex items-start justify-between gap-3 text-sm">
                    <span className="text-white/75">Principal amount</span>
                    <span className="text-right font-semibold">
                      {formatINR(loanAmount)}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-3 text-sm">
                    <span className="text-white/75">Estimated interest</span>
                    <span className="text-right font-semibold">
                      {formatINR(emiDetails.totalInterest)}
                    </span>
                  </div>

                  <div className="h-px bg-white/20" />

                  <div className="flex items-start justify-between gap-3">
                    <span className="font-semibold">Total repayment</span>
                    <span className="text-right text-lg font-bold">
                      {formatINR(emiDetails.totalPayment)}
                    </span>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-[#F5C542] p-4 text-sm leading-6 text-[#172317]">
                  <strong>Budget tip:</strong> A longer tenure can reduce the
                  monthly instalment while increasing the total interest paid.
                  Compare both figures before deciding.
                </div>

                <p className="mt-4 text-xs leading-5 text-white/75">
                  Estimate only. Processing fees, taxes, insurance and other
                  charges are excluded. The actual repayment schedule may
                  differ from this calculation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          LOAN COST CHECKLIST
      ====================================== */}
      <section
        id="loan-costs"
        className="scroll-mt-24 bg-[#F8FAF7] px-5 py-12 sm:px-8 sm:py-14 lg:px-16 lg:py-16"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionLabel>Before you apply</SectionLabel>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Compare more than the EMI
            </h2>

            <p className="mt-5 leading-7 text-[#5F6F63] sm:leading-8">
              The monthly instalment is only one part of a loan decision. Read
              the offer carefully and compare the total amount payable,
              additional charges and repayment rules.
            </p>

            <div className="mt-6 flex gap-3 rounded-2xl border border-[#F0E2AD] bg-[#FFFBEB] p-4 sm:p-5">
              <CircleHelp
                size={22}
                className="mt-0.5 shrink-0 text-[#8C6B00]"
              />

              <p className="text-sm leading-6 text-[#685B35]">
                If a fee, penalty or clause is unclear, ask the lender to
                explain it in writing before accepting the loan.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {[
              {
                title: "Interest rate and APR",
                text: "Check how the rate is applied and compare APR or equivalent total-cost disclosures when available.",
              },
              {
                title: "Processing and other fees",
                text: "Ask about processing fees, applicable taxes, insurance and any other charges that may apply.",
              },
              {
                title: "Total repayment",
                text: "Review the total of all instalments and charges rather than choosing based only on a low EMI.",
              },
              {
                title: "Late payment and prepayment rules",
                text: "Understand late-payment consequences, part-payment options, foreclosure conditions and related charges.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex gap-4 rounded-2xl border border-[#DCEFE2] bg-white p-4 transition duration-300 hover:border-[#B7D7BE] hover:shadow-md sm:p-5"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EAF4EC] text-[#087A3D]">
                  <Check size={18} />
                </div>

                <div>
                  <h3 className="font-bold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#5F6F63]">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================
          DIFFERENT LOAN TYPES
      ====================================== */}
      <section className="px-5 py-12 sm:px-8 sm:py-14 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Explore loan categories</SectionLabel>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Different loans serve different needs
            </h2>

            <p className="mt-4 leading-7 text-[#5F6F63]">
              The right category depends on what you need to finance, the
              lender's conditions and your ability to repay.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {loanTypes.map((loan, index) => {
              const Icon = loan.icon;

              return (
                <motion.article
                  key={loan.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  className="group flex h-full flex-col rounded-2xl border border-[#DCEFE2] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#B7D7BE] hover:shadow-xl hover:shadow-[#087A3D]/10 sm:p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF4EC] text-[#087A3D] transition duration-300 group-hover:bg-[#087A3D] group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <span className="rounded-full bg-[#F6F8F3] px-3 py-1.5 text-xs font-semibold text-[#5F6F63]">
                      {loan.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold">{loan.title}</h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-[#5F6F63]">
                    {loan.description}
                  </p>

                  <div className="mt-5 border-t border-[#E8F0E8] pt-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-[#087A3D]">
                      Common purpose
                    </p>

                    <p className="mt-2 text-sm leading-6 text-[#405247]">
                      {loan.examples}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================
          ELIGIBILITY AND DOCUMENTS
      ====================================== */}
      <section className="bg-[#F4F8F2] px-5 py-12 sm:px-8 sm:py-14 lg:px-16 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Prepare with confidence</SectionLabel>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Eligibility and documents
            </h2>

            <p className="mt-4 leading-7 text-[#5F6F63]">
              Every lender has its own policy. These are common areas that may
              be reviewed, not a guarantee that an application will qualify.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#DCEFE2] bg-white p-5 shadow-sm sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF4EC] text-[#087A3D]">
                <BadgeCheck size={25} />
              </div>

              <h3 className="mt-5 text-xl font-bold sm:text-2xl">
                Personal loan eligibility factors
              </h3>

              <ul className="mt-5 space-y-4">
                {[
                  "Age and residency criteria set by the lender",
                  "Income and employment or business stability",
                  "Existing EMIs and overall repayment capacity",
                  "Credit history and lender-specific checks",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-[#405247] sm:text-base"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#087A3D]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-[#DCEFE2] bg-white p-5 shadow-sm sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF5D6] text-[#8C6B00]">
                <FileCheck2 size={25} />
              </div>

              <h3 className="mt-5 text-xl font-bold sm:text-2xl">
                Documents you may be asked for
              </h3>

              <ul className="mt-5 space-y-4">
                {[
                  "Identity and address proof",
                  "Income proof or salary slips, where applicable",
                  "Recent bank statements",
                  "Employment or business details, if requested",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-[#405247] sm:text-base"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#087A3D]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================
          FAQ SECTION
      ====================================== */}
      <section
        id="loan-faqs"
        className="scroll-mt-24 px-5 py-12 sm:px-8 sm:py-14 lg:px-16 lg:py-16"
      >
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <SectionLabel>Personal loan FAQs</SectionLabel>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Questions worth asking
            </h2>

            <p className="mt-4 leading-7 text-[#5F6F63]">
              Quick answers to common questions about personal loans, EMI and
              application checks.
            </p>
          </div>

          <div className="mt-8 space-y-3">
            {faqItems.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border bg-white transition duration-300 ${
                    isOpen
                      ? "border-[#A9D1B3] shadow-md shadow-[#087A3D]/5"
                      : "border-[#DCEFE2] hover:border-[#B7D7BE]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                    className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-4 text-left font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#087A3D] sm:px-6 sm:py-5"
                  >
                    <span className="text-sm leading-6 sm:text-base">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? "bg-[#087A3D] text-white"
                          : "bg-[#EAF4EC] text-[#087A3D]"
                      }`}
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pb-5 text-sm leading-7 text-[#5F6F63] sm:px-6">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================
          FINAL CALL TO ACTION
      ====================================== */}
      <section className="px-5 pb-12 sm:px-8 sm:pb-14 lg:px-16 lg:pb-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#071B10] via-[#087A3D] to-[#0D5A32] px-5 py-8 text-white shadow-xl shadow-[#087A3D]/10 sm:px-8 sm:py-10 lg:px-14 lg:py-12">
          <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border-[30px] border-white/10" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-52 w-52 rounded-full bg-[#F5C542]/10 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center md:gap-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F5D76E] sm:text-sm">
                Take the next step thoughtfully
              </p>

              <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                Start with the numbers. Decide with clarity.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/80 sm:text-base">
                Estimate a possible repayment, compare the complete cost and
                read the lender's terms before submitting an application.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/apply")}
              className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#F5C542] px-6 py-3.5 font-bold text-[#172317] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 hover:bg-[#FFDB68] focus:outline-none focus:ring-4 focus:ring-white/25 sm:w-auto"
            >
              Go to application
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <p className="mx-auto mt-5 max-w-5xl text-center text-xs leading-6 text-[#607568]">
          EkPaisa provides educational information and illustrative
          calculations, not a loan approval or a promise of specific rates.
          Product availability, eligibility, fees and terms are determined by
          the relevant lender. Review official loan documents and consider
          your ability to repay before borrowing.
        </p>
      </section>
    </main>
  );
};

export default LoanPage;

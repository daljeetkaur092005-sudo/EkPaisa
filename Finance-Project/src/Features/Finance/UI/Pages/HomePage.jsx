
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Star,
  FileText,
  CheckCircle2,
  Wallet,
  Users,
  LockKeyhole,
  Sparkles,
  Rocket,
  UserRound,
  CircleCheck,
  House,
  Building2,
  Calculator,
  Handshake,
  BriefcaseBusiness,
  Home,
} from "lucide-react";

import { useMain } from "../../Hooks/useMain";
import pnb from "/src/assets/pnb.webp";
import newkotak from "/src/assets/newkotak.webp";
import newaxis from "/src/assets/newaxis.webp";
import induslnd from "/src/assets/induslnd .webp";
import idfc from "/src/assets/idfc.webp";
import hdfc from "/src/assets/hdfc.webp";
import icic from "/src/assets/icic.webp";
import canara from "/src/assets/canara.webp";
import bob from "/src/assets/bob.webp";
import newone from "/src/assets/newone.png";
import sbi from "/src/assets/sbi.webp";
import newlogo from "/src/assets/newlogo.png";
import coins from "/src/assets/coins.webp";
import property from "/src/assets/property.webp";
import homekey from "/src/assets/homekey.webp";
// ============================================================
// ANIMATION VARIANTS
// ============================================================

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const buttonMotion = {
  whileHover: {
    y: -3,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  whileTap: { scale: 0.97 },
};

const formCardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
    rotateX: 3,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.15,
    },
  },
};

const formStepVariants = {
  initial: { opacity: 0, x: 18, y: 8 },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    x: -18,
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

// ============================================================
// INPUT STYLES
// ============================================================

const inputClass =
  "w-full min-w-0 rounded-xl border border-[#D9E5D9] bg-white px-4 py-3 text-sm text-[#102016] outline-none transition-all duration-300 placeholder:text-[#9AA69C] focus:border-[#087A3D] focus:ring-4 focus:ring-[#087A3D]/10";

const labelClass =
  "mb-1.5 block text-sm font-semibold text-[#26382B]";

const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(Math.round(amount));

// ============================================================
// HOME PAGE
// ============================================================

const HomePage = () => {
  const { navigate } = useMain();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  // LOAN APPLICATION FORM

  const [formStep, setFormStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const initialLoanForm = {
    loanType: "Loan Against Property(LAP)",
    loanAmount: "",
    fullName: "",
    mobileNumber: "",
    monthlyIncome: "",
  };

  const [loanForm, setLoanForm] = useState(initialLoanForm);

  const updateLoanForm = (event) => {
    setLoanForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLoanFormSubmit = (event) => {
    event.preventDefault();

    if (formStep < 3) {
      setFormStep((current) => current + 1);
      return;
    }

    setSubmitted(true);
  };

  // EMI CALCULATOR

  const [emiAmount, setEmiAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(10.5);
  const [loanTenure, setLoanTenure] = useState(5);

  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = loanTenure * 12;

  const monthlyEMI =
    monthlyRate === 0
      ? emiAmount / totalMonths
      : (emiAmount *
          monthlyRate *
          Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const totalPayment = monthlyEMI * totalMonths;
  const totalInterest = totalPayment - emiAmount;

  // BANK LOGOS

  const bankLogos = [
    { name: "State Bank of India", src: sbi },
    { name: "HDFC Bank", src: hdfc },
    { name: "ICICI Bank", src: icic },
    { name: "Axis Bank", src: newaxis },
    { name: "Kotak Mahindra Bank", src: newkotak },
    { name: "Punjab National Bank", src: pnb },
    { name: "Bank of Baroda", src: bob },
    { name: "Canara Bank", src: canara },
    { name: "IDFC FIRST Bank", src: idfc },
    { name: "IndusInd Bank", src: induslnd },
  ];

  // FEATURES

  const features = [
    {
      icon: House,
      title: "Your Property, Your Potential",
      description:
        "Explore loan options against residential or commercial property.",
    },
    {
      icon: BriefcaseBusiness,
      title: "For Business or Personal Needs",
      description:
        "Explore financing for business expansion, working capital or major personal expenses.",
    },
    {
      icon: FileText,
      title: "Know What to Expect",
      description:
        "Understand eligibility, interest rates, fees and repayment terms.",
    },
    {
      icon: Handshake,
      title: "Find Your Next Step",
      description:
        "Explore available lending options and understand the application process.",
    },
  ];

  // TRUST ITEMS

  const trustItems = [
    {
      icon: Users,
      title: "Your Goals",
      description: "Explore at your pace",
    },
    {
      icon: ShieldCheck,
      title: "Transparency",
      description: "Read the details",
    },
    {
      icon: LockKeyhole,
      title: "Privacy First",
      description: "Privacy matters",
    },
  ];

  return (
    <main
      style={{ fontFamily: "'Inter', Arial, sans-serif" }}
      className="w-full min-w-0 overflow-x-clip bg-white font-sans text-[#102016] [&_button]:transition-all [&_button]:duration-300 [&_button]:ease-out [&_button:focus-visible]:outline-none [&_button:focus-visible]:ring-2 [&_button:focus-visible]:ring-[#D6A91F] [&_button:focus-visible]:ring-offset-2 [&_a]:transition-all [&_a]:duration-300 [&_a]:ease-out"
    >

      {/* ================================================== */}
      {/* HERO SECTION */}
      {/* ================================================== */}

      <section className="relative isolate w-full min-w-0 overflow-hidden bg-[#102016] px-3 py-9 sm:px-5 sm:py-12 md:px-7 md:py-14 lg:px-9 lg:py-16 xl:min-h-[740px] xl:px-12">

        {/* BACKGROUND IMAGE */}

        <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden bg-[#102016]">
          <img
            src={newone}
            alt="EkPaisa financial background"
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[75%_center] [@media(max-width:767px)]:object-[45%_45%] md:object-[75%_25%]"
          />
        </div>

        {/* IMAGE OVERLAY */}

        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#102016]/45 via-[#102016]/45 to-[#102016]/90 sm:bg-gradient-to-r sm:from-[#102016]/75 sm:via-[#102016]/45 sm:to-[#102016]/15" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#102016]/70 to-transparent" />

        {/* HERO CONTENT */}

        <div className="relative mx-auto grid w-full max-w-[1440px] min-w-0 items-center gap-7 sm:gap-9 lg:grid-cols-2 lg:gap-8 xl:grid-cols-[1.05fr_0.85fr] xl:gap-10">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto flex w-full max-w-xl min-w-0 flex-col items-start text-left text-white lg:mx-0"
          >

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/30 bg-[#102016]/45 px-3 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-sm sm:mb-6 sm:px-4 sm:text-sm"
            >
              <Home size={16} className="shrink-0 text-[#FFE17A]" />
              <span>LOAN AGAINST PROPERTY</span>
            </motion.div>

            <h1 className="max-w-full break-words text-4xl font-extrabold leading-[1.08] tracking-tight min-[390px]:text-[2.65rem] sm:text-5xl md:text-6xl xl:text-[4.25rem]">
              Unlock Your
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-1 block text-[#F1C638]"
              >
                Property's Value.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-5 max-w-xl text-base leading-7 text-white/95 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl"
            >
              Get a Loan Against Property (LAP) with interest rates starting at{" "}
              <span className="font-semibold text-[#F1C638]">9% p.a.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-3 max-w-xl text-sm leading-6 text-white/85 sm:mt-4 sm:text-base sm:leading-7"
            >
              Use your residential or commercial property to explore funding
              options, repayment terms and financing possibilities with EkPaisa.
            </motion.p>

            {/* HERO HIGHLIGHTS */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                    delayChildren: 0.4,
                  },
                },
              }}
              className="mt-6 grid w-full max-w-xl grid-cols-3 items-start gap-2 border-y border-white/20 py-4 min-[390px]:gap-3 sm:mt-7 sm:gap-5 sm:py-5"
            >
              {[
                {
                  icon: ShieldCheck,
                  label: "Starting at",
                  value: "9% p.a.",
                },
                {
                  icon: Zap,
                  label: "Residential &",
                  value: "Commercial Property",
                },
                {
                  icon: Star,
                  label: "Flexible",
                  value: "Repayment Tenure",
                },
              ].map(({ icon: Icon, label, value }) => (
                <motion.div
                  key={label}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="flex min-w-0 flex-col items-center gap-2 text-center text-[11px] font-medium leading-snug text-white min-[390px]:text-xs sm:flex-row sm:items-center sm:gap-2 sm:text-left sm:text-base"
                >
                  <Icon
                    size={20}
                    className="shrink-0 text-[#FFE17A] sm:h-6 sm:w-6"
                  />

                  <span className="min-w-0">
                    <span className="block whitespace-nowrap">{label}</span>
                    <span
                      className={
                        value === "9% p.a."
                          ? "mt-1 block whitespace-nowrap text-sm font-bold text-[#FFE17A] min-[390px]:text-base sm:text-lg"
                          : "mt-1 block font-normal text-white"
                      }
                    >
                      {value}
                    </span>
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-4 max-w-xl text-xs leading-5 text-white/75 sm:mt-5 sm:text-sm sm:leading-6"
            >
              Indicative starting rate. Actual rate depends on lender policy,
              borrower profile and property assessment.
            </motion.p>
          </motion.div>

          {/* LOAN APPLICATION FORM */}

          <motion.div
            id="loan-application-form"
            variants={formCardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              y: -2,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            style={{ transformPerspective: 1200 }}
            className="relative mx-auto w-full min-w-0 max-w-md justify-self-center lg:justify-self-end xl:translate-y-[-16px]"
          >
            <form
              onSubmit={handleLoanFormSubmit}
              className="relative w-full min-w-0 overflow-hidden rounded-2xl border border-white/70 bg-white shadow-2xl shadow-black/20"
            >
              {submitted ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center px-5 py-8 text-center sm:px-8 sm:py-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EAF4EC] text-[#087A3D]">
                    <CheckCircle2 size={34} />
                  </div>

                  <h3 className="mt-5 text-xl font-extrabold text-[#102016] sm:text-2xl">
                    Details submitted!
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-[#5F6F63]">
                    Thank you, {loanForm.fullName}. Your details have been
                    submitted on this page. 
                  </p>

                  <div className="mt-5 w-full rounded-xl border border-[#DCEFE2] bg-[#F5F9F4] p-3 text-left text-sm sm:p-4">
                    <div className="flex flex-wrap justify-between gap-2 py-1">
                      <span className="text-[#5F6F63]">Loan type</span>
                      <strong className="text-right text-[#102016]">
                        {loanForm.loanType}
                      </strong>
                    </div>

                    <div className="flex flex-wrap justify-between gap-2 py-1">
                      <span className="text-[#5F6F63]">Loan amount</span>
                      <strong className="text-right text-[#102016]">
                        ₹{Number(loanForm.loanAmount).toLocaleString("en-IN")}
                      </strong>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormStep(1);
                      setLoanForm(initialLoanForm);
                    }}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#087A3D] to-[#075C30] px-4 py-3 text-sm font-bold text-white hover:from-[#075C30] hover:to-[#064824] sm:px-5"
                  >
                    Start a new application
                    <ArrowRight size={17} />
                  </button>
                </div>
              ) : (
                <>
                  {/* FORM HEADER */}

                  <div className="relative overflow-hidden bg-gradient-to-br from-[#075C30] via-[#087A3D] to-[#0B6B3A] px-4 pb-4 pt-4 sm:px-6">
                    <div className="pointer-events-none absolute -right-7 -top-12 h-36 w-36 rounded-full border-[18px] border-white/10" />
                    <div className="pointer-events-none absolute -bottom-10 right-24 h-24 w-24 rounded-full bg-[#FFD95A]/10" />

                    <div className="relative flex items-center justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <motion.div
                          animate={{ rotate: [0, -5, 5, 0] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-[#FFE17A]"
                        >
                          <Wallet size={22} />
                        </motion.div>

                        <div className="min-w-0">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#FFE17A]">
                            EkPaisa
                          </p>
                          <h2 className="mt-0.5 text-lg font-extrabold text-white sm:text-xl">
                            Find Your Loan
                          </h2>
                        </div>
                      </div>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                        {formStep === 3 ? (
                          <CircleCheck size={20} />
                        ) : (
                          <span className="text-sm font-bold">0{formStep}</span>
                        )}
                      </div>
                    </div>

                    <p className="relative mt-2.5 text-xs leading-5 text-white/85 sm:text-sm">
                      Tell us a little about your requirements to get started.
                    </p>

                    {/* PROGRESS BAR */}

                    <div className="relative mt-3.5">
                      <div className="h-1 overflow-hidden rounded-full bg-white/20">
                        <motion.div
                          className="h-full rounded-full bg-[#FFD95A]"
                          animate={{ width: `${(formStep / 3) * 100}%` }}
                          transition={{
                            duration: 0.45,
                            ease: "easeInOut",
                          }}
                        />
                      </div>

                      <div className="mt-2.5 grid grid-cols-3 gap-1.5 sm:gap-2">
                        {[
                          { number: 1, label: "Loan details" },
                          { number: 2, label: "Your details" },
                          { number: 3, label: "Income" },
                        ].map((item) => (
                          <div
                            key={item.number}
                            className="flex min-w-0 items-center gap-1.5"
                          >
                            <motion.span
                              animate={{
                                backgroundColor:
                                  item.number <= formStep
                                    ? "#FFD95A"
                                    : "rgba(255,255,255,0.15)",
                                color:
                                  item.number <= formStep
                                    ? "#123D27"
                                    : "#FFFFFF",
                              }}
                              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                            >
                              {item.number < formStep ? (
                                <CheckCircle2 size={13} />
                              ) : (
                                item.number
                              )}
                            </motion.span>

                            <span className="min-w-0 text-[9px] font-medium leading-4 text-white/90 sm:text-xs">
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* FORM FIELDS */}

                  <div className="px-4 py-4 sm:px-6 sm:py-5">
                    <AnimatePresence mode="wait" initial={false}>
                      {/* STEP 1 */}

                      {formStep === 1 && (
                        <motion.div
                          key="step-one"
                          variants={formStepVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="space-y-3.5"
                        >
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#087A3D]">
                              Step 01
                            </p>
                            <h3 className="mt-0.5 text-base font-bold text-[#102016]">
                              What are you looking for?
                            </h3>
                          </div>

                          <div>
                            <label htmlFor="loanType" className={labelClass}>
                              Loan type
                            </label>

                            <div className="relative">
                              <Wallet
                                size={17}
                                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#087A3D]"
                              />

                              <select
                                id="loanType"
                                name="loanType"
                                value={loanForm.loanType}
                                onChange={updateLoanForm}
                                className="w-full min-w-0 appearance-none rounded-xl border border-[#D9E5D9] bg-white py-3 pl-11 pr-10 text-sm font-medium text-[#102016] outline-none transition-all focus:border-[#087A3D] focus:ring-4 focus:ring-[#087A3D]/10"
                              >
                                <option>Loan Against Property(LAP)</option>
                                <option>Personal Loan</option>
                                <option>Home Loan</option>
                              </select>

                              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#087A3D]">
                                ▾
                              </span>
                            </div>
                          </div>

                          <div>
                            <label htmlFor="loanAmount" className={labelClass}>
                              Required loan amount
                            </label>

                            <div className="flex min-w-0 overflow-hidden rounded-xl border border-[#D9E5D9] transition-all focus-within:border-[#087A3D] focus-within:ring-4 focus-within:ring-[#087A3D]/10">
                              <span className="flex shrink-0 items-center border-r border-[#D9E5D9] bg-[#F3F8F3] px-3 text-sm font-bold text-[#087A3D] sm:px-4">
                                ₹
                              </span>

                              <input
                                id="loanAmount"
                                name="loanAmount"
                                type="number"
                                min="1"
                                required
                                value={loanForm.loanAmount}
                                onChange={updateLoanForm}
                                placeholder="e.g. 500000"
                                className="min-w-0 flex-1 bg-white px-3 py-3 text-sm text-[#102016] outline-none placeholder:text-[#9AA69C] sm:px-3.5"
                              />
                            </div>

                            <p className="mt-1.5 text-xs text-[#788579]">
                              Enter the amount you want to borrow.
                            </p>
                          </div>
                        </motion.div>
                      )}

                      {/* STEP 2 */}

                      {formStep === 2 && (
                        <motion.div
                          key="step-two"
                          variants={formStepVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="space-y-3.5"
                        >
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#087A3D]">
                              Step 02
                            </p>
                            <h3 className="mt-0.5 text-base font-bold text-[#102016]">
                              Let's get to know you
                            </h3>
                          </div>

                          <div>
                            <label htmlFor="fullName" className={labelClass}>
                              Full name
                            </label>

                            <div className="relative">
                              <UserRound
                                size={17}
                                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#087A3D]"
                              />

                              <input
                                id="fullName"
                                name="fullName"
                                type="text"
                                autoComplete="name"
                                required
                                value={loanForm.fullName}
                                onChange={updateLoanForm}
                                placeholder="Enter your full name"
                                className={`${inputClass} pl-11`}
                              />
                            </div>
                          </div>

                          <div>
                            <label htmlFor="mobileNumber" className={labelClass}>
                              Mobile number
                            </label>

                            <div className="flex min-w-0 overflow-hidden rounded-xl border border-[#D9E5D9] transition-all focus-within:border-[#087A3D] focus-within:ring-4 focus-within:ring-[#087A3D]/10">
                              <span className="flex shrink-0 items-center border-r border-[#D9E5D9] bg-[#F3F8F3] px-3 text-sm font-semibold text-[#26382B]">
                                +91
                              </span>

                              <input
                                id="mobileNumber"
                                name="mobileNumber"
                                type="tel"
                                inputMode="numeric"
                                pattern="[0-9]{10}"
                                maxLength={10}
                                autoComplete="tel-national"
                                required
                                value={loanForm.mobileNumber}
                                onChange={updateLoanForm}
                                placeholder="10-digit mobile number"
                                className="min-w-0 flex-1 bg-white px-3 py-3 text-sm text-[#102016] outline-none placeholder:text-[#9AA69C]"
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* STEP 3 */}

                      {formStep === 3 && (
                        <motion.div
                          key="step-three"
                          variants={formStepVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="space-y-3.5"
                        >
                          <div>
                            <p className="text-[11px] font-bold uppercase tracking-[0.13em] text-[#087A3D]">
                              Step 03
                            </p>
                            <h3 className="mt-0.5 text-base font-bold text-[#102016]">
                              One last detail
                            </h3>
                          </div>

                          <div>
                            <label htmlFor="monthlyIncome" className={labelClass}>
                              Monthly income
                            </label>

                            <div className="flex min-w-0 overflow-hidden rounded-xl border border-[#D9E5D9] transition-all focus-within:border-[#087A3D] focus-within:ring-4 focus-within:ring-[#087A3D]/10">
                              <span className="flex shrink-0 items-center border-r border-[#D9E5D9] bg-[#F3F8F3] px-3 text-sm font-bold text-[#087A3D] sm:px-4">
                                ₹
                              </span>

                              <input
                                id="monthlyIncome"
                                name="monthlyIncome"
                                type="number"
                                min="1"
                                required
                                value={loanForm.monthlyIncome}
                                onChange={updateLoanForm}
                                placeholder="Enter monthly income"
                                className="min-w-0 flex-1 bg-white px-3 py-3 text-sm text-[#102016] outline-none placeholder:text-[#9AA69C] sm:px-3.5"
                              />
                            </div>
                          </div>

                          <div className="rounded-xl border border-[#DCEFE2] bg-[#F5F9F4] p-3 sm:p-4">
                            <div className="flex items-center gap-2 text-sm font-bold text-[#087A3D]">
                              <CheckCircle2 size={17} className="shrink-0" />
                              Review your details
                            </div>

                            <div className="mt-2.5 space-y-2 text-xs text-[#526456] sm:text-sm">
                              <div className="flex flex-wrap justify-between gap-2">
                                <span>Loan type</span>
                                <span className="text-right font-semibold text-[#102016]">
                                  {loanForm.loanType}
                                </span>
                              </div>

                              <div className="flex flex-wrap justify-between gap-2">
                                <span>Loan amount</span>
                                <span className="font-semibold text-[#102016]">
                                  ₹{Number(loanForm.loanAmount).toLocaleString("en-IN")}
                                </span>
                              </div>
                            </div>
                          </div>

                          <p className="text-xs leading-5 text-[#788579]">
                            Please check the information before submitting
                            your application.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* FORM BUTTONS */}

                    <div className="mt-4 flex gap-2.5 sm:gap-3">
                      {formStep > 1 && (
                        <motion.button
                          type="button"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() =>
                            setFormStep((current) => current - 1)
                          }
                          className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl border border-[#CFE0D0] px-3 py-3 text-sm font-bold text-[#26382B] hover:bg-[#F3F8F3] sm:gap-2 sm:px-4"
                        >
                          <ArrowRight size={16} className="rotate-180" />
                          Back
                        </motion.button>
                      )}

                      <motion.button
                        type="submit"
                        whileHover={{ y: -2, scale: 1.015 }}
                        whileTap={{ scale: 0.97 }}
                        className="group flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#087A3D] to-[#075C30] px-3 py-3 text-sm font-bold text-white hover:from-[#075C30] hover:to-[#064824] sm:px-5"
                      >
                        {formStep === 3 ? "Submit" : "Continue"}
                        <ArrowRight
                          size={17}
                          className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </motion.button>
                    </div>

                    <div className="mt-3.5 flex items-start justify-center gap-2 text-center text-[10px] leading-5 text-[#788579] sm:text-[11px]">
                      <LockKeyhole
                        size={13}
                        className="mt-0.5 shrink-0 text-[#087A3D]"
                      />
                      <span>
                        Your details should be reviewed before submitting.
                      </span>
                    </div>
                  </div>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* ================================================== */}
      {/* POPULAR PRODUCTS */}
      {/* ================================================== */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="w-full overflow-hidden bg-gradient-to-b from-[#F5F8F2] to-white px-3 py-9 sm:px-5 sm:py-12 md:px-7 lg:px-9 xl:px-12 lg:py-14"
      >
        <div className="mx-auto flex w-full max-w-[1440px] min-w-0 flex-col gap-7 sm:gap-9">

          {/* FEATURES */}

          <div className="grid w-full grid-cols-1 gap-3 rounded-3xl bg-[#EFF5EA] p-3 sm:grid-cols-2 sm:gap-4 sm:p-5 md:p-6 xl:grid-cols-4">
            {features.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="min-w-0 rounded-2xl p-4 transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-[#087A3D]/10 sm:p-5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#DCEFE2] text-[#087A3D]">
                  <Icon size={24} />
                </div>
                <h3 className="text-base font-bold sm:text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#5F6F63]">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* EKPAISA BRAND BANNER */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#073D24] via-[#075C30] to-[#087A3D] px-4 py-6 shadow-xl shadow-[#075C30]/15 sm:px-7 sm:py-8 md:px-9 md:py-9"
          >
            <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full border-[22px] border-white/[0.06] sm:h-64 sm:w-64 sm:border-[30px]" />
            <div className="pointer-events-none absolute -bottom-20 left-1/3 h-44 w-44 rounded-full bg-[#FFD95A]/[0.07] blur-2xl" />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
              <div className="min-w-0 max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FFE17A] sm:text-xs">
                  <Sparkles size={14} />
                  Smarter financial decisions
                </div>

                <h2 className="text-3xl font-extrabold tracking-tight text-white min-[390px]:text-4xl sm:text-5xl md:text-6xl">
                  EkPaisa<span className="text-[#FFD95A]">.</span>
                </h2>

                <p className="mt-2 text-base font-semibold tracking-wide text-[#FFD95A] min-[390px]:text-lg sm:text-xl">
                  Intelligence Behind Every Rupee.
                </p>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
                  A smarter approach to borrowing, financial discovery and
                  money decisions.
                </p>
              </div>

              <div className="relative flex shrink-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 sm:flex-col sm:items-start sm:px-5 sm:py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFD95A] text-[#075C30]">
                  <Sparkles size={21} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white sm:text-sm">
                    Finance, made clearer
                  </p>
                  <p className="mt-1 text-[11px] text-white/65 sm:text-xs">
                    Borrowing · Discovery · Technology
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* LOAN CARDS */}

          <div className="mx-auto grid w-full max-w-[1320px] min-w-0 grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">

            {/* PERSONAL LOAN */}

            <motion.article
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-[#DCEFE2] bg-white"
            >
              <div className="relative h-48 overflow-hidden bg-[#DCEFE2] sm:h-52">
                <img
                  src={coins}
                  alt="Personal loan planning and finances"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102016]/45 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-2 text-xs font-semibold text-[#087A3D] sm:text-sm">
                  Personal Loan
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4EC] text-[#087A3D]">
                  <Wallet size={23} />
                </div>
                <h3 className="text-xl font-bold">Personal Loans</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[#5F6F63] sm:text-base">
                  Planning for a big expense or an unexpected need? Understand
                  personal loan basics, compare interest rates and fees, and
                  review repayment terms before choosing an option.
                </p>
                <motion.button
                  type="button"
                  onClick={() => navigate("/personal-loan")}
                  {...buttonMotion}
                  className="group/link mt-5 inline-flex items-center gap-2 self-start text-left text-sm font-semibold text-[#087A3D] hover:text-[#075C30] sm:text-base"
                >
                  Explore Personal Loans
                  <ArrowRight
                    size={18}
                    className="shrink-0 transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </motion.button>
              </div>
            </motion.article>

            {/* HOME LOAN */}

            <motion.article
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-[#DCEFE2] bg-white"
            >
              <div className="relative h-48 overflow-hidden bg-[#DCEFE2] sm:h-52">
                <img
                  src={homekey}
                  alt="A home representing home loan options"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102016]/45 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-2 text-xs font-semibold text-[#087A3D] sm:text-sm">
                  Home Loan
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4EC] text-[#087A3D]">
                  <House size={23} />
                </div>
                <h3 className="text-xl font-bold">Home Loans</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[#5F6F63] sm:text-base">
                  Taking a step towards your own home? Learn about down
                  payments, interest rates, loan tenure and EMIs so you can
                  better understand the costs involved in home financing.
                </p>
                <motion.button
                  type="button"
                  onClick={() => navigate("/home-loan")}
                  {...buttonMotion}
                  className="group/link mt-5 inline-flex items-center gap-2 self-start text-left text-sm font-semibold text-[#087A3D] hover:text-[#075C30] sm:text-base"
                >
                  Explore Home Loans
                  <ArrowRight
                    size={18}
                    className="shrink-0 transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </motion.button>
              </div>
            </motion.article>

            {/* LOAN AGAINST PROPERTY */}

            <motion.article
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="group flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-[#DCEFE2] bg-white sm:col-span-2 xl:col-span-1"
            >
              <div className="relative h-48 overflow-hidden bg-[#DCEFE2] sm:h-52">
                <img
                  src={property}
                  alt="Residential property representing property-backed finance"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102016]/45 to-transparent" />
                <span className="absolute bottom-4 left-4 max-w-[calc(100%-2rem)] rounded-full bg-white/95 px-3 py-2 text-xs font-semibold text-[#087A3D] sm:text-sm">
                  Loan Against Property
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4EC] text-[#087A3D]">
                  <Building2 size={23} />
                </div>
                <h3 className="text-xl font-bold">
                  Loan Against Property
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[#5F6F63] sm:text-base">
                  Explore how property-backed borrowing works, what lenders
                  may consider, and why interest rates, fees, tenure and the
                  risk to your property deserve careful review.
                </p>
                <motion.button
                  type="button"
                  onClick={() => navigate("/loan-against-property")}
                  {...buttonMotion}
                  className="group/link mt-5 inline-flex items-center gap-2 self-start text-left text-sm font-semibold text-[#087A3D] hover:text-[#075C30] sm:text-base"
                >
                  Explore Property Loans
                  <ArrowRight
                    size={18}
                    className="shrink-0 transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </motion.button>
              </div>
            </motion.article>
          </div>
        </div>
      </motion.section>

      {/* ================================================== */}
      {/* EMI CALCULATOR */}
      {/* ================================================== */}

      <motion.section
        id="emi-calculator"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
        className="w-full px-3 py-9 sm:px-5 sm:py-12 md:px-7 lg:px-9 xl:px-12 lg:py-14"
      >
        <div className="mx-auto w-full max-w-[1440px] overflow-hidden rounded-3xl border border-[#CFE5D3] bg-[#F7FBF7] shadow-lg shadow-[#087A3D]/[0.06]">
          <div className="grid min-w-0 lg:grid-cols-[1.1fr_0.9fr]">

            {/* CALCULATOR INPUTS */}

            <div className="min-w-0 p-4 min-[390px]:p-5 sm:p-7 lg:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF4EC] text-[#087A3D]">
                  <Calculator size={23} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#087A3D]">
                    Quick Calculator
                  </p>
                  <h2 className="mt-1 text-xl font-extrabold text-[#102016] min-[390px]:text-2xl sm:text-3xl">
                    Calculate your EMI
                  </h2>
                </div>
              </div>

              {/* LOAN AMOUNT */}

              <div className="mt-4 min-[390px]:mt-5 sm:mt-6">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <label htmlFor="emiAmount" className="text-sm font-semibold text-[#26382B]">
                    Loan amount
                  </label>
                  <span className="text-base font-extrabold text-[#087A3D] sm:text-lg">
                    ₹{formatCurrency(emiAmount)}
                  </span>
                </div>
                <input
                  id="emiAmount"
                  type="range"
                  min="50000"
                  max="5000000"
                  step="50000"
                  value={emiAmount}
                  onChange={(event) => setEmiAmount(Number(event.target.value))}
                  className="h-2 w-full cursor-pointer accent-[#087A3D]"
                />
                <div className="mt-1 flex justify-between text-xs text-[#788579]">
                  <span>₹50,000</span>
                  <span>₹50,00,000</span>
                </div>
              </div>

              {/* INTEREST RATE */}

              <div className="mt-4 min-[390px]:mt-5">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <label htmlFor="interestRate" className="text-sm font-semibold text-[#26382B]">
                    Interest rate
                  </label>
                  <span className="text-base font-extrabold text-[#087A3D]">
                    {interestRate.toFixed(1)}% p.a.
                  </span>
                </div>
                <input
                  id="interestRate"
                  type="range"
                  min="1"
                  max="25"
                  step="0.5"
                  value={interestRate}
                  onChange={(event) => setInterestRate(Number(event.target.value))}
                  className="h-2 w-full cursor-pointer accent-[#087A3D]"
                />
                <div className="mt-1 flex justify-between text-xs text-[#788579]">
                  <span>1%</span>
                  <span>25%</span>
                </div>
              </div>

              {/* TENURE */}

              <div className="mt-5">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <label htmlFor="loanTenure" className="text-sm font-semibold text-[#26382B]">
                    Loan tenure
                  </label>
                  <span className="text-base font-extrabold text-[#087A3D]">
                    {loanTenure} {loanTenure === 1 ? "year" : "years"}
                  </span>
                </div>
                <input
                  id="loanTenure"
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={loanTenure}
                  onChange={(event) => setLoanTenure(Number(event.target.value))}
                  className="h-2 w-full cursor-pointer accent-[#087A3D]"
                />
                <div className="mt-1 flex justify-between text-xs text-[#788579]">
                  <span>1 year</span>
                  <span>30 years</span>
                </div>
              </div>
            </div>

            {/* EMI RESULT */}

            <div className="flex min-w-0 flex-col justify-center bg-gradient-to-br from-[#075C30] via-[#087A3D] to-[#0B6B3A] p-4 text-white min-[390px]:p-5 sm:p-7 lg:p-8">
              <p className="text-sm font-semibold text-white/80">
                Estimated monthly EMI
              </p>

              <h3 className="mt-2 break-words text-3xl font-extrabold tracking-tight text-[#FFE17A] min-[390px]:text-4xl sm:text-5xl">
                ₹{formatCurrency(monthlyEMI)}
              </h3>

              <div className="mt-6 h-px bg-white/20" />

              <div className="mt-4 space-y-3 min-[390px]:mt-5 min-[390px]:space-y-4">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-white/80">Principal amount</span>
                  <span className="text-right font-bold">
                    ₹{formatCurrency(emiAmount)}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-white/80">Total interest</span>
                  <span className="text-right font-bold text-[#FFE17A]">
                    ₹{formatCurrency(totalInterest)}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-white/20 pt-4 text-sm">
                  <span className="text-white/80">Total payment</span>
                  <span className="text-right font-extrabold">
                    ₹{formatCurrency(totalPayment)}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigate("/personal-loan")}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#FFE17A] px-3 py-2.5 text-xs font-bold text-[#123D27] hover:bg-[#FFD95A] min-[390px]:mt-6 min-[390px]:px-4 min-[390px]:py-3 min-[390px]:text-sm"
              >
                Explore Loan Options
                <ArrowRight size={17} />
              </button>

          
            </div>
          </div>
        </div>
      </motion.section>

      {/* ================================================== */}
      {/* BANK LOGOS */}
      {/* ================================================== */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
        className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#F5F8F2] to-white px-3 py-9 sm:px-5 sm:py-12 md:px-7 lg:px-9 xl:px-12 lg:py-14"
      >
        <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-[#DCEFE2]/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#F5C542]/15 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1440px]">
          <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
            <span className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-[#DCEFE2] bg-white px-3 py-2 text-xs font-semibold text-[#087A3D] sm:px-4 sm:text-sm">
              <ShieldCheck size={16} className="shrink-0" />
              Banking Partners
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#102016] sm:text-4xl">
              Banks you <span className="text-[#087A3D]">recognise</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#5F6F63] sm:text-base">
              Explore well-known banks while researching financial options
              that may suit your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 min-[480px]:grid-cols-3 sm:gap-4 md:gap-5 xl:grid-cols-5">
            {bankLogos.map((bank, index) => (
              <motion.div
                key={bank.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5 }}
                className="group flex min-h-[120px] min-w-0 flex-col items-center justify-start rounded-2xl border border-[#D5E5D7] bg-white p-1 transition-all duration-300 hover:border-[#087A3D]/40 hover:shadow-md hover:shadow-[#087A3D]/[0.07] sm:min-h-[166px] sm:p-2.5"
              >
                <div className="flex h-[88px] w-[72%] items-center justify-center self-center rounded-xl bg-[#F4F7F4] px-2 transition-colors duration-300 group-hover:bg-[#EDF4EE] sm:h-[100px] sm:w-[76%] sm:px-3">
                  <div className="flex h-14 w-full items-center justify-center sm:h-16">
                    <img
                      src={bank.src}
                      alt={`${bank.name} logo`}
                      loading="lazy"
                      className="h-10 w-full max-w-[115px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:max-w-[130px]"
                    />
                  </div>
                </div>

                <p className="mt-1.5 break-words px-1 text-center text-[11px] font-bold leading-4 text-[#34483A] sm:mt-2 sm:text-sm sm:leading-5">
                  {bank.name}
                </p>

                <span className="mt-1.5 h-1 w-8 rounded-full bg-[#DCEFE2] transition-all duration-300 group-hover:w-12 group-hover:bg-[#087A3D]" />
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs leading-5 text-[#7A8A7D]">
            Bank logos are trademarks of their respective owners. Logo images
            are loaded from an external repository.
          </p>
        </div>
      </motion.section>

      {/* ================================================== */}
      {/* TRUST SECTION */}
      {/* ================================================== */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
        className="w-full px-3 py-9 sm:px-5 sm:py-12 md:px-7 lg:px-9 xl:px-12 lg:py-14"
      >
        <div className="relative mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-6 overflow-hidden rounded-3xl border border-[#DCEFE2] bg-gradient-to-r from-[#EAF4EC] via-[#E7F0E5] to-[#F5F8F2] p-4 sm:grid-cols-2 sm:gap-7 sm:p-7 xl:grid-cols-4 xl:items-center xl:p-9">
          <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[#F5C542]/40" />
          <div className="pointer-events-none absolute -bottom-12 right-10 h-32 w-32 rounded-full bg-[#F5C542]/40" />

          <div className="relative min-w-0 sm:col-span-2 xl:col-span-1">
            <h2 className="text-2xl font-bold leading-snug sm:text-3xl xl:text-2xl">
              Finance, Made Clear.
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5F6F63]">
              Explore your loan options with confidence.
            </p>
          </div>

          {trustItems.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="relative flex min-w-0 items-center gap-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#087A3D]">
                <Icon size={25} />
              </div>

              <div className="min-w-0">
                <p className="break-words text-lg font-bold sm:text-xl">
                  {title}
                </p>
                <p className="mt-1 text-sm text-[#5F6F63]">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================================================== */}
      {/* FINAL CTA */}
      {/* ================================================== */}

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="w-full px-3 py-9 sm:px-5 sm:py-12 md:px-7 lg:px-9 xl:px-12 lg:py-14"
      >
        <div className="relative mx-auto flex w-full max-w-[1440px] min-w-0 flex-col gap-6 overflow-hidden rounded-3xl bg-gradient-to-r from-[#102016] via-[#075C30] to-[#087A3D] p-4 text-white sm:gap-7 sm:p-7 md:p-9 lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border-[35px] border-white/5"
          />

          <div className="relative flex min-w-0 items-start gap-4 sm:gap-5">
            <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#DCEFE2] sm:flex">
              <Rocket size={34} />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F5C542] sm:text-sm">
                YOUR PROPERTY. YOUR POSSIBILITIES.
              </p>

              <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                Turn Property into Possibility.
              </h2>

              <p className="mt-3 max-w-lg text-sm leading-7 text-[#D5E4D8] sm:text-base">
                Explore funding options against eligible property to support
                your business ambitions or personal goals.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              document
                .getElementById("loan-application-form")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
            }}
            className="relative inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#FFE17A] px-5 py-3 font-bold text-[#123D27] hover:bg-[#FFD95A] sm:w-fit"
          >
            Explore Your Options
            <ArrowRight size={18} />
          </button>
        </div>
      </motion.section>

      {/* ================================================== */}
      {/* FOOTER */}
      {/* ================================================== */}

      <footer
        id="home-footer"
        className="relative overflow-hidden border-t-2 border-[#075C30] bg-gradient-to-br from-[#F4E9C9] via-[#FBE9A0] to-[#FFD95A] text-[#123D27]"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#075C30]/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1440px] px-3 py-6 sm:px-5 sm:py-8 md:px-7 lg:px-9 xl:px-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 xl:grid-cols-5 xl:gap-8">

            {/* BRAND */}

            <div className="min-w-0 sm:col-span-2 xl:col-span-2">
              <a
                href="/"
                className="inline-flex max-w-full items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#075C30]"
              >
                <img
                  src={newlogo}
                  alt="EkPaisa logo"
                  className="h-12 w-auto max-w-full object-contain transition-transform duration-300 hover:scale-105 sm:h-14"
                />
              </a>

              <p className="mt-3 max-w-sm text-sm font-bold leading-7 text-[#234B34]">
                Simplifying your financial decisions. Explore loan options and
                take your next step with confidence.
              </p>

              <div className="mt-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#075C30]/20 bg-white/40 px-3 py-2 text-xs font-bold sm:px-4 sm:text-sm">
                <ShieldCheck size={18} className="shrink-0" />
                <span>Your financial journey, made simpler</span>
              </div>
            </div>

            {/* EXPLORE */}

            <div>
              <h3 className="text-base font-extrabold text-[#073D24]">
                Explore
              </h3>

              <div className="mt-3 flex flex-col items-start gap-2.5">
                <a href="/" className="text-sm font-bold text-[#234B34] hover:translate-x-1 hover:text-[#075C30] hover:underline">
                  Home
                </a>
                <a href="/loan" className="text-sm font-bold text-[#234B34] hover:translate-x-1 hover:text-[#075C30] hover:underline">
                  Personal Loans
                </a>
                <a href="/apply" className="text-sm font-bold text-[#234B34] hover:translate-x-1 hover:text-[#075C30] hover:underline">
                  Apply for a Loan
                </a>
              </div>
            </div>

            {/* RESOURCES */}

            <div>
              <h3 className="text-base font-extrabold text-[#073D24]">
                Resources
              </h3>

              <div className="mt-3 flex flex-col items-start gap-2.5">
                <a href="/#emi-calculator" className="text-sm font-bold text-[#234B34] hover:translate-x-1 hover:text-[#075C30] hover:underline">
                  Loan Calculator
                </a>
                <a href="/loan" className="text-sm font-bold text-[#234B34] hover:translate-x-1 hover:text-[#075C30] hover:underline">
                  Help Center
                </a>
                <a href="/apply" className="text-sm font-bold text-[#234B34] hover:translate-x-1 hover:text-[#075C30] hover:underline">
                  FAQs
                </a>
              </div>
            </div>

            {/* LEGAL */}

            <div>
              <h3 className="text-base font-extrabold text-[#073D24]">
                Legal & Contact
              </h3>

              <div className="mt-3 flex flex-col items-start gap-2.5">
                <a href="/privacy-policy" className="text-sm font-bold text-[#234B34] hover:translate-x-1 hover:text-[#075C30] hover:underline">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-sm font-bold text-[#234B34] hover:translate-x-1 hover:text-[#075C30] hover:underline">
                  Terms &amp; Conditions
                </a>
              </div>
            </div>
          </div>

          <div className="my-5 h-px bg-gradient-to-r from-transparent via-[#075C30]/30 to-transparent sm:my-6" />

          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
            <p className="text-xs font-bold text-[#234B34] sm:text-sm">
              © {new Date().getFullYear()} EkPaisa. All rights reserved.
            </p>

            <p className="flex items-center gap-2 text-xs font-bold text-[#234B34] sm:text-sm">
              <LockKeyhole size={15} className="shrink-0" />
              Make informed financial decisions
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Star,
  Search,
  Heart,
  FileText,
  SlidersHorizontal,
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
} from "lucide-react";

import { useMain } from "../../Hooks/useMain";

import EkPaisa from "/src/assets/EkPaisa-dZfDSOqM.webp";
import pnb from "/src/assets/pnb.webp";
import newkotak from "/src/assets/newkotak.webp";
import newaxis from "/src/assets/newaxis.webp";
import induslnd from "/src/assets/induslnd .webp";
import idfc from "/src/assets/idfc.webp";
import hdfc from "/src/assets/hdfc.webp";
import icic from "/src/assets/icic.webp";
import canara from "/src/assets/canara.webp";
import bob from "/src/assets/bob.webp";
import sbi from "/src/assets/sbi.webp";

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
  "w-full rounded-xl border border-[#D9E5D9] bg-white px-4 py-3 text-sm text-[#102016] outline-none transition-all duration-300 placeholder:text-[#9AA69C] focus:border-[#087A3D] focus:ring-4 focus:ring-[#087A3D]/10";

const labelClass = "mb-1.5 block text-sm font-semibold text-[#26382B]";

// ============================================================
// HOME PAGE
// ============================================================

const HomePage = () => {
  const { navigate } = useMain();

  const [formStep, setFormStep] = useState(1);

  const [loanForm, setLoanForm] = useState({
    loanType: "Personal Loan",
    loanAmount: "",
    fullName: "",
    mobileNumber: "",
    monthlyIncome: "",
  });

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

    navigate("/apply", { state: loanForm });
  };

  // ============================================================
  // BANK LOGOS
  // ============================================================

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

  // ============================================================
  // FEATURES
  // ============================================================

  const features = [
    {
      icon: Search,
      title: "Explore Your Options",
      description:
        "Review product details and decide which questions matter to you.",
    },
    {
      icon: ShieldCheck,
      title: "Learn About Credit",
      description:
        "Get familiar with credit terms before making a financial decision.",
    },
    {
      icon: FileText,
      title: "Plain-Language Guides",
      description:
        "Read straightforward explanations designed for everyday decisions.",
    },
    {
      icon: Heart,
      title: "Your Plans, Your Pace",
      description:
        "Use helpful starting points to think through your own priorities.",
    },
  ];

  // ============================================================
  // HOW IT WORKS
  // ============================================================

  const steps = [
    {
      number: "1",
      icon: FileText,
      title: "Name Your Goal",
      description: "Pick the topic you want to understand first.",
    },
    {
      number: "2",
      icon: SlidersHorizontal,
      title: "Review the Details",
      description:
        "Look at the details and note anything you need to verify.",
    },
    {
      number: "3",
      icon: CheckCircle2,
      title: "Choose Your Next Step",
      description:
        "Move forward when the information fits your needs.",
    },
  ];

  // ============================================================
  // TRUST ITEMS
  // ============================================================

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
      className="overflow-hidden bg-white font-sans text-[#102016] [&_button]:transition-all [&_button]:duration-300 [&_button]:ease-out [&_button:focus-visible]:outline-none [&_button:focus-visible]:ring-2 [&_button:focus-visible]:ring-[#D6A91F] [&_button:focus-visible]:ring-offset-2 [&_a]:transition-all [&_a]:duration-300 [&_a]:ease-out"
    >
      {/* ================================================== */}
      {/* HERO SECTION */}
      {/* ================================================== */}

      <section className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-[#102016] px-5 py-10 sm:px-8 sm:py-12 lg:min-h-[790px] lg:px-16 lg:py-14">
        {/* Background video */}

        <div className="absolute inset-0 -z-20 bg-[#102016]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Abstract financial video background"
            src="https://www.pexels.com/download/video/38055932/"
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#102016]/65 via-[#102016]/40 to-[#102016]/20" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-[#102016]/25 to-transparent" />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.85fr] lg:gap-14">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-2xl py-3 text-white sm:py-5"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/35 bg-[#102016]/35 px-4 py-2 text-sm font-semibold text-white"
            >
              <Sparkles size={16} className="text-[#FFE17A]" />
              AI-Powered Financial Guidance
            </motion.div>

            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Make Smarter
              <br />
              Money Decisions
              <br />

              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="inline-block text-[#FFE17A]"
              >
                With AI & EkPaisa.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-5 max-w-lg text-base leading-7 text-white sm:text-lg"
            >
              Use AI-powered insights to explore loan options, understand key
              terms, and compare your choices with greater clarity. EkPaisa
              helps you take the next step with more confidence.
            </motion.p>

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
              className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-white"
            >
              {[
                { icon: ShieldCheck, label: "Clear information" },
                { icon: Zap, label: "Simple process" },
                { icon: Star, label: "Your goals first" },
              ].map(({ icon: Icon, label }) => (
                <motion.div
                  key={label}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="flex items-center gap-2"
                >
                  <Icon size={19} className="text-[#FFE17A]" />
                  {label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ================================================== */}
          {/* LOAN FORM */}
          {/* ================================================== */}

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
            className="relative mx-auto w-full max-w-md justify-self-center lg:translate-y-[-24px] lg:justify-self-end"
          >
            <form
              onSubmit={handleLoanFormSubmit}
              className="relative overflow-hidden rounded-2xl border border-white/70 bg-white"
            >
              {/* FORM HEADER */}

              <div className="relative overflow-hidden bg-gradient-to-br from-[#075C30] via-[#087A3D] to-[#0B6B3A] px-5 pb-4 pt-4 sm:px-6">
                <div className="pointer-events-none absolute -right-7 -top-12 h-36 w-36 rounded-full border-[18px] border-white/10" />

                <div className="pointer-events-none absolute -bottom-10 right-24 h-24 w-24 rounded-full bg-[#FFD95A]/10" />

                <div className="relative flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
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

                    <div>
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

                  <div className="mt-2.5 grid grid-cols-3 gap-2">
                    {[
                      { number: 1, label: "Loan details" },
                      { number: 2, label: "Your details" },
                      { number: 3, label: "Income" },
                    ].map((item) => (
                      <div
                        key={item.number}
                        className="flex items-center gap-1.5"
                      >
                        <motion.span
                          animate={{
                            backgroundColor:
                              item.number <= formStep
                                ? "#FFD95A"
                                : "rgba(255,255,255,0.15)",
                            color:
                              item.number <= formStep ? "#123D27" : "#FFFFFF",
                          }}
                          className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
                        >
                          {item.number < formStep ? (
                            <CheckCircle2 size={13} />
                          ) : (
                            item.number
                          )}
                        </motion.span>

                        <span className="text-[10px] font-medium text-white/90 sm:text-xs">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FORM FIELDS */}

              <div className="px-5 py-4 sm:px-6 sm:py-5">
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
                            className="w-full appearance-none rounded-xl border border-[#D9E5D9] bg-white py-3 pl-11 pr-10 text-sm font-medium text-[#102016] outline-none transition-all focus:border-[#087A3D] focus:ring-4 focus:ring-[#087A3D]/10"
                          >
                            <option>Personal Loan</option>
                            <option>Home Loan</option>
                            <option>Business Loan</option>
                            <option>Education Loan</option>
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

                        <div className="flex overflow-hidden rounded-xl border border-[#D9E5D9] transition-all focus-within:border-[#087A3D] focus-within:ring-4 focus-within:ring-[#087A3D]/10">
                          <span className="flex items-center border-r border-[#D9E5D9] bg-[#F3F8F3] px-4 text-sm font-bold text-[#087A3D]">
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
                            className="min-w-0 flex-1 bg-white px-3.5 py-3 text-sm text-[#102016] outline-none placeholder:text-[#9AA69C]"
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

                        <div className="flex overflow-hidden rounded-xl border border-[#D9E5D9] transition-all focus-within:border-[#087A3D] focus-within:ring-4 focus-within:ring-[#087A3D]/10">
                          <span className="flex items-center border-r border-[#D9E5D9] bg-[#F3F8F3] px-3 text-sm font-semibold text-[#26382B]">
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

                        <div className="flex overflow-hidden rounded-xl border border-[#D9E5D9] transition-all focus-within:border-[#087A3D] focus-within:ring-4 focus-within:ring-[#087A3D]/10">
                          <span className="flex items-center border-r border-[#D9E5D9] bg-[#F3F8F3] px-4 text-sm font-bold text-[#087A3D]">
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
                            className="min-w-0 flex-1 bg-white px-3.5 py-3 text-sm text-[#102016] outline-none placeholder:text-[#9AA69C]"
                          />
                        </div>
                      </div>

                      {/* REVIEW DETAILS */}

                      <div className="rounded-xl border border-[#DCEFE2] bg-[#F5F9F4] p-3">
                        <div className="flex items-center gap-2 text-sm font-bold text-[#087A3D]">
                          <CheckCircle2 size={17} />
                          Review your details
                        </div>

                        <div className="mt-2.5 space-y-2 text-sm text-[#526456]">
                          <div className="flex justify-between gap-3">
                            <span>Loan type</span>
                            <span className="text-right font-semibold text-[#102016]">
                              {loanForm.loanType}
                            </span>
                          </div>

                          <div className="flex justify-between gap-3">
                            <span>Loan amount</span>
                            <span className="font-semibold text-[#102016]">
                              ₹
                              {Number(
                                loanForm.loanAmount
                              ).toLocaleString("en-IN")}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs leading-5 text-[#788579]">
                        Please check the information before submitting your
                        application.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* FORM NAVIGATION */}

                <div className="mt-4 flex gap-3">
                  {formStep > 1 && (
                    <motion.button
                      type="button"
                      whileHover={{
                        y: -2,
                        transition: { duration: 0.25 },
                      }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() =>
                        setFormStep((current) => current - 1)
                      }
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#CFE0D0] px-4 py-3 text-sm font-bold text-[#26382B] hover:bg-[#F3F8F3]"
                    >
                      <ArrowRight size={16} className="rotate-180" />
                      Back
                    </motion.button>
                  )}

                  <motion.button
                    type="submit"
                    whileHover={{
                      y: -2,
                      scale: 1.015,
                      transition: { duration: 0.25 },
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#087A3D] to-[#075C30] px-5 py-3 text-sm font-bold text-white hover:from-[#075C30] hover:to-[#064824]"
                  >
                    {formStep === 3 ? "Submit" : "Continue"}

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </motion.button>
                </div>

                <div className="mt-3.5 flex items-center justify-center gap-2 text-[11px] text-[#788579]">
                  <LockKeyhole size={13} className="text-[#087A3D]" />
                  Your details should be reviewed before submitting.
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ================================================== */}
      {/* FEATURES SECTION */}
      {/* ================================================== */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
        className="px-5 py-16 sm:px-8 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-5 rounded-3xl bg-[#F5F8F2] p-6 sm:p-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              whileHover={{ y: -7 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl p-4 transition-all hover:bg-white hover:shadow-lg hover:shadow-[#087A3D]/10"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#DCEFE2] text-[#087A3D]">
                <Icon size={24} />
              </div>

              <h3 className="text-lg font-bold">{title}</h3>

              <p className="mt-2 text-sm leading-6 text-[#5F6F63]">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================================================== */}
      {/* HOW IT WORKS SECTION */}
      {/* ================================================== */}

      <motion.section
        id="how-it-works"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
        className="px-5 pb-20 pt-8 sm:px-8 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#087A3D]">
              Your Starting Point
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              Three steps to
              <span className="block text-[#087A3D]">get oriented</span>
            </h2>

            <p className="mt-4 max-w-sm leading-7 text-[#5F6F63]">
              Begin with a goal, explore relevant information, then decide
              what to look into next.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {steps.map(({ number, icon: Icon, title, description }) => (
              <motion.div
                key={number}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-[#DCEFE2] bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-[#087A3D]/10"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#087A3D] font-bold text-white">
                  {number}
                </span>

                <div className="my-5 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF4EC] text-[#087A3D]">
                    <Icon size={30} />
                  </div>
                </div>

                <h3 className="text-center text-lg font-bold">{title}</h3>

                <p className="mt-3 text-center text-sm leading-6 text-[#5F6F63]">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================================================== */}
      {/* POPULAR PRODUCTS */}
      {/* ================================================== */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className="bg-gradient-to-b from-[#F5F8F2] to-white px-5 py-20 sm:px-8 lg:px-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#087A3D]">
                Topics to Explore
              </p>

              <h2 className="mt-3 max-w-xl text-3xl font-bold leading-tight sm:text-4xl">
                Start with the topic on your mind
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-[#5F6F63]">
                Explore borrowing options, understand the important details,
                and use AI-assisted guidance to help you research what may fit
                your goals.
              </p>
            </div>

            <motion.button
              type="button"
              onClick={() => navigate("/blogs")}
              {...buttonMotion}
              className="group inline-flex w-fit items-center gap-2 font-semibold text-[#087A3D] hover:text-[#075C30]"
            >
              Browse Topics
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* PERSONAL LOAN CARD */}

            <motion.article
              whileHover={{ y: -7 }}
              transition={{ duration: 0.25 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#DCEFE2] bg-white"
            >
              <div className="relative h-52 overflow-hidden bg-[#DCEFE2]">
                <img
                  src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                  alt="Personal loan planning and finances"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102016]/45 to-transparent" />

                <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-2 text-sm font-semibold text-[#087A3D]">
                  Personal Loan
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4EC] text-[#087A3D]">
                  <Wallet size={23} />
                </div>

                <h3 className="text-xl font-bold">Personal Loans</h3>

                <p className="mt-3 flex-1 leading-7 text-[#5F6F63]">
                  Planning for a big expense or an unexpected need? Understand
                  personal loan basics, compare interest rates and fees, and
                  review repayment terms before choosing an option.
                </p>

                <motion.button
                  type="button"
                  onClick={() => navigate("/loan")}
                  {...buttonMotion}
                  className="group/link mt-5 inline-flex items-center gap-2 self-start font-semibold text-[#087A3D] hover:text-[#075C30]"
                >
                  Explore Personal Loans
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </motion.button>
              </div>
            </motion.article>

            {/* HOME LOAN CARD */}

            <motion.article
              whileHover={{ y: -7 }}
              transition={{ duration: 0.25 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#DCEFE2] bg-white"
            >
              <div className="relative h-52 overflow-hidden bg-[#DCEFE2]">
                <img
                  src="https://images.pexels.com/photos/34134899/pexels-photo-34134899.jpeg"
                  alt="A home representing home loan options"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102016]/45 to-transparent" />

                <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-2 text-sm font-semibold text-[#087A3D]">
                  Home Loan
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4EC] text-[#087A3D]">
                  <House size={23} />
                </div>

                <h3 className="text-xl font-bold">Home Loans</h3>

                <p className="mt-3 flex-1 leading-7 text-[#5F6F63]">
                  Taking a step towards your own home? Learn about down
                  payments, interest rates, loan tenure and EMIs so you can
                  better understand the costs involved in home financing.
                </p>

                <motion.button
                  type="button"
                  onClick={() => navigate("/home-loan")}
                  {...buttonMotion}
                  className="group/link mt-5 inline-flex items-center gap-2 self-start font-semibold text-[#087A3D] hover:text-[#075C30]"
                >
                  Explore Home Loans
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </motion.button>
              </div>
            </motion.article>

            {/* LOAN AGAINST PROPERTY CARD */}

            <motion.article
              whileHover={{ y: -7 }}
              transition={{ duration: 0.25 }}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#DCEFE2] bg-white"
            >
              <div className="relative h-52 overflow-hidden bg-[#DCEFE2]">
                <img
                  src="https://images.unsplash.com/photo-1781229771042-2a859f8f8022?q=80&w=1268&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                  alt="Residential property representing property-backed finance"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102016]/45 to-transparent" />

                <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-2 text-sm font-semibold text-[#087A3D]">
                  Loan Against Property
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4EC] text-[#087A3D]">
                  <Building2 size={23} />
                </div>

                <h3 className="text-xl font-bold">Loan Against Property</h3>

                <p className="mt-3 flex-1 leading-7 text-[#5F6F63]">
                  Explore how property-backed borrowing works, what lenders
                  may consider, and why interest rates, fees, tenure and the
                  risk to your property deserve careful review.
                </p>

                <motion.button
                  type="button"
                  onClick={() => navigate("/loan-against-property")}
                  {...buttonMotion}
                  className="group/link mt-5 inline-flex items-center gap-2 self-start font-semibold text-[#087A3D] hover:text-[#075C30]"
                >
                  Explore Property Loans
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </motion.button>
              </div>
            </motion.article>
          </div>
        </div>
      </motion.section>

      {/* ================================================== */}
      {/* BANK LOGOS SECTION */}
      {/* ================================================== */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
        className="relative overflow-hidden bg-gradient-to-b from-white via-[#F5F8F2] to-white px-5 py-20 sm:px-8 lg:px-16"
      >
        <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-[#DCEFE2]/60 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#F5C542]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#DCEFE2] bg-white px-4 py-2 text-sm font-semibold text-[#087A3D]">
              <ShieldCheck size={16} />
              Banking Partners
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#102016] sm:text-4xl">
              Banks you <span className="text-[#087A3D]">recognise</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-[#5F6F63]">
              Explore well-known banks while researching financial options
              that may suit your needs.
            </p>
          </div>

          {/* COMPACT BANK CARDS */}

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-5">
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
                whileHover={{ y: -6 }}
                className="group flex min-h-36 flex-col items-center justify-center rounded-2xl border border-[#DCEFE2] bg-white px-3 py-4 transition-colors duration-300 hover:border-[#087A3D]/40 sm:min-h-40 sm:px-4"
              >
                <div className="flex h-16 w-full items-center justify-center rounded-xl bg-[#F8FAF7] p-2 transition-colors group-hover:bg-[#F0F7F0] sm:h-[72px]">
                  <img
                    src={bank.src}
                    alt={`${bank.name} logo`}
                    loading="lazy"
                    className="h-12 w-full max-w-[125px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:max-w-[145px]"
                  />
                </div>

                <p className="mt-3 text-center text-xs font-bold leading-5 text-[#34483A] sm:text-sm">
                  {bank.name}
                </p>

                <span className="mt-2 h-1 w-8 rounded-full bg-[#DCEFE2] transition-all duration-300 group-hover:w-12 group-hover:bg-[#087A3D]" />
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs leading-5 text-[#7A8A7D]">
            Bank logos are trademarks of their respective owners. Logo
            images are loaded from an external repository.
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
        className="px-5 py-12 sm:px-8 lg:px-16"
      >
        <div className="relative mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-3xl border border-[#DCEFE2] bg-gradient-to-r from-[#EAF4EC] via-[#E7F0E5] to-[#F5F8F2] p-7 sm:p-10 md:grid-cols-2 lg:grid-cols-4 lg:items-center">
          <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[#F5C542]/40" />

          <div className="pointer-events-none absolute -bottom-12 right-10 h-32 w-32 rounded-full bg-[#F5C542]/40" />

          <div className="relative md:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold leading-snug">
              Your money journey,
              <span className="block text-[#087A3D]">at your pace.</span>
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#5F6F63]">
              A thoughtful starting point for your own research.
            </p>
          </div>

          {trustItems.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25 }}
              className="relative flex items-center gap-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#087A3D]">
                <Icon size={25} />
              </div>

              <div>
                <p className="text-xl font-bold sm:text-2xl">{title}</p>
                <p className="mt-1 text-sm text-[#5F6F63]">{description}</p>
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
        className="px-5 py-12 sm:px-8 lg:px-16"
      >
        <div className="relative mx-auto flex max-w-7xl flex-col gap-7 overflow-hidden rounded-3xl bg-gradient-to-r from-[#102016] via-[#075C30] to-[#087A3D] p-8 text-white sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border-[35px] border-white/5"
          />

          <div className="relative flex items-center gap-5">
            <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#DCEFE2] sm:flex">
              <Rocket size={34} />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#F5C542]">
                Take the First Step
              </p>

              <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
                Ready to review
                <span className="block text-[#F5C542]">
                  your options?
                </span>
              </h2>

              <p className="mt-3 max-w-lg leading-7 text-[#D5E4D8]">
                Start with a topic, learn the basics, and make your next
                move thoughtfully.
              </p>
            </div>
          </div>
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

        <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {/* BRAND */}

            <div className="lg:col-span-2">
              <a
                href="/"
                className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#075C30]"
              >
                <img
                  src={EkPaisa}
                  alt="EkPaisa logo"
                  className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
                />
              </a>

              <p className="mt-5 max-w-sm text-sm font-bold leading-7 text-[#234B34]">
                Making financial decisions simpler. Explore loan options,
                understand your choices, and take your next financial step
                with greater confidence.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#075C30]/20 bg-white/40 px-4 py-2 text-sm font-bold">
                <ShieldCheck size={18} />
                Your financial journey, made simpler
              </div>
            </div>

            {/* EXPLORE LINKS */}

            <div>
              <h3 className="text-base font-extrabold text-[#073D24]">
                Explore
              </h3>

              <div className="mt-5 flex flex-col items-start gap-3">
                <a
                  href="/"
                  className="text-sm font-bold text-[#234B34] hover:translate-x-1 hover:text-[#075C30] hover:underline"
                >
                  Home
                </a>

                <a
                  href="/loan"
                  className="text-sm font-bold text-[#234B34] hover:translate-x-1 hover:text-[#075C30] hover:underline"
                >
                  Personal Loans
                </a>

                <a
                  href="/apply"
                  className="text-sm font-bold text-[#234B34] hover:translate-x-1 hover:text-[#075C30] hover:underline"
                >
                  Apply for a Loan
                </a>

                <a
                  href="/credit-cards"
                  className="text-sm font-bold text-[#234B34] hover:translate-x-1 hover:text-[#075C30] hover:underline"
                >
                  Credit Cards
                </a>
              </div>
            </div>

            {/* GET STARTED */}

            <div>
              <h3 className="text-base font-extrabold text-[#073D24]">
                Get Started
              </h3>

              <p className="mt-5 text-sm font-bold leading-6 text-[#234B34]">
                Take the first step towards finding a financial option
                that suits your needs.
              </p>
            </div>

            {/* IMPORTANT LINKS */}

            <div>
              <h3 className="text-base font-extrabold text-[#073D24]">
                Important Links
              </h3>

              <div className="mt-5 flex flex-col items-start gap-3">
                <a
                  href="/privacy-policy"
                  className="text-sm font-bold text-[#234B34] hover:translate-x-1 hover:text-[#075C30] hover:underline"
                >
                  Privacy Policy
                </a>

                <a
                  href="/terms"
                  className="text-sm font-bold text-[#234B34] hover:translate-x-1 hover:text-[#075C30] hover:underline"
                >
                  Terms &amp; Conditions
                </a>

                <a
                  href="/contact"
                  className="text-sm font-bold text-[#234B34] hover:translate-x-1 hover:text-[#075C30] hover:underline"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* FOOTER DIVIDER */}

          <div className="my-9 h-px bg-gradient-to-r from-transparent via-[#075C30]/30 to-transparent" />

          {/* BOTTOM FOOTER */}

          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-sm font-bold text-[#234B34]">
              © {new Date().getFullYear()} EkPaisa. All rights reserved.
            </p>

            <p className="flex items-center gap-2 text-sm font-bold text-[#234B34]">
              <LockKeyhole size={15} />
              Make informed financial decisions
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;

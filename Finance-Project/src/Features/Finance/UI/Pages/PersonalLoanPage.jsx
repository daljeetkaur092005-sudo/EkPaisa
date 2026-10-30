
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CalendarDays,
  CheckCircle2,
  CircleHelp,
  Clock3,
  FileText,
  Percent,
  ShieldCheck,
  Wallet,
} from "lucide-react";

import personalimageone from "/src/assets/personalimageone.png";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13 },
  },
};

const viewportSettings = {
  once: true,
  amount: 0.15,
};

const loanHighlights = [
  {
    icon: Banknote,
    title: "Loan amount",
    value: "Depends on eligibility",
    description:
      "The amount offered depends on the lender's assessment and your profile.",
  },
  {
    icon: CalendarDays,
    title: "Repayment tenure",
    value: "Choose a suitable term",
    description:
      "Compare available repayment periods and monthly instalments.",
  },
  {
    icon: Percent,
    title: "Interest rate",
    value: "Varies by lender",
    description:
      "Your rate can depend on income, credit profile and lender policy.",
  },
  {
    icon: Clock3,
    title: "Approval time",
    value: "Lender dependent",
    description:
      "Processing time varies based on document checks and eligibility.",
  },
];

const eligibilityItems = [
  "Meet the lender's minimum age requirement",
  "Have a regular source of income",
  "Meet the lender's income and credit criteria",
  "Provide valid identity and address documents",
];

const documents = [
  {
    title: "Identity proof",
    text: "A valid identity document as accepted by the lender.",
  },
  {
    title: "Address proof",
    text: "A current address document as required by the lender.",
  },
  {
    title: "Income proof",
    text: "Salary slips, bank statements or other accepted proof.",
  },
  {
    title: "Bank details",
    text: "Account details or statements if requested during verification.",
  },
];

const comparisonItems = [
  [
    "Interest rate",
    "Check whether the rate is fixed or variable and how it affects repayment.",
  ],
  [
    "Processing and other fees",
    "Review processing fees, late charges and any other applicable costs.",
  ],
  [
    "Total repayment",
    "Compare the total amount payable across the full loan tenure.",
  ],
  [
    "Early repayment terms",
    "Check whether part-prepayment or foreclosure charges may apply.",
  ],
];

const faqs = [
  {
    question: "What can a personal loan be used for?",
    answer:
      "Depending on the lender's terms, a personal loan may be used for planned expenses, travel, education costs, home needs or unexpected bills. Check the loan agreement for any restrictions.",
  },
  {
    question: "How is the interest rate decided?",
    answer:
      "The lender may consider your income, credit history, existing repayments, loan amount and tenure. Compare the annual rate, fees and total repayment before choosing.",
  },
  {
    question: "What affects personal loan eligibility?",
    answer:
      "Eligibility rules differ by lender. Age, income stability, credit history, existing obligations and required documents may be considered.",
  },
  {
    question: "Are approval and interest rates guaranteed?",
    answer:
      "No. Approval, offered amount, rate and processing time depend on the lender's checks and final terms.",
  },
];

// Reusable animated section
const Reveal = ({ children, className = "", variant = fadeUp }) => (
  <motion.div
    variants={variant}
    initial="hidden"
    whileInView="visible"
    viewport={viewportSettings}
    className={className}
  >
    {children}
  </motion.div>
);

const PersonalLoanPage = () => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden text-[#12352B]">

      {/* Hero Section */}
      <section className="relative isolate overflow-hidden">

        <video
          src="https://www.pexels.com/download/video/7710750/"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F5FAF5]/95 via-[#F5FAF5]/85 to-[#F5FAF5]/60" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 md:gap-10 md:py-20 lg:grid-cols-[1.1fr_0.7fr] lg:px-8">

          {/* Hero Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="w-full min-w-0 max-w-2xl"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-[#CDE5D4] bg-white/85 px-3 py-2 text-xs font-bold text-[#087A3D] sm:px-4 sm:text-sm"
            >
              <Wallet size={17} />
              Personal Loan Guide
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-3xl font-black leading-tight tracking-tight sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Understand Personal Loans,
              <span className="mt-2 block text-[#087A3D]">
                Before You Apply.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-sm leading-6 text-[#4E6559] sm:mt-5 sm:text-base sm:leading-7 md:text-lg"
            >
              Learn how personal loans work, what lenders may check, which
              documents could be required and how to compare the full cost of
              borrowing.
            </motion.p>

            {/* Hero Buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-col gap-3 min-[480px]:flex-row sm:mt-7"
            >
              <motion.a
                href="#loan-info"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#087A3D] px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-[#075C30] min-[480px]:w-auto sm:text-base"
              >
                Explore Loan Details
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="#eligibility"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex w-full items-center justify-center rounded-xl border border-[#BFD8C7] bg-white/80 px-5 py-3.5 text-sm font-bold text-[#087A3D] transition-colors hover:bg-white min-[480px]:w-auto sm:text-base"
              >
                Check Eligibility
              </motion.a>
            </motion.div>

            {/* Hero Highlights */}
            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-col gap-3 text-xs font-semibold text-[#476457] min-[480px]:flex-row min-[480px]:flex-wrap sm:mt-7 sm:gap-x-6 sm:text-sm"
            >
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={17} className="shrink-0 text-[#087A3D]" />
                Clear information
              </span>

              <span className="inline-flex items-center gap-2">
                <BadgeCheck size={17} className="shrink-0 text-[#087A3D]" />
                Compare lender terms
              </span>

              <span className="inline-flex items-center gap-2">
                <FileText size={17} className="shrink-0 text-[#087A3D]" />
                Document checklist
              </span>
            </motion.div>
          </motion.div>

          {/* Hero Video Card */}
          <Reveal variant={fadeRight}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="w-full min-w-0 rounded-3xl border border-white/80 bg-white/95 p-3 shadow-sm sm:p-5"
            >
              <motion.video
                src="https://www.pexels.com/download/video/34828872/"
                autoPlay
                muted
                loop
                playsInline
                whileHover={{ scale: 1.025 }}
                transition={{ duration: 0.4 }}
                className="h-48 w-full rounded-2xl object-cover sm:h-64 md:h-72 lg:h-64"
              />

              <div className="p-2 pt-4 sm:pt-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#087A3D]">
                  Know before you borrow
                </p>

                <h2 className="mt-2 text-xl font-black sm:text-2xl">
                  Look beyond the monthly EMI
                </h2>

                <p className="mt-2 text-sm leading-6 text-[#65776C]">
                  Compare the interest rate, processing fees, repayment
                  schedule and total amount payable.
                </p>

                <a
                  href="#compare"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-[#087A3D] transition-transform hover:translate-x-1"
                >
                  What should I compare?
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </Reveal>

        </div>
      </section>

      {/* Key Information Cards */}
      <section
        id="loan-info"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      >
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#087A3D] sm:text-sm">
              Personal loan basics
            </p>

            <h2 className="mt-3 text-2xl font-black sm:text-3xl md:text-4xl">
              The important details, explained simply.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#65776C] sm:text-base">
              A personal loan is generally an unsecured loan, which means it
              usually does not require an asset as collateral. The lender sets
              the final terms after reviewing your application.
            </p>
          </div>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {loanHighlights.map(({ icon: Icon, title, value, description }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              whileHover={{ y: -7, scale: 1.015 }}
              transition={{ duration: 0.25 }}
              className="min-w-0 rounded-2xl border border-[#E1EBE4] bg-white p-4 transition-colors hover:border-[#B9DCC5] hover:shadow-lg hover:shadow-[#12352B]/5 sm:p-5"
            >
              <motion.span
                whileHover={{ rotate: 6, scale: 1.08 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E5F4E9] text-[#087A3D]"
              >
                <Icon size={23} />
              </motion.span>

              <p className="mt-5 text-sm font-semibold text-[#6C7D73]">
                {title}
              </p>

              <h3 className="mt-1 break-words text-base font-extrabold sm:text-lg">
                {value}
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#6C7D73]">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Eligibility and Documents */}
      <section
        id="eligibility"
        className="border-y border-[#E1EBE4] bg-white py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 md:gap-8 lg:grid-cols-2 lg:px-8">

          {/* Eligibility */}
          <Reveal variant={fadeLeft}>
            <div className="h-full min-w-0 rounded-3xl bg-[#F0F8F2] p-5 sm:p-8">
              <motion.span
                whileHover={{ rotate: -8, scale: 1.08 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#087A3D]"
              >
                <CheckCircle2 size={25} />
              </motion.span>

              <h2 className="mt-5 text-2xl font-black sm:text-3xl">
                Personal loan eligibility
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#617369] sm:text-base">
                Lender requirements can vary, but these are common areas they
                may review:
              </p>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                className="mt-6 space-y-4"
              >
                {eligibilityItems.map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeUp}
                    className="flex items-start gap-3 text-sm leading-6 text-[#385448]"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-[#087A3D]"
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <p className="mt-5 rounded-xl border border-[#D6E9DB] bg-white p-4 text-xs leading-5 text-[#687A70]">
                Meeting common criteria does not guarantee approval. The
                lender makes the final decision.
              </p>
            </div>
          </Reveal>

          {/* Documents */}
          <Reveal variant={fadeRight}>
            <div className="h-full min-w-0 rounded-3xl border border-[#E1EBE4] bg-white p-5 sm:p-8">
              <motion.span
                whileHover={{ rotate: 6, scale: 1.08 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF4C9] text-[#765A06]"
              >
                <FileText size={25} />
              </motion.span>

              <h2 className="mt-5 text-2xl font-black sm:text-3xl">
                Documents you may need
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#617369] sm:text-base">
                Keep the relevant documents ready; exact requirements depend
                on the lender and your profile.
              </p>

              <div className="mt-6 space-y-3">
                {documents.map((item, index) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex min-w-0 gap-3 rounded-2xl bg-[#F8FAF8] p-3 sm:gap-4 sm:p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-black text-[#087A3D]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0">
                      <h3 className="font-extrabold">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#6B7C72]">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* Cost Comparison */}
      <section
        id="compare"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      >
        <div className="grid grid-cols-1 items-center gap-7 md:gap-10 lg:grid-cols-[0.8fr_1fr]">

          {/* Image */}
          <Reveal variant={fadeLeft}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-3xl bg-[#E8F4EB] p-3 sm:p-6"
            >
              <motion.img
                src={personalimageone}
                alt="Planning a personal loan budget"
                loading="lazy"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5 }}
                className="h-56 w-full rounded-2xl object-cover sm:h-72 md:h-96"
              />
            </motion.div>
          </Reveal>

          {/* Comparison Content */}
          <Reveal variant={fadeRight}>
            <div className="min-w-0">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#087A3D] sm:text-sm">
                Compare carefully
              </p>

              <h2 className="mt-3 text-2xl font-black sm:text-3xl md:text-4xl">
                What to check before choosing a loan
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#65776C] sm:text-base">
                A lower EMI alone does not always mean a cheaper loan. Look at
                the overall repayment cost and conditions.
              </p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportSettings}
                className="mt-6 space-y-4"
              >
                {comparisonItems.map(([title, text]) => (
                  <motion.div
                    key={title}
                    variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-[#087A3D]"
                      size={20}
                    />

                    <div className="min-w-0">
                      <h3 className="font-extrabold">{title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[#6B7C72]">
                        {text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#F0F7F1] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <CircleHelp
                  size={30}
                  className="mx-auto text-[#087A3D]"
                />
              </motion.div>

              <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.16em] text-[#087A3D] sm:text-sm">
                FAQs
              </p>

              <h2 className="mt-2 text-2xl font-black sm:text-3xl md:text-4xl">
                Personal loan questions
              </h2>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-8 grid grid-cols-1 gap-4 sm:mt-9 md:grid-cols-2"
          >
            {faqs.map((faq) => (
              <motion.article
                key={faq.question}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="min-w-0 rounded-2xl border border-[#E0EAE2] bg-white p-4 transition-shadow hover:shadow-lg hover:shadow-[#12352B]/5 sm:p-6"
              >
                <h3 className="text-base font-extrabold sm:text-lg">
                  {faq.question}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#65776C]">
                  {faq.answer}
                </p>
              </motion.article>
            ))}
          </motion.div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.7 }}
          className="mx-auto flex max-w-7xl flex-col gap-5 rounded-3xl bg-[#075C3B] p-5 text-white sm:p-8 md:flex-row md:items-center md:justify-between lg:p-10"
        >
          <div className="min-w-0">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#FFD34D] sm:text-sm">
              Make an informed choice
            </p>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              Compare the details before you commit.
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/75">
              Review lender eligibility, fees and repayment terms carefully
              before submitting an application.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#064A31] px-4 py-6 text-center text-xs leading-6 text-white/75 sm:px-6 sm:text-sm">
        © {new Date().getFullYear()} EkPaisa. Information is general and is
        not a loan offer or approval guarantee.
      </footer>

    </main>
  );
};

export default PersonalLoanPage;

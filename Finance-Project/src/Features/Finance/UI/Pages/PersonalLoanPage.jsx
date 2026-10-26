
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

import personalLoanHero from "/src/assets/personal-loan.webp";
import personalimageone from "/src/assets/personalimageone.png";
import personalimagetwo from "/src/assets/personalimagetwo.png";

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
    <main className="min-h-screen overflow-hidden bg-[#F7FAF7] text-[#12352B]">
      {/* Hero section */}
      <section className="relative isolate overflow-hidden">
        <img
          src={personalLoanHero}
          alt="A person planning finances at home"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F5FAF5]/95 via-[#F5FAF5]/85 to-[#F5FAF5]/40" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.7fr]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-[#CDE5D4] bg-white/85 px-4 py-2 text-sm font-bold text-[#087A3D]"
            >
              <Wallet size={17} />
              Personal Loan Guide
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
            >
              Understand Personal Loans,
              <span className="mt-2 block text-[#087A3D]">
                Before You Apply.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-base leading-7 text-[#4E6559] sm:text-lg"
            >
              Learn how personal loans work, what lenders may check, which
              documents could be required and how to compare the full cost of
              borrowing.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-wrap gap-3"
            >
              <motion.a
                href="#loan-info"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl bg-[#087A3D] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[#075C30]"
              >
                Explore Loan Details
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="#eligibility"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl border border-[#BFD8C7] bg-white/80 px-6 py-3.5 font-bold text-[#087A3D] transition-colors hover:bg-white"
              >
                Check Eligibility
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#476457]"
            >
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={17} className="text-[#087A3D]" />
                Clear information
              </span>

              <span className="inline-flex items-center gap-2">
                <BadgeCheck size={17} className="text-[#087A3D]" />
                Compare lender terms
              </span>

              <span className="inline-flex items-center gap-2">
                <FileText size={17} className="text-[#087A3D]" />
                Document checklist
              </span>
            </motion.div>
          </motion.div>

          {/* Hero image card */}
          <Reveal variant={fadeRight}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-white/80 bg-white/95 p-4 shadow-sm sm:p-5"
            >
              <motion.img
                src={personalimagetwo}
                alt="Personal loan planning illustration"
                whileHover={{ scale: 1.025 }}
                transition={{ duration: 0.4 }}
                className="h-52 w-full rounded-2xl object-cover sm:h-64"
              />

              <div className="p-2 pt-5">
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#087A3D]">
                  Know before you borrow
                </p>

                <h2 className="mt-2 text-2xl font-black">
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

      {/* Key information cards */}
      <section
        id="loan-info"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20"
      >
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#087A3D]">
              Personal loan basics
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              The important details, explained simply.
            </h2>

            <p className="mt-4 leading-7 text-[#65776C]">
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
          className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        >
          {loanHighlights.map(({ icon: Icon, title, value, description }) => (
            <motion.article
              key={title}
              variants={fadeUp}
              whileHover={{ y: -7, scale: 1.015 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-[#E1EBE4] bg-white p-5 transition-colors hover:border-[#B9DCC5] hover:shadow-lg hover:shadow-[#12352B]/5"
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

              <h3 className="mt-1 text-lg font-extrabold">{value}</h3>

              <p className="mt-2 text-sm leading-6 text-[#6C7D73]">
                {description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Eligibility and documents */}
      <section
        id="eligibility"
        className="border-y border-[#E1EBE4] bg-white py-16 sm:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal variant={fadeLeft}>
            <div className="h-full rounded-3xl bg-[#F0F8F2] p-6 sm:p-8">
              <motion.span
                whileHover={{ rotate: -8, scale: 1.08 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#087A3D]"
              >
                <CheckCircle2 size={25} />
              </motion.span>

              <h2 className="mt-5 text-2xl font-black sm:text-3xl">
                Personal loan eligibility
              </h2>

              <p className="mt-3 leading-7 text-[#617369]">
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
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              <p className="mt-5 rounded-xl border border-[#D6E9DB] bg-white p-4 text-xs leading-5 text-[#687A70]">
                Meeting common criteria does not guarantee approval. The
                lender makes the final decision.
              </p>
            </div>
          </Reveal>

          <Reveal variant={fadeRight}>
            <div className="h-full rounded-3xl border border-[#E1EBE4] bg-white p-6 sm:p-8">
              <motion.span
                whileHover={{ rotate: 6, scale: 1.08 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF4C9] text-[#765A06]"
              >
                <FileText size={25} />
              </motion.span>

              <h2 className="mt-5 text-2xl font-black sm:text-3xl">
                Documents you may need
              </h2>

              <p className="mt-3 leading-7 text-[#617369]">
                Keep the relevant documents ready; exact requirements depend
                on the lender and your profile.
              </p>

              <div className="mt-6 space-y-3">
                {documents.map((item, index) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-4 rounded-2xl bg-[#F8FAF8] p-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-black text-[#087A3D]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
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

      {/* Cost comparison */}
      <section
        id="compare"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20"
      >
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1fr]">
          <Reveal variant={fadeLeft}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-3xl bg-[#E8F4EB] p-4 sm:p-6"
            >
              <motion.img
                src={personalimageone}
                alt="Planning a personal loan budget"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.5 }}
                className="h-72 w-full rounded-2xl object-cover sm:h-96"
              />
            </motion.div>
          </Reveal>

          <Reveal variant={fadeRight}>
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#087A3D]">
                Compare carefully
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                What to check before choosing a loan
              </h2>

              <p className="mt-4 leading-7 text-[#65776C]">
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
                    className="flex gap-3"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-[#087A3D]"
                      size={20}
                    />

                    <div>
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
      <section className="bg-[#F0F7F1] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
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

              <p className="mt-3 text-sm font-extrabold uppercase tracking-[0.16em] text-[#087A3D]">
                FAQs
              </p>

              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                Personal loan questions
              </h2>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="mt-9 grid gap-4 md:grid-cols-2"
          >
            {faqs.map((faq) => (
              <motion.article
                key={faq.question}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-[#E0EAE2] bg-white p-5 transition-shadow hover:shadow-lg hover:shadow-[#12352B]/5 sm:p-6"
              >
                <h3 className="text-lg font-extrabold">{faq.question}</h3>

                <p className="mt-3 text-sm leading-6 text-[#65776C]">
                  {faq.answer}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-12 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.7 }}
          className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl bg-[#075C3B] p-7 text-white sm:p-10 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#FFD34D]">
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

          <motion.a
            href="/apply"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#FFD34D] px-6 py-3.5 font-extrabold text-[#12352B] transition-colors hover:bg-white"
          >
            Start an enquiry
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#064A31] px-5 py-6 text-center text-sm text-white/75">
        © {new Date().getFullYear()} EkPaisa. Information is general and is
        not a loan offer or approval guarantee.
      </footer>
    </main>
  );
};

export default PersonalLoanPage;

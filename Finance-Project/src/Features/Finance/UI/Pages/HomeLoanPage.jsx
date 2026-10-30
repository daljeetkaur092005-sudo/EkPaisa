
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  FileCheck2,
  House,
  KeyRound,
  MapPin,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";

import homeHero from "/src/assets/personal-loan.webp";
import homeImageOne from "/src/assets/personalimageone.png";
import homeImageTwo from "/src/assets/personalimagetwo.png";

const ease = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const viewport = { once: true, amount: 0.15 };

const homeSteps = [
  {
    number: "01",
    icon: Wallet,
    title: "Plan your budget",
    text: "Understand your down payment, monthly expenses and comfortable repayment amount.",
    color: "bg-[#FFF0C2]",
  },
  {
    number: "02",
    icon: FileCheck2,
    title: "Prepare documents",
    text: "Keep income, identity, address and property-related documents ready.",
    color: "bg-[#E5F0FF]",
  },
  {
    number: "03",
    icon: Building2,
    title: "Choose your property",
    text: "Review the property details, legal documents, location and total purchase cost.",
    color: "bg-[#FBE6DD]",
  },
  {
    number: "04",
    icon: KeyRound,
    title: "Review loan terms",
    text: "Compare lender offers and understand the conditions before signing.",
    color: "bg-[#E8EBD8]",
  },
];

const loanFeatures = [
  {
    icon: ShieldCheck,
    title: "Understand the terms",
    text: "Read the interest rate, fees, repayment conditions and loan agreement carefully.",
  },
  {
    icon: Wallet,
    title: "Keep a financial cushion",
    text: "Account for maintenance, moving costs and other expenses beyond the down payment.",
  },
  {
    icon: BadgeCheck,
    title: "Verify before committing",
    text: "Review property ownership documents and complete the necessary legal checks.",
  },
];

const faqs = [
  {
    question: "What is a home loan?",
    answer:
      "A home loan is financing that eligible borrowers can use to purchase or construct a home, subject to the lender's terms and property requirements.",
  },
  {
    question: "Can I apply for a home loan with a co-applicant?",
    answer:
      "Some lenders allow co-applicants. Eligibility, income assessment and ownership requirements depend on the lender's policy.",
  },
  {
    question: "Which documents are generally required?",
    answer:
      "Lenders may request identity and address proof, income documents, bank statements and property papers. The exact list varies.",
  },
  {
    question: "Does pre-approval guarantee the loan?",
    answer:
      "No. Final approval can depend on verification of your financial details, property documents and the lender's assessment.",
  },
];

const HomeLoanPage = () => {
  return (
    <main className="w-full overflow-hidden bg-[#FCFAF5] text-[#17372B]">

      {/* HERO SECTION */}
      <section className="relative px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-12 lg:px-8 lg:pb-24">

        <div className="pointer-events-none absolute -right-28 top-10 h-64 w-64 rounded-full bg-[#F6E6B7]/40 blur-3xl sm:h-80 sm:w-80" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="relative z-10 min-w-0"
          >

            <motion.div
              variants={reveal}
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#E9DFC7] bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#80621A] sm:px-4 sm:text-xs sm:tracking-[0.16em]"
            >
              <Sparkles size={15} className="shrink-0" />
              Your home journey starts here
            </motion.div>

            <motion.h1
              variants={reveal}
              className="mt-6 max-w-2xl text-[2.5rem] font-black leading-[1.08] tracking-tight sm:mt-7 sm:text-5xl sm:leading-[1.04] md:text-6xl lg:text-[4.5rem]"
            >
              More than a house.

              <span className="mt-2 block font-serif font-medium italic text-[#A67B16] sm:mt-3">
                A place to belong.
              </span>
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-5 max-w-lg text-sm leading-7 text-[#66766A] sm:mt-6 sm:text-base sm:leading-8 lg:text-lg"
            >
              Take the next step towards your dream home with a clearer
              understanding of home loans, lender requirements and the
              decisions that matter.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-7 flex flex-col items-stretch gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center sm:mt-8 sm:gap-4"
            >
              <motion.a
                href="#home-journey"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex justify-center items-center gap-3 rounded-full bg-[#17372B] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#17372B]/15 transition-colors hover:bg-[#28513D] sm:px-7 sm:py-4"
              >
                Explore your journey
                <ArrowUpRight size={18} />
              </motion.a>

              <a
                href="#home-guide"
                className="inline-flex items-center justify-center gap-2 px-3 py-3 text-sm font-bold text-[#17372B] transition-colors hover:text-[#A67B16] min-[420px]:justify-start"
              >
                Home loan guide
                <ArrowDownRight size={17} />
              </a>
            </motion.div>

            <motion.div
              variants={reveal}
              className="mt-8 flex flex-wrap gap-x-5 gap-y-4 border-t border-[#E7E3D8] pt-5 sm:mt-10 sm:gap-x-7 sm:pt-6"
            >
              <div>
                <p className="text-sm font-extrabold">Clear guidance</p>
                <p className="mt-1 text-xs text-[#778278]">
                  Understand each step
                </p>
              </div>

              <div className="hidden h-10 w-px bg-[#E7E3D8] min-[380px]:block" />

              <div>
                <p className="text-sm font-extrabold">Informed choices</p>
                <p className="mt-1 text-xs text-[#778278]">
                  Compare before deciding
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 35 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease }}
            className="relative mx-auto w-full max-w-2xl lg:ml-auto"
          >

            <div className="relative h-[340px] overflow-hidden rounded-[1.5rem] sm:h-[440px] sm:rounded-[2rem] md:h-[510px] md:rounded-[2.5rem]">

              <motion.img
                src={homeHero}
                alt="Planning your dream home and finances"
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease }}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102A20]/70 via-transparent to-[#102A20]/5" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-4 left-3 right-3 rounded-xl border border-white/40 bg-white/90 p-3 shadow-xl backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8 sm:rounded-2xl sm:p-6"
              >

                <div className="flex items-start justify-between gap-2 sm:gap-3">

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#A67B16] sm:text-xs sm:tracking-[0.15em]">
                      Your next chapter
                    </p>

                    <h2 className="mt-1 text-lg font-black sm:mt-2 sm:text-2xl">
                      A home of your own.
                    </h2>

                    <p className="mt-1 max-w-sm text-xs leading-5 text-[#68776D] sm:mt-2 sm:text-sm sm:leading-6">
                      Start with a plan that fits your finances and future.
                    </p>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F8E8B7] text-[#765A06] sm:h-11 sm:w-11">
                    <House size={20} className="sm:h-[22px] sm:w-[22px]" />
                  </span>

                </div>
              </motion.div>
            </div>

            {/* FLOATING LABEL */}
            <motion.div
              animate={{ y: [0, 8, 0], rotate: [0, 1, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-1 top-5 flex items-center gap-2 rounded-xl border border-[#EDE5D4] bg-white p-2.5 shadow-xl sm:-left-7 sm:top-14 sm:gap-3 sm:rounded-2xl sm:p-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E5F1E7] text-[#287344] sm:h-10 sm:w-10">
                <CheckCircle2 size={20} />
              </span>

              <div>
                <p className="text-xs font-extrabold sm:text-sm">
                  Plan confidently
                </p>
                <p className="mt-1 text-[10px] text-[#78857B] sm:text-xs">
                  One step at a time
                </p>
              </div>
            </motion.div>

            <div className="absolute -bottom-4 right-7 -z-10 h-28 w-28 rounded-full bg-[#E8D7A9]/50 blur-2xl" />

          </motion.div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-y border-[#E9E3D7] bg-white">

        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-10 lg:grid-cols-3 lg:px-8">

          {[
            {
              icon: House,
              title: "Find your direction",
              text: "Understand the home financing process.",
            },
            {
              icon: FileCheck2,
              title: "Get prepared",
              text: "Know which details and documents matter.",
            },
            {
              icon: ShieldCheck,
              title: "Choose thoughtfully",
              text: "Compare costs and terms before committing.",
            },
          ].map(({ icon: Icon, title, text }, index) => (

            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              className="flex items-center gap-4"
            >

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F8F1DD] text-[#8B6A18] sm:h-12 sm:w-12">
                <Icon size={23} />
              </span>

              <div className="min-w-0">
                <h3 className="text-sm font-extrabold sm:text-base">
                  {title}
                </h3>

                <p className="mt-1 text-xs leading-6 text-[#758076] sm:text-sm">
                  {text}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      {/* HOME JOURNEY */}
      <section
        id="home-journey"
        className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
      >

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={reveal}
            className="grid gap-5 md:grid-cols-[1fr_0.65fr] md:items-end md:gap-6"
          >

            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#A67B16] sm:text-xs sm:tracking-[0.2em]">
                The journey to your home
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight sm:mt-4 sm:text-4xl md:text-5xl">
                Big dreams feel simpler when you have a plan.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#6B786E] sm:text-base md:justify-self-end">
              From working out your budget to reviewing the final loan terms,
              take each step with care and clarity.
            </p>

          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4"
          >

            {homeSteps.map(({ number, icon: Icon, title, text, color }) => (

              <motion.article
                key={number}
                variants={reveal}
                whileHover={{ y: -9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-[1.5rem] border border-[#EAE5D9] bg-white p-5 sm:rounded-[1.75rem] sm:p-7"
              >

                <div className="flex items-start justify-between">

                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl sm:h-14 sm:w-14 ${color}`}>
                    <Icon size={24} />
                  </span>

                  <span className="font-mono text-sm font-bold text-[#A8ADA5]">
                    {number}
                  </span>

                </div>

                <h3 className="mt-6 text-lg font-black sm:mt-8 sm:text-xl">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#728075]">
                  {text}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-[#EEEAE1] pt-4 sm:mt-6">

                  <span className="text-xs font-bold uppercase tracking-wider text-[#A67B16]">
                    Step {number}
                  </span>

                  <motion.span
                    whileHover={{ x: 4, y: -4 }}
                    className="text-[#17372B]"
                  >
                    <ArrowUpRight size={20} />
                  </motion.span>

                </div>

                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#D8B64E] transition-transform duration-500 group-hover:scale-x-100" />

              </motion.article>
            ))}

          </motion.div>
        </div>
      </section>

      {/* SPLIT IMAGE SECTION */}
      <section
        id="home-guide"
        className="overflow-hidden bg-[#17372B] text-white"
      >

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">

          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease }}
            className="relative min-w-0 pb-5"
          >

            <div className="absolute -left-3 -top-3 h-20 w-20 rounded-full border border-[#D8B64E]/40 sm:-left-5 sm:-top-5 sm:h-28 sm:w-28" />

            <motion.img
              src={homeImageOne}
              alt="Planning a property purchase"
              whileHover={{ scale: 1.035 }}
              transition={{ duration: 0.5 }}
              className="relative h-[280px] w-full rounded-[1.5rem] object-cover sm:h-[380px] sm:rounded-[2rem] lg:h-[450px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-1 right-2 max-w-[90%] rounded-xl bg-[#F6E6B7] p-3.5 text-[#17372B] shadow-xl sm:right-8 sm:rounded-2xl sm:p-6"
            >

              <p className="text-[10px] font-bold uppercase tracking-wider text-[#80621A] sm:text-xs">
                A thoughtful decision
              </p>

              <p className="mt-1 text-sm font-black sm:text-lg">
                Plan for the long term.
              </p>

            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
            className="min-w-0"
          >

            <motion.p
              variants={reveal}
              className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#E8CA73] sm:text-xs sm:tracking-[0.2em]"
            >
              Before you say yes
            </motion.p>

            <motion.h2
              variants={reveal}
              className="mt-4 text-3xl font-black leading-tight sm:mt-5 sm:text-4xl lg:text-5xl"
            >
              Your home deserves a well-planned decision.
            </motion.h2>

            <motion.p
              variants={reveal}
              className="mt-4 text-sm leading-7 text-white/65 sm:mt-5 sm:text-base sm:leading-8"
            >
              A home loan is a long-term financial commitment. Look beyond
              the advertised rate and consider the full cost of buying and
              maintaining your property.
            </motion.p>

            <div className="mt-7 space-y-5 sm:mt-8 sm:space-y-6">

              {loanFeatures.map(({ icon: Icon, title, text }) => (

                <motion.div
                  key={title}
                  variants={reveal}
                  className="flex gap-3 sm:gap-4"
                >

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#E8CA73] sm:h-11 sm:w-11">
                    <Icon size={21} />
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-sm font-extrabold sm:text-base">
                      {title}
                    </h3>

                    <p className="mt-2 text-xs leading-6 text-white/60 sm:text-sm">
                      {text}
                    </p>
                  </div>

                </motion.div>
              ))}

            </div>

            <motion.a
              variants={reveal}
              href="/"
              whileHover={{ x: 5 }}
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#F6E6B7] px-6 py-3.5 text-sm font-extrabold text-[#17372B] transition-colors hover:bg-white sm:mt-9 sm:w-auto"
            >
              Start an enquiry
              <ArrowRight size={18} />
            </motion.a>

          </motion.div>
        </div>
      </section>

      {/* DOCUMENT CHECKLIST */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.75fr_1fr] lg:items-center lg:gap-12">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >

            <motion.p
              variants={reveal}
              className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#A67B16] sm:text-xs sm:tracking-[0.2em]"
            >
              Get your paperwork ready
            </motion.p>

            <motion.h2
              variants={reveal}
              className="mt-3 text-3xl font-black leading-tight sm:mt-4 sm:text-4xl lg:text-5xl"
            >
              A little preparation goes a long way.
            </motion.h2>

            <motion.p
              variants={reveal}
              className="mt-4 max-w-lg text-sm leading-7 text-[#6B786E] sm:mt-5 sm:text-base sm:leading-8"
            >
              The lender may ask for financial and property records to assess
              your application. Requirements differ depending on your situation.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-6 inline-flex max-w-full items-start gap-3 rounded-xl border border-[#E8E0CB] bg-white px-3 py-3 text-xs font-semibold leading-6 text-[#6B786E] sm:mt-7 sm:px-4 sm:text-sm"
            >
              <FileCheck2 size={19} className="mt-0.5 shrink-0 text-[#A67B16]" />
              <span>Confirm the final checklist with your lender.</span>
            </motion.div>

          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="rounded-[1.5rem] border border-[#EAE5D9] bg-white p-4 sm:rounded-[2rem] sm:p-8"
          >

            {[
              "Identity and address proof",
              "Salary slips or business income records",
              "Recent bank statements",
              "Property and ownership documents",
              "Other forms requested by the lender",
            ].map((item, index) => (

              <motion.div
                key={item}
                variants={reveal}
                whileHover={{ x: 5 }}
                className={`flex items-center gap-3 py-4 sm:gap-4 sm:py-5 ${
                  index !== 4 ? "border-b border-[#EEEAE1]" : ""
                }`}
              >

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E5F1E7] text-[#287344] sm:h-9 sm:w-9">
                  <Check size={18} />
                </span>

                <p className="min-w-0 text-xs font-bold leading-6 sm:text-base">
                  {item}
                </p>

                <ChevronRight
                  size={17}
                  className="ml-auto shrink-0 text-[#A9B0A8] sm:h-[18px] sm:w-[18px]"
                />

              </motion.div>
            ))}

          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-[#F2EFE5] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={reveal}
            className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end sm:gap-5"
          >

            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#A67B16] sm:text-xs sm:tracking-[0.2em]">
                Here to help
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight sm:mt-4 sm:text-4xl lg:text-5xl">
                Questions before you begin?
              </h2>
            </div>

            <CircleHelp
              size={36}
              strokeWidth={1.3}
              className="hidden shrink-0 text-[#A67B16] sm:block sm:h-[42px] sm:w-[42px]"
            />

          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2"
          >

            {faqs.map((faq, index) => (

              <motion.article
                key={faq.question}
                variants={reveal}
                whileHover={{ y: -5 }}
                className="rounded-xl border border-[#E4DECE] bg-white p-4 sm:rounded-2xl sm:p-7"
              >

                <div className="flex items-start gap-3 sm:gap-4">

                  <span className="shrink-0 font-mono text-xs font-bold text-[#A67B16] sm:text-sm">
                    0{index + 1}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-base font-extrabold leading-6 sm:text-lg">
                      {faq.question}
                    </h3>

                    <p className="mt-3 text-xs leading-7 text-[#6B786E] sm:text-sm">
                      {faq.answer}
                    </p>
                  </div>

                </div>
              </motion.article>
            ))}

          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] bg-[#E9D9A9] px-5 py-8 sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-16 lg:py-14"
        >

          <div className="pointer-events-none absolute -right-10 -top-20 h-52 w-52 rounded-full border-[30px] border-white/20 sm:h-72 sm:w-72 sm:border-[40px]" />

          <div className="pointer-events-none absolute -bottom-24 right-10 h-40 w-40 rounded-full bg-white/20 blur-2xl sm:right-40 sm:h-52 sm:w-52" />

          <div className="relative flex flex-col items-stretch justify-between gap-7 md:flex-row md:items-center md:gap-8">

            <div className="max-w-2xl">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#80621A] sm:text-xs sm:tracking-[0.2em]">
                Your future starts with a plan
              </p>

              <h2 className="mt-3 text-2xl font-black leading-tight sm:mt-4 sm:text-4xl lg:text-5xl">
                Ready to take the next step towards home?
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#5E6658] sm:mt-4 sm:text-base">
                Explore your options, prepare your documents and make an
                informed decision at your own pace.
              </p>
            </div>

            <motion.a
              href="/"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-full bg-[#17372B] px-7 py-3.5 text-sm font-extrabold text-white shadow-xl transition-colors hover:bg-[#28513D] sm:w-auto sm:py-4"
            >
              Get started
              <ArrowRight size={18} />
            </motion.a>

          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#17372B] px-4 py-6 text-center text-xs leading-6 text-white/65 sm:px-5 sm:py-7 sm:text-sm">
        © {new Date().getFullYear()} EkPaisa. Information is general and is
        not a loan offer or approval guarantee.
      </footer>

    </main>
  );
};

export default HomeLoanPage;

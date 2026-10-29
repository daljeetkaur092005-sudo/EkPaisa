
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
    <main className="overflow-hidden bg-[#FCFAF5] text-[#17372B]">

      {/* Hero: Asymmetric premium property layout */}
      <section className="relative px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-12">
        <div className="pointer-events-none absolute -right-28 top-10 h-80 w-80 rounded-full bg-[#F6E6B7]/40 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="relative z-10"
          >
            <motion.div
              variants={reveal}
              className="inline-flex items-center gap-2 rounded-full border border-[#E9DFC7] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#80621A]"
            >
              <Sparkles size={15} />
              Your home journey starts here
            </motion.div>

            <motion.h1
              variants={reveal}
              className="mt-7 max-w-2xl text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.5rem]"
            >
              More than a house.
              <span className="mt-3 block font-serif font-medium italic text-[#A67B16]">
                A place to belong.
              </span>
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-6 max-w-lg text-base leading-8 text-[#66766A] sm:text-lg"
            >
              Take the next step towards your dream home with a clearer
              understanding of home loans, lender requirements and the
              decisions that matter.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#home-journey"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 rounded-full bg-[#17372B] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#17372B]/15 transition-colors hover:bg-[#28513D]"
              >
                Explore your journey
                <ArrowUpRight size={18} />
              </motion.a>

              <a
                href="#home-guide"
                className="inline-flex items-center gap-2 px-2 py-3 text-sm font-bold text-[#17372B] transition-colors hover:text-[#A67B16]"
              >
                Home loan guide
                <ArrowDownRight size={17} />
              </a>
            </motion.div>

            <motion.div
              variants={reveal}
              className="mt-10 flex flex-wrap gap-x-7 gap-y-4 border-t border-[#E7E3D8] pt-6"
            >
              <div>
                <p className="text-sm font-extrabold">Clear guidance</p>
                <p className="mt-1 text-xs text-[#778278]">
                  Understand each step
                </p>
              </div>

              <div className="h-10 w-px bg-[#E7E3D8]" />

              <div>
                <p className="text-sm font-extrabold">Informed choices</p>
                <p className="mt-1 text-xs text-[#778278]">
                  Compare before deciding
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Large property image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 35 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease }}
            className="relative mx-auto w-full max-w-2xl lg:ml-auto"
          >
            <div className="relative h-[370px] overflow-hidden rounded-[2rem] sm:h-[510px] sm:rounded-[2.5rem]">
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
                className="absolute bottom-6 left-5 right-5 rounded-2xl border border-white/40 bg-white/90 p-5 shadow-xl backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8 sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#A67B16]">
                      Your next chapter
                    </p>
                    <h2 className="mt-2 text-xl font-black sm:text-2xl">
                      A home of your own.
                    </h2>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-[#68776D]">
                      Start with a plan that fits your finances and future.
                    </p>
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F8E8B7] text-[#765A06]">
                    <House size={22} />
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Floating label */}
            <motion.div
              animate={{ y: [0, 8, 0], rotate: [0, 1, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-3 top-8 flex items-center gap-3 rounded-2xl border border-[#EDE5D4] bg-white p-3 shadow-xl sm:-left-7 sm:top-14 sm:p-4"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E5F1E7] text-[#287344]">
                <CheckCircle2 size={21} />
              </span>

              <div>
                <p className="text-sm font-extrabold">Plan confidently</p>
                <p className="mt-1 text-xs text-[#78857B]">
                  One step at a time
                </p>
              </div>
            </motion.div>

            <div className="absolute -bottom-4 right-7 -z-10 h-28 w-28 rounded-full bg-[#E8D7A9]/50 blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="border-y border-[#E9E3D7] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 sm:grid-cols-3 sm:px-8 sm:py-10">
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
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F8F1DD] text-[#8B6A18]">
                <Icon size={23} />
              </span>

              <div>
                <h3 className="font-extrabold">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#758076]">
                  {text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Journey: Editorial timeline design */}
      <section
        id="home-journey"
        className="relative px-5 py-20 sm:px-8 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={reveal}
            className="grid gap-6 md:grid-cols-[1fr_0.65fr] md:items-end"
          >
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#A67B16]">
                The journey to your home
              </p>

              <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight sm:text-5xl">
                Big dreams feel simpler when you have a plan.
              </h2>
            </div>

            <p className="max-w-md leading-7 text-[#6B786E] md:justify-self-end">
              From working out your budget to reviewing the final loan terms,
              take each step with care and clarity.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {homeSteps.map(({ number, icon: Icon, title, text, color }) => (
              <motion.article
                key={number}
                variants={reveal}
                whileHover={{ y: -9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-[1.75rem] border border-[#EAE5D9] bg-white p-6 sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}>
                    <Icon size={25} />
                  </span>

                  <span className="font-mono text-sm font-bold text-[#A8ADA5]">
                    {number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-black">{title}</h3>

                <p className="mt-3 text-sm leading-7 text-[#728075]">
                  {text}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[#EEEAE1] pt-4">
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

      {/* Split image section */}
      <section
        id="home-guide"
        className="overflow-hidden bg-[#17372B] text-white"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease }}
            className="relative"
          >
            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full border border-[#D8B64E]/40" />

            <motion.img
              src={homeImageOne}
              alt="Planning a property purchase"
              whileHover={{ scale: 1.035 }}
              transition={{ duration: 0.5 }}
              className="relative h-[340px] w-full rounded-[2rem] object-cover sm:h-[450px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-5 right-4 rounded-2xl bg-[#F6E6B7] p-5 text-[#17372B] shadow-xl sm:right-8 sm:p-6"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#80621A]">
                A thoughtful decision
              </p>
              <p className="mt-1 text-lg font-black">
                Plan for the long term.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >
            <motion.p
              variants={reveal}
              className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#E8CA73]"
            >
              Before you say yes
            </motion.p>

            <motion.h2
              variants={reveal}
              className="mt-5 text-4xl font-black leading-tight sm:text-5xl"
            >
              Your home deserves a well-planned decision.
            </motion.h2>

            <motion.p
              variants={reveal}
              className="mt-5 leading-8 text-white/65"
            >
              A home loan is a long-term financial commitment. Look beyond
              the advertised rate and consider the full cost of buying and
              maintaining your property.
            </motion.p>

            <div className="mt-8 space-y-6">
              {loanFeatures.map(({ icon: Icon, title, text }) => (
                <motion.div
                  key={title}
                  variants={reveal}
                  className="flex gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#E8CA73]">
                    <Icon size={22} />
                  </span>

                  <div>
                    <h3 className="font-extrabold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/60">
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
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#F6E6B7] px-6 py-3.5 text-sm font-extrabold text-[#17372B] transition-colors hover:bg-white"
            >
              Start an enquiry
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Documents: clean checklist layout */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >
            <motion.p
              variants={reveal}
              className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#A67B16]"
            >
              Get your paperwork ready
            </motion.p>

            <motion.h2
              variants={reveal}
              className="mt-4 text-4xl font-black leading-tight sm:text-5xl"
            >
              A little preparation goes a long way.
            </motion.h2>

            <motion.p
              variants={reveal}
              className="mt-5 max-w-lg leading-8 text-[#6B786E]"
            >
              The lender may ask for financial and property records to assess
              your application. Requirements differ depending on your situation.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-7 inline-flex items-center gap-3 rounded-xl border border-[#E8E0CB] bg-white px-4 py-3 text-sm font-semibold text-[#6B786E]"
            >
              <FileCheck2 size={19} className="text-[#A67B16]" />
              Confirm the final checklist with your lender.
            </motion.div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="rounded-[2rem] border border-[#EAE5D9] bg-white p-5 sm:p-8"
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
                className={`flex items-center gap-4 py-5 ${
                  index !== 4 ? "border-b border-[#EEEAE1]" : ""
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E5F1E7] text-[#287344]">
                  <Check size={18} />
                </span>

                <p className="text-sm font-bold leading-6 sm:text-base">
                  {item}
                </p>

                <ChevronRight
                  size={18}
                  className="ml-auto shrink-0 text-[#A9B0A8]"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#F2EFE5] px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={reveal}
            className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          >
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#A67B16]">
                Here to help
              </p>

              <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                Questions before you begin?
              </h2>
            </div>

            <CircleHelp size={42} strokeWidth={1.3} className="text-[#A67B16]" />
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="mt-10 grid gap-4 md:grid-cols-2"
          >
            {faqs.map((faq, index) => (
              <motion.article
                key={faq.question}
                variants={reveal}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-[#E4DECE] bg-white p-6 sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm font-bold text-[#A67B16]">
                    0{index + 1}
                  </span>

                  <div>
                    <h3 className="text-lg font-extrabold">
                      {faq.question}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#6B786E]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-5 py-14 sm:px-8 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#E9D9A9] px-7 py-10 sm:px-12 sm:py-14 lg:px-16"
        >
          <div className="pointer-events-none absolute -right-10 -top-20 h-72 w-72 rounded-full border-[40px] border-white/20" />
          <div className="pointer-events-none absolute -bottom-24 right-40 h-52 w-52 rounded-full bg-white/20 blur-2xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#80621A]">
                Your future starts with a plan
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
                Ready to take the next step towards home?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-[#5E6658]">
                Explore your options, prepare your documents and make an
                informed decision at your own pace.
              </p>
            </div>

            <motion.a
              href="/"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#17372B] px-7 py-4 text-sm font-extrabold text-white shadow-xl transition-colors hover:bg-[#28513D]"
            >
              Get started
              <ArrowRight size={18} />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#17372B] px-5 py-7 text-center text-sm text-white/65">
        © {new Date().getFullYear()} EkPaisa. Information is general and is
        not a loan offer or approval guarantee.
      </footer>
    </main>
  );
};

export default HomeLoanPage;


import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronDown,
  FileText,
  Landmark,
  ShieldCheck,
  Wallet,
  KeyRound,
  House,
  BriefcaseBusiness,
  CircleHelp,
  BadgeCheck,
} from "lucide-react";

const propertyImage =
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=85";

const buildingImage =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85";

const interiorImage =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const reveal = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};











const faqs = [
  {
    question: "What is a Loan Against Property?",
    answer:
      "It is a secured loan where eligible residential or commercial property is used as collateral. The property owner generally retains ownership, subject to the loan agreement and applicable terms.",
  },
  {
    question: "Can I use the loan for business purposes?",
    answer:
      "Depending on the lender's policies and your eligibility, the funds may be used for eligible business expenses, expansion or other permitted financial needs.",
  },
  {
    question: "What documents are generally required?",
    answer:
      "Lenders may ask for identity proof, address proof, income documents, bank statements and property ownership papers. Requirements vary by lender.",
  },
  {
    question: "How much loan can I get against my property?",
    answer:
      "The eligible amount depends on the property's assessed value, your income, existing financial obligations and the lender's eligibility criteria.",
  },
  {
    question: "What happens if I cannot repay the loan?",
    answer:
      "Because the loan is secured against your property, missed repayments can have serious consequences, including possible enforcement against the property. Review the terms and repayment capacity carefully before applying.",
  },
];

const LoanAgainstProperty = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    {
      icon: Building2,
      title: "Property-backed financing",
      text: "Explore financing options using eligible residential or commercial property.",
    },
    {
      icon: Wallet,
      title: "Flexible loan requirements",
      text: "Compare options for eligible personal and business financial needs.",
    },
    {
      icon: ShieldCheck,
      title: "Informed decisions",
      text: "Review interest rates, fees, tenure and repayment terms before choosing.",
    },
  ];

  const useCases = [
    {
      number: "01",
      title: "Business growth",
      text: "Explore funds for eligible expansion plans and working capital.",
      icon: BriefcaseBusiness,
    },
    {
      number: "02",
      title: "Personal milestones",
      text: "Plan for eligible major expenses with a structured repayment plan.",
      icon: Wallet,
    },
    {
      number: "03",
      title: "Education expenses",
      text: "Consider financing options for eligible education-related needs.",
      icon: FileText,
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Apply online",
      text: "Share your basic details and loan requirements.",
    },
    {
      number: "02",
      title: "Property review",
      text: "The lender assesses your property and eligibility.",
    },
    {
      number: "03",
      title: "Verify documents",
      text: "Complete the required checks and review the loan offer.",
    },
    {
      number: "04",
      title: "Final approval",
      text: "Disbursal follows approval and completion of formalities.",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#F7FAF6] text-[#17291F]">
      {/* HERO SECTION */}
      <section className="relative px-5 pb-20 pt-12 sm:px-8 lg:px-16 lg:pb-28 lg:pt-20">
        <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#DDF0D9] blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-[#FFF0B8] opacity-60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#CDE4CE] bg-white px-4 py-2 text-xs font-semibold text-[#087A3D] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#087A3D]" />
              LOAN AGAINST PROPERTY
            </div>

            <h1 className="max-w-xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
              Your property.
              <span className="relative mt-2 block text-[#087A3D]">
                Your next move.
                <svg
                  viewBox="0 0 340 16"
                  className="mt-1 h-3 w-56 sm:w-72"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 10C83 1 208 1 335 8"
                    stroke="#F3C943"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-[#66736A] sm:text-lg">
              Give your property a new purpose. Explore financing options
              that can help you work towards your personal or business goals.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#087A3D] px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-green-900/10 transition hover:-translate-y-1 hover:bg-[#075C30]"
              >
                Explore Loan Options
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-xl border border-[#D8E5D8] bg-white px-5 py-4 text-sm font-semibold text-[#294A35] transition hover:border-[#087A3D]"
              >
                How it works <ArrowDownRight size={17} />
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#637168]">
              <span className="flex items-center gap-2">
                <Check size={16} className="text-[#087A3D]" />
                Compare lender options
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-[#087A3D]" />
                Understand the terms
              </span>
            </div>
          </motion.div>

          {/* IMAGE COMPOSITION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-2xl"
          >
            <div className="absolute -right-3 -top-3 h-32 w-32 rounded-tr-[55px] border-2 border-[#F1C844] sm:-right-5 sm:-top-5 sm:h-44 sm:w-44" />

            <div className="relative z-10 h-[380px] overflow-hidden rounded-[28px] rounded-tl-[110px] bg-[#D8E8D5] sm:h-[510px] sm:rounded-tl-[170px]">
              <motion.img
                src={propertyImage}
                alt="Modern luxury residential property surrounded by greenery"
                className="h-full w-full object-cover"
                initial={{ scale: 1.12 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2 }}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#10291B]/75 via-transparent to-[#10291B]/5" />

              <div className="absolute bottom-7 left-6 right-6 text-white sm:bottom-9 sm:left-9">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F6D45F]">
                  Make your assets count
                </p>
                <h2 className="mt-3 max-w-sm text-2xl font-semibold leading-snug sm:text-3xl">
                  New opportunities can start with what you already own.
                </h2>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="absolute -bottom-7 left-3 z-20 max-w-[255px] rounded-2xl border border-[#E3EDE0] bg-white p-4 shadow-xl sm:-left-8 sm:bottom-10 sm:p-5"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#E6F3E4] p-3 text-[#087A3D]">
                  <KeyRound size={23} />
                </div>
                <div>
                  <p className="font-semibold">Your property, your plan</p>
                  <p className="mt-1 text-xs text-[#7A887E]">
                    Explore suitable loan options
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-2 top-12 z-20 hidden rounded-2xl bg-[#F7D65C] p-4 shadow-lg sm:block sm:-right-5"
            >
              <House size={25} className="text-[#173B26]" />
              <p className="mt-2 text-xs font-bold text-[#173B26]">
                Property-backed
              </p>
              <p className="text-xs text-[#36533E]">financing options</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BENEFITS STRIP */}
      <section className="bg-[#075C30] px-5 py-12 text-white sm:px-8 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.12 }}
                className="flex gap-4 border-white/15 md:border-r md:pr-6 last:border-0"
              >
                <div className="h-fit rounded-xl bg-white/10 p-3 text-[#F7D65C]">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* UNIQUE USE CASES SECTION */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087A3D]">
                Beyond the property
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">
                What could your next chapter look like?
              </h2>
            </div>

            <p className="max-w-md leading-7 text-[#718075]">
              Depending on your eligibility and lender policies, property
              financing may support different financial priorities.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {useCases.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ y: -7 }}
                  className="group overflow-hidden rounded-2xl border border-[#DFE9DD] bg-white transition hover:border-[#087A3D]/40 hover:shadow-xl hover:shadow-green-900/5"
                >
                  <div className="flex items-center justify-between px-6 pt-6">
                    <span className="text-xs font-bold tracking-widest text-[#8AA18C]">
                      {item.number}
                    </span>
                    <div className="rounded-xl bg-[#E9F4E6] p-3 text-[#087A3D] transition group-hover:bg-[#087A3D] group-hover:text-white">
                      <Icon size={23} />
                    </div>
                  </div>

                  <div className="px-6 pb-7 pt-8">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#718075]">
                      {item.text}
                    </p>
                    <div className="mt-6 h-1 w-10 rounded-full bg-[#F1C844] transition-all group-hover:w-20" />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMAGE FEATURE SECTION */}
      <section className="px-5 pb-20 sm:px-8 lg:px-16 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[30px] bg-[#E6F0E3] lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center p-7 sm:p-12 lg:p-14"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#087A3D] text-white">
              <Landmark size={27} />
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#087A3D]">
              Choose with confidence
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              A better decision begins with a clearer comparison.
            </h2>

            <p className="mt-5 leading-7 text-[#647567]">
              Look beyond the headline interest rate. Understand the full
              cost, repayment schedule and the responsibilities that come
              with a property-backed loan.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Compare interest rates and processing fees",
                "Review the loan tenure and monthly repayment",
                "Understand the risks to your property",
              ].map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <span className="mt-0.5 rounded-full bg-white p-1 text-[#087A3D]">
                    <Check size={15} />
                  </span>
                  <p className="text-sm font-medium leading-6 text-[#344E3B]">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/loan"
              className="mt-8 inline-flex w-fit items-center gap-3 rounded-xl bg-[#087A3D] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#075C30]"
            >
              Explore your options <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative min-h-[350px] overflow-hidden lg:min-h-[570px]"
          >
            <motion.img
              src={interiorImage}
              alt="Bright modern home interior with natural light"
              className="absolute inset-0 h-full w-full object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6 }}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#123C26]/65 via-transparent to-transparent" />

            <div className="absolute bottom-7 left-6 right-6 rounded-2xl border border-white/30 bg-white/90 p-5 backdrop-blur-md sm:bottom-9 sm:left-9 sm:right-9">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#E6F3E4] p-3 text-[#087A3D]">
                  <BadgeCheck size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#183D28]">
                    Know before you commit
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-[#6B7A6D]">
                    Read the lender's terms and make a repayment plan.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="bg-[#075C30] px-5 py-20 text-white sm:px-8 lg:px-16 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F7D65C]">
              The application journey
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              Four steps. A clearer process.
            </h2>
            <p className="mt-4 leading-7 text-white/70">
              The exact process and approval timeline depend on the lender
              and the documents provided.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.12 }}
                className="relative border-t border-white/25 pt-6"
              >
                <span className="text-sm font-bold tracking-[0.2em] text-[#F7D65C]">
                  STEP {step.number}
                </span>
                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENT CHECKLIST */}
      <section className="px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087A3D]">
              Before you apply
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
              Keep your paperwork ready.
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-[#718075]">
              Having the usual documents ready can help you prepare for the
              lender's verification process.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  title: "Identity and address proof",
                  text: "Accepted KYC documents.",
                },
                {
                  title: "Income documents",
                  text: "Salary slips, ITR or other accepted income records.",
                },
                {
                  title: "Bank statements",
                  text: "Recent statements requested by the lender.",
                },
                {
                  title: "Property documents",
                  text: "Ownership papers and records needed for evaluation.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 rounded-xl border border-[#E1EAE0] bg-white p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E8F4E5] text-[#087A3D]">
                    <Check size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#718075]">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-[#DCEBDD] sm:min-h-[570px]"
          >
            <img
              src={buildingImage}
              alt="Modern commercial building architecture"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#063C21]/85 via-[#063C21]/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-10">
              <div className="mb-4 inline-flex rounded-xl bg-[#F7D65C] p-3 text-[#173B26]">
                <FileText size={25} />
              </div>
              <h3 className="max-w-md text-3xl font-bold">
                Start with the right information.
              </h3>
              <p className="mt-3 max-w-md leading-7 text-white/80">
                Eligibility, accepted property types and required documents
                can differ from one lender to another.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="inline-flex rounded-2xl bg-[#E7F3E5] p-4 text-[#087A3D]">
              <CircleHelp size={28} />
            </div>

            <h2 className="mt-5 text-3xl font-bold sm:text-5xl">
              Questions, answered.
            </h2>

            <p className="mt-4 max-w-sm leading-7 text-[#718075]">
              Understand the basics before making a decision about your
              property and finances.
            </p>
          </motion.div>

          <div className="divide-y divide-[#E6EDE4]">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="py-5"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(openFaq === index ? -1 : index)
                  }
                  aria-expanded={openFaq === index}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="font-semibold sm:text-lg">
                    {faq.question}
                  </span>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-[#087A3D] transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pt-4 text-sm leading-7 text-[#718075]">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[30px] bg-[#F7D65C] px-7 py-12 sm:px-12 lg:px-16 lg:py-16"
        >
          <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full border border-[#087A3D]/20" />
          <div className="pointer-events-none absolute -right-3 -top-10 h-44 w-44 rounded-full border border-[#087A3D]/20" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#386344]">
                Take your next step
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#123B23] sm:text-5xl">
                Your property could open new possibilities.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-[#45614B]">
                Explore your options, compare the costs and understand the
                repayment commitment before choosing a loan.
              </p>
            </div>

            <a
              href="/"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#087A3D] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#075C30]"
            >
              Explore Now
              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </motion.div>
      </section>

      {/* FOOTER NOTE */}
      <footer className="border-t border-[#E1EAE0] px-5 py-6 sm:px-8">
        <p className="mx-auto max-w-5xl text-center text-xs leading-6 text-[#718075]">
          EkPaisa provides information to help users explore financial
          products. Loan eligibility, approval, interest rates, fees and
          terms depend on the lender. A Loan Against Property is secured
          against your property and carries repayment risks. Review all
          terms carefully before proceeding.
        </p>
      </footer>
    </main>
  );
};

export default LoanAgainstProperty;

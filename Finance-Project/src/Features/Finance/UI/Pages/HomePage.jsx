
// ============================================================
// EKPAISA HOME PAGE
// ============================================================

import { motion } from "framer-motion";
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
  CreditCard,
  Users,
  LockKeyhole,
  Sparkles,
  Rocket,
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
import personalloan from "/src/assets/personalloan.webp";
import creditcard from "/src/assets/creditcard.webp";
import computer from "/src/assets/computer.webp";

// ============================================================
// ANIMATION VARIANTS
// ============================================================

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const buttonMotion = {
  whileHover: { y: -3 },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.25, ease: "easeOut" },
};

// ============================================================
// HOME PAGE
// ============================================================

const HomePage = () => {
  const { navigate } = useMain();

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

  const exploreItems = [
    { label: "Personal Loans", icon: Wallet, path: "/loans" },
    { label: "Credit Cards", icon: CreditCard, path: "/credit-cards" },
    { label: "Money Guides", icon: FileText, path: "/blogs" },
  ];

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
      className="
        overflow-hidden bg-white font-sans text-[#102016]
        [&_button]:transition-all
        [&_button]:duration-300
        [&_button]:ease-out
        [&_button:active]:scale-[0.98]
        [&_button:focus-visible]:outline-none
        [&_button:focus-visible]:ring-2
        [&_button:focus-visible]:ring-[#D6A91F]
        [&_button:focus-visible]:ring-offset-2
        [&_a]:transition-all
        [&_a]:duration-300
        [&_a]:ease-out
      "
    >
      {/* ================================================== */}
      {/* HERO SECTION */}
      {/* ================================================== */}

      <section className="relative bg-gradient-to-br from-[#F4F8F2] via-white to-[#E7F0E5] px-5 pb-20 pt-12 sm:px-8 lg:px-16 lg:pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#DCEFE2]/50 blur-3xl"
        />

        <div className="pointer-events-none absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-[#EAF4EC] blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* HERO CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F5C542] bg-white/80 px-4 py-2 text-sm font-medium text-[#087A3D]"
            >
              <Sparkles size={16} />
              Make Money Choices With Clarity
            </motion.div>

            <h1 className="max-w-xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              Your Money.
              <br />
              Clearer. Calmer.
              <br />
              <span className="bg-gradient-to-r from-[#087A3D] to-[#D6A91F] bg-clip-text text-transparent">
                Move With EkPaisa.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#5F6F63] sm:text-lg">
              Explore money-related options, learn the basics, and organise
              your next step with a clearer view.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.button
                type="button"
                onClick={() => navigate("/apply")}
                {...buttonMotion}
                className="group inline-flex items-center gap-2 rounded-xl bg-[#087A3D] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#087A3D]/20 hover:bg-[#075C30] hover:shadow-xl hover:shadow-[#087A3D]/25"
              >
                Apply Now
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>

              <motion.a
                href="#how-it-works"
                {...buttonMotion}
                className="inline-flex items-center justify-center rounded-xl border border-[#D6A91F] bg-white/80 px-6 py-3.5 font-semibold text-[#087A3D] hover:border-[#087A3D] hover:bg-[#F4F8F2] hover:shadow-md"
              >
                Learn More
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-9 flex flex-wrap gap-x-6 gap-y-4 text-sm text-[#34483A]"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck size={20} className="text-[#087A3D]" />
                Built Around Clarity
              </div>

              <div className="flex items-center gap-2">
                <Zap size={20} className="text-[#087A3D]" />
                Simple to Explore
              </div>

              <div className="flex items-center gap-2">
                <Star size={20} className="text-[#087A3D]" />
                Start With Curiosity
              </div>
            </motion.div>
          </motion.div>

          {/* HERO IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="relative rounded-[2rem] bg-gradient-to-br from-[#DCEFE2] to-[#F5C542] p-3 shadow-2xl sm:p-5">
              <motion.img
                src={computer}
                alt="Financial analytics dashboard"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.02 }}
                className="h-[320px] w-full rounded-[1.5rem] object-cover sm:h-[420px]"
              />

              <div className="pointer-events-none absolute inset-3 rounded-[1.5rem] bg-gradient-to-t from-[#102016]/30 via-transparent to-transparent sm:inset-5" />
            </div>

            {/* FLOATING PRODUCTS CARD */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: [0, 8, 0] }}
              transition={{
                opacity: { delay: 0.9, duration: 0.6 },
                y: {
                  delay: 1.4,
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute -bottom-7 right-0 w-52 rounded-2xl border border-white bg-white/95 p-4 shadow-xl sm:-right-6 sm:w-60 sm:p-5"
            >
              <p className="mb-3 text-sm font-semibold">
                Explore Your Next Step
              </p>

              {exploreItems.map(({ label, icon: Icon, path }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => navigate(path)}
                  className="flex w-full items-center justify-between rounded-lg p-2 text-left text-sm hover:bg-[#F4F8F2]"
                >
                  <span className="flex items-center gap-2">
                    <Icon size={17} className="text-[#087A3D]" />
                    {label}
                  </span>

                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              ))}
            </motion.div>
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

            <motion.button
              type="button"
              onClick={() => navigate("/apply")}
              {...buttonMotion}
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-[#087A3D] px-6 py-3 font-semibold text-white shadow-md hover:bg-[#075C30] hover:shadow-lg"
            >
              Apply Now
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.button>
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
                Browse introductory information about borrowing and card
                features before comparing providers.
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
            {/* PERSONAL LOANS */}

            <motion.article
              whileHover={{ y: -9 }}
              transition={{ duration: 0.25 }}
              className="group overflow-hidden rounded-3xl border border-[#DCEFE2] bg-white shadow-sm hover:shadow-xl hover:shadow-[#087A3D]/10"
            >
              <div className="relative h-52 overflow-hidden bg-[#DCEFE2]">
                <img
                  src={personalloan}
                  alt="Personal loan information"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102016]/30 to-transparent" />

                <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-2 text-sm font-semibold text-[#087A3D]">
                  Personal Loans
                </span>
              </div>

              <div className="p-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4EC] text-[#087A3D]">
                  <Wallet size={23} />
                </div>

                <h3 className="text-xl font-bold">Personal Loans</h3>

                <p className="mt-3 leading-7 text-[#5F6F63]">
                  Learn the basics of personal borrowing and the details worth
                  reviewing.
                </p>

                <motion.button
                  type="button"
                  onClick={() => navigate("/loan")}
                  {...buttonMotion}
                  className="group/link mt-5 inline-flex items-center gap-2 font-semibold text-[#087A3D] hover:text-[#075C30]"
                >
                  Learn About Loans
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </motion.button>
              </div>
            </motion.article>

            {/* CREDIT CARDS */}

            <motion.article
              whileHover={{ y: -9 }}
              transition={{ duration: 0.25 }}
              className="group overflow-hidden rounded-3xl border border-[#DCEFE2] bg-white shadow-sm hover:shadow-xl hover:shadow-[#087A3D]/10"
            >
              <div className="relative h-52 overflow-hidden bg-[#DCEFE2]">
                <img
                  src={creditcard}
                  alt="Credit card information"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102016]/30 to-transparent" />

                <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-2 text-sm font-semibold text-[#087A3D]">
                  Credit Cards
                </span>
              </div>

              <div className="p-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4EC] text-[#087A3D]">
                  <CreditCard size={23} />
                </div>

                <h3 className="text-xl font-bold">Credit Cards</h3>

                <p className="mt-3 leading-7 text-[#5F6F63]">
                  Get familiar with common card features, charges, and reward
                  conditions.
                </p>

                <motion.button
                  type="button"
                  onClick={() => navigate("/")}
                  {...buttonMotion}
                  className="group/link mt-5 inline-flex items-center gap-2 font-semibold text-[#087A3D] hover:text-[#075C30]"
                >
                  Learn About Cards
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover/link:translate-x-1"
                  />
                </motion.button>
              </div>
            </motion.article>

            {/* MONEY GUIDES */}

            <motion.article
              whileHover={{ y: -9 }}
              transition={{ duration: 0.25 }}
              className="group overflow-hidden rounded-3xl border border-[#DCEFE2] bg-white shadow-sm hover:shadow-xl hover:shadow-[#087A3D]/10 md:col-span-2 lg:col-span-1"
            >
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-[#071B10] via-[#087A3D] to-[#D6A91F]">
                <div className="absolute -right-6 -top-8 h-36 w-36 rounded-full border-[18px] border-white/15" />

                <div className="absolute -bottom-12 -left-5 h-36 w-36 rounded-full border-[18px] border-[#F5C542]/20" />

                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/30 bg-white/10 text-[#F5C542] shadow-lg backdrop-blur">
                  <FileText size={38} />
                </div>

                <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-[#071B10]/70 px-3 py-1.5 text-xs font-semibold text-white">
                  EkPaisa Guides
                </span>
              </div>

              <div className="p-6">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4EC] text-[#087A3D]">
                  <FileText size={23} />
                </div>

                <h3 className="text-xl font-bold">Money Made Easier</h3>

                <p className="mt-3 leading-7 text-[#5F6F63]">
                  Read original, easy-to-follow guides about budgeting,
                  borrowing, and everyday money decisions.
                </p>

                <motion.button
                  type="button"
                  onClick={() => navigate("/blogs")}
                  {...buttonMotion}
                  className="group/link mt-5 inline-flex items-center gap-2 font-semibold text-[#087A3D] hover:text-[#075C30]"
                >
                  Read Our Guides
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
            <span className="inline-flex items-center gap-2 rounded-full border border-[#DCEFE2] bg-white px-4 py-2 text-sm font-semibold text-[#087A3D] shadow-sm">
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

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-5">
            {bankLogos.map((bank, index) => (
              <motion.div
                key={bank.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                whileHover={{ y: -8, scale: 1.025 }}
                className="group flex min-h-48 flex-col items-center justify-center rounded-3xl border border-[#DCEFE2] bg-white px-4 py-6 shadow-sm transition-all duration-300 hover:border-[#087A3D]/40 hover:shadow-xl hover:shadow-[#087A3D]/10 sm:min-h-52 sm:px-5"
              >
                <div className="flex h-24 w-full items-center justify-center rounded-2xl bg-[#F8FAF7] p-3 transition-colors group-hover:bg-[#F0F7F0] sm:h-28">
                  <img
                    src={bank.src}
                    alt={`${bank.name} logo`}
                    loading="lazy"
                    className="h-20 w-full max-w-[190px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-24"
                  />
                </div>

                <p className="mt-5 text-center text-sm font-bold leading-5 text-[#34483A] sm:text-base">
                  {bank.name}
                </p>

                <span className="mt-2 h-1 w-8 rounded-full bg-[#DCEFE2] transition-all duration-300 group-hover:w-14 group-hover:bg-[#087A3D]" />
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
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#087A3D] shadow-sm transition-all duration-300 hover:shadow-md">
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
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="px-5 py-12 sm:px-8 lg:px-16"
      >
        <div className="relative mx-auto flex max-w-7xl flex-col gap-7 overflow-hidden rounded-3xl bg-gradient-to-r from-[#102016] via-[#075C30] to-[#087A3D] p-8 text-white shadow-xl shadow-[#087A3D]/10 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
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
                <span className="block text-[#F5C542]">your options?</span>
              </h2>

              <p className="mt-3 max-w-lg leading-7 text-[#D5E4D8]">
                Start with a topic, learn the basics, and make your next move
                thoughtfully.
              </p>
            </div>
          </div>

          <motion.button
            type="button"
            onClick={() => navigate("/apply")}
            {...buttonMotion}
            className="group relative inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-[#087A3D] shadow-md hover:bg-[#EAF4EC] hover:shadow-xl"
          >
            Apply Now
            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.button>
        </div>
      </motion.section>

      {/* ================================================== */}
      {/* FOOTER */}
      {/* ================================================== */}

      <footer
        id="home-footer"
        className="relative overflow-hidden border-t-2 border-[#075C30] bg-gradient-to-br from-[#F4E9C9] via-[#FBE9A0] to-[#FFD95A] text-[#123D27]"
      >
        {/* Decorative background */}

        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/30 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#075C30]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
          {/* MAIN FOOTER GRID */}

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

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#075C30]/20 bg-white/40 px-4 py-2 text-sm font-bold shadow-sm">
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
                Take the first step towards finding a financial option that
                suits your needs.
              </p>

              <motion.a
                href="/loan"
                {...buttonMotion}
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#075C30] px-5 py-3 text-sm font-bold text-white shadow-md hover:bg-[#064824] hover:shadow-lg"
              >
                Explore Loans
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.a>
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

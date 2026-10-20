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
  Gauge,
  Users,
  LockKeyhole,
  Sparkles,
  Rocket,
} from "lucide-react";
import { useMain } from "../../Hooks/useMain";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const HomePage = () => {
  const { navigate } = useMain();
  return (
    <main className="overflow-hidden bg-white font-sans text-[#102016]">
      {/* HERO SECTION */}
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
              Explore money-related options, learn the basics, and organise your
              next step with a clearer view.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.96 }}
              >
                <button
                  onClick={() => navigate("/apply")}
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#087A3D] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#087A3D]/10 transition-colors hover:bg-[#075C30]"
                >
                  Apply Now
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
              </motion.div>

              <motion.a
                href="#how-it-works"
                whileHover={{ y: -3 }}
                className="inline-flex items-center justify-center rounded-xl border border-[#D6A91F] bg-white/80 px-6 py-3.5 font-semibold text-[#087A3D] transition-colors hover:bg-[#F4F8F2]"
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

          {/* HERO IMAGE AND FLOATING CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="relative rounded-[2rem] bg-gradient-to-br from-[#DCEFE2] to-[#F5C542] p-3 shadow-2xl shadow-[#087A3D]/10/60 sm:p-5">
              <motion.img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85"
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

            {/* PRODUCTS FLOATING CARD */}
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

              <p
                onClick={() => navigate("/loans")}
                className="flex items-center justify-between rounded-lg p-2 text-sm transition-colors hover:bg-[#F4F8F2]"
              >
                <span className="flex items-center gap-2">
                  <Wallet size={17} className="text-[#087A3D]" />
                  Personal Loans
                </span>
                <ArrowRight size={15} />
              </p>

              <p
                onClick={() => navigate("/credit-cards")}
                className="flex items-center justify-between rounded-lg p-2 text-sm transition-colors hover:bg-[#F4F8F2]"
              >
                <span className="flex items-center gap-2">
                  <CreditCard size={17} className="text-[#087A3D]" />
                  Credit Cards
                </span>
                <ArrowRight size={15} />
              </p>

              <p
                onClick={() => navigate("/blogs")}
                className="flex items-center justify-between rounded-lg p-2 text-sm transition-colors hover:bg-[#F4F8F2]"
              >
                <span className="flex items-center gap-2">
                  <FileText size={17} className="text-[#087A3D]" />
                  Money Guides
                </span>
                <ArrowRight size={15} />
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeUp}
        className="px-5 py-16 sm:px-8 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-5 rounded-3xl bg-[#F5F8F2] p-6 sm:p-8 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            whileHover={{ y: -7 }}
            className="rounded-2xl p-4 transition-all hover:bg-white hover:shadow-lg hover:shadow-[#087A3D]/10"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#DCEFE2] text-[#087A3D]">
              <Search size={24} />
            </div>
            <h3 className="text-lg font-bold">Explore Your Options</h3>
            <p className="mt-2 text-sm leading-6 text-[#5F6F63]">
              Review product details and decide which questions matter to you.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -7 }}
            className="rounded-2xl p-4 transition-all hover:bg-white hover:shadow-lg hover:shadow-[#087A3D]/10"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#DCEFE2] text-[#087A3D]">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-lg font-bold">Learn About Credit</h3>
            <p className="mt-2 text-sm leading-6 text-[#5F6F63]">
              Get familiar with credit terms before making a financial decision.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -7 }}
            className="rounded-2xl p-4 transition-all hover:bg-white hover:shadow-lg hover:shadow-[#087A3D]/10"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#DCEFE2] text-[#087A3D]">
              <FileText size={24} />
            </div>
            <h3 className="text-lg font-bold">Plain-Language Guides</h3>
            <p className="mt-2 text-sm leading-6 text-[#5F6F63]">
              Read straightforward explanations designed for everyday decisions.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -7 }}
            className="rounded-2xl p-4 transition-all hover:bg-white hover:shadow-lg hover:shadow-[#087A3D]/10"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#DCEFE2] text-[#087A3D]">
              <Heart size={24} />
            </div>
            <h3 className="text-lg font-bold">Your Plans, Your Pace</h3>
            <p className="mt-2 text-sm leading-6 text-[#5F6F63]">
              Use helpful starting points to think through your own priorities.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* WORKS SECTION */}
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
              Begin with a goal, explore relevant information, then decide what
              to look into next.
            </p>

            <p
              onClick={() => navigate("/apply")}
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-[#087A3D] px-6 py-3 font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#075C30]"
            >
              Apply Now
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-2xl border border-[#DCEFE2] bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-[#087A3D]/10"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#087A3D] font-bold text-white">
                1
              </span>
              <div className="my-5 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF4EC] text-[#087A3D]">
                  <FileText size={30} />
                </div>
              </div>
              <h3 className="text-center text-lg font-bold">Name Your Goal</h3>
              <p className="mt-3 text-center text-sm leading-6 text-[#5F6F63]">
                Pick the topic you want to understand first.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-2xl border border-[#DCEFE2] bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-[#087A3D]/10"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#087A3D] font-bold text-white">
                2
              </span>
              <div className="my-5 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF4EC] text-[#087A3D]">
                  <SlidersHorizontal size={30} />
                </div>
              </div>
              <h3 className="text-center text-lg font-bold">
                Review the Details
              </h3>
              <p className="mt-3 text-center text-sm leading-6 text-[#5F6F63]">
                Look at the details and note anything you need to verify.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              className="rounded-2xl border border-[#DCEFE2] bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-[#087A3D]/10 sm:col-span-2 xl:col-span-1"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#087A3D] font-bold text-white">
                3
              </span>
              <div className="my-5 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF4EC] text-[#087A3D]">
                  <CheckCircle2 size={30} />
                </div>
              </div>
              <h3 className="text-center text-lg font-bold">
                Choose Your Next Step
              </h3>
              <p className="mt-3 text-center text-sm leading-6 text-[#5F6F63]">
                Move forward when the information fits your needs.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* POPULAR PRODUCTS */}
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
            {/* yeh sa dekhana ha  */}
            <p
              onClick={() => navigate("/apply")}
              className="group inline-flex w-fit items-center gap-2 font-semibold text-[#087A3D] transition-colors hover:text-[#075C30]"
            >
              Browse Topics
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </p>
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
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=85"
                  alt="Home representing financial goals"
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
                <p
                  onClick={() => navigate("/loans")}
                  className="group/link mt-5 inline-flex items-center gap-2 font-semibold text-[#087A3D] hover:text-[#075C30]"
                >
                  Learn About Loans
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </p>
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
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85"
                  alt="Card payment at checkout"
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
                <p
                  onClick={() => navigate("/credit-cards")}
                  className="group/link mt-5 inline-flex items-center gap-2 font-semibold text-[#087A3D] hover:text-[#075C30]"
                >
                  Learn About Cards
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </p>
              </div>
            </motion.article>

            {/* ORIGINAL FINANCIAL GUIDES */}
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
                <p
                  to="/blogs"
                  className="group/link mt-5 inline-flex items-center gap-2 font-semibold text-[#087A3D] hover:text-[#075C30]"
                >
                  Read Our Guides
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </p>
              </div>
            </motion.article>
          </div>
        </div>
      </motion.section>

      {/* BANK LOGOS SECTION - UPDATED UI */}
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
              Explore well-known banks while researching financial options that
              may suit your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0 }}
              whileHover={{ y: -8, scale: 1.025 }}
              className="group flex min-h-48 flex-col items-center justify-center rounded-3xl border border-[#DCEFE2] bg-white px-4 py-6 shadow-sm transition-all duration-300 hover:border-[#087A3D]/40 hover:shadow-xl hover:shadow-[#087A3D]/10 sm:min-h-52 sm:px-5"
            >
              <div className="flex h-24 w-full items-center justify-center rounded-2xl bg-[#F8FAF7] p-3 transition-colors group-hover:bg-[#F0F7F0] sm:h-28">
                <img src="https://raw.githubusercontent.com/auraveni/global-bank-logos/main/assets/bank/indian-bank/sbi.svg" alt="State Bank of India logo" loading="lazy" className="h-20 w-full max-w-[190px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-24" />
              </div>
              <p className="mt-5 text-center text-sm font-bold leading-5 text-[#34483A] sm:text-base">State Bank of India</p>
              <span className="mt-2 h-1 w-8 rounded-full bg-[#DCEFE2] transition-all duration-300 group-hover:w-14 group-hover:bg-[#087A3D]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.07 }}
              whileHover={{ y: -8, scale: 1.025 }}
              className="group flex min-h-48 flex-col items-center justify-center rounded-3xl border border-[#DCEFE2] bg-white px-4 py-6 shadow-sm transition-all duration-300 hover:border-[#087A3D]/40 hover:shadow-xl hover:shadow-[#087A3D]/10 sm:min-h-52 sm:px-5"
            >
              <div className="flex h-24 w-full items-center justify-center rounded-2xl bg-[#F8FAF7] p-3 transition-colors group-hover:bg-[#F0F7F0] sm:h-28">
                <img src="https://raw.githubusercontent.com/auraveni/global-bank-logos/main/assets/bank/indian-bank/hdfc.svg" alt="HDFC Bank logo" loading="lazy" className="h-20 w-full max-w-[190px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-24" />
              </div>
              <p className="mt-5 text-center text-sm font-bold leading-5 text-[#34483A] sm:text-base">HDFC Bank</p>
              <span className="mt-2 h-1 w-8 rounded-full bg-[#DCEFE2] transition-all duration-300 group-hover:w-14 group-hover:bg-[#087A3D]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.14 }}
              whileHover={{ y: -8, scale: 1.025 }}
              className="group flex min-h-48 flex-col items-center justify-center rounded-3xl border border-[#DCEFE2] bg-white px-4 py-6 shadow-sm transition-all duration-300 hover:border-[#087A3D]/40 hover:shadow-xl hover:shadow-[#087A3D]/10 sm:min-h-52 sm:px-5"
            >
              <div className="flex h-24 w-full items-center justify-center rounded-2xl bg-[#F8FAF7] p-3 transition-colors group-hover:bg-[#F0F7F0] sm:h-28">
                <img src="https://raw.githubusercontent.com/auraveni/global-bank-logos/main/assets/bank/indian-bank/icici.svg" alt="ICICI Bank logo" loading="lazy" className="h-20 w-full max-w-[190px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-24" />
              </div>
              <p className="mt-5 text-center text-sm font-bold leading-5 text-[#34483A] sm:text-base">ICICI Bank</p>
              <span className="mt-2 h-1 w-8 rounded-full bg-[#DCEFE2] transition-all duration-300 group-hover:w-14 group-hover:bg-[#087A3D]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.21 }}
              whileHover={{ y: -8, scale: 1.025 }}
              className="group flex min-h-48 flex-col items-center justify-center rounded-3xl border border-[#DCEFE2] bg-white px-4 py-6 shadow-sm transition-all duration-300 hover:border-[#087A3D]/40 hover:shadow-xl hover:shadow-[#087A3D]/10 sm:min-h-52 sm:px-5"
            >
              <div className="flex h-24 w-full items-center justify-center rounded-2xl bg-[#F8FAF7] p-3 transition-colors group-hover:bg-[#F0F7F0] sm:h-28">
                <img src="https://raw.githubusercontent.com/auraveni/global-bank-logos/main/assets/bank/indian-bank/axis.svg" alt="Axis Bank logo" loading="lazy" className="h-20 w-full max-w-[190px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-24" />
              </div>
              <p className="mt-5 text-center text-sm font-bold leading-5 text-[#34483A] sm:text-base">Axis Bank</p>
              <span className="mt-2 h-1 w-8 rounded-full bg-[#DCEFE2] transition-all duration-300 group-hover:w-14 group-hover:bg-[#087A3D]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.28 }}
              whileHover={{ y: -8, scale: 1.025 }}
              className="group flex min-h-48 flex-col items-center justify-center rounded-3xl border border-[#DCEFE2] bg-white px-4 py-6 shadow-sm transition-all duration-300 hover:border-[#087A3D]/40 hover:shadow-xl hover:shadow-[#087A3D]/10 sm:min-h-52 sm:px-5"
            >
              <div className="flex h-24 w-full items-center justify-center rounded-2xl bg-[#F8FAF7] p-3 transition-colors group-hover:bg-[#F0F7F0] sm:h-28">
                <img src="https://raw.githubusercontent.com/auraveni/global-bank-logos/main/assets/bank/indian-bank/kotak.svg" alt="Kotak Mahindra Bank logo" loading="lazy" className="h-20 w-full max-w-[190px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-24" />
              </div>
              <p className="mt-5 text-center text-sm font-bold leading-5 text-[#34483A] sm:text-base">Kotak Mahindra Bank</p>
              <span className="mt-2 h-1 w-8 rounded-full bg-[#DCEFE2] transition-all duration-300 group-hover:w-14 group-hover:bg-[#087A3D]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.35 }}
              whileHover={{ y: -8, scale: 1.025 }}
              className="group flex min-h-48 flex-col items-center justify-center rounded-3xl border border-[#DCEFE2] bg-white px-4 py-6 shadow-sm transition-all duration-300 hover:border-[#087A3D]/40 hover:shadow-xl hover:shadow-[#087A3D]/10 sm:min-h-52 sm:px-5"
            >
              <div className="flex h-24 w-full items-center justify-center rounded-2xl bg-[#F8FAF7] p-3 transition-colors group-hover:bg-[#F0F7F0] sm:h-28">
                <img src="https://raw.githubusercontent.com/auraveni/global-bank-logos/main/assets/bank/indian-bank/pnb.svg" alt="Punjab National Bank logo" loading="lazy" className="h-20 w-full max-w-[190px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-24" />
              </div>
              <p className="mt-5 text-center text-sm font-bold leading-5 text-[#34483A] sm:text-base">Punjab National Bank</p>
              <span className="mt-2 h-1 w-8 rounded-full bg-[#DCEFE2] transition-all duration-300 group-hover:w-14 group-hover:bg-[#087A3D]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.42 }}
              whileHover={{ y: -8, scale: 1.025 }}
              className="group flex min-h-48 flex-col items-center justify-center rounded-3xl border border-[#DCEFE2] bg-white px-4 py-6 shadow-sm transition-all duration-300 hover:border-[#087A3D]/40 hover:shadow-xl hover:shadow-[#087A3D]/10 sm:min-h-52 sm:px-5"
            >
              <div className="flex h-24 w-full items-center justify-center rounded-2xl bg-[#F8FAF7] p-3 transition-colors group-hover:bg-[#F0F7F0] sm:h-28">
                <img src="https://raw.githubusercontent.com/auraveni/global-bank-logos/main/assets/bank/indian-bank/bob.svg" alt="Bank of Baroda logo" loading="lazy" className="h-20 w-full max-w-[190px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-24" />
              </div>
              <p className="mt-5 text-center text-sm font-bold leading-5 text-[#34483A] sm:text-base">Bank of Baroda</p>
              <span className="mt-2 h-1 w-8 rounded-full bg-[#DCEFE2] transition-all duration-300 group-hover:w-14 group-hover:bg-[#087A3D]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.49 }}
              whileHover={{ y: -8, scale: 1.025 }}
              className="group flex min-h-48 flex-col items-center justify-center rounded-3xl border border-[#DCEFE2] bg-white px-4 py-6 shadow-sm transition-all duration-300 hover:border-[#087A3D]/40 hover:shadow-xl hover:shadow-[#087A3D]/10 sm:min-h-52 sm:px-5"
            >
              <div className="flex h-24 w-full items-center justify-center rounded-2xl bg-[#F8FAF7] p-3 transition-colors group-hover:bg-[#F0F7F0] sm:h-28">
                <img src="https://raw.githubusercontent.com/auraveni/global-bank-logos/main/assets/bank/indian-bank/canara.svg" alt="Canara Bank logo" loading="lazy" className="h-20 w-full max-w-[190px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-24" />
              </div>
              <p className="mt-5 text-center text-sm font-bold leading-5 text-[#34483A] sm:text-base">Canara Bank</p>
              <span className="mt-2 h-1 w-8 rounded-full bg-[#DCEFE2] transition-all duration-300 group-hover:w-14 group-hover:bg-[#087A3D]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.56 }}
              whileHover={{ y: -8, scale: 1.025 }}
              className="group flex min-h-48 flex-col items-center justify-center rounded-3xl border border-[#DCEFE2] bg-white px-4 py-6 shadow-sm transition-all duration-300 hover:border-[#087A3D]/40 hover:shadow-xl hover:shadow-[#087A3D]/10 sm:min-h-52 sm:px-5"
            >
              <div className="flex h-24 w-full items-center justify-center rounded-2xl bg-[#F8FAF7] p-3 transition-colors group-hover:bg-[#F0F7F0] sm:h-28">
                <img src="https://raw.githubusercontent.com/auraveni/global-bank-logos/main/assets/bank/indian-bank/idfc.svg" alt="IDFC FIRST Bank logo" loading="lazy" className="h-20 w-full max-w-[190px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-24" />
              </div>
              <p className="mt-5 text-center text-sm font-bold leading-5 text-[#34483A] sm:text-base">IDFC FIRST Bank</p>
              <span className="mt-2 h-1 w-8 rounded-full bg-[#DCEFE2] transition-all duration-300 group-hover:w-14 group-hover:bg-[#087A3D]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.63 }}
              whileHover={{ y: -8, scale: 1.025 }}
              className="group flex min-h-48 flex-col items-center justify-center rounded-3xl border border-[#DCEFE2] bg-white px-4 py-6 shadow-sm transition-all duration-300 hover:border-[#087A3D]/40 hover:shadow-xl hover:shadow-[#087A3D]/10 sm:min-h-52 sm:px-5"
            >
              <div className="flex h-24 w-full items-center justify-center rounded-2xl bg-[#F8FAF7] p-3 transition-colors group-hover:bg-[#F0F7F0] sm:h-28">
                <img src="https://raw.githubusercontent.com/auraveni/global-bank-logos/main/assets/bank/indian-bank/indus.svg" alt="IndusInd Bank logo" loading="lazy" className="h-20 w-full max-w-[190px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-24" />
              </div>
              <p className="mt-5 text-center text-sm font-bold leading-5 text-[#34483A] sm:text-base">IndusInd Bank</p>
              <span className="mt-2 h-1 w-8 rounded-full bg-[#DCEFE2] transition-all duration-300 group-hover:w-14 group-hover:bg-[#087A3D]" />
            </motion.div>
          </div>

          <p className="mt-8 text-center text-xs leading-5 text-[#7A8A7D]">
            Bank logos are trademarks of their respective owners. Logo images are loaded from an external repository.
          </p>
        </div>
      </motion.section>

      {/* TRUST SECTION */}
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

          <motion.div
            whileHover={{ y: -5 }}
            className="relative flex items-center gap-4"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#087A3D] shadow-sm">
              <Users size={25} />
            </div>
            <div>
              <p className="text-2xl font-bold">Your Goals</p>
              <p className="mt-1 text-sm text-[#5F6F63]">
                Explore at your pace
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="relative flex items-center gap-4"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#087A3D] shadow-sm">
              <ShieldCheck size={25} />
            </div>
            <div>
              <p className="text-2xl font-bold">Transparency</p>
              <p className="mt-1 text-sm text-[#5F6F63]">Read the details</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="relative flex items-center gap-4"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#087A3D] shadow-sm">
              <LockKeyhole size={25} />
            </div>
            <div>
              <p className="text-2xl font-bold">Privacy First</p>
              <p className="mt-1 text-sm text-[#5F6F63]">Privacy matters</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* FINAL CTA */}
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

          <motion.div whileHover={{ scale: 1.05, y: -3 }}>
            <p
              onClick={() => navigate("/apply")}
              className="group relative inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-[#087A3D] transition-colors hover:bg-[#EAF4EC]"
            >
              Apply Now
              <ArrowRight
                size={19}
                className="transition-transform group-hover:translate-x-1"
              />
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-gradient-to-br from-[#071B10] to-[#102016] px-5 pb-8 pt-14 text-white sm:px-8 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_0.8fr_1fr]">
          {/* BRAND */}
          <div>
            <p to="/" className="inline-flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#F5C542] to-[#D6A91F] text-[#102016]">
                <Sparkles size={21} />
              </span>
              <span className="text-2xl font-bold tracking-tight">
                EkPaisa<span className="text-[#F5C542]">.</span>
              </span>
            </p>

            <p className="mt-5 max-w-xs text-sm leading-6 text-[#D5E4D8]">
              EkPaisa brings together approachable financial topics to help you
              begin your own research.
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <h3 className="font-bold">Explore</h3>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-[#D5E4D8]">
              <p
                onClick={() => navigate("/loans")}
                className="transition-colors hover:text-white"
              >
                Personal Loans
              </p>
              <p
                to="/credit-cards"
                className="transition-colors hover:text-white"
              >
                Credit Cards
              </p>
              <p
                onClick={() => navigate("/blogs")}
                className="transition-colors hover:text-white"
              >
                Money Guides
              </p>
            </div>
          </div>

          {/* GET STARTED */}
          <div>
            <h3 className="font-bold">Get Started</h3>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-[#D5E4D8]">
              <p to="/apply" className="transition-colors hover:text-white">
                Apply Now
              </p>
              <a
                href="#how-it-works"
                className="transition-colors hover:text-white"
              >
                Your Starting Point
              </a>
              <a className="transition-colors hover:text-white">Contact Us</a>
            </div>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="font-bold">Legal</h3>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-[#D5E4D8]">
              <a href="#privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="#terms" className="transition-colors hover:text-white">
                Terms & Conditions
              </a>
              <a href="#cookies" className="transition-colors hover:text-white">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* TAGLINE */}
          <div className="border-t border-white/10 pt-6 sm:col-span-2 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-2">
            <p className="text-xl font-semibold leading-relaxed text-[#F5C542]">
              More clarity.
              <br />
              More confident steps.
              <Heart size={16} className="ml-1 inline-block fill-[#F5C542]" />
            </p>
            <p className="mt-4 text-sm leading-6 text-[#D5E4D8]">
              Start learning about financial choices at your own pace.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-xs text-[#AFC4B4]">
          © {new Date().getFullYear()} EkPaisa. Original EkPaisa content.
        </div>
      </motion.footer>
    </main>
  );
};

export default HomePage;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Clock3,
  CalendarDays,
  BookOpen,
  Wallet,
  CreditCard,
  House,
  PiggyBank,
  ShieldCheck,
  TrendingUp,
  ChevronRight,
  Sparkles,
  ChartNoAxesCombined,
  Coins,
  CircleDollarSign,
  MoveUpRight,
} from "lucide-react";
import { useMain } from "../../Hooks/useMain";

const categories = [
  "All Articles",
  "Personal Finance",
  "Loans",
  "Credit Cards",
  "Saving",
  "Home Finance",
];

const articles = [
  {
    id: 1,
    category: "Personal Finance",
    title: "A Monthly Budget That Fits Your Real Life",
    description:
      "Create a practical spending plan, understand your regular expenses and make room for savings without overcomplicating your routine.",
    date: "Oct 12, 2026",
    read: "6 min read",
    icon: Wallet,
    bg: "from-[#E3F2E1] to-[#F4F7E9]",
    iconColor: "text-[#287448]",
    number: "01",
  },
  {
    id: 2,
    category: "Loans",
    title: "What to Check Before Taking a Personal Loan",
    description:
      "Understand interest rates, processing fees, repayment periods and the real cost of borrowing before you apply.",
    date: "Oct 08, 2026",
    read: "7 min read",
    icon: ShieldCheck,
    bg: "from-[#FFF0BF] to-[#FFF9E9]",
    iconColor: "text-[#9A7410]",
    number: "02",
  },
  {
    id: 3,
    category: "Credit Cards",
    title: "Credit Cards Explained in Simple Language",
    description:
      "Learn how billing cycles, due dates and minimum payments work, and how to avoid common credit card mistakes.",
    date: "Oct 04, 2026",
    read: "5 min read",
    icon: CreditCard,
    bg: "from-[#E4EAF7] to-[#F2F5FB]",
    iconColor: "text-[#536C9C]",
    number: "03",
  },
  {
    id: 4,
    category: "Saving",
    title: "Your First Emergency Fund: Where to Begin",
    description:
      "Explore a manageable approach to saving for unexpected expenses while balancing your current responsibilities.",
    date: "Sep 28, 2026",
    read: "5 min read",
    icon: PiggyBank,
    bg: "from-[#F9E6D6] to-[#FFF5EA]",
    iconColor: "text-[#A56335]",
    number: "04",
  },
  {
    id: 5,
    category: "Home Finance",
    title: "Home Loan EMIs: Understand the Numbers",
    description:
      "See how loan amount, interest rate and tenure affect your monthly payment and total interest over time.",
    date: "Sep 22, 2026",
    read: "8 min read",
    icon: House,
    bg: "from-[#DFF0E8] to-[#F1F8F2]",
    iconColor: "text-[#287448]",
    number: "05",
  },
  {
    id: 6,
    category: "Personal Finance",
    title: "Give Every Rupee a Clearer Purpose",
    description:
      "Organise your needs, wants and future goals with a simple framework for making thoughtful spending decisions.",
    date: "Sep 16, 2026",
    read: "4 min read",
    icon: TrendingUp,
    bg: "from-[#F0E5F8] to-[#FAF4FF]",
    iconColor: "text-[#8057A2]",
    number: "06",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};


const BlogPage = () => {
  const { navigate } = useMain();
    useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "All Articles" || article.category === activeCategory;

    const query = searchTerm.toLowerCase().trim();
    const matchesSearch =
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="overflow-hidden bg-white font-sans text-[#14251A]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#F4F8F0]">
        <div className="absolute -right-20 -top-28 -z-10 h-[420px] w-[420px] rounded-full bg-[#DDEED8]/80 blur-3xl" />
        <div className="absolute -bottom-40 left-[28%] -z-10 h-80 w-80 rounded-full bg-[#FFE9A3]/50 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-14 lg:py-24">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D8E7D3] bg-white/90 px-4 py-2 text-sm font-semibold text-[#347447] shadow-sm">
              <Sparkles size={16} className="text-[#D6A91F]" />
              Welcome to The EkPaisa Journal
            </span>

            <h1 className="mt-7 max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[4.1rem]">
              Your money journey,
              <span className="block text-[#39804C]">made clearer.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#68796A] sm:text-lg">
              Fresh perspectives on personal finance, loans, saving and credit.
              Understand the details, explore your options and make your next
              money decision with more confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#articles"
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#D6A91F] to-[#FFD95A] px-6 py-4 font-bold text-[#26361F] shadow-[0_9px_24px_-10px_rgba(160,125,20,0.5)] transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Explore the Journal
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <button
                onClick={() => navigate("/loan")}
                className="inline-flex items-center gap-2 rounded-xl border border-[#D6E3D1] bg-white px-6 py-4 font-semibold text-[#31563B] transition hover:border-[#A8C8A4] hover:bg-[#EDF5E9]"
              >
                Explore Loans <MoveUpRight size={17} />
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-[#DFE9DA] pt-6 text-sm font-medium text-[#647566]">
              <span className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#39804C]" />
                Straightforward explanations
              </span>
              <span className="flex items-center gap-2">
                <BookOpen size={18} className="text-[#39804C]" />
                Practical money guides
              </span>
            </div>
          </motion.div>

          {/* HERO VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 15 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[510px]"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] border border-[#DDE8D6] rotate-3" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-5 shadow-[0_30px_80px_-35px_rgba(34,75,43,0.3)] sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7C8D7C]">
                    Your financial toolkit
                  </p>
                  <p className="mt-1 text-lg font-bold text-[#243D2B]">
                    Make money make sense.
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FDF0BD]">
                  <ChartNoAxesCombined size={23} className="text-[#8E7115]" />
                </div>
              </div>

              <div className="relative mt-6 flex min-h-[245px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#E2F0DC] via-[#F4F6E8] to-[#FBE8B0]">
                <div className="absolute left-6 top-8 h-20 w-20 rounded-full border border-white/70" />
                <div className="absolute bottom-5 right-4 h-28 w-28 rounded-full border border-white/70" />

                <div className="relative flex h-36 w-36 items-center justify-center rounded-[2.2rem] border border-white/80 bg-white/75 shadow-[0_18px_45px_-20px_rgba(40,85,44,0.3)]">
                  <CircleDollarSign
                    size={75}
                    strokeWidth={1.15}
                    className="text-[#36784A]"
                  />
                  <span className="absolute -right-5 -top-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFD95A] shadow-lg">
                    <TrendingUp size={26} className="text-[#31563B]" />
                  </span>
                  <span className="absolute -bottom-4 -left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-lg">
                    <Coins size={23} className="text-[#A17D18]" />
                  </span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-[#F2F7EF] p-4">
                  <div className="flex items-center gap-2 text-[#39804C]">
                    <Wallet size={17} />
                    <span className="text-xs font-semibold">Plan better</span>
                  </div>
                  <p className="mt-2 text-sm font-bold text-[#263D2B]">
                    Everyday money
                  </p>
                </div>
                <div className="rounded-2xl bg-[#FFF6D9] p-4">
                  <div className="flex items-center gap-2 text-[#947416]">
                    <ShieldCheck size={17} />
                    <span className="text-xs font-semibold">Know more</span>
                  </div>
                  <p className="mt-2 text-sm font-bold text-[#263D2B]">
                    Smarter choices
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-1 rounded-2xl border border-[#E1E8D9] bg-white px-4 py-3 shadow-lg sm:-right-5">
              <p className="text-xs text-[#718073]">The EkPaisa promise</p>
              <p className="mt-1 font-bold text-[#2E6840]">
                Clear, not complicated.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="border-b border-[#E9EEE5] bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-6 py-7 sm:px-10 lg:justify-between lg:px-14">
          <span className="mr-2 text-sm font-semibold text-[#718073]">
            Explore by topic
          </span>

          {[
            { label: "Personal Finance", icon: Wallet },
            { label: "Loans", icon: ShieldCheck },
            { label: "Credit Cards", icon: CreditCard },
            { label: "Saving", icon: PiggyBank },
            { label: "Home Finance", icon: House },
          ].map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => {
                setActiveCategory(label);
                document
                  .getElementById("articles")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#E3EAE0] bg-white px-4 py-3 text-sm font-semibold text-[#536756] transition duration-300 hover:-translate-y-0.5 hover:border-[#B6D2B1] hover:bg-[#F1F7EE]"
            >
              <Icon
                size={17}
                className="text-[#39804C] transition-transform group-hover:scale-110"
              />
              {label}
              <ChevronRight
                size={14}
                className="text-[#9AA99A] transition-transform group-hover:translate-x-0.5"
              />
            </button>
          ))}
        </div>
      </section>

      {/* ARTICLE SECTION */}
      <section id="articles" className="scroll-mt-8 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-14">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#39804C]">
                The latest from EkPaisa
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.7rem]">
                Learn something useful today.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-[#718073]">
                No unnecessary jargon. Just thoughtful explanations to help you
                understand the financial choices in front of you.
              </p>
            </div>

            <div className="relative w-full lg:max-w-sm">
              <Search
                size={19}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#829182]"
              />
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search articles or topics..."
                aria-label="Search articles"
                className="w-full rounded-2xl border border-[#DEE7DA] bg-[#FAFCF8] py-4 pl-12 pr-4 text-sm outline-none transition focus:border-[#82AE82] focus:ring-4 focus:ring-[#E7F2E3]"
              />
            </div>
          </motion.div>

          {/* CATEGORY FILTERS */}
          <div className="mt-9 flex gap-2.5 overflow-x-auto pb-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ${
                  activeCategory === category
                    ? "bg-[#285C3A] text-white shadow-md shadow-[#285C3A]/15"
                    : "border border-[#E2E9DE] bg-white text-[#647466] hover:border-[#B8D0B3] hover:bg-[#F4F8F1]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FEATURED ARTICLE */}
          {activeCategory === "All Articles" && searchTerm.trim() === "" && (
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group mt-7 grid overflow-hidden rounded-[2rem] border border-[#E0E9DB] bg-[#F6F9F2] shadow-sm transition duration-300 hover:shadow-xl lg:grid-cols-[1.03fr_0.97fr]"
            >
              <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#DCEFD7] via-[#F2F5E8] to-[#FFE8A4] p-8 sm:min-h-[370px] sm:p-12">
                <div className="absolute -left-12 -top-12 h-44 w-44 rounded-full border-[24px] border-white/30" />
                <div className="absolute -bottom-16 -right-12 h-56 w-56 rounded-full border-[28px] border-white/30" />

                <div className="relative flex h-48 w-48 items-center justify-center rounded-[2.5rem] border border-white/70 bg-white/65 shadow-[0_20px_50px_-25px_rgba(35,90,42,0.3)] transition duration-500 group-hover:rotate-3 group-hover:scale-105 sm:h-56 sm:w-56">
                  <Wallet
                    size={100}
                    strokeWidth={1.15}
                    className="text-[#337749]"
                  />
                  <span className="absolute -right-5 top-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFD95A] shadow-md">
                    <TrendingUp size={28} className="text-[#31563B]" />
                  </span>
                  <span className="absolute -bottom-3 -left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md">
                    <PiggyBank size={24} className="text-[#A17D18]" />
                  </span>
                </div>

                <span className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#347447] sm:left-7 sm:top-7">
                  Featured guide
                </span>
              </div>

              <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#E3F0DE] px-3.5 py-1.5 text-xs font-bold text-[#347447]">
                    PERSONAL FINANCE
                  </span>
                  <span className="text-xs font-medium text-[#839083]">
                    Editor's pick
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                  A Monthly Budget That Fits Your Real Life
                </h3>

                <p className="mt-4 leading-8 text-[#6E7D70]">
                  Your budget should work with your life, not against it. Start
                  by understanding essential expenses, finding flexible spending
                  and setting a realistic savings goal you can review each
                  month.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#7B897C]">
                  <span className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    Oct 12, 2026
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock3 size={16} />6 min read
                  </span>
                </div>

                <a
                  href="#all-articles"
                  className="group/link mt-7 inline-flex w-fit items-center gap-2.5 rounded-xl bg-[#285C3A] px-5 py-3.5 font-semibold text-white transition hover:bg-[#1F492E]"
                >
                  Explore the articles
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </a>
              </div>
            </motion.article>
          )}

          {/* ARTICLE CARDS */}
          <div
            id="all-articles"
            className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredArticles.map((article, index) => {
              const Icon = article.icon;

              return (
                <motion.article
                  key={article.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.12 }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.05 }}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#E4EAE1] bg-white transition duration-300 hover:-translate-y-1.5 hover:border-[#C5D9C0] hover:shadow-[0_22px_55px_-30px_rgba(36,82,43,0.3)]"
                >
                  <div
                    className={`relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br ${article.bg}`}
                  >
                    <span className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/75 px-3 py-1.5 text-xs font-semibold text-[#536756]">
                      {article.category}
                    </span>

                    <span className="absolute right-5 top-4 text-5xl font-bold text-[#284D31]/[0.07]">
                      {article.number}
                    </span>

                    <div className="flex h-24 w-24 items-center justify-center rounded-[1.8rem] border border-white/80 bg-white/75 shadow-[0_15px_35px_-20px_rgba(35,80,40,0.25)] transition duration-500 group-hover:rotate-[-5deg] group-hover:scale-110">
                      <Icon
                        size={43}
                        strokeWidth={1.4}
                        className={article.iconColor}
                      />
                    </div>

                    <div className="absolute -bottom-10 -right-5 h-24 w-24 rounded-full border-[14px] border-white/35" />
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-center gap-2 text-xs text-[#819082]">
                      <CalendarDays size={14} />
                      {article.date}
                      <span className="text-[#C4CEC1]">•</span>
                      <Clock3 size={14} />
                      {article.read}
                    </div>

                    <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-[#203526] transition-colors group-hover:text-[#39804C]">
                      {article.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-7 text-[#748175]">
                      {article.description}
                    </p>

                    <button
                      onClick={() => navigate(`/blog/${article.id}`)}
                      className="mt-6 flex w-fit items-center gap-2 border-b border-[#C9DDC6] pb-1.5 text-sm font-bold text-[#347447] transition-all hover:gap-3 hover:border-[#347447]"
                    >
                      Read article
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {filteredArticles.length === 0 && (
            <div className="mt-8 rounded-[1.5rem] border border-dashed border-[#D6E3D2] bg-[#F8FBF6] px-6 py-16 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F3E4]">
                <Search size={28} className="text-[#39804C]" />
              </div>
              <h3 className="mt-5 text-xl font-bold">No articles found</h3>
              <p className="mt-2 text-[#718073]">
                Try another keyword or explore a different category.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All Articles");
                }}
                className="mt-5 rounded-xl bg-[#285C3A] px-5 py-3 font-semibold text-white transition hover:bg-[#1F492E]"
              >
                View all articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-6 pb-20 sm:px-10 sm:pb-24 lg:px-14">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#173D28] px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[35px] border-white/[0.06]" />
          <div className="absolute -bottom-32 right-[25%] h-72 w-72 rounded-full bg-[#438453]/25 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#FFD95A]">
                <Sparkles size={17} />A clearer approach to finance
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Better informed.
                <span className="block text-[#D9EBD6]">
                  Ready for your next step.
                </span>
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-[#D0DFD1]">
                Keep learning about your options. Explore our loan information
                and take time to understand the details before making a
                financial decision.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <button
                onClick={() => navigate("/loan")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D6A91F] to-[#FFD95A] px-6 py-4 font-bold text-[#26361F] shadow-lg transition hover:-translate-y-1"
              >
                Explore Loans <ArrowRight size={18} />
              </button>
              <a
                href="#articles"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Read More <BookOpen size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="border-t border-[#E8EEE6] bg-[#F8FAF6] px-6 py-6 sm:px-10 lg:px-14">
        <p className="mx-auto max-w-7xl text-xs leading-6 text-[#7A887B]">
          <strong>Financial education note:</strong> EkPaisa articles provide
          general educational information, not personalised financial, tax or
          legal advice. Loan eligibility, interest rates, charges and terms vary
          by lender and applicant. Review official lender documents and compare
          your options before making a financial decision.
        </p>
      </section>
    </main>
  );
};

export default BlogPage;


import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  UserRound,
  House,
  Building2,
} from "lucide-react";
import EkPaisa from "/src/assets/EkPaisa-dZfDSOqM.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loansOpen, setLoansOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  // Hide navbar when homepage footer enters the screen
  useEffect(() => {
    const checkFooter = () => {
      const footer = document.querySelector("#home-footer");

      if (!footer) {
        setHideNavbar(false);
        return;
      }

      const rect = footer.getBoundingClientRect();

      const footerVisible =
        rect.top < window.innerHeight && rect.bottom > 0;

      setHideNavbar(footerVisible);
    };

    checkFooter();
    window.addEventListener("scroll", checkFooter);

    return () => {
      window.removeEventListener("scroll", checkFooter);
    };
  }, []);

  // Mobile navigation style
  const mobileLinkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "border-[#FFD95A]/50 bg-[#087A3D]/20 text-[#FFD95A]"
        : "border-white/5 text-gray-200 hover:border-[#087A3D]/40 hover:bg-white/5"
    }`;

  const closeMenu = () => {
    setIsOpen(false);
    setLoansOpen(false);
  };

  // Loan dropdown options
  const loanOptions = [
    {
      title: "Personal Loan",
      description: "For your personal needs",
      path: "/personal-loan",
      icon: UserRound,
    },
    {
      title: "Home Loan",
      description: "Make your dream home a reality",
      path: "/home-loan",
      icon: House,
    },
    {
      title: "Loan Against Property",
      description: "Unlock your property's value",
      path: "/loan-against-property",
      icon: Building2,
    },
  ];

  // Common desktop navigation link styling
  const desktopLinkClass = ({ isActive }) =>
    `inline-flex items-center justify-center rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-300 ${
      isActive
        ? "bg-[#103126] text-[#FFD95A]"
        : "text-[#102016] hover:bg-white/25"
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b border-[#087A3D]/30 bg-[#103126]/95 shadow-[0_4px_24px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-transform duration-300 ${
        hideNavbar ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo - Left Side */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src={EkPaisa}
            alt="EkPaisa Logo"
            className="h-14 w-auto object-contain sm:h-16"
          />
        </NavLink>

        {/* Desktop Navigation - Exact Center */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-[#FFD95A] bg-gradient-to-r from-[#D6A91F] to-[#FFD95A] p-1 md:flex">

          {/* Home */}
          <NavLink
            to="/"
            end
            className={desktopLinkClass}
          >
            Home
          </NavLink>

          {/* Loans Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLoansOpen(true)}
            onMouseLeave={() => setLoansOpen(false)}
          >
            <button
              type="button"
              onClick={() => setLoansOpen((prev) => !prev)}
              aria-expanded={loansOpen}
              className={`inline-flex items-center justify-center gap-1 rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-300 ${
                loansOpen
                  ? "bg-[#103126] text-[#FFD95A]"
                  : "text-[#102016] hover:bg-white/25"
              }`}
            >
              Loans
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${
                  loansOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Desktop Loan Dropdown */}
            {loansOpen && (
              <div className="absolute left-0 top-full z-50 w-80 pt-3">
                <div className="overflow-hidden rounded-2xl border border-[#087A3D]/30 bg-[#103126] p-2 shadow-[0_15px_45px_rgba(0,0,0,0.35)]">

                  <div className="px-3 py-2">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#FFD95A]">
                      Explore Loans
                    </p>
                  </div>

                  {loanOptions.map((loan) => {
                    const Icon = loan.icon;

                    return (
                      <NavLink
                        key={loan.path}
                        to={loan.path}
                        onClick={() => setLoansOpen(false)}
                        className={({ isActive }) =>
                          `group flex items-center gap-3 rounded-xl p-3 transition-all duration-200 ${
                            isActive
                              ? "bg-[#087A3D]/20"
                              : "hover:bg-white/5"
                          }`
                        }
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#087A3D]/30 bg-[#087A3D]/15 text-[#FFD95A] transition group-hover:bg-[#087A3D]/30">
                          <Icon size={21} />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-white transition group-hover:text-[#FFD95A]">
                            {loan.title}
                          </span>

                          <span className="mt-1 block text-xs text-gray-400">
                            {loan.description}
                          </span>
                        </span>

                        <ArrowUpRight
                          size={16}
                          className="text-gray-500 transition group-hover:text-[#FFD95A]"
                        />
                      </NavLink>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Blogs */}
          <NavLink
            to="/blogs"
            className={desktopLinkClass}
          >
            Blogs
          </NavLink>
        </div>

        {/* Mobile Menu Button - Right Side */}
        <button
          type="button"
          onClick={() => {
            setIsOpen((prev) => !prev);
            setLoansOpen(false);
          }}
          className="rounded-xl border border-[#087A3D]/40 bg-[#087A3D]/10 p-2.5 text-[#FFD95A] transition hover:bg-[#087A3D]/20 md:hidden"
          aria-label={
            isOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-[#087A3D]/30 bg-[#103126] px-4 py-5 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">

            {/* Mobile Home */}
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={mobileLinkClass}
            >
              Home
            </NavLink>

            {/* Mobile Loans Dropdown */}
            <button
              type="button"
              onClick={() => setLoansOpen((prev) => !prev)}
              aria-expanded={loansOpen}
              className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                loansOpen
                  ? "border-[#FFD95A]/50 bg-[#087A3D]/15 text-[#FFD95A]"
                  : "border-white/5 text-gray-200 hover:bg-white/5"
              }`}
            >
              <span>Loans</span>

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  loansOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Mobile Loan Options */}
            {loansOpen && (
              <div className="ml-3 flex flex-col gap-1 border-l border-[#087A3D]/40 pl-3">
                {loanOptions.map((loan) => {
                  const Icon = loan.icon;

                  return (
                    <NavLink
                      key={loan.path}
                      to={loan.path}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
                          isActive
                            ? "bg-[#087A3D]/20 text-[#FFD95A]"
                            : "text-gray-300 hover:bg-white/5 hover:text-[#FFD95A]"
                        }`
                      }
                    >
                      <Icon
                        size={18}
                        className="shrink-0 text-[#FFD95A]"
                      />

                      <span>{loan.title}</span>

                      <ArrowUpRight
                        size={15}
                        className="ml-auto opacity-60"
                      />
                    </NavLink>
                  );
                })}
              </div>
            )}

            {/* Mobile Blogs */}
            <NavLink
              to="/blogs"
              onClick={closeMenu}
              className={mobileLinkClass}
            >
              Blogs
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

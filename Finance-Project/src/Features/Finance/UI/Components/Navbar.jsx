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
    window.addEventListener("resize", checkFooter);

    return () => {
      window.removeEventListener("scroll", checkFooter);
      window.removeEventListener("resize", checkFooter);
    };
  }, []);

  // Close mobile menu and dropdown
  const closeMenu = () => {
    setIsOpen(false);
    setLoansOpen(false);
  };

  // Mobile navigation link styling
  const mobileLinkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "border-[#FFD95A]/50 bg-[#087A3D]/25 text-[#FFD95A]"
        : "border-white/10 text-white hover:border-[#FFD95A]/30 hover:bg-white/5"
    }`;

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

  // Desktop navigation link styling
  const desktopLinkClass = ({ isActive }) =>
    `inline-flex items-center justify-center rounded-full px-3 py-2 text-xs font-semibold transition-all duration-300 sm:px-4 sm:text-[13px] ${
      isActive
        ? "bg-[#103126] text-[#FFD95A]"
        : "text-[#102016] hover:bg-white/40"
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-t border-x border-[#D6A91F]/70 bg-gradient-to-r from-[#ccf1d1] via-[#ccf1d1] to-[#ccf1d1]  shadow-[0_4px_22px_rgba(3,74,43,0.18)] backdrop-blur-xl transition-transform duration-300 ${
        hideNavbar ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:h-20 sm:px-5 lg:px-6">

        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="ml-[-4px] flex min-w-0 shrink-0 items-center sm:ml-[-10px] lg:ml-[-35px] xl:ml-[-60px]"
        >
          <img
            src={EkPaisa}
            alt="EkPaisa Logo"
            className="h-11 w-auto object-contain sm:h-14 lg:h-16"
          />
        </NavLink>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-[#D6A91F] bg-gradient-to-r from-[#D6A91F] to-[#FFD95A] p-1 md:flex">

          {/* Home */}
          <NavLink to="/" end className={desktopLinkClass}>
            Home
          </NavLink>

          {/* Loans Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLoansOpen((prev) => !prev)}
              aria-expanded={loansOpen}
              aria-haspopup="true"
              className={`inline-flex items-center justify-center gap-1 rounded-full px-3 py-2 text-xs font-semibold transition-all duration-300 sm:px-4 sm:text-[13px] ${
                loansOpen
                  ? "bg-[#103126] text-[#FFD95A]"
                  : "text-[#102016] hover:bg-white/40"
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
              <div className="absolute left-0 top-full z-50 w-[min(320px,calc(100vw-24px))] pt-3">
                <div className="overflow-hidden rounded-2xl border border-[#FFD95A]/40 bg-gradient-to-br from-[#064526] via-[#034A2B] to-[#022F1C] p-2 shadow-[0_15px_45px_rgba(0,0,0,0.30)]">

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
                              ? "bg-white/10"
                              : "hover:bg-white/10"
                          }`
                        }
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#FFD95A]/25 bg-[#087A3D]/30 text-[#FFD95A] transition group-hover:bg-[#087A3D]/50 sm:h-11 sm:w-11">
                          <Icon size={21} />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-white transition group-hover:text-[#FFD95A]">
                            {loan.title}
                          </span>

                          <span className="mt-1 block text-xs text-gray-300">
                            {loan.description}
                          </span>
                        </span>

                        <ArrowUpRight
                          size={16}
                          className="shrink-0 text-gray-400 transition group-hover:text-[#FFD95A]"
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
            onClick={() => setLoansOpen(false)}
            className={desktopLinkClass}
          >
            Blogs
          </NavLink>
        </div>

        {/* Mobile Menu Button: Dark Green + Yellow Border */}
        <button
          type="button"
          onClick={() => {
            setIsOpen((prev) => !prev);
            setLoansOpen(false);
          }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-[#FFD95A] bg-gradient-to-br from-[#034A2B] to-[#022F1C] text-[#FFD95A] shadow-[0_3px_12px_rgba(3,74,43,0.22)] transition-all duration-300 hover:border-[#FFE68A] hover:from-[#087A3D] hover:to-[#034A2B] active:scale-95 md:hidden sm:h-11 sm:w-11"
          aria-label={
            isOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={23} strokeWidth={2.5} />
          ) : (
            <Menu size={23} strokeWidth={2.5} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t-2 border-[#FFD95A] bg-gradient-to-b from-[#034A2B] via-[#023C24] to-[#022F1C] px-3 py-4 shadow-[0_12px_28px_rgba(0,0,0,0.22)] sm:px-5 sm:py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">

            {/* Mobile Home */}
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={mobileLinkClass}
            >
              <House size={18} className="shrink-0 text-[#FFD95A]" />
              Home
            </NavLink>

            {/* Mobile Loans Dropdown */}
            <button
              type="button"
              onClick={() => setLoansOpen((prev) => !prev)}
              aria-expanded={loansOpen}
              aria-haspopup="true"
              className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                loansOpen
                  ? "border-[#FFD95A]/60 bg-[#087A3D]/30 text-[#FFD95A]"
                  : "border-white/10 text-white hover:border-[#FFD95A]/30 hover:bg-white/5"
              }`}
            >
              <span className="flex items-center gap-3">
                <Building2 size={18} className="text-[#FFD95A]" />
                Loans
              </span>

              <ChevronDown
                size={18}
                className={`text-[#FFD95A] transition-transform duration-300 ${
                  loansOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Mobile Loan Options */}
            {loansOpen && (
              <div className="ml-3 flex flex-col gap-1 border-l-2 border-[#FFD95A]/60 py-1 pl-3">
                {loanOptions.map((loan) => {
                  const Icon = loan.icon;

                  return (
                    <NavLink
                      key={loan.path}
                      to={loan.path}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-xl border px-3 py-3 text-sm transition-all duration-200 ${
                          isActive
                            ? "border-[#FFD95A]/30 bg-[#087A3D]/30 text-[#FFD95A]"
                            : "border-transparent text-gray-200 hover:border-white/10 hover:bg-white/5 hover:text-[#FFD95A]"
                        }`
                      }
                    >
                      <Icon
                        size={18}
                        className="shrink-0 text-[#FFD95A]"
                      />

                      <span className="min-w-0 flex-1">
                        {loan.title}
                      </span>

                      <ArrowUpRight
                        size={15}
                        className="shrink-0 text-[#FFD95A]/70"
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
              <ArrowUpRight size={18} className="shrink-0 text-[#FFD95A]" />
              Blogs
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
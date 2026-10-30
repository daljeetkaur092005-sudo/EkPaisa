
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
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

  const location = useLocation();

  // Check whether the current route belongs to Loans
  const isLoanActive = [
    "/personal-loan",
    "/home-loan",
    "/loan-against-property",
  ].includes(location.pathname);

  // Keep Loans dropdown active on all loan pages
  useEffect(() => {
    if (isLoanActive) {
      setLoansOpen(false);
    }
  }, [location.pathname, isLoanActive]);

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
        ? "border-[#D6A91F]/50 bg-[#D6A91F]/15 text-[#FFD95A]"
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
        ? "bg-[#103126] text-[#FFD95A] shadow-sm"
        : "text-[#173D2B] hover:bg-white/60 hover:text-[#087A3D]"
    }`;

  // Loans button styling
  const loansButtonClass = `inline-flex items-center justify-center gap-1 rounded-full px-3 py-2 text-xs font-semibold transition-all duration-300 sm:px-4 sm:text-[13px] ${
    isLoanActive || loansOpen
      ? "bg-[#103126] text-[#FFD95A] shadow-sm"
      : "text-[#173D2B] hover:bg-white/60 hover:text-[#087A3D]"
  }`;

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-t border-r-0 border-l-0 border-5 border-[#face3d] bg-gradient-to-r from-[#f5f2e2] via-[#f5f3e8] to-[#f5f2e2] shadow-[0_4px_20px_rgba(40,65,40,0.10)] backdrop-blur-xl transition-transform duration-300 ${
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
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-[#D6A91F]/50 bg-gradient-to-r from-[#face3d] via-[#e2c260] to-[#f3d267] p-1 shadow-[0_3px_10px_rgba(130,100,20,0.10)] md:flex">

          {/* Home */}
          <NavLink
            to="/"
            end
            onClick={() => setLoansOpen(false)}
            className={desktopLinkClass}
          >
            Home
          </NavLink>

          {/* Loans Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLoansOpen((prev) => !prev)}
              aria-expanded={loansOpen}
              aria-haspopup="true"
              className={loansButtonClass}
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
                <div className="overflow-hidden rounded-2xl border border-[#D6A91F]/40 bg-gradient-to-br from-[#173D2B] via-[#103D2A] to-[#0B3020] p-2 shadow-[0_15px_45px_rgba(0,0,0,0.25)]">

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
                              ? "bg-white/15"
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

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => {
            setIsOpen((prev) => !prev);
            setLoansOpen(false);
          }}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D6A91F]/60 bg-[#173D2B] text-[#FFD95A] shadow-sm transition-all duration-300 hover:bg-[#24543A] active:scale-95 md:hidden sm:h-11 sm:w-11"
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
        <div className="border-t border-[#D6A91F]/40 bg-gradient-to-b from-[#173D2B] via-[#123724] to-[#0B3020] px-3 py-4 shadow-[0_12px_28px_rgba(0,0,0,0.18)] sm:px-5 sm:py-5 md:hidden">
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
                isLoanActive || loansOpen
                  ? "border-[#FFD95A]/60 bg-[#D6A91F]/15 text-[#FFD95A]"
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
                            ? "border-[#FFD95A]/40 bg-[#D6A91F]/15 text-[#FFD95A]"
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

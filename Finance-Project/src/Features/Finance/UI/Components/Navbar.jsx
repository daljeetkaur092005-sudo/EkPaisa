import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import EkPaisa from "/src/assets/EkPaisa-dZfDSOqM.webp";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-300 ${
      isActive ? "text-[#F5C542]" : "text-gray-300 hover:text-white"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `rounded-xl border px-4 py-3 text-sm transition ${
      isActive
        ? "border-[#087A3D]/50 bg-[#087A3D]/20 font-semibold text-[#F5C542]"
        : "border-transparent text-gray-300 hover:bg-white/5 hover:text-white"
    }`;

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#087A3D]/40 bg-[#071B10]/95 shadow-[0_4px_24px_rgba(0,0,0,0.3)] backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
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

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/loan" className={linkClass}>
            Loans
          </NavLink>

          <NavLink to="/credit-cards" className={linkClass}>
            Credit Cards
          </NavLink>

          <NavLink to="/blogs" className={linkClass}>
            Blogs
          </NavLink>
        </div>

        {/* Get Started */}
        <button
          onClick={() => navigate("/apply")}
          className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#D6A91F] to-[#FFD95A] px-5 py-3 text-sm font-bold text-[#102016] shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_5px_20px_rgba(245,197,66,0.25)] md:flex"
        >
          Get Started
          <ArrowUpRight size={17} />
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-xl border border-[#087A3D]/40 bg-[#087A3D]/10 p-2.5 text-[#F5C542] transition hover:bg-[#087A3D]/20 md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-[#087A3D]/30 bg-[#071B10] px-4 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            <NavLink to="/" end onClick={closeMenu} className={mobileLinkClass}>
              Home
            </NavLink>

            <NavLink to="/loan" onClick={closeMenu} className={mobileLinkClass}>
              Loans
            </NavLink>

            <NavLink
              to="/credit-cards"
              onClick={closeMenu}
              className={mobileLinkClass}
            >
              Credit Cards
            </NavLink>

            <NavLink
              to="/blogs"
              onClick={closeMenu}
              className={mobileLinkClass}
            >
              Blogs
            </NavLink>

            <button
              onClick={() => {
                closeMenu();
                navigate("/apply");
              }}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D6A91F] to-[#FFD95A] py-3 font-bold text-[#102016] transition hover:brightness-110"
            >
              Get Started
              <ArrowUpRight size={17} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

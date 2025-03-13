"use client";

import Image from "next/image";
import Link from "next/link";
import headerLogo from "@/../public/header-logo.png";
import bookingsIcon from "@/../public/bookings-icon.svg";
import { createPortal } from "react-dom";
import { useState } from "react";

const navLinks = [
  { label: "العطلة", href: "#" },
  { label: "الأنشطة", href: "#" },
  { label: "جولة افتراضية", href: "#" },
];

const linkClassName = "font-semibold group relative";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="mt-[30px]">
      <div className="container flex h-[64px] items-center justify-between gap-5">
        <NavLinks className="hidden shrink-0 items-center gap-7 lg:flex" />

        <Link href={"/"} className="shrink">
          <Image src={headerLogo} alt="logo" width={235} height={64} />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <BookingsLink />
          <BookNowButton />
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="bg-brown px-6 py-2 font-semibold text-white transition-all duration-300 hover:scale-105 hover:brightness-95 md:px-12 lg:hidden"
        >
          القائمة
        </button>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;

interface NavLinksProps {
  className?: string;
  children?: React.ReactNode;
}

const NavLinks = ({ className, children }: NavLinksProps) => {
  return (
    <nav className={`${className}`}>
      {navLinks.map(({ label, href }) => (
        <Link className={linkClassName} href={href} key={label}>
          {label}
          <div className="bg-primary absolute -bottom-2 left-0 h-1 w-0 rounded transition-all duration-200 group-hover:w-1/2" />
        </Link>
      ))}
      {children}
    </nav>
  );
};

const BookingsLink = () => {
  return (
    <Link href={"#"} className={`flex items-center gap-2 ${linkClassName}`}>
      <Image src={bookingsIcon} alt="icon" width={27} height={20} />
      الحجوزات
      <div className="bg-primary absolute -bottom-2 left-0 h-1 w-0 rounded transition-all duration-200 group-hover:w-1/2" />
    </Link>
  );
};

const BookNowButton = ({ className }: { className?: string }) => {
  return (
    <button
      className={`bg-brown px-12 py-2 font-semibold text-white transition-all duration-300 hover:scale-105 hover:brightness-95 ${className}`}
    >
      احجز الان
    </button>
  );
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  const MobileMenuComp = (
    <div
      onClick={onClose}
      className="animate-slide-in-from-top fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm lg:hidden"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-brown h-full w-full px-3 py-10 sm:w-[350px] sm:px-6"
      >
        <div className="flex items-center justify-between">
          <button
            onClick={onClose}
            className="bg-primary hover:bg-primary-light px-3 py-0.5 text-lg text-white transition-all duration-300"
          >
            X
          </button>
          <h2 className="text-2xl font-semibold text-white">القائمة</h2>
        </div>
        <hr className="my-4 border-white" />
        <NavLinks className="flex flex-col items-center gap-5 py-5">
          <BookingsLink />
          <BookNowButton className="bg-primary" />
        </NavLinks>
      </div>
    </div>
  );

  return createPortal(MobileMenuComp, document.body);
};

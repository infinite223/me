"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { LuUser, LuFolder, LuPackage, LuMail } from "react-icons/lu";
import { ChevronRight, Menu, X } from "lucide-react";

const iconSize = 23;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Zamykaj menu przy kliknięciu poza
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Desktop */}
      <aside className="w-64 bg-white p-6 hidden md:flex flex-col rounded-xl sticky top-5 self-start h-[calc(100vh-40px)]">
        <div className="mb-12">
          <h2 className="text-xl font-semibold">Dawid Szmigiel</h2>
          <p className="text-sm text-gray-500">Creative Developer</p>
        </div>
        <div className="flex flex-col justify-between h-full">
          <NavLinks />
          <SocialLinks />
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden bg-white flex justify-between rounded-md items-center px-4 py-3 h-min w-full shadow z-20 sticky top-5">
        <div>
          <h2 className="text-lg font-semibold">Dawid Szmigiel</h2>
          <p className="text-xs text-gray-500">Creative Developer</p>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="text-gray-700"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile sliding menu */}
      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed bottom-0 left-0 w-full bg-white transition-all duration-300 z-10 shadow-xl ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-6">
          <NavLinks onClick={() => setIsOpen(false)} />
          <SocialLinks />
        </div>
      </div>
    </>
  );
};

const NavLinks = ({ onClick }: { onClick?: () => void }) => (
  <nav className="flex flex-col text-gray-600">
    <SidebarLink
      href="/"
      icon={<LuUser size={iconSize} />}
      text="O mnie"
      onClick={onClick}
    />
    <SidebarLink
      href="/projects"
      icon={<LuFolder size={iconSize} />}
      text="Projekty"
      onClick={onClick}
    />
    <SidebarLink
      href="/stack"
      icon={<LuPackage size={iconSize} />}
      text="Stack"
      onClick={onClick}
    />
    <SidebarLink
      href="/contact"
      icon={<LuMail size={iconSize} />}
      text="Kontakt"
      onClick={onClick}
    />
  </nav>
);

const SidebarLink = ({
  href,
  icon,
  text,
  onClick,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="group flex items-center justify-between hover:text-black hover:bg-zinc-100/60 p-3 rounded-md transition-colors"
  >
    <span className="flex items-center gap-4">
      {icon}
      {text}
    </span>
    <ChevronRight className="w-4 h-4 opacity-0 translate-x-[-4px] transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 text-gray-500" />
  </Link>
);

const SocialLinks = () => (
  <ul className="flex flex-col gap-1 pt-6 text-gray-700 text-sm">
    <li>
      <a
        href="https://www.linkedin.com/in/dawid-szmigiel-7a7609167/"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between hover:text-black hover:bg-zinc-100/60 p-3 rounded-md transition-colors"
      >
        <span className="flex items-center gap-4">
          <FaLinkedin className="w-6 h-6" />
          LinkedIn
        </span>
        <ChevronRight className="w-4 h-4 opacity-0 translate-x-[-4px] transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 text-gray-500" />
      </a>
    </li>
    <li>
      <a
        href="https://github.com/infinite223"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between hover:text-black hover:bg-zinc-100/60 p-3 rounded-md transition-colors"
      >
        <span className="flex items-center gap-4">
          <FaGithub className="w-6 h-6" />
          GitHub
        </span>
        <ChevronRight className="w-4 h-4 opacity-0 translate-x-[-4px] transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 text-gray-500" />
      </a>
    </li>
    <li>
      <a
        href="mailto:szmigielitsolutions@gmail.com"
        className="group flex items-center justify-between hover:text-black hover:bg-zinc-100/60 p-3 rounded-md transition-colors"
      >
        <span className="flex items-center gap-4">
          <FaEnvelope className="w-6 h-6" />
          Email
        </span>
        <ChevronRight className="w-4 h-4 opacity-0 translate-x-[-4px] transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 text-gray-500" />
      </a>
    </li>
  </ul>
);

export default Sidebar;

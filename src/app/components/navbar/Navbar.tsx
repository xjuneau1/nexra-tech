"use client"
import Navlinks from "./Navlinks";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Icons for dropdown

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["Home", "About", "Services", "Contact", "FAQ"];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetHref = (link: string) => {
    if (link === "Home") {
      return "/";
    } else {
      return link.toLowerCase()
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "p-6 bg-gray-900 shadow-md" : "p-6 bg-gray-800"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-lg font-bold">Nexra</h1>

        {/* Desktop Links (Always Visible) */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link, index) => (
            <li key={index} className="text-white">
              <a
                href={handleGetHref(link)}
                className="hover:text-gray-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>
      <Navlinks isMenuOpen={isMenuOpen} links={links} handleGetHref={handleGetHref} />
    </nav>
  );
}

import React from "react";
import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-black py-4 text-blue-50">
      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
          {/* Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start">
            <img src="/img/Nxlvl_logo.png" alt="logo" className="mb-2 w-10" />
            <p className="max-w-xs text-center font-circular-web text-[10px] opacity-40 md:text-left">
              Redefining the gaming experience through the Metagame Layer.
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex flex-wrap justify-center gap-6 text-center md:justify-end md:text-left lg:gap-12">
            <div className="flex flex-col gap-4">
              <p className="font-general text-xs uppercase tracking-widest opacity-30">Explore</p>
              <a href="#nexus" className="font-general text-sm transition-opacity hover:opacity-100 opacity-60">Nexus</a>
              <a href="#vault" className="font-general text-sm transition-opacity hover:opacity-100 opacity-60">Vault</a>
              <a href="#prologue" className="font-general text-sm transition-opacity hover:opacity-100 opacity-60">Prologue</a>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-general text-xs uppercase tracking-widest opacity-30">Resources</p>
              <a href="#" className="font-general text-sm transition-opacity hover:opacity-100 opacity-60">Whitepaper</a>
              <a href="#" className="font-general text-sm transition-opacity hover:opacity-100 opacity-60">Media Kit</a>
              <a href="#" className="font-general text-sm transition-opacity hover:opacity-100 opacity-60">Support</a>
            </div>
            <div className="flex flex-col gap-4 md:items-start items-center">
              <p className="font-general text-xs uppercase tracking-widest opacity-30">Socials</p>
              <div className="flex gap-4 text-xl">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-50 transition-all duration-300 hover:scale-125 hover:text-white"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Branded Large Text (Absolute behind to save height) */}
        <div className="absolute bottom-0 left-1/2 select-none -translate-x-1/2 opacity-5">
          <h1 className="special-font font-zentry text-center text-[25vw] font-black uppercase leading-none text-white">
            NxLvl
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 mt-6 flex flex-col items-center justify-between border-t border-white/10 pt-4 md:flex-row">
          <p className="font-circular-web text-[10px] opacity-40">
            © BNJ 2025. All rights reserved.
          </p>
          <div className="mt-2 flex gap-4 md:mt-0">
            <a href="#privacy-policy" className="font-circular-web text-[10px] transition-opacity hover:opacity-100 opacity-40">Privacy Policy</a>
            <a href="#terms" className="font-circular-web text-[10px] transition-opacity hover:opacity-100 opacity-50">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

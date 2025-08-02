"use client";
import React, { useState } from "react";
import TipanLogo from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = (event) => {
    event.preventDefault();

    setIsOpen(false);

    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-full h-[160px] md:h-[160px] bg-[var(--background-color-blue)] text-white p-4 shadow-xl fixed items-center z-50">
      <div className="mx-auto w-full flex items-center justify-between  md:max-w-[85%] lg:max-w-[80%] xl:max-w-[55%]">
        {/* Lado esquerdo: Logo */}
        <a href="#inicio" onClick={handleLinkClick} className="flex-shrink-0 ">
          <TipanLogo alt="Tipan Logo" width={110} height={110} />
        </a>

        <div className="hidden md:flex flex-col items-center flex-grow-0 ">
          <nav className="flex gap-8 mb-2">
            <ul className="flex items-center text-base font-semibold">
              <li className="nav-item-divider">
                <a href="#empresa" onClick={handleLinkClick}>
                  EMPRESA
                </a>
              </li>
              <li className="nav-item-divider">
                <a href="#equipe" onClick={handleLinkClick}>
                  EQUIPE
                </a>
              </li>
              <li className="nav-item-divider">
                <a href="#produtos" onClick={handleLinkClick}>
                  PRODUTOS
                </a>
              </li>
              <li className="nav-item-divider">
                <a href="#principios" onClick={handleLinkClick}>
                  PRINCÍPIOS
                </a>
              </li>
              <li className="nav-item-divider">
                <a href="#contato" onClick={handleLinkClick}>
                  CONTATO
                </a>
              </li>
            </ul>
          </nav>
          <span className="text-sm md:text-lg font-bold text-nowrap">
            Corretora de Seguros e Consultoria
          </span>
        </div>

        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:text-[var(--background-color-blue)] hover:border-[var(--background-color-blue)]"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`fixed top-[160px] left-0 w-full bg-[var(--background-color-blue)] md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col items-center py-4 space-y-4">
            <a
              href="#empresa"
              className="block text-white font-semibold hover:text-[var(--background-color-blue)]"
              onClick={() => setIsOpen(false)}
            >
              EMPRESA
            </a>
            <a
              href="#equipe"
              className="block text-white font-semibold hover:text-[var(--background-color-blue)]"
              onClick={() => setIsOpen(false)}
            >
              EQUIPE
            </a>
            <a
              href="#produtos"
              className="block text-white font-semibold hover:text-[var(--background-color-blue)]"
              onClick={() => setIsOpen(false)}
            >
              PRODUTOS
            </a>
            <a
              href="#principios"
              className="block text-white font-semibold hover:text-[var(--background-color-blue)]"
              onClick={() => setIsOpen(false)}
            >
              PRINCÍPIOS
            </a>
            <a
              href="#contato"
              className="block text-white font-semibold hover:text-[var(--background-color-blue)]"
              onClick={() => setIsOpen(false)}
            >
              CONTATO
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

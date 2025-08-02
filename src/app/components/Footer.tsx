import React from "react";
import TipanLogo from "./Logo.tsx";

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--background-color-white)] shadow-xl/20 text-[var(--text-color-title-blue)] py-8">
      {/* O contêiner ocupa toda a largura em telas pequenas e se limita em telas maiores */}
      {/* Em telas pequenas, os itens se alinham ao centro e se empilham verticalmente */}
      <div className="container mx-auto w-full max-w-[1280px] flex flex-col md:flex-row items-center md:justify-between px-4 font-bold gap-8">
        
        {/* Bloco de Endereço */}
        <div className="endereco flex flex-col text-sm text-center md:text-left">
          <span>Rua Cláudio Soares, 72 - 8º Andar</span>
          <span>Pinheiros - São Paulo / SP</span>
          <span>CEP 05422-030</span>
        </div>

        {/* Bloco de Contato e Logo */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="contato flex flex-col text-sm text-center md:text-right">
            <span className="mb-1">
              Tipan Corretora de Seguros e Consultoria
            </span>
            <div className="numeros flex flex-col">
              <a
                href="https://wa.me/551199999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>(11) 99999-9999</span>
              </a>
              <span>(11) 59999-9999</span>
            </div>
          </div>
          <div className="logo">
            <TipanLogo alt="Tipan Logo" width={109} height={104} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
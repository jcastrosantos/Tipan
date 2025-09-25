import Logo from "./Logo";
import useWhatsappLink from "../hooks/useWhatsappLink";

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--background-color-white)] shadow-xl/20 text-[var(--text-color-title-blue)] py-8">
      <div className="container mx-auto w-full max-w-[1280px] flex flex-col md:flex-row items-center md:justify-between px-4 font-bold gap-8">
        {/* Bloco de Endereço */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=Rua+Claudio+Soares,+72,+Pinheiros,+Sao+Paulo,+SP"
          target="_blank"
          rel="noopener noreferrer"
        >
          <address
            className="endereco not-italic flex flex-col text-sm text-center md:text-left "
          >
            <span>Rua Cláudio Soares, 72 - 8º Andar</span>
            <span>Pinheiros - São Paulo / SP</span>
            <span>CEP 05422-030</span>
          </address>
        </a>
        {/* Bloco de Contato e Logo */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="contato flex flex-col text-sm text-center mb-1.5 md:text-right">
            <span className="mb-1">
              Tipan Corretora de Seguros e Consultoria
            </span>
            <div className="numeros flex flex-col">
              <a
                href={useWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>(11) 98867-0660</span>
              </a>
              <span>(11) 5904-9200</span>
            </div>
          </div>
          <div className="logo hidden md:block">
            <Logo width={109} height={104} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

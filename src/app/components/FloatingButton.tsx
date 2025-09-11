import { FaWhatsapp } from "react-icons/fa";
import useWhatsappLink from "../hooks/useWhatsappLink";

const FloatingButton = () => {
  return (
    <a
      href={useWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 rounded-full shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition-transform duration-300 ease-in-out hover:scale-110"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp size={28} className="text-white" />
    </a>
  );
};

export default FloatingButton;

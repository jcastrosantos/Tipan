import { useMemo } from "react";

const useWhatsappLink = (
  whatsappNumber = "5511988670660",
  defaultMessage = "Olá, gostaria de obter maiores detalhes, vamos conversar?"
) => {
  const whatsappLink = useMemo(() => {
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      defaultMessage
    )}`;
  }, [whatsappNumber, defaultMessage]);
  return whatsappLink;
};

export default useWhatsappLink;

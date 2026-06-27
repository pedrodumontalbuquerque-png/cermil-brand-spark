import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "5585991124238";

interface WhatsAppButtonProps {
  message?: string;
}

const WhatsAppButton = ({ message = "Olá! Vim pelo site da CERMIL Stone e gostaria de mais informações." }: WhatsAppButtonProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const encodedMessage = encodeURIComponent(message);
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className={`whatsapp-fab ${visible ? "whatsapp-fab--visible" : ""}`}
    >
      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="whatsapp-fab__icon"
        aria-hidden="true"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.472 2.027 7.774L0 32l8.465-2.215A15.934 15.934 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.77-1.847l-.484-.288-5.026 1.316 1.338-4.893-.316-.502A13.27 13.27 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.928c-.398-.199-2.354-1.161-2.718-1.294-.364-.133-.63-.199-.895.199-.265.398-1.028 1.294-1.26 1.56-.232.265-.464.298-.862.1-.398-.2-1.68-.619-3.2-1.974-1.183-1.054-1.981-2.355-2.213-2.752-.232-.398-.025-.613.174-.812.179-.178.398-.464.598-.696.199-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.2-.895-2.157-1.227-2.952-.323-.775-.65-.67-.895-.682a16.1 16.1 0 0 0-.762-.014c-.265 0-.696.1-1.061.497-.364.398-1.393 1.36-1.393 3.317s1.426 3.848 1.625 4.113c.199.265 2.806 4.284 6.797 6.01.95.41 1.692.655 2.27.838.954.303 1.822.26 2.508.158.765-.114 2.354-.962 2.686-1.891.332-.93.332-1.726.232-1.891-.1-.166-.364-.265-.762-.464z" />
      </svg>

      {/* Pulse ring */}
      <span className="whatsapp-fab__pulse" aria-hidden="true" />
    </a>
  );
};

export default WhatsAppButton;
export { WHATSAPP_NUMBER };

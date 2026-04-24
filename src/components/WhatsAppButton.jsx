import './WhatsAppButton.css'; // optional, but we keep minimal

function WhatsAppButton() {
  const phoneNumber = "255764157295"; // Replace with real number (without +)
  const message = "Hello! I'm interested in Msichana Foundation Africa programs.";
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
      />
    </a>
  );
}

export default WhatsAppButton;
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container">
      <header className="header">
        Desenvolvido em {currentYear} - Matheus Edivaldo
      </header>
      <div className="card">
        <h1>O domínio perfeito para sua academia!</h1>
        <p>alphaacademias.com.br pode ser seu. Aproveite essa oportunidade para destacar sua marca no mundo fitness.</p>
        <div className="contact">
          <p>
            <FaWhatsapp />{" "}
            <a
              href="https://wa.me/5511932250639?text=Quero%20adquirir%20o%20domínio%20alphaacademias.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              (11) 93225-0639
            </a>
          </p>
          <p>
            <FaEnvelope />{" "}
            <a href="mailto:matheusedivaldodev@gmail.com">matheusedivaldodev@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
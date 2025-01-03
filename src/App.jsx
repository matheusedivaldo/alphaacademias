import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>O domínio perfeito para sua academia!</h1>
        <p>
          alphaacademias.com.br pode ser seu! Essa é a oportunidade perfeita para impulsionar sua marca no mercado fitness.
          Um domínio memorável e profissional por um preço justo. Não perca!
        </p>
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
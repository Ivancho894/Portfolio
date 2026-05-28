import React from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "../legal/legal.css";

export const Terms = () => {
  return (
    <HelmetProvider>
      <div className="legal-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Términos de Servicio — SwellOps</title>
          <meta
            name="description"
            content="Términos de servicio del servicio de mensajería automatizada SwellOps."
          />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <div className="legal-wrapper">
          <header>
            <div className="legal-brand">SwellOps</div>
            <h1>Términos de Servicio</h1>
            <div className="legal-updated">Última actualización: 22 de mayo de 2026</div>
          </header>

          <p>
            Estos Términos rigen el uso del servicio de mensajería automatizada
            operado por <strong>Ivan Serralta</strong> bajo la marca SwellOps
            («nosotros», «el Servicio»). Al interactuar con el Servicio, aceptás
            los términos descritos a continuación.
          </p>

          <h2><span className="legal-num">01</span>Descripción del servicio</h2>
          <p>
            Ofrecemos respuestas automatizadas vía WhatsApp para informar sobre
            productos y servicios y coordinar consultas o citas en nombre de
            empresas clientes. El Servicio puede incluir la derivación a un agente
            humano cuando corresponda.
          </p>

          <h2><span className="legal-num">02</span>Uso aceptable</h2>
          <p>No podés usar el Servicio para:</p>
          <ul>
            <li>Enviar contenido ilegal, amenazante, abusivo o engañoso.</li>
            <li>Intentar vulnerar la seguridad o disponibilidad del sistema.</li>
            <li>Suplantar la identidad de terceros.</li>
            <li>Realizar ingeniería inversa o uso comercial no autorizado.</li>
          </ul>

          <h2><span className="legal-num">03</span>Limitación de responsabilidad</h2>
          <p>
            El Servicio se ofrece «tal cual» y «según disponibilidad». No
            garantizamos disponibilidad ininterrumpida ni que las respuestas
            automatizadas sean siempre exactas o completas. Confirmá información
            crítica con un agente humano antes de tomar decisiones, especialmente
            en cuestiones de salud, finanzas o reservas.
          </p>

          <h2><span className="legal-num">04</span>Propiedad intelectual</h2>
          <p>
            El software, marcas y contenidos del Servicio son propiedad de
            Ivan Serralta. Los mensajes que envíes siguen siendo tuyos; nos
            otorgás una licencia limitada y no exclusiva para procesarlos con el
            único fin de prestar el Servicio.
          </p>

          <h2><span className="legal-num">05</span>Privacidad</h2>
          <p>
            El tratamiento de tus datos personales se rige por nuestra{" "}
            <Link to="/privacy">Política de Privacidad</Link>, que forma parte
            integral de estos Términos.
          </p>

          <h2><span className="legal-num">06</span>Cancelación</h2>
          <p>
            Podés dejar de usar el Servicio en cualquier momento. Para no recibir
            más mensajes automatizados nuestros, respondé «BAJA» o «STOP» en la
            conversación de WhatsApp.
          </p>

          <h2><span className="legal-num">07</span>Modificaciones</h2>
          <p>
            Podemos actualizar estos Términos periódicamente. Los cambios entran
            en vigor al publicarse en esta URL. El uso continuado del Servicio
            implica aceptación de la versión vigente.
          </p>

          <h2><span className="legal-num">08</span>Ley aplicable y jurisdicción</h2>
          <p>
            Estos Términos se rigen por las leyes de la República Argentina.
            Cualquier disputa se someterá a los tribunales competentes de la
            Ciudad Autónoma de Buenos Aires, renunciando a cualquier otro fuero
            que pudiera corresponder.
          </p>

          <h2><span className="legal-num">09</span>Contacto</h2>
          <div className="legal-contact-block">
            <strong>Ivan Serralta</strong><br />
            Marca: SwellOps<br />
            Email: <a href="mailto:hello@ivanserralta.com">hello@ivanserralta.com</a><br />
            Buenos Aires, Argentina
          </div>

          <footer>
            <span>SwellOps © 2026</span>
            <span>
              <Link to="/privacy">Privacidad</Link> ·{" "}
              <Link to="/terms">Términos</Link> ·{" "}
              <Link to="/data-deletion">Eliminar datos</Link>
            </span>
          </footer>
        </div>
      </div>
    </HelmetProvider>
  );
};

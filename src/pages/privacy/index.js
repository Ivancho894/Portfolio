import React from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "../legal/legal.css";

export const Privacy = () => {
  return (
    <HelmetProvider>
      <div className="legal-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Política de Privacidad — SwellOps</title>
          <meta
            name="description"
            content="Política de privacidad del servicio de mensajería automatizada SwellOps."
          />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <div className="legal-wrapper">
          <header>
            <div className="legal-brand">SwellOps</div>
            <h1>Política de Privacidad</h1>
            <div className="legal-updated">Última actualización: 22 de mayo de 2026</div>
          </header>

          <p>
            <strong>[NOMBRE_LEGAL]</strong>, operando bajo la marca SwellOps
            («nosotros», «el Servicio»), opera servicios de mensajería automatizada
            disponibles a través de WhatsApp. Esta política describe qué información
            recopilamos, cómo la usamos y los derechos que tenés sobre ella.
          </p>

          <h2><span className="legal-num">01</span>Información que recopilamos</h2>
          <p>Cuando interactuás con nuestro servicio a través de WhatsApp, podemos recopilar:</p>
          <ul>
            <li>Tu número de teléfono de WhatsApp.</li>
            <li>Tu nombre de perfil de WhatsApp, cuando esté disponible.</li>
            <li>El contenido de los mensajes que nos envías.</li>
            <li>Metadatos asociados a la conversación (fecha, hora, estado de entrega).</li>
          </ul>

          <h2><span className="legal-num">02</span>Cómo usamos esta información</h2>
          <p>Usamos los datos exclusivamente para:</p>
          <ul>
            <li>Responder a tus consultas e interactuar con vos.</li>
            <li>Coordinar citas, reservas o servicios solicitados.</li>
            <li>Mejorar la calidad de nuestras respuestas automatizadas.</li>
            <li>Cumplir con obligaciones legales aplicables.</li>
          </ul>

          <h2><span className="legal-num">03</span>Con quién compartimos información</h2>
          <p>
            No vendemos tu información personal. Compartimos datos únicamente con
            proveedores de infraestructura tecnológica necesarios para operar el
            servicio (Meta/WhatsApp, OpenAI, Anthropic, Supabase, Qdrant), bajo
            acuerdos de confidencialidad, y con autoridades cuando sea legalmente
            requerido.
          </p>

          <h2><span className="legal-num">04</span>Retención de datos</h2>
          <p>
            Conservamos los datos mientras sean necesarios para prestar el servicio
            y por el plazo que exija la ley aplicable. Podés solicitar la eliminación
            en cualquier momento.
          </p>

          <h2><span className="legal-num">05</span>Tus derechos</h2>
          <p>
            Podés solicitar acceso, rectificación o eliminación de tus datos
            enviando un mensaje a <a href="mailto:[EMAIL_CONTACTO]">[EMAIL_CONTACTO]</a>.
            Consultá también nuestra{" "}
            <Link to="/data-deletion">página de eliminación de datos</Link>.
          </p>

          <h2><span className="legal-num">06</span>Seguridad</h2>
          <p>
            Aplicamos medidas técnicas y organizativas razonables para proteger la
            información. Ningún sistema es invulnerable; te avisaremos en caso de
            incidente que afecte tus datos según lo exija la ley.
          </p>

          <h2><span className="legal-num">07</span>Cambios en esta política</h2>
          <p>
            Podemos actualizar esta política periódicamente. La versión vigente
            siempre estará disponible en esta URL con la fecha de última
            actualización al inicio.
          </p>

          <h2><span className="legal-num">08</span>Contacto</h2>
          <div className="legal-contact-block">
            <strong>[NOMBRE_LEGAL]</strong><br />
            Marca: SwellOps<br />
            Email: <a href="mailto:[EMAIL_CONTACTO]">[EMAIL_CONTACTO]</a><br />
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

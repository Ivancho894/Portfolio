import React from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "../legal/legal.css";

export const DataDeletion = () => {
  return (
    <HelmetProvider>
      <div className="legal-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Eliminación de Datos — SwellOps</title>
          <meta
            name="description"
            content="Cómo solicitar la eliminación de tus datos personales del servicio SwellOps."
          />
          <meta name="robots" content="index, follow" />
        </Helmet>
        <div className="legal-wrapper">
          <header>
            <div className="legal-brand">SwellOps</div>
            <h1>Eliminación de Datos</h1>
            <div className="legal-updated">Última actualización: 22 de mayo de 2026</div>
          </header>

          <p>
            Tenés derecho a solicitar la eliminación de los datos personales
            asociados a tu número de WhatsApp en cualquier momento. A continuación
            te explicamos el procedimiento.
          </p>

          <h2><span className="legal-num">01</span>Cómo solicitar la eliminación</h2>
          <p>Existen dos formas equivalentes de iniciar el pedido:</p>
          <ul>
            <li>
              Enviar un email a{" "}
              <a href="mailto:[EMAIL_CONTACTO]?subject=Eliminar%20mis%20datos">[EMAIL_CONTACTO]</a>
              {" "}con el asunto <em>«Eliminar mis datos»</em>.
            </li>
            <li>
              Enviar un mensaje desde tu propio número de WhatsApp al bot con el
              texto <strong>ELIMINAR MIS DATOS</strong>.
            </li>
          </ul>

          <h2><span className="legal-num">02</span>Plazos</h2>
          <ul>
            <li>Confirmaremos la recepción de tu solicitud dentro de los <strong>7 días</strong>.</li>
            <li>La eliminación se completará en un plazo máximo de <strong>30 días</strong>.</li>
            <li>Te avisaremos por el mismo canal cuando esté hecho.</li>
          </ul>

          <h2><span className="legal-num">03</span>Qué datos se eliminan</h2>
          <p>La eliminación abarca:</p>
          <ul>
            <li>Historial completo de la conversación.</li>
            <li>Tu número de teléfono y nombre de perfil.</li>
            <li>Metadatos asociados (timestamps, estados de entrega, etiquetas).</li>
            <li>Embeddings y vectores derivados utilizados por el sistema de IA.</li>
          </ul>

          <h2><span className="legal-num">04</span>Excepciones legales</h2>
          <p>
            Podemos conservar información mínima cuando una ley lo exija (por
            ejemplo, registros contables o respuestas a requerimientos de
            autoridades). En esos casos, los datos quedan bloqueados y no se
            utilizan para ningún otro fin.
          </p>

          <h2><span className="legal-num">05</span>Contacto</h2>
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

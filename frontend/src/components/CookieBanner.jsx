import { useState, useEffect } from "react";
import "./CookieBanner.css";

export default function CookieBanner() {

  const [visivel, setVisivel] = useState(false);
  const [modal, setModal] = useState(false);

  const [preferencias, setPreferencias] = useState({
    necessarios: true,
    analytics: false,
    marketing: false
  });

  // MOSTRA BANNER SE NÃO EXISTIR CONSENTIMENTO

  useEffect(() => {

    const consentimento = localStorage.getItem("cookieConsent");

    if (!consentimento) {
      setVisivel(true);
      document.body.style.overflow = "hidden";
    }

    // função global para reabrir

    window.abrirCookies = () => {
      setVisivel(true);
      setModal(false);
      document.body.style.overflow = "hidden";
    };

  }, []);

  const salvar = (dados) => {
    localStorage.setItem("cookieConsent", JSON.stringify(dados));

    setVisivel(false);
    setModal(false);

    document.body.style.overflow = "auto";
  };

  const aceitarTodos = () => {
    salvar({
      necessarios: true,
      analytics: true,
      marketing: true
    });
  };

  const recusarTodos = () => {
    salvar({
      necessarios: true,
      analytics: false,
      marketing: false
    });
  };

  if (!visivel) return null;

  return (
    <>

      {!modal && (

        <div className="pcookie-overlay">

          <div className="pcookie-popup">

            <h3>Uso de Cookies</h3>

            <p>
              Utilizamos cookies para melhorar sua experiência,
              analisar o tráfego e personalizar conteúdos.
              Para mais informações consulte nossa{" "}
              <a
                href="/politica-de-privacidade.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de Privacidade
              </a>.
            </p>

            <div className="pcookie-botoes">

              <button
                className="pcookie-button"
                onClick={aceitarTodos}
              >
                Aceitar todos
              </button>

              <button
                className="pcookie-secundario"
                onClick={recusarTodos}
              >
                Recusar
              </button>

              <button
                className="pcookie-secundario"
                onClick={() => setModal(true)}
              >
                Configurar
              </button>

            </div>

          </div>

        </div>

      )}

      {modal && (

        <div className="pcookie-overlay">

          <div className="pcookie-popup">

            <h3>Preferências de Cookies</h3>

            <label>
              <input type="checkbox" checked disabled />
              Cookies necessários (obrigatórios)
            </label>

            <label>

              <input
                type="checkbox"
                checked={preferencias.analytics}
                onChange={(e) =>
                  setPreferencias({
                    ...preferencias,
                    analytics: e.target.checked
                  })
                }
              />

              Cookies de análise (Analytics)

            </label>

            <label>

              <input
                type="checkbox"
                checked={preferencias.marketing}
                onChange={(e) =>
                  setPreferencias({
                    ...preferencias,
                    marketing: e.target.checked
                  })
                }
              />

              Cookies de marketing

            </label>

            <div className="pcookie-botoes">

              <button
                className="pcookie-button"
                onClick={() => salvar(preferencias)}
              >
                Salvar preferências
              </button>

              <button
                className="pcookie-secundario"
                onClick={() => setModal(false)}
              >
                Voltar
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}
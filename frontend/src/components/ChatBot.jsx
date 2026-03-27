import { useState, useRef, useEffect } from "react";
import "../styles/ChatBot.css";

const responses = {

  "O que é a Scalytech?":
    "A Scalytech é uma empresa de tecnologia focada no desenvolvimento de soluções digitais modernas. Criamos sites profissionais, sistemas web e plataformas digitais com foco em desempenho, experiência do usuário e escalabilidade.",

  "Como entrar em contato?":
    "Você pode falar com a equipe da Scalytech diretamente pelo WhatsApp ou email disponíveis na seção de contato do site. Normalmente respondemos em até 1 hora.",

  "Quais serviços vocês oferecem?":
    "A Scalytech oferece desenvolvimento de sites profissionais, landing pages de alta conversão, sistemas web personalizados, painéis administrativos, manutenção de sites e soluções digitais sob medida para empresas.",

  "Onde podemos ver trabalhos anteriores?":
    "Você pode conferir nossos projetos na seção 'Projetos' do site. Lá mostramos alguns dos sites, sistemas e soluções digitais que já desenvolvemos.",

  "Quais planos a Scalytech oferece?":
    "Oferecemos três categorias principais de projetos:\n\nSTART: Sites institucionais modernos para empresas que precisam iniciar presença digital.\n\nPRO: Sites profissionais completos com animações, SEO, identidade visual e otimização de performance.\n\nCUSTOM: Sistemas, plataformas e soluções digitais personalizadas com banco de dados e funcionalidades avançadas."
};

export default function ChatBot() {

  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  function sendMessage(question) {
    setMessages(prev => [
      ...prev,
      { from: "user", text: question },
      { from: "bot", text: responses[question] }
    ]);
  }

  return (
    <div className={`chatbot ${isOpen ? "open" : ""}`}>

      <div className="chatbot-icon" onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="black"
        >
          <path d="M4 4h16v12H5.17L4 17.17V4zm0-2c-1.1 0-2 .9-2 2v16l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4z"/>
        </svg>
      </div>

      {isOpen && (
        <div className="chatbot-window">

          <div className="chatbot-messages">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.from}`}>
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-options">
            {Object.keys(responses).map(q => (
              <button key={q} onClick={() => sendMessage(q)}>
                {q}
              </button>
            ))}
          </div>

        </div>
      )}
    </div>
  );
}
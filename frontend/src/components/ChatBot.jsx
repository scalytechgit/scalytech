import { useState, useRef, useEffect } from "react";
import "../styles/chatbot.css";

const responses = {
  "O que é a ScalyTech?": 
    "A ScalyTech é uma empresa de tecnologia que cria soluções digitais avançadas: sistemas web completos, automação de processos, aplicativos mobile, integrações de APIs e serviços de hospedagem e manutenção.",

  "Como entrar em contato?": 
    "Você pode nos contatar pelo formulário do site ou enviar um email diretamente para contato@scalytech.com. Respondemos rapidamente todas as solicitações.",

  "Quais serviços vocês oferecem?": 
    "Oferecemos desenvolvimento de sistemas web completos, aplicativos mobile, automação de tarefas (chatbots, coleta de dados, relatórios automáticos), integrações de APIs, extensões para Google, manutenção contínua de sistemas e hospedagem em cloud.",

  "Onde podemos ver trabalhos anteriores?": 
    "Você pode conferir nossos projetos na seção 'Projetos'. Lá mostramos sistemas web completos, apps e automações que já desenvolvemos para nossos clientes."
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
      {/* Ícone de balão de fala branco sobre fundo azul/verde ScalyTech */}
      <div className="chatbot-icon" onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="#00ff99"
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

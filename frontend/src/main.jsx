import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Estilos globais
import './styles/reset.css';
import './styles/variables.css';
import './styles/animations.css';
import './styles/global.css';

// Componente ScalyTech global
import ChatBot from './components/ChatBot';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ChatBot /> {/* ChatBot aparece em todas as páginas */}
  </React.StrictMode>
);

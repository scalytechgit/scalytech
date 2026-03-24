import { HashRouter, Routes, Route } from 'react-router-dom'; // <-- Mudei para HashRouter

import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

      <ChatBot /> {/* <-- chatbot fixo no canto */}
    </HashRouter>
  );
}
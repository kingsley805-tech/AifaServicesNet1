import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloatingButton from './components/common/WhatsAppFloatingButton';
import QuoteModal from './components/common/QuoteModal';
import ScrollToTop from './components/common/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPestControlPage from './pages/ServicesPestControlPage';
import SafetyItemsPage from './pages/SafetyItemsPage';
import GeneralGoodsLogisticsPage from './pages/GeneralGoodsLogisticsPage';
import ConstructionPage from './pages/ConstructionPage';
import QuoteEstimatorPage from './pages/QuoteEstimatorPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#060d09] text-slate-100 font-sans selection:bg-emerald-600 selection:text-white">
        <Navbar onOpenQuote={openQuoteModal} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenQuote={openQuoteModal} />} />
            <Route path="/about" element={<AboutPage onOpenQuote={openQuoteModal} />} />
            <Route path="/services/pest-control" element={<ServicesPestControlPage onOpenQuote={openQuoteModal} />} />
            <Route path="/services/safety-items" element={<SafetyItemsPage onOpenQuote={openQuoteModal} />} />
            <Route path="/services/general-goods" element={<GeneralGoodsLogisticsPage onOpenQuote={openQuoteModal} />} />
            <Route path="/services/construction" element={<ConstructionPage onOpenQuote={openQuoteModal} />} />
            <Route path="/quote-estimator" element={<QuoteEstimatorPage onOpenQuote={openQuoteModal} />} />
            <Route path="/contact" element={<ContactPage onOpenQuote={openQuoteModal} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer onOpenQuote={openQuoteModal} />
        <WhatsAppFloatingButton />
        <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
      </div>
    </Router>
  );
}

export default App;

import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import AttorneyDetail from './pages/AttorneyDetail';
import PracticeAreas from './pages/PracticeAreas';
import PracticeAreaDetail from './pages/PracticeAreaDetail';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import Contact from './pages/Contact';

// Scroll to top component to handle route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-dark text-white font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/attorneys/:id" element={<AttorneyDetail />} />
            <Route path="/areas-of-practice" element={<PracticeAreas />} />
            <Route path="/areas-of-practice/:slug" element={<PracticeAreaDetail />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
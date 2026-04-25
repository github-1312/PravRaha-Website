// import { Routes, Route, useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
// import Nav from './components/Nav';
// import Footer from './components/Footer';
// import CTABlock from './components/CTABlock';
// import Home from './pages/Home';
// import Platform from './pages/Platform';
// import HowItWorks from './pages/HowItWorks';
// import Compare from './pages/Compare';
// import Manifesto from './pages/Manifesto';
// import UseCases from './pages/UseCases';
// import About from './pages/About';
// import Resources from './pages/Resources';
// import Book from './pages/Book';
// import Services from './pages/Services';


// function ScrollToTop() {
//   const { pathname } = useLocation();
//   useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
//   return null;
// }

// export default function App() {
//   const { pathname } = useLocation();

//   return (
//     <>
//       <ScrollToTop />
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/platform" element={<Platform />} />
//         <Route path="/how-it-works" element={<HowItWorks />} />
//         <Route path="/compare" element={<Compare />} />
//         <Route path="/manifesto" element={<Manifesto />} />
//         <Route path="/use-cases" element={<UseCases />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/resources" element={<Resources />} />
//         <Route path="/book" element={<Book />} />
//         <Route path="/services" element={<Services />} />
        
//       </Routes>
//       {/* {pathname !== '/book' && <CTABlock />} */}
//       {pathname !== '/book' && pathname !== '/services' && <CTABlock />}
 

//       <Footer />
//     </>
//   );
// }
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { useEffect } from 'react';

// import Nav from './components/Nav';
// import Footer from './components/Footer';
// import CTABlock from './components/CTABlock';
// import GoogleAnalytics from './components/GoogleAnalytics';

// import Home from './pages/Home';
// import Platform from './pages/Platform';
// import HowItWorks from './pages/HowItWorks';
// import Compare from './pages/Compare';
// import Manifesto from './pages/Manifesto';
// import UseCases from './pages/UseCases';
// import About from './pages/About';
// import Resources from './pages/Resources';
// import Book from './pages/Book';
// import Services from './pages/Services';

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

// export default function App() {
//   const { pathname } = useLocation();

//   return (
//     <>
//       <ScrollToTop />

//       {/* ✅ Google Analytics SPA Tracking */}
//       <GoogleAnalytics />

//       <Nav />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/platform" element={<Platform />} />
//         <Route path="/how-it-works" element={<HowItWorks />} />
//         <Route path="/compare" element={<Compare />} />
//         <Route path="/manifesto" element={<Manifesto />} />
//         <Route path="/use-cases" element={<UseCases />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/resources" element={<Resources />} />
//         <Route path="/book" element={<Book />} />
//         <Route path="/services" element={<Services />} />
//       </Routes>

//       {/* CTA Block condition */}
//       {pathname !== '/book' && pathname !== '/services' && <CTABlock />}

//       <Footer />
//     </>
//   );
// }

import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Nav from './components/Nav';
import Footer from './components/Footer';
import CTABlock from './components/CTABlock';
import GoogleAnalytics from './components/GoogleAnalytics';

import Home from './pages/Home.jsx';
import Platform from './pages/Platform.jsx';
import HowItWorks from './pages/HowItWorks.jsx';
import Compare from './pages/Compare.jsx';
import Manifesto from './pages/Manifesto.jsx';
import UseCases from './pages/UseCases.jsx';
import About from './pages/About.jsx';
import Resources from './pages/Resources.jsx';
import Book from './pages/Book.jsx';
import Services from './pages/Services.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollToTop />

      {/* Google Analytics */}
      <GoogleAnalytics />

      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/book" element={<Book />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      {/* CTA Block condition */}
      {pathname !== '/book' && pathname !== '/services' && <CTABlock />}

      <Footer />
    </>
  );
}
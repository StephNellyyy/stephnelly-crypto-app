import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import DisclaimerBanner from "./components/common/DisclaimerBanner.jsx";

import LandingPage from "./pages/LandingPage.jsx";
import Explore from "./pages/Explore.jsx";
import AssetDetail from "./pages/AssetDetail.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";

function App() {
  return (
    <Router>
      {/* REQUIRED WARNING BANNER */}
      <DisclaimerBanner />

      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/asset/:id" element={<AssetDetail />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
  
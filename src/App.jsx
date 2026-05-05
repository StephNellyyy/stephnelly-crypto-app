import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import SignInPage from "./pages/SignInPage.jsx";
import Explore from "./pages/Explore.jsx";
import AssetDetail from "./pages/AssetDetail.jsx";
import Profile from "./pages/Profile.jsx";
import DisclaimerBanner from "./components/common/DisclaimerBanner.jsx";

function App() {
  return (
    <Router>
      <DisclaimerBanner />
      <Routes>
        <Route path="/" element={<><Navbar /><LandingPage /><Footer /></>} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/explore" element={<><Navbar /><Explore /><Footer /></>} />
        <Route path="/asset/:id" element={<><Navbar /><AssetDetail /><Footer /></>} />
        <Route path="/profile" element={<><Navbar /><Profile /><Footer /></>} />
      </Routes>
    </Router>
  );
}

export default App;
import TimeDateSelection from "./pages/TimeDateSelection";
import CourtSelection from "./pages/CourtSelection";
import Home from "./pages/Home";
import Location from "./pages/Location";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import Join from "./pages/Join";
import Otp from "./pages/Otp";
import { ToasterProvider } from "./context/ToasterContext";
import Toaster from "./components/Toaster";
import Verification from "./pages/Verification";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";
import ProfileUpdate from "./pages/ProfileUpdate";
import { UserProvider } from "./context/UserContext";
import ChangePassword from "./pages/ChangePassword";
import BookingHistory from "./pages/BookingHistory";
import { PriceProvider } from "./context/PriceContext";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TnC from "./pages/TnC";
import CRP from "./pages/CRP";

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <ToasterProvider>
            <PriceProvider>
              <Toaster />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/location" element={<Location />} />
                <Route
                  path="/time-date-selection"
                  element={<TimeDateSelection />}
                />
                <Route path="/court-selection" element={<CourtSelection />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
                <Route path="/join" element={<Join />} />
                <Route path="/otp" element={<Otp />} />
                <Route path="/verification" element={<Verification />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/profile" element={<Profile />} />
                <Route
                  path="/profile/profile-update"
                  element={<ProfileUpdate />}
                />
                <Route
                  path="/profile/profile-update/change-password"
                  element={<ChangePassword />}
                />
                <Route
                  path="/profile/booking-history"
                  element={<BookingHistory />}
                />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TnC />} />
                <Route path="/cancellation-refund-policy" element={<CRP />} />
              </Routes>
            </PriceProvider>
          </ToasterProvider>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;

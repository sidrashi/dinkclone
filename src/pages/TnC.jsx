import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import TnCPage from "../components/TnCPage";

function TnC() {
  return (
    <div className="w-full min-h-screen bg-background">
      <Nav />
      <TnCPage />
      <Footer />
    </div>
  );
}

export default TnC;

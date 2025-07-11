import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Page1 from "../components/Page1";

function Location() {
  return (
    <div className="w-full min-h-screen bg-background">
      <Nav />
      <Page1 />
      <Footer />
    </div>
  );
}

export default Location;

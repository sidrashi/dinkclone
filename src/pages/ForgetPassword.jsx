import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ForgetPasswordPage from "../components/ForgetPasswordPage";

function ForgetPassword() {
  return (
    <div className="w-full md:flex flex-col justify-center items-center bg-background">
      <Nav />
      <ForgetPasswordPage />
      <Footer />
    </div>
  );
}

export default ForgetPassword;

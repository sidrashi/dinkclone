import React from "react";
import Nav from "../components/Nav";
import ProfileUpdatePage from "../components/ProfileUpdatePage";
import Footer from "../components/Footer";

function ProfileUpdate() {
  return (
    <div className="w-full md:flex flex-col justify-center items-center bg-background">
      <Nav />
      <ProfileUpdatePage />
      <Footer />
    </div>
  );
}

export default ProfileUpdate;

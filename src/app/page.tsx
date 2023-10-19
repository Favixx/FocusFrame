import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import OurCourses from "./components/OurCourses";
import OurMentors from "./components/OurMentors";
import SignUp from "./components/SignUp";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <OurCourses />
      <OurMentors />
      <SignUp />
      <Reviews />
      <Footer />
    </>
  );
};

export default page;

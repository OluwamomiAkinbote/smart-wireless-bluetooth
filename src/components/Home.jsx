import React from "react";
import SalesHeader from "./SalesHeader";
import ContactForm from "./ContactForm";
import Packages from "./Packages";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Notice from "./Notice";
import VideoShowcase from "./VideoShowcase";
import PainSolution from "./PainSolution";
import FAQ from "./FAQ";


const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black p-2 font-roboto">
      <SalesHeader />
      <VideoShowcase />
      <PainSolution />
      <FAQ />
 
      <Testimonials />
      <Packages />
      <ContactForm />
      <Footer />

    </div>
  );
};

export default Home;

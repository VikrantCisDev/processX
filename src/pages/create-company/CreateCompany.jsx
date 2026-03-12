import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import HeroBg from "../../assets/heroBg.png";
import WaveImage from "../../assets/waveShape.png";
import CreateCompanyForm from "../../components/CreateCompanyForm";

const CreateCompany = () => {
  return (
    <>
      <Header />
      <section
        className={`w-full bg-[#EDF7FF] bg-[url('${HeroBg}')] bg-cover bg-center pb-20 md:pb-28 pt-10 md:pt-16 relative overflow-hidden min-h-screen flex items-center justify-center`}
      >
        {/* Wave Image */}
        <img
          src={WaveImage}
          alt="Wave Shape"
          className="absolute bottom-0 left-0 w-full h-[61%]"
        />

        <CreateCompanyForm />
      </section>
      <Footer />
    </>
  );
};

export default CreateCompany;

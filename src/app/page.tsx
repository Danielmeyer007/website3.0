import React from "react";
import Header from "../app/sections/header";
import Hero from "../app/sections/hero";
import Footer from "../app/sections/footer";
import Prefooter from "../app/sections/prefooter";

const Page: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Prefooter />

      <Footer />
    </div>
  );
};

export default Page;

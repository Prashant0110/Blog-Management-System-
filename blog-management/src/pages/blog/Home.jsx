import React from "react";
import Layout from "../../components/navbar/layout/Layout";
import Cards from "./components/cards/Cards";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <div className="flex justify-center space-x-8 mt-8">
          <Cards />
          <Cards />
        </div>
      </Layout>
    </>
  );
};

export default Home;

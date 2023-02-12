import React from "react";
import Layout from "../components/UI/Layout";
import Banner from "../components/home/Banner";
import Blogs from "../components/home/Blogs";
import Testimonials from "../components/home/Testimonial";
import Food from "../components/home/Food";
import ExploreFood from "../components/home/ExploreFood";
import banner1 from "../assets/images/banner.jpg";
import banner2 from "../assets/images/banner2.jpg";

const Home = () => {
  return (
    <div className="max-w-[1380px] m-auto bg-gray-100">
      <Layout>
        <Banner image_url={banner1} />
        <div className="m-8 mb-16">
          <Food />
          <ExploreFood />
          <Testimonials />
          <Blogs />
        </div>
        <Banner image_url={banner2} />
      </Layout>
    </div>
  );
};

export default Home;

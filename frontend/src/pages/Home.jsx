import React from 'react'
import Layout from "../components/UI/Layout";
import Banner from "../components/home/Banner";
import Blogs from "../components/home/Blogs";
import Testimonials from "../components/home/Testimonial";
import Food from "../components/home/Food";
import ExploreFood from "../components/home/ExploreFood";

const Home = () => {
  return (
    <div className='max-w-[1380px] m-auto bg-gray-100'> 
      <Layout>
        <Banner />
        <Food />
        <ExploreFood />
        <Testimonials />
        <Blogs />
      </Layout>
    </div>
  )
}

export default Home
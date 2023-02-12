import React from "react";
// import BannerImg from "../../assets/images/banner.jpg";
import Button from "../common/Button";

const Banner = (props) => {
  return (
    <section className="z-50">
      <figure>
        <img
          className="h-screen w-full object-cover"
          src={props.image_url}
          alt=""
        />
      </figure>
      <figcaption className="absolute top-[40%] left-[10%] w-[50%] text-white text-5xl font-medium">
        <p>Your Favourite Food delivery Partner!</p>
        <p>The joy of Getting</p>
        <p>the Best</p>
        <Button
          text="Explore More"
          className="text-gray-800 rounded-lg border-2 text-2xl border-double border-gray-800 hover:text-white hover:border-white hover:bg-gray-800"
        ></Button>
      </figcaption>
    </section>
  );
};

export default Banner;

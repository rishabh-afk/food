import React from "react";
import item1 from "../../assets/images/food/item-1.jpeg";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import Button from "./Button";

const Card = (props) => {
  return (
    <div className="cursor-pointer hover:shadow-2xl duration-300 hover:duration-300">
      <figure>
        <img
          className="w-full rounded-t-lg h-48 object-cover shadow-neutral-500"
          src={item1}
          alt=""
        />
      </figure>
      <span className="relative bottom-3 left-[70%] font-semibold shadow-orange-700 shadow-md hover:bottom-4  duration-300 hover:duration-300 hover:ease-in-out cursor-pointer bg-orange-600 text-white px-3 py-0.5 rounded">
        ₹ 500
      </span>
      <figcaption className="p-4 pt-0">
        <h2 className="text-gray-600 font-semibold text-lg mb-2">
          Fresh Fruits Salad
        </h2>
        <p className="text-sm text-gray-400">
          Fruit salad is a dish consisting of various kinds of fruit, sometimes
          served in a liquid, either their juices or a syrup.
        </p>
        <div className="flex mt-2 items-center justify-between">
          <div className="flex gap-5">
            <span className="flex items-center text-sm gap-1 text-gray-400">
              <IoLocationSharp color="black" size={15} />
              Roof
            </span>
            <span className="flex items-center text-sm gap-1 text-gray-400">
              <BsFillPersonFill color="black" size={15} />2 Person
            </span>
          </div>
          <Button
            text="Add to Cart"
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-0 py-1 px-2 text-sm border-none outline-none bg-orange-600 text-white"
          />
        </div>
      </figcaption>
    </div>
  );
};

export default Card;

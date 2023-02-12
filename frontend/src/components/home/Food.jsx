import React from "react";
import Card from "../common/Card";
import CardHoc from "../common/CardHoc";

const Food = () => {
  return (
    <section>
      <div className="font-bold text-5xl mb-12 text-center text-amber-600">
        <h2 className="pb-4">Family, friends, and Italian food.</h2>
        <p>Hasty and tasty!</p>
      </div>
      <div className="grid grid-cols-4 gap-8">
        <CardHoc>
          <Card />
        </CardHoc>
        <CardHoc>
          <Card />
        </CardHoc>
        <CardHoc>
          <Card />
        </CardHoc>
        <CardHoc>
          <Card />
        </CardHoc>
      </div>
    </section>
  );
};

export default Food;

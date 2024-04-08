import React from "react";
import Gundem from "./Category/Gundem";
import Cay from "./Category/Cay";
import Saglık from "./Category/Saglık";
import Ekonomi from "./Category/Ekonomi";

import "./Categories.css";
import Spor from "./Category/Spor";
import Finans from "./Category/Finans";

// grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));

const Categories = () => {
  return (
    <div
      className="px-4 grid max-md:place-items-center 
    
    grid-cols-[repeat(auto-fill,_minmax(450px,_1fr))] 
    max-md:grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] 
    
    "
    >
      <Gundem />
      <Cay />
      <Saglık />
      <Ekonomi />
      <Spor />
      <Finans />
    </div>
  );
};

export default Categories;

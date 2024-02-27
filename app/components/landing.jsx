import React from "react";

import Link from "next/link";

const main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center">
        <div className="text-left">
          <h1 className="py-4 md:text-[50px] text-[#0a5d00] font-bold">
            InstantMed
          </h1>
          <h1 className="md:text-[34px] text-[34px] text-[#1fc600]">
            <span className="text-[#089000]">Delivering Hope:</span> Your
            Prescriptions, Our Priority.
          </h1>
          
          <a href="/#store">
          <div className="btn mt-4 md:mt-16">
            
            <span>Shop Health.</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
           
          </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default main;

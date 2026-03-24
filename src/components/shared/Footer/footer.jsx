import React from "react";
import { Phone } from "lucide-react";
const footer = () => {
  return (
    <div className="p-10">
      <div>
        <h4>Get in Touch</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quod.
        </p>
        <div className="flex items-center ">
          <span className="bg-red-400 p-2 rounded-full mr-3">
            <Phone className="" size={30} />
          </span>
          <div>
            <p>Email</p>
            <p>08123456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;

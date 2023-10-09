import React from "react";

import { download } from "../assets";
import { downloadImage } from "../utils";
import { FiDownload } from "react-icons/fi";

// card  classname is our own
const Card = ({ _id, name, prompt, photo }) => {
  console.log("_id.photo of Card.jsx = ", _id.photo);
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        src={photo} // _id.photo instead of photo
        alt="prompt"
        className="w-full h-auto object-cover rounded-xl"
      />
      <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f8c] m-2 p-4 rounded-md">
        <p className="text-white text-md overflow-y-auto prompt">{prompt}</p>{" "}
        {/* prompt class created by me, butI dont think its necessary */}
        <div className="mt-5 flex justify-between items-center gap-2 ">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full object-cover bg-[#04275eb2] flex justify-center items-center text-red-500 text-xs font-bold">
              {name[0]}
            </div>
            <p className="text-white text-sm uppercase">{name}</p>
          </div>
          <button
            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="outline-none bg-transparent border-none"
          >
            {/* <img
              src={download}
              alt="download"
              className="w-8 h-8 object-contain invert"
            /> */}
            <FiDownload className="text-yellow-400 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

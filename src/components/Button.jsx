import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button className="flex items-center justify-center gap-2 py-4 leading-none text-white duration-300 border rounded-full hover:bg-red-500/90 hover:font-[500] group px-7 border-coral-red font-montserrat bg-coral-red">
      {label}
      <img
        src={iconURL}
        alt=""
        className="ml-2 transition-all rounded-full group-hover:rotate-[360deg] group-hover:scale-150 duration-500 size-5"
      />
    </button>
  );
};

export default Button;

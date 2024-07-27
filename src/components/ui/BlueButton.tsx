import React from "react";

const BlueButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="text-16-500 flex justify-center items-center gap-2 rounded-[4px] bg-blue-1 px-[24px] py-[14px] text-white">
      {children}
    </button>
  );
};

export default BlueButton;

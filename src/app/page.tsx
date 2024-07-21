import Image from "next/image";
import React from "react";

export default function Home({ children } : { children : React.ReactNode }) {
  return (
    <main className="w-screen min-h-screen flex bg-light-2">
      <div className="w-60 bg-blue-2">
        <img className="m-[32px]" src="/logo pacific 1.png" alt="pacific hunt logo" />

        <div></div>
      </div>

      <div className="flex-grow">
        <div className="bg-blue-2 h-[80px] flex justify-end"></div>

        <div>Configurations</div>
      </div>
    </main>
  );
}

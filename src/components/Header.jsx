import React from "react";

export default function Header() {
  return (
    <header className="mb-12 md:flex md:justify-between">
      <h1 className="text-3xl font-serif md:text-5xl lg:text-6xl">
        The creative crew
      </h1>
      <div className="mt-4 px-5 md:w-[50%] md:pl-25 md:px-0">
        <h2 className="text-xl font-semibold text-[18px] lg:text-[22px]">
          Who we are
        </h2>
        <p className="max-w-md text-[14px] md:text-[18px] lg:text-[22px]">
          We are team of creatively diverse, driven, innovative individuals
          working in various locations from the world.
        </p>
      </div>
    </header>
  );
}

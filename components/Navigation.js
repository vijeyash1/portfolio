import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div className="sticky top-0 z-20 py-2 bg-blue-800 md:py-6 md:mb-6 dark:bg-blue-800">
      <div className="container px-4 mx-auto lg:max-w-4xl flex items-center justify-between">
        <Link href="/">
          <a
            className={
              "font-medium tracking-wider transition-colors text-white hover:text-sky-500 uppercase dark:text-white"
            }
          >
            Vijeyash
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;

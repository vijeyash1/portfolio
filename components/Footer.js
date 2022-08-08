import React from "react";

const Footer = () => {
  return (
    <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
      <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
        <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
        <div className="flex flex-col justify-between lg:flex-row items-center">
          <p>Built with Next.js, Tailwind and Vercel</p>
          <div className="flex flex-wrap pt-2 sm:space-x-4 space-x-2 font-medium lg:pt-0">
            <a
              href="https://wa.me/918489635967?text="
              className={"transition-colors hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              Whatsapp
            </a>
            <a
              href="https://www.linkedin.com/in/vijey-deepan-b70305225"
              className={"transition-colors hover:text-yellow-500"}
              target="https://www.linkedin.com/in/vijey-deepan-b70305225"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/vijeyash1"
              className={"transition-colors hover:text-yellow-500"}
              target="https://github.com/vijeyash1"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://medium.com/@vijeshomen"
              className={"transition-colors hover:text-yellow-500"}
              target="https://medium.com/@vijeshomen"
              rel="noreferrer"
            >
              Medium
            </a>
            <a
              href="#"
              className={"transition-colors hover:text-yellow-500"}
              target="vijeyash@gmail.com"
              rel="noreferrer"
            >
              GMail
            </a>
            <a
              href="#"
              className={"transition-colors hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              Hashnode
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

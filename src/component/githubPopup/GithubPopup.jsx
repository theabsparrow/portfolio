"use client";

import { config } from "@/config";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const GithubPopup = ({
  title,
  description,
  setModalIndex,
  modalIndex,
  time,
}) => {
  const modalRef = useRef(null);
  const [secondsLeft, setSecondsLeft] = useState(time);
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalIndex(null);
      }
    };
    if (modalIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalIndex]);

  return (
    <>
      <section className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.7)] dark:bg-[rgba(255,255,255,0.2)] flex justify-center items-center">
        <div
          ref={modalRef}
          className="relative bg-[#c9c9ff] dark:bg-[#05092e] rounded-xl shadow-lg p-6 w-[90%] md:w-[25%] animate-fadeIn flex flex-col items-center justify-center space-y-4"
        >
          <button
            onClick={() => setModalIndex(null)}
            className="absolute top-2 right-3 text-lg cursor-pointer"
          >
            {" "}
            <RxCross1 />
          </button>
          <p className="p-2 bg-blue-950/40 rounded-full border border-blue-400 ">
            {" "}
            <FaGithub className="text-blue-800  text-4xl" />
          </p>
          <h1 className="text-xl font-medium dark:text-white text-black">
            {title}
          </h1>
          <p className=" dark:text-[rgba(255,255,255,0.7)] text-center text-gray-700 font-normal">
            {description}
          </p>
          <Link
            href={`${config.my_github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-md shadow-md hover:opacity-90 transition w-full flex items-center justify-center"
          >
            Follow on Github
          </Link>

          <p>Closing in {secondsLeft} seconds</p>
        </div>
      </section>
    </>
  );
};

export default GithubPopup;

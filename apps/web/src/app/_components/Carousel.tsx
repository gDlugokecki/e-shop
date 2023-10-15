"use client";
import Image from "next/image";
import React, { useState } from "react";
import clsx from "clsx";

type Props = {
  slides: any[];
};

const Carousel = ({ slides }: Props) => {
  const [current, setCurrent] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const nextSlide = () => {
    setDisabled(true);
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setDisabled(true);
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div
      id="carouselExampleCaptions"
      className="relative carousel"
      data-te-carousel-init
      data-te-ride="carousel"
    >
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
        data-te-carousel-indicators
      >
        {slides.map((_, index) => {
          return (
            <button
              key={index}
              type="button"
              className={clsx(
                "mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 opacity-50 transition-opacity duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
                { "!opacity-100": current === index }
              )}
              aria-current="true"
              aria-label={`Slide ${index}`}
              onClick={() => setCurrent(index)}
            />
          );
        })}
      </div>

      <div className="slides-container relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {slides.map((slide, index) => {
          return (
            <div
              key={index}
              className={clsx(
                "relative float-left w-full -mr-[100%] slide",
                {
                  in: index === current,
                },
                {
                  "translate-x-full":
                    index === (current - 1 + slides.length) % slides.length,
                },
                { "-translate-x-full": index === (current + 1) % slides.length }
              )}
              onTransitionEnd={() => setDisabled(false)}
            >
              <img src={slide.url} className="block w-full" alt="..." />
              <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                <h5 className="text-xl">{slide.text}</h5>
                <p>{slide.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none cursor-pointer"
        type="button"
        onClick={prevSlide}
        disabled={disabled}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none cursor-pointer"
        type="button"
        onClick={nextSlide}
        disabled={disabled}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
  );
};

export default Carousel;

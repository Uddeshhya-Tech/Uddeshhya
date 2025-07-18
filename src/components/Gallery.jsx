"use client";
// import  { useState, useRef, useEffect } from "react";
import G1 from "../assets/Gallery/G01.jpg";
import G2 from "../assets/Gallery/G02.jpg";
import G3 from "../assets/Gallery/G03.jpg";
import G4 from "../assets/Gallery/G04.jpg";
import G5 from "../assets/Gallery/G05.jpg";
import G6 from "../assets/Gallery/G06.jpg";
import G7 from "../assets/Gallery/WhatsApp Image 2024-07-23 at 11.55.36 PM.jpeg";
import G8 from "../assets/Gallery/G08.jpg";
import G9 from "../assets/Gallery/G09.jpg";
import G10 from "../assets/Gallery/G10.jpg";
import G11 from "../assets/Gallery/G11.jpg";
import G12 from "../assets/Gallery/G12.jpg";
import G13 from "../assets/Gallery/G13.jpg";
import G14 from "../assets/Gallery/G14.jpg";
import G15 from "../assets/Gallery/G15.jpg";
import G16 from "../assets/Gallery/G16.jpg";
import G17 from "../assets/Gallery/20231110_213627(0).jpg";
import G18 from "../assets/Gallery/G18.jpg";
import G19 from "../assets/Gallery/WhatsApp Image 2024-07-23 at 11.55.39 PM.jpeg";
import G20 from "../assets/Gallery/IMG20231109171127.jpg";
import G21 from "../assets/Gallery/G21.jpg";
import G22 from "../assets/Gallery/G22.jpg";
import G23 from "../assets/Gallery/G23.jpg";
import G24 from "../assets/Gallery/G24.jpg";
import { LayoutGrid } from "./ui/Grid";

export default function LayoutGridDemo() {
  return (
    <div className=" w-full">
      <div className="h-screen">
        <LayoutGrid cards={cards_6} />
      </div>
      <div className="h-screen">
        <LayoutGrid cards={cards_1} />
      </div>
      <div className="h-screen">
        <LayoutGrid cards={cards_2} />
      </div>
      <div className="h-screen">
        <LayoutGrid cards={cards_3} />
      </div>
      <div className="h-screen">
        <LayoutGrid cards={cards_4} />
      </div>
      <div className="h-screen">
        <LayoutGrid cards={cards_5} />
      </div>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards_1 = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: G1,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: G2,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: G3,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 fit-content",
    thumbnail: G4,
  },
];

const cards_2 = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: G5,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: G6,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: G7,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 fit-content",
    thumbnail: G8,
  },
];
const cards_3 = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: G9,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: G10,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: G12,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 fit-content",
    thumbnail: G11,
  },
];
const cards_4 = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: G13,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: G14,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: G15,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 fit-content",
    thumbnail: G16,
  },
];
const cards_5 = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: G17,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: G18,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: G19,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 fit-content",
    thumbnail: G20,
  },
];
const cards_6 = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: G21,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: G22,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: G23,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 fit-content",
    thumbnail: G24,
  },
];

// // "use client";
// // import React from "react";
// // import A from "../assets/Gallery/A.jpg";
// // importA from "../assets/Gallery/G26.jpg";
// // import A from "../assets/Gallery/A.jpg";
// // import A from "../assets/Gallery/A.jpg";

// import A from "../assets/Alumini/20150411_140935.jpg";
// import A1 from "../assets/Alumini/_DSC0037.JPG";
// import A2 from "../assets/Alumini/_DSC0248.JPG";
// import A3 from "../assets/Alumini/Alumni Meet-2015.jpg";
// import A4 from "../assets/Alumini/Alumni Meet-2018.JPG";
// import A5 from "../assets/Alumini/Alumni Meet-2019.JPG";
// import A6 from "../assets/Alumini/DSC_0906.JPG";
// import A7 from "../assets/Alumini/DSC_0907.JPG";
// import A8 from "../assets/Alumini/DSC_0911.JPG";
// import A9 from "../assets/Alumini/DSC_0913.JPG";
// import A10 from "../assets/Alumini/DSC_0922.JPG";
// import A11 from "../assets/Alumini/DSC_4155.JPG";
// import A12 from "../assets/Alumini/DSC_4158.JPG";
// import A13 from "../assets/Alumini/IMG_0179.JPG";
// import A14 from "../assets/Alumini/IMG_0188.JPG";
// import A15 from "../assets/Alumini/IMG_0201.JPG";
// import A16 from "../assets/Alumini/IMG_7170.JPG";
// import A17 from "../assets/Alumini/IMG_7178.JPG";
// import A18 from "../assets/Alumini/IMG_7185.JPG";
// import A19 from "../assets/Alumini/IMG_7191.JPG";
// import A20 from "../assets/Alumini/IMG_7206.JPG";
// import A21 from "../assets/Alumini/IMG_7211.JPG";
// import A22 from "../assets/Alumini/IMG_9863.JPG";
// import A23 from "../assets/Alumini/IMG_9872.JPG";
// import A24 from "../assets/Alumini/IMG_9883.JPG";
// import A25 from "../assets/Alumini/IMG_9884.JPG";

// import LayoutGrid from "./ui/Grid_Al";

// const LayoutGridDemo = () => {
//   const cards = [
//     {
//       id: 1,
//       content: <SkeletonOne />,
//       className: "md:col-span-2 md:row-span-full",
//       thumbnail: A1,
//     },
//     {
//       id: 2,
//       content: <SkeletonTwo />,
//       className: "col-span-1 md:row-span-10",
//       thumbnail: A2,
//     },
//     {
//       id: 3,
//       content: <SkeletonThree />,
//       className: "col-span-1 md:row-span-10",
//       thumbnail: A3,
//     },
//     {
//       id: 4,
//       content: <SkeletonFour />,
//       className: "md:col-span-2 fit-content md:row-span-10",
//       thumbnail: A4,
//     },
//     {
//       id: 1,
//       content: <SkeletonOne />,
//       className: "md:col-span-2 md:row-span-10",
//       thumbnail: A5,
//     },
//     {
//       id: 2,
//       content: <SkeletonTwo />,
//       className: "col-span-1 md:row-span-10",
//       thumbnail: A6,
//     },
//     {
//       id: 3,
//       content: <SkeletonThree />,
//       className: "col-span-1 md:row-span-10",
//       thumbnail: A7,
//     },
//     {
//       id: 4,
//       content: <SkeletonFour />,
//       className: "md:col-span-2 fit-content md:row-span-10",
//       thumbnail: A8,
//     },
//     {
//       id: 1,
//       content: <SkeletonOne />,
//       className: "md:col-span-2 md:row-span-10",
//       thumbnail: A9,
//     },
//     {
//       id: 2,
//       content: <SkeletonTwo />,
//       className: "col-span-1 md:row-span-10",
//       thumbnail: A10,
//     },
//     {
//       id: 3,
//       content: <SkeletonThree />,
//       className: "col-span-1 md:row-span-10",
//       thumbnail: A11,
//     },
//     {
//       id: 4,
//       content: <SkeletonFour />,
//       className: "md:col-span-2 fit-content md:row-span-10",
//       thumbnail: A12,
//     },
//     {
//       id: 1,
//       content: <SkeletonOne />,
//       className: "md:col-span-2 md:row-span-10",
//       thumbnail: A13,
//     },
//     {
//       id: 2,
//       content: <SkeletonTwo />,
//       className: "col-span-1 md:row-span-10",
//       thumbnail: A14,
//     },
//     {
//       id: 3,
//       content: <SkeletonThree />,
//       className: "col-span-1 md:row-span-10",
//       thumbnail: A15,
//     },
//     {
//       id: 4,
//       content: <SkeletonFour />,
//       className: "md:col-span-2 fit-content md:row-span-10",
//       thumbnail: A16,
//     },
//     {
//       id: 1,
//       content: <SkeletonOne />,
//       className: "md:col-span-2 md:row-span-10",
//       thumbnail: A17,
//     },
//     {
//       id: 2,
//       content: <SkeletonTwo />,
//       className: "col-span-1 md:row-span-10",
//       thumbnail: A18,
//     },
//     {
//       id: 3,
//       content: <SkeletonThree />,
//       className: "col-span-1 md:row-span-10",
//       thumbnail: A19,
//     },
//     {
//       id: 4,
//       content: <SkeletonFour />,
//       className: "md:col-span-2 fit-content md:row-span-10",
//       thumbnail: A20,
//     },
//     {
//       id: 1,
//       content: <SkeletonOne />,
//       className: "md:col-span-2 md:row-span-10",
//       thumbnail: A21,
//     },
//     {
//       id: 2,
//       content: <SkeletonTwo />,
//       className: "col-span-1 md:row-span-10",
//       thumbnail: A22,
//     },
//     {
//       id: 3,
//       content: <SkeletonThree />,
//       className: "col-span-1 md:row-span-10",
//       thumbnail: A23,
//     },
//     {
//       id: 4,
//       content: <SkeletonFour />,
//       className: "md:col-span-2 fit-content md:row-span-10",
//       thumbnail: A24,
//     },
//     {
//       id: 1,
//       content: <SkeletonOne />,
//       className: "md:col-span-2 md:row-span-10",
//       thumbnail: A,
//     },
//     {
//       id: 2,
//       content: <SkeletonTwo />,
//       className: "col-span-1 md:row-span-10",
//       thumbnail: A25,
//     },
//   ];

//   return (
//     <div className="w-full">
//       <div className="">
//         <LayoutGrid cards={cards} />
//       </div>
//     </div>
//   );
// };

// const SkeletonOne = () => {
//   return (
//     <div>
//       <p className="font-bold text-4xl text-white">2014 Batch</p>
//       <p className="font-normal text-base text-white"></p>
//       {/* <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         A serene and tranquil retreat, this house in the woods offers a peaceful
//         escape from the hustle and bustle of city life.
//       </p> */}
//     </div>
//   );
// };

// const SkeletonTwo = () => {
//   return (
//     <div>
//       <p className="font-bold text-4xl text-white">2014 Batch</p>
//       <p className="font-normal text-base text-white"></p>
//       {/* <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         Perched high above the world, this house offers breathtaking views and a
//         unique living experience. Its a place where the sky meets home, and
//         tranquility is a way of life.
//       </p> */}
//     </div>
//   );
// };

// const SkeletonThree = () => {
//   return (
//     <div>
//       <p className="font-bold text-4xl text-white">2014 Batch</p>
//       <p className="font-normal text-base text-white"></p>
//       {/* <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         A house surrounded by greenery and natures beauty. Its the perfect
//         place to relax, unwind, and enjoy life.
//       </p> */}
//     </div>
//   );
// };

// const SkeletonFour = () => {
//   return (
//     <div>
//       <p className="font-bold text-4xl text-white">2014 Batch</p>
//       <p className="font-normal text-base text-white"></p>
//       {/* <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         A house by the river is a place of peace and tranquility. Its the
//         perfect place to relax, unwind, and enjoy life.
//       </p> */}
//     </div>
//   );
// };

// export default LayoutGridDemo;

"use client";
import A1 from "../assets/Alumini/_DSC0037.JPG";
import A2 from "../assets/Alumini/_DSC0248.JPG";
import A3 from "../assets/Alumini/Alumni Meet-2015.jpg";
import A4 from "../assets/Alumini/Alumni Meet-2018.JPG";
import A5 from "../assets/Alumini/Alumni Meet-2019.JPG";
import A6 from "../assets/Alumini/WhatsApp Image 2024-07-23 at 11.53.13 PM (1).jpeg";
import A7 from "../assets/Alumini/WhatsApp Image 2024-07-23 at 11.53.13 PM.jpeg";
import A8 from "../assets/Alumini/DSC_0911.JPG";
import A9 from "../assets/Alumini/DSC_0913.JPG";
import A10 from "../assets/Alumini/DSC_0922.JPG";
import A11 from "../assets/Alumini/DSC_4155.JPG";
import A12 from "../assets/Alumini/DSC_4158.JPG";
import A13 from "../assets/Alumini/IMG_0179.JPG";
import A14 from "../assets/Alumini/IMG_0188.JPG";
import A15 from "../assets/Alumini/IMG_0201.JPG";
import A16 from "../assets/Alumini/IMG_7170.JPG";
import A17 from "../assets/Alumini/IMG_7178.JPG";
import A18 from "../assets/Alumini/IMG_7185.JPG";
import A19 from "../assets/Alumini/IMG_7191.JPG";
import A20 from "../assets/Alumini/IMG_7206.JPG";
import A21 from "../assets/Alumini/IMG_7211.JPG";
import A22 from "../assets/Alumini/WhatsApp Image 2024-07-23 at 11.53.12 PM.jpeg";
import A23 from "../assets/Alumini/IMG_9872.JPG";
import A24 from "../assets/Alumini/IMG_9883.JPG";
// import A25 from "../assets/Alumini/IMG_9884.JPG";
import { LayoutGrid } from "./ui/Grid2";

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
    thumbnail: A1,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: A2,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: A3,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 fit-content",
    thumbnail: A4,
  },
];

const cards_2 = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: A5,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: A6,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: A7,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 fit-content",
    thumbnail: A8,
  },
];
const cards_3 = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: A9,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: A10,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: A12,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 fit-content",
    thumbnail: A11,
  },
];
const cards_4 = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: A13,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: A14,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: A15,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 fit-content",
    thumbnail: A16,
  },
];
const cards_5 = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: A17,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: A18,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: A19,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 fit-content",
    thumbnail: A20,
  },
];
const cards_6 = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: A21,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: A22,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: A23,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 fit-content",
    thumbnail: A24,
  },
];

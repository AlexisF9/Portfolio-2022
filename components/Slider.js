import { useState } from "react";

export default function Slider({ pictures }) {
  const [indexPicture, setIndexPicture] = useState(0);

  const indexPictures = (e, max) => {
    const newIndex = indexPicture + e;
    if (newIndex < 0 || newIndex > max) {
      return;
    } else {
      setIndexPicture(newIndex);
    }
  };

  return (
    <div className="relative ">
      <div className="flex top-[-1.5rem] absolute items-center z-10">
        {pictures.map((item, i) => {
          return (
            <span
              key={item.id}
              className={`rounded-full h-2 w-16 mr-3 cursor-pointer ease-in-out duration-300 ${
                indexPicture === i ? "bg-[#1b262c]" : "bg-slate-300"
              }`}
              onClick={() => setIndexPicture(i)}
            ></span>
          );
        })}
        {/* <button
          onClick={() => indexPictures(-1, pictures.length - 1)}
          className="material-symbols-outlined rotate-180	text-[40px]"
        >
          trending_flat
        </button>
        <button
          onClick={() => indexPictures(+1, pictures.length - 1)}
          className="material-symbols-outlined text-[40px]"
        >
          trending_flat
        </button> */}
      </div>
      <div className="shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] w-full flex overflow-hidden flex-nowrap ">
        {pictures.map((item, i) => {
          return (
            <img
              key={i}
              className="h-full ease-in-out duration-300"
              style={{
                transform: `translateX(-${indexPicture * 100}%)`,
              }}
              src={"http://localhost:3000" + item.img}
            />
          );
        })}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";

export default function Slider({ pictures }) {
  const [indexPicture, setIndexPicture] = useState(0);

  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    let timer = null;

    if (autoSlide) {
      timer = setTimeout(() => {
        if (indexPicture === 2) {
          setIndexPicture(0);
        } else {
          setIndexPicture(indexPicture + 1);
        }
      }, 4000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [indexPicture]);

  return (
    <div className="relative ">

      {pictures.length === 1 
      ? 
        <div className="shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] w-full flex overflow-hidden flex-nowrap">
          <img
            className="h-full ease-in-out duration-300"
            src={pictures[0].img}
            alt="image"
          />
        </div>
      : 
      <>
        <div className="flex top-[-1.5rem] absolute items-center z-10">
          {pictures.map((item, i) => {
            return (
              <span
                key={item.id}
                className={`rounded-full h-2 w-16 mr-3 cursor-pointer ease-in-out duration-300 ${
                  indexPicture === i ? "bg-[#1b262c]" : "bg-slate-300"
                }`}
                onClick={() => {
                  setAutoSlide(false);
                  setIndexPicture(i);
                }}
              ></span>
            );
          })}
        </div>
        <div className="shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)] w-full flex overflow-hidden flex-nowrap ">
          {pictures.map((item, index) => {
            return (
              <img
                key={index}
                className="h-full ease-in-out duration-300"
                style={{
                  transform: `translateX(-${indexPicture * 100}%)`,
                }}
                src={item.img}
                alt={"image" + index}
              />
            );
          })}
        </div>
      </>}

      
    </div>
  );
}

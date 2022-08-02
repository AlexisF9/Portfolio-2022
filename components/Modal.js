import { createRef, useEffect } from "react";
import { gsap } from "gsap";
import Slider from "./Slider";

export default function Modal({ rea, open, setModal }) {
  const modal = createRef();

  const tl = gsap.timeline({ ease: "power1.out" });

  useEffect(() => {
    tl.to(modal.current, 1, {
      clipPath: "circle(142% at 100% 0)",
    });
  }, [open]);

  return (
    <div
      ref={modal}
      className="relative min-h-[100vh] flex flex-col bg-white items-center"
    >
      <button
        onClick={() => {
          setModal(null);
        }}
        className="material-symbols-outlined fixed top-4 right-4 lg:top-20 lg:right-20 text-[40px]	"
      >
        close
      </button>
      <div className="p-0 w-[90%]">
        <h2 className="text-start lg:text-center font-[NewYork] text-6xl h-[30vh] lg:h-[25vh] flex lg:justify-center items-center">
          {rea.title}
        </h2>
        <div className="lg:flex">
          <Slider pictures={rea.picture} />
          <div className="pl-0 lg:pl-10">
            <p className="lg:my-0 my-10 lg:min-w-[500px]">{rea.description}</p>

            <ul className="flex lg:mt-8 mt-0">
              {rea.tags.map((item, i) => {
                return (
                  <li
                    className="mr-2 border border-black rounded-md w-max px-2 py-1"
                    key={i}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

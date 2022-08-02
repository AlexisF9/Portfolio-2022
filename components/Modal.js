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
        className="material-symbols-outlined fixed top-4 right-4 md:top-20 md:right-20 text-[40px]	"
      >
        close
      </button>
      <div className="p-0 w-[90%] lg:w-[80%]">
        <h2 className=" text-center font-[NewYork] text-6xl h-[30vh] flex justify-center items-center">
          {rea.title}
        </h2>
        <Slider pictures={rea.picture} />
        <p className="my-10">{rea.description}</p>
      </div>
    </div>
  );
}

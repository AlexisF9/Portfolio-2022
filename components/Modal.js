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
      className="relative h-[100vh] p-8 lg:h-auto flex flex-col bg-white items-center"
    >
      <button
        onClick={() => {
          setModal(null);
        }}
        className="material-symbols-outlined fixed top-4 right-4 md:top-20 md:right-20 text-5xl	"
      >
        close
      </button>
      <div className="lg:h-[100vh] p-0">
        <h2 className=" text-center font-[NewYork] text-6xl h-[30vh] flex justify-center items-center">
          {rea.title}
        </h2>
        <Slider pictures={rea.picture} />
        {/* <img src={rea.picture[0].img} className="lg:h-[70vh] shadow-lg" /> */}
      </div>

      <div className="my-10 p-0">
        <p>{rea.description}</p>
      </div>
    </div>
  );
}

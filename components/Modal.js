import { createRef, useEffect } from "react";
import { gsap } from "gsap";
import Slider from "./Slider";
import Link from "next/link";

export default function Modal({ rea, open, setModal }) {
  const modal = createRef();
  const title = createRef();
  const content = createRef();

  const overlay = createRef();

  const tl = gsap.timeline({ ease: "power1.out" });

  useEffect(() => {
    tl.to(modal.current, 1, {
      clipPath: "circle(142% at 100% 0)",
    });
    tl.to(overlay.current, 0.5, {
      opacity: 1,
      transform: "translateY(0)",
    });
    tl.to(title.current, 0.5, {
      transform: "translateY(0)",
      opacity: 1,
    });
    tl.to(content.current, 0.5, {
      transform: "scale(1)",
      opacity: 1,
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
        className="z-10 material-symbols-outlined fixed top-4 right-4 md:top-20 md:right-20 text-[40px]	"
      >
        close
      </button>
      <div className="p-0 w-[90%] md:w-[80%]">
        {rea.url_repo === null ? (
          <h2
            ref={title}
            className="opacity-0 translate-y-4 text-start md:text-center font-[NewYork] text-4xl md:text-6xl h-[30vh] flex md:justify-center items-center"
          >
            {rea.title}{" "}
          </h2>
        ) : (
          <h2
            ref={title}
            className="opacity-0 translate-y-4 text-start md:text-center font-[NewYork] text-4xl md:text-6xl h-[30vh] flex md:justify-center items-center"
          >
            {rea.title}{" "}
            <Link href={rea.url_repo}>
              <a target="_blank">
                <sup>
                  <span className="material-symbols-outlined">open_in_new</span>
                </sup>
              </a>
            </Link>
          </h2>
        )}

        <div ref={content} className="opacity-0 scale-90">
          <Slider pictures={rea.picture} />
          <p className="mt-10 md:min-w-[30%]">{rea.description}</p>

          <ul className="flex mt-5 mb-20">
            {rea.tags.map((item, index) => {
              return (
                <li
                  className="mr-2 border border-black rounded-md w-max px-2 py-1"
                  style={
                    item === "NextJS" ? 
                    {backgroundColor: "black", color: "white"} 
                    : item === "ReactJS" ? 
                    {backgroundColor: "#61DBFB", borderColor: "#61DBFB"} 
                    : item === "VueJS" ? 
                    {backgroundColor: "#41B883", borderColor: "#41B883"} 
                    : {backgroundColor: "transparent"}
                  }                                           
                  key={index}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

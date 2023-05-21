import Link from "next/link";
import { gsap } from "gsap";
import { createRef, useEffect, useState } from "react";
import Modal from "../components/Modal";
import data from "../public/data.json";

import github from "../public/logos/github.png";
import linkedin from "../public/logos/linkedin.png";
import next from "../public/logos/next-logo.png";
import react from "../public/logos/react.png";

import { AppImage } from "../components/Image";

export default function Home({ realisations }) {
  const [modal, setModal] = useState(null);
  const [infoModal, setInfoModal] = useState(true);

  const intro = createRef();
  const introContent = createRef();
  const rea = createRef();
  const listeRea = createRef();

  const title = createRef();
  const content = createRef();

  const tl = gsap.timeline({ ease: "power1.out" });

  function handleClick() {
    tl.to(introContent.current, 0.8, {
      opacity: 0,
      pointerEvents: "none",
    });
    tl.to(intro.current, 1, {
      width: "0px",
    });
    tl.to(rea.current, 1, {
      width: "100%",
    });
    tl.to(listeRea.current, 0, {
      height: "100vh",
    });
    tl.to(listeRea.current, 1, {
      opacity: 1,
      transform: "translate(0)",
      pointerEvents: "initial",
    });
  }

  const tr = gsap.timeline({ ease: "power1.out" });

  useEffect(() => {
    tr.to(intro.current, 1, {
      opacity: 1,
    });
    tr.to(title.current, 0.5, {
      opacity: 1,
      transform: "translateY(0)",
    });
    gsap.to(content.current, { opacity: 1, duration: 0.8, delay: 2 });
  }, [tr, intro, content, title]);

  return (
    <main className="flex h-[100vh] w-full">
      <div
        ref={intro}
        className="relative opacity-0 w-full md:w-[70%] h-full flex flex-col bg-white justify-center items-center text-center"
      >
        <div ref={introContent}>
          {infoModal && (
            <div className="fixed bottom-0 right-0 md:right-[30%] z-50 p-4">
              <div className="relative w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-[#1b262c]">
                  <button
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    onClick={() => setInfoModal(false)}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <div className="p-6 text-center">
                    <svg
                      aria-hidden="true"
                      className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <h3 className="mb-3 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Dernière mise à jours des réalisations : décembre 2022
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          )}

          <h1
            ref={title}
            className="opacity-0 -translate-y-10 font-[NewYork] text-7xl md:text-7xl lg:text-8xl"
          >
            Alexis Flacher
          </h1>

          <div ref={content} className="opacity-0">
            <p
              className="pr-4 mx-auto md:mx-0 relative group w-max mt-2 cursor-pointer uppercase hover:tracking-wider ease-in-out duration-700"
              onClick={() => handleClick()}
            >
              <span className="absolute right-0 group-hover:w-full ease-in-out duration-500 w-2.5 h-0.5 top-2/4 bg-cyan-500"></span>
              Liste de mes réalisations
            </p>

            <div className="absolute flex right-10 top-10 md:flex-row flex-col">
              <Link href="https://github.com/AlexisF9">
                <a target="_blank" className="md:mr-4 md:mb-0 mb-5 w-10">
                  <AppImage src={github} className="w-10" alt="logo GitHub" />
                </a>
              </Link>
              <Link href="https://www.linkedin.com/in/alexis-flacher-772ba7197/">
                <a target="_blank" className="w-10">
                  <AppImage
                    src={linkedin}
                    className="w-10"
                    alt="logo LinkedIn"
                  />
                </a>
              </Link>
            </div>

            <Link href="https://github.com/AlexisF9">
              <a>
                <p className="text-start w-[50%] md:w-auto flex md:flex-row flex-col md:items-center absolute top-10 left-10">
                  Développeur Front-end
                  <AppImage
                    src={react}
                    className="md:ml-2 ml-0 md:mt-0 mt-2 w-8"
                    alt="logo ReactJS"
                  />
                  <AppImage
                    src={next}
                    className="md:ml-2 ml-0 md:mt-0 mt-2 w-12"
                    alt="logo NextJS"
                  />
                </p>
              </a>
            </Link>

            <Link href="../alexis-flacher-CV.pdf">
              <a className="absolute left-10 bottom-20">Télécharger mon CV</a>
            </Link>

            <Link href="mailto:alexis.flacher38@gmail.com">
              <a className="absolute left-10 bottom-10">
                alexis.flacher38@gmail.com
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div
        ref={rea}
        className="w-0 md:w-[30%] h-full flex flex-col bg-fixed items-center justify-center"
      >
        <div
          ref={listeRea}
          className="h-0 opacity-0 pointer-events-none translate-y-[100%] flex flex-col w-full  items-center overflow-y-scroll"
        >
          {realisations.map((item, index) => {
            return (
              <div
                key={index}
                className="cursor-pointer	p-6 md:p-0 relative group snap-always w-full md:min-h-[50vh] min-h-[100vh]"
                onClick={() => {
                  setModal(item.id - 1);
                }}
              >
                <div className="w-full flex flex-col absolute top-2/4 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10 text-center  pointer-events-none text-white">
                  <p className=" group-hover:tracking-wider ease-in-out duration-500 tracking-normal font-[NewYork] md:text-5xl	text-4xl ">
                    {item.title}
                  </p>
                  <p className="mt-3 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:opacity-0 md:translate-y-4 ease-in-out duration-500 uppercase md:text-lg text-sm">
                    {item.subtitle}
                  </p>
                </div>

                <AppImage
                  className="opacity-20 scale-100 translate-y-0 md:group-hover:opacity-20 md:group-hover:scale-100 md:group-hover:translate-y-0 md:translate-y-7 ease-in-out[cubic-bezier(.42,0,0,1.15)] duration-500 h-full w-full object-cover	object-center	 md:opacity-0 md:scale-90	mx-auto	"
                  src={item.picture[0].img}
                  alt={"image" + index}
                  widthImg="1920px"
                  heightImg="1080px"
                />
              </div>
            );
          }, [])}
        </div>

        {modal != null && (
          <div className="absolute inset-0 z-30">
            <Modal setModal={setModal} open={true} rea={realisations[modal]} />
          </div>
        )}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  return { props: { realisations: data } };
}

import Link from "next/link";
import { gsap } from "gsap";
import { createRef, useEffect, useState } from "react";
import Modal from "../components/Modal";

export default function Home({ realisations }) {
  const [modal, setModal] = useState(null);

  const intro = createRef();
  const introContent = createRef();
  const rea = createRef();
  const listeRea = createRef();

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
    tr.to(introContent.current, 0.8, {
      opacity: 1,
    });
  }, []);

  return (
    <main className="flex h-[100vh]">
      <div
        ref={intro}
        className="relative opacity-0 w-full md:w-[70%] min-h-full flex flex-col bg-white justify-center items-center text-center"
      >
        <div ref={introContent} className="opacity-0">
          <h1 className="font-[NewYork] text-7xl md:text-7xl lg:text-8xl">
            Alexis Flacher
          </h1>
          <p
            className="pr-4 mx-auto md:mx-0 relative group w-max mt-2 cursor-pointer uppercase hover:tracking-wider ease-in-out duration-700"
            onClick={() => handleClick()}
          >
            <span className="absolute right-0 group-hover:w-full ease-in-out duration-500 w-2.5 h-0.5 top-2/4 bg-cyan-500"></span>
            Liste de mes réalisations
          </p>

          <div className="absolute flex right-10 top-10 md:flex-row flex-col ">
            <Link href="https://github.com/AlexisF9">
              <a target="_blank" className="md:mr-4 md:mb-0 mb-5">
                <img className="w-10" src="/logos/github.png" />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/alexis-flacher-772ba7197/">
              <a target="_blank">
                <img className="w-10" src="/logos/linkedin.png" />
              </a>
            </Link>
          </div>

          <Link href="https://www.tbwa-paris.com/fr">
            <a>
              <p className="w-[50%] md:w-auto flex md:flex-row flex-col md:items-center absolute top-10 left-10">
                Développeur frontend chez TBWA\Paris{" "}
                <img
                  src="/logos/tbwa.jpg"
                  className="md:ml-2 ml-0 md:mt-0 mt-2 w-8 h-8"
                />
              </p>
            </a>
          </Link>
          <p className="absolute left-10 bottom-10">
            alexis.flacher38@gmail.com
          </p>
        </div>
      </div>

      <div
        ref={rea}
        className="w-0 md:w-[30%] min-h-full flex flex-col bg-fixed items-center justify-center"
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

                <img
                  src={item.picture[0].img}
                  className="opacity-20 scale-100 translate-y-0 md:group-hover:opacity-20 md:group-hover:scale-100 md:group-hover:translate-y-0 md:translate-y-7 ease-in-out[cubic-bezier(.42,0,0,1.15)] duration-500 h-full w-full object-cover	object-center	 md:opacity-0 md:scale-90	mx-auto	"
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

export async function getServerSideProps() {
  // appel du json pour rendre le contenu dynamique
  const urlServ =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://portfolio-2022-liard.vercel.app/";
  const res = await fetch(`${urlServ}/data.json`);
  const realisations = await res.json();

  return {
    props: {
      realisations,
    },
  };
}

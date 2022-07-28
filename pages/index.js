import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";

export default function Home({ realisations }) {
  return (
    <div className="scroll-smooth">
      <Head>
        <title>Alexis Flacher - Portfolio</title>
        <meta
          name="description"
          content="Bienvenue sur mon portfolio. Je suis développeur frontend et ici je vous partages mes réalisations !"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col	w-full h-[100vh] items-center overflow-y-scroll">
        {/* snap-y snap-proximity */}
        {realisations.map((item, index) => {
          return (
            // snap-center
            <div
              key={index}
              className="relative group snap-always w-full min-h-[50vh]"
            >
              <Link href={"/realisation/" + item.id}>
                <a>
                  <div className="flex flex-col absolute top-2/4 left-1/2 translate-x-[-50%] translate-y-[-50%]	z-10 text-center  pointer-events-none text-white">
                    <p className=" group-hover:tracking-wider ease-in-out duration-500 tracking-normal font-[NewYork] text-5xl	">
                      {item.title}
                    </p>
                    <p className="mt-3 group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-4 ease-in-out duration-500 uppercase text-lg	">
                      {item.subtitle}
                    </p>
                  </div>

                  <img
                    src={item.picture[0].img}
                    className="group-hover:opacity-20 group-hover:scale-100 group-hover:translate-y-0 translate-y-7 ease-in-out[cubic-bezier(.42,0,0,1.15)] duration-500 h-full w-full object-cover	object-center	 opacity-0 scale-90	mx-auto	"
                  />
                </a>
              </Link>
            </div>
          );
        }, [])}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  // appel du json pour rendre le contenu dynamique
  const urlServ =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://portfolio-tau-tawny.vercel.app/";
  const res = await fetch(`${urlServ}/data.json`);
  const realisations = await res.json();

  return {
    props: {
      realisations,
    },
  };
}

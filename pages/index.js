import Head from "next/head";
import Link from "next/link";

export default function Home({ realisations }) {
  return (
    <div>
      <Head>
        <title>Alexis Flacher - Portfolio</title>
        <meta
          name="description"
          content="Bienvenue sur mon portfolio. Je suis développeur frontend et ici je vous partages mes réalisations !"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col	w-full items-center ">
        {realisations.map((item, index) => {
          return (
            <div
              key={index}
              className="h-[50vh] snap-center	 relative group w-full"
            >
              <Link href="/">
                <a>
                  <div className="flex flex-col absolute top-2/4 left-1/2 translate-x-[-50%] translate-y-[-50%]	z-10 text-center text-white uppercase">
                    <p className=" group-hover:tracking-wider ease-in-out duration-500 tracking-normal  font-[Italiana] text-6xl  font-bold	">
                      {item.title}
                    </p>
                    <p className="mt-3 group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-4	ease-in-out duration-500">
                      {item.subtitle}
                    </p>
                  </div>

                  <img
                    src={item.img}
                    className="group-hover:opacity-30 group-hover:scale-100 group-hover:translate-y-0 translate-y-7 ease-in-out[cubic-bezier(.42,0,0,1.15)] duration-500 h-full w-full object-cover	object-center	 opacity-0 scale-90	mx-auto	shadow-slate-800	shadow-2xl"
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

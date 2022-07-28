import { useEffect } from "react";
import Gallery from "../../components/Gallery";

export default function Realisation({ rea }) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[100vh]">
        <h2 className="text-white text-center font-[NewYork] text-6xl h-[30vh] flex justify-center items-center">
          {rea.title}
        </h2>
        <Gallery picture={rea.pictures} />
        <img src={rea.picture[0].img} className="h-[70vh]" />
      </div>

      <p>{rea.description}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  // appel du json pour rendre le contenu dynamique
  const urlServ =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://portfolio-2022-liard.vercel.app/";
  const res = await fetch(`${urlServ}/data.json`);
  const realisations = await res.json();

  const rea = realisations[params.id - 1];

  return {
    props: {
      rea,
    },
  };
}

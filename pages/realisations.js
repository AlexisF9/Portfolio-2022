import Link from "next/link";

export default function Realisations({ realisations }) {
  return (
    <div className="flex flex-col	w-full h-[100vh] items-center overflow-y-scroll">
      {/* snap-y snap-proximity */}
      {realisations.map((item, index) => {
        return (
          // snap-center
          <div
            key={index}
            className="p-6 md:p-0 relative group snap-always w-full md:min-h-[50vh] min-h-[100vh]"
          >
            <Link href={"/realisation/" + item.id}>
              <a>
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
              </a>
            </Link>
          </div>
        );
      }, [])}
    </div>
  );
}

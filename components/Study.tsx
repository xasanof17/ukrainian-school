import Image from "next/image";

type Data = {
  src: string;
  title: string;
};

const data: Data[] = [
  {
    src: "/assets/icons/icon1.svg",
    title: "Учителi",
  },
  {
    src: "/assets/icons/icon2.svg",
    title: "Гуртки",
  },
  {
    src: "/assets/icons/icon3.svg",
    title: "Традиції",
  },
  {
    src: "/assets/icons/icon4.svg",
    title: "Спортивні секції",
  },
  {
    src: "/assets/icons/icon5.svg",
    title: "Розташування",
  },
  {
    src: "/assets/icons/icon6.svg",
    title: "Пiдтримка учнiв",
  },
];

const Study = () => {
  return (
    <section id="study" className="my-[10%] overflow-x-hidden">
      <div className="container">
        <div className="flex flex-col space-y-10 sm:space-y-20 xl:space-y-[130px]">
          <div className="flex items-center justify-start">
            <h2 className="title w-full max-w-[300px]">
              Навчання в нашiй школi
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-9 md:grid-cols-3 lg:grid-cols-6">
            {data.map(({ src, title }, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-start space-y-6 md:space-y-9"
              >
                <div className="flex items-center justify-center rounded-full border-2 border-secondary p-6">
                  <div className="relative h-[40px] w-[40px] sm:h-[67px] sm:w-[67px]">
                    <Image src={src} alt={`${title} icon`} fill priority />
                  </div>
                </div>
                <h3 className="text-center text-base font-extrabold uppercase text-primary md:text-lg">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Study;

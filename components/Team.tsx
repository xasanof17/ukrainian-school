import Image from "next/image";

const data = [
  {
    image: "https://school-78.kiev.ua/wp-content/uploads/2019/10/admin1.jpg",
    name: "ГАЄВА СВІТЛАНА ЛЕОНТІЇВНА",
    occ: "ДИРЕКТОР",
  },
  {
    image:
      "https://school-78.kiev.ua/wp-content/uploads/2020/01/1545140482155055-2.jpg",
    name: "АВРАМЕНКО НАДІЯ ВАСИЛІВНА",
    occ: "ЗАСТУПНИК ДИРЕКТОРА, УЧИТЕЛЬ МАТЕМАТИКИ",
  },
  {
    image: "https://school-78.kiev.ua/wp-content/uploads/2019/10/admin2.jpg",
    name: "ГОЛОВАНЕВСЬКА МАРГАРИТА ЙОСИПІВНА",
    occ: "ЗАСТУПНИК ДИРЕКТОРА",
  },
  {
    image: "https://school-78.kiev.ua/wp-content/uploads/2019/10/admin3.jpg",
    name: "ГОНЧАРУК АЛЛА ОЛЕКСІЇВНА",
    occ: "ЗАСТУПНИК ДИРЕКТОРА, УЧИТЕЛЬ МАТЕМАТИКИ",
  },
];

const Team = () => {
  return (
    <div className="container my-20">
      <div className="flex flex-col items-start justify-center">
        <h1 className="section_title uppercase">АдмІнIстрацIя</h1>
        <div className="mt-[50px] grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-7">
          {data.map(({ image, name, occ }, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center bg-slate-100 px-7 py-5"
            >
              <div className="relative h-[435px] w-[300px]">
                <Image src={image} alt={name} fill priority />
              </div>
              <div className="my-6 flex flex-col items-center justify-center">
                <h3 className="text-center text-xl font-extrabold uppercase text-secondary">
                  {name}
                </h3>
                <p className="text-center text-lg font-extrabold uppercase text-primary">
                  {occ}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="my-[20%]">
      <div className="container">
        <div className="flex flex-col items-start justify-between space-y-12 lg:flex-row lg:space-x-12 xl:items-center xl:space-x-[80px] xl:space-y-0">
          <div className="flex items-center justify-center">
            <h2 className="title">Головне про школу</h2>
          </div>
          <div className="relative flex flex-col bg-secondary px-6 py-7 sm:px-12 sm:pb-6 sm:pt-12 lg:px-[60px]">
            <div className="absolute -top-4 left-3 md:-top-10">
              <div className="relative h-[50px] w-[50px] md:h-[80px] md:w-[80px]">
                <Image
                  src="/assets/quote-icon.svg"
                  alt="quote icon"
                  fill
                  priority
                />
              </div>
            </div>
            <p className="text-left text-lg font-bold text-white lg:text-xl">
              Кожного ранку, зустрічаючи на шкільному подвір’ї вчителів і
              учнів,бачу щасливі обличчя, привітну посмішку, лагідні очі, чую
              радісні привітання.
            </p>
            <p className="my-6 text-left text-lg font-bold text-white lg:text-xl">
              Вони поспішають до школи, яка стала для них справжнім Палацом
              Знань і вічних істин Добра, Краси, Здоров’я.
            </p>
            <div className="flex items-center justify-end">
              <div className="flex flex-col">
                <p className="text-base font-bold italic text-white lg:text-lg">
                  Директор
                </p>
                <p className="text-base font-bold italic text-white lg:text-lg">
                  Світлана Леонтіївна Гаєва
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

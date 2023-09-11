import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="my-[20%]">
      <div className="container">
        <div className="flex items-start xl:items-center flex-col lg:flex-row justify-between space-y-12 xl:space-y-0 lg:space-x-12 xl:space-x-[80px]">
          <div className="flex items-center justify-center">
            <h2 className="title">Головне про школу</h2>
          </div>
          <div className="flex flex-col bg-secondary px-6 py-7 sm:px-12 lg:px-[60px] sm:pt-12 sm:pb-6 relative">
            <div className="absolute -top-4 md:-top-10 left-3">
              <div className="relative w-[50px] md:w-[80px] h-[50px] md:h-[80px]">
                <Image
                  src="/assets/quote-icon.svg"
                  alt="quote icon"
                  fill
                  priority
                />
              </div>
            </div>
            <p className="text-left text-lg lg:text-xl font-semibold text-white">
              Кожного ранку, зустрічаючи на шкільному подвір’ї вчителів і
              учнів,бачу щасливі обличчя, привітну посмішку, лагідні очі, чую
              радісні привітання.
            </p>
            <p className="my-6 text-left text-lg lg:text-xl font-semibold text-white">
              Вони поспішають до школи, яка стала для них справжнім Палацом
              Знань і вічних істин Добра, Краси, Здоров’я.
            </p>
            <div className="flex items-center justify-end">
              <div className="flex-col flex">
                <p className="text-base lg:text-lg font-semibold text-white italic">
                  Директор
                </p>
                <p className="text-base lg:text-lg font-semibold text-white italic">
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

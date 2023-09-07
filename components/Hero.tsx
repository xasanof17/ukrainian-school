import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="my-10">
      <div className="container flex flex-col-reverse lg:flex-row lg:items-center justify-between lg:space-x-3">
        <div className="flex flex-col max-w-2xl w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary mt-7 lg:mt-0">
            Welcome Ukrainian School
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-secondary">
            Ласкаво просимо до української школи
          </h2>
          <p className="text-base md:text-lg text-gray-500 mt-3">
            Українська школа - це віртуальна школа, створена для забезпечення
            адаптації дітей до навчання в іншій країні. Якщо ви навчаєтесь y
            школі або є вчителем, ви можете зареєструватись, надіславши
            електронний лист за адресою hello@ukraineschool.com
          </p>
        </div>
        <div className="relative w-full lg:w-[900px] h-[500px]">
          <Image
            src="/assets/hero-img.svg"
            alt="hero-img"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

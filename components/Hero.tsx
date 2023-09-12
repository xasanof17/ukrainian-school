import { ChevronsDown } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="relative pb-[20%] pt-10 md:pb-[10%] md:pt-20">
      <div className="container flex flex-col-reverse justify-between lg:flex-row lg:items-center lg:space-x-3">
        <div className="flex w-full max-w-2xl flex-col">
          <h1 className="mt-7 text-3xl font-black text-primary sm:text-4xl lg:mt-0 lg:text-5xl">
            Welcome Ukrainian School
          </h1>
          <h2 className="text-2xl font-black text-secondary sm:text-3xl lg:text-4xl">
            Ласкаво просимо до української школи
          </h2>
          <p className="mt-3 text-base text-gray-500 md:text-lg">
            Українська школа - це віртуальна школа, створена для забезпечення
            адаптації дітей до навчання в іншій країні. Якщо ви навчаєтесь y
            школі або є вчителем, ви можете зареєструватись, надіславши
            електронний лист за адресою hello@ukraineschool.com
          </p>
        </div>
        <div className="relative h-[500px] w-full lg:w-[900px]">
          <Image
            src="/assets/hero-img.svg"
            alt="hero-img"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 flex animate-bounce items-center justify-center">
        <ChevronsDown size={50} className="text-secondary" />
      </div>
    </section>
  );
};

export default Hero;

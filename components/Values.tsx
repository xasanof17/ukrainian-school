import { BsFillStarFill } from "react-icons/bs";
import { MdRocketLaunch } from "react-icons/md";
import { PiPersonFill } from "react-icons/pi";
import { FaBookReader } from "react-icons/fa";
import { IconType } from "react-icons";

type TCardProps = {
  Icon: IconType;
  bgColor: string;
  title: string;
  text: string;
};

const Card = ({ Icon, bgColor, text, title }: TCardProps) => {
  return (
    <div className="flex items-center justify-center rounded-[20px] bg-[#CEF4E9] px-3 py-5 md:py-3">
      <div className="flex grid-cols-4 flex-col items-center justify-center gap-2 lg:grid">
        <div className="flex items-center md:col-span-1 md:justify-start">
          <div
            style={{ backgroundColor: bgColor }}
            className={`flex h-[80px] w-[80px] items-center justify-center rounded-3xl md:h-[100px] md:w-[100px]`}
          >
            <Icon className="h-[30px] w-[30px] text-white md:h-[45px] md:w-[45px]" />
          </div>
        </div>
        <div className="flex flex-col items-center md:col-span-3 md:items-start">
          <h3 className={`text-${bgColor} my-3 text-lg font-medium`}>
            {title}
          </h3>
          <p className="text-center text-base font-normal tracking-wide text-black lg:text-left">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

const Values = () => {
  return (
    <section id="values" className="my-[20%]">
      <div className="container">
        <h2 className="title mb-10 text-center font-bold uppercase lg:text-[45px]">
          ЦІННОСТІ
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-[60px]">
          {/* {data.map((item, i) => ( */}
          <Card
            Icon={BsFillStarFill}
            bgColor="#FFD500"
            text="Я довіряю всім членам Новопечерської родини: учням, батькам, учителям та команді Школи."
            title="Довіра."
          />
          <Card
            Icon={MdRocketLaunch}
            bgColor="#364564"
            text="Я розвиваюсь сам і допомагаю розвиватись іншим."
            title="Розвиток."
          />
          <Card
            Icon={PiPersonFill}
            bgColor="#008BFF"
            text="Я поважаю кожного, незалежно від статі, віку, національності, релігійних переконань, сексуальної орієнтації та матеріального статку."
            title="Повага."
          />
          <Card
            Icon={FaBookReader}
            bgColor="#EE3B00"
            text="Я несу відповідальність за свій результат, свідомо ставлюсь до цінностей Школи, правил, завдань та обов’язків."
            title="Відповідальність."
          />
          <Card
            Icon={BsFillStarFill}
            bgColor="#A700FF"
            text="Я є частиною успіху шкільної спільноти: працюю, надихаю, ділюсь, допомагаю тим, хто потребує."
            title="Командність."
          />
        </div>
      </div>
    </section>
  );
};

export default Values;

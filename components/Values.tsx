import { BsFillStarFill } from "react-icons/bs";
import { MdRocketLaunch } from "react-icons/md";
import { PiPersonFill } from "react-icons/pi";
import { FaBookReader } from "react-icons/fa";
import { IconType } from "react-icons";

type Data = {
  Icon: IconType;
  bgColor: string;
  title: string;
  text: string;
};

const data: Data[] = [
  {
    Icon: BsFillStarFill,
    bgColor: "#FFAE00",
    title: "Довіра.",
    text: "Я довіряю всім членам Новопечерської родини: учням, батькам, учителям та команді Школи.",
  },
  {
    Icon: MdRocketLaunch,
    bgColor: "#364564",
    title: "Розвиток.",
    text: "Я розвиваюсь сам і допомагаю розвиватись іншим.",
  },
  {
    Icon: PiPersonFill,
    bgColor: "#008BFF",
    title: "Повага.",
    text: "Я поважаю кожного, незалежно від статі, віку, національності, релігійних переконань, сексуальної орієнтації та матеріального статку.",
  },
  {
    Icon: FaBookReader,
    bgColor: "#EE3B00",
    title: "Відповідальність.",
    text: "Я несу відповідальність за свій результат, свідомо ставлюсь до цінностей Школи, правил, завдань та обов’язків.",
  },
  {
    Icon: BsFillStarFill,
    bgColor: "#A700FF",
    title: "Командність.",
    text: "Я є частиною успіху шкільної спільноти: працюю, надихаю, ділюсь, допомагаю тим, хто потребує.",
  },
];

const Values = () => {
  return (
    <section id="values" className="my-[20%]">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[45px] leading-9 font-bold uppercase mb-10">
            ЦІННОСТІ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[60px]">
            {data.map(({ Icon, bgColor, text, title }, i) => (
              <div key={i} className={`bg-[#CEF4E9] p-3 rounded-[20px]`}>
                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-1">
                    <div
                      className={`bg-[${bgColor}] rounded-3xl w-[100px] h-[100px] flex items-center justify-center`}
                    >
                      <Icon size={30} className="text-white" />
                    </div>
                  </div>
                  <div className="col-span-2 flex flex-col">
                    <h3
                      className={`text-[${bgColor}] text-lg my-3 font-medium`}
                    >
                      {title}
                    </h3>
                    <p className="text-black text-base font-normal tracking-wide">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

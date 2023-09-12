import { CheckCircle, LucideIcon } from "lucide-react";
import Image from "next/image";

type Data = {
  Icon: LucideIcon;
  title: string;
};

const data: Data[] = [
  {
    Icon: CheckCircle,
    title:
      "віри у свою дитину та прийняття не лише її сильних сторін, а й слабких;",
  },
  {
    Icon: CheckCircle,
    title:
      "бажання розвивати творчі здібності та всіляко заохочувати прояви ініціативи свого сина чи доньки;",
  },
  {
    Icon: CheckCircle,
    title:
      "толерантності до думок, традицій та матеріального статку інших родин;",
  },
  {
    Icon: CheckCircle,
    title: "підтримки здорового способу життя;",
  },
  {
    Icon: CheckCircle,
    title: "поваги до української мови, культури та традицій.",
  },
];

const ExpectParents = () => {
  return (
    <section id="expect_parents" className="my-[20%]">
      <div className="container">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <div className="flex flex-col">
            <div className="relative h-[300px] w-full md:h-[440px] xl:h-[480px]">
              <Image
                src="/assets/expect-parents.webp"
                fill
                alt="Expect Parents"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <h2 className="title mb-5 font-bold md:mb-10 xl:text-[45px]">
              Ми чекаємо від батьків:
            </h2>
            <ul className="flex flex-col space-y-3">
              {data.map(({ Icon, title }, i) => (
                <li
                  key={i}
                  className="space-x-2 text-base text-grey sm:text-lg xl:text-xl"
                >
                  <Icon size={20} className="inline-block text-secondary" />
                  <span>{title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectParents;

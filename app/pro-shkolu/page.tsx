import { Banner, ExpectParents, Values } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Про Школу",
  description: "Про школу - Львов",
};

export default function AboutPage() {
  return (
    <>
      <section id="about_page">
        <Banner title="Про школу" />
        <div className="container">
          <div className="flex flex-col items-center justify-center py-20">
            <h2 className="mb-6 text-3xl font-bold text-primary">МІСІЯ</h2>
            <p className="font-regular mb-7 text-center text-lg text-grey xl:text-xl">
              Школа пропонує своїм учням освітній досвід, який максимізує їхній
              освітній потенціал. Вони на шляху до того, щоб стати незалежними
              учнями з широкими перспективами, критичним мисленням і навичками
              вирішення проблем, а також відданими розвитку своїх талантів.
              Таким чином вони створюють кращу версію себе та суспільства. Для
              цього ми забезпечуємо безпечне, турботливе та співчутливе
              середовище, де студенти можуть розвивати свої морально-етичні
              духовні якості та здатність розуміти інших.
            </p>
            <p className="font-regular text-center text-lg text-grey xl:text-xl">
              Ми завжди відкриті для вас і впевнені, що разом нам вдасться в
              повній мірі досягти поставленої мети.
            </p>
          </div>
        </div>
      </section>
      <ExpectParents />
      <Values />
    </>
  );
}

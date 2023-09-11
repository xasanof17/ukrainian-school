import { Banner, ExpectParents, Values } from "@/components";

export default function AboutPage() {
  return (
    <>
      <section id="about_page">
        <Banner title="Про школу" />
        <div className="container">
          <div className="flex flex-col items-center justify-center py-20">
            <h2 className="text-3xl font-bold text-primary mb-6">МІСІЯ</h2>
            <p className="text-lg xl:text-xl font-regular text-grey text-center mb-7">
              Школа пропонує своїм учням освітній досвід, який максимізує їхній
              освітній потенціал. Вони на шляху до того, щоб стати незалежними
              учнями з широкими перспективами, критичним мисленням і навичками
              вирішення проблем, а також відданими розвитку своїх талантів.
              Таким чином вони створюють кращу версію себе та суспільства. Для
              цього ми забезпечуємо безпечне, турботливе та співчутливе
              середовище, де студенти можуть розвивати свої морально-етичні
              духовні якості та здатність розуміти інших.
            </p>
            <p className="text-lg xl:text-xl font-regular text-grey text-center">
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

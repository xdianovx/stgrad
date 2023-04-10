import {
  Accordition,
  IndexHero,
  LifeSection,
  NumSection,
  ProjectsSlider,
  ScrollImage,
} from "../screens";
import { TextBlock } from "../screens/TextBlock/TextBlock";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <IndexHero />
      <ScrollImage />

      <TextBlock
        title={`Мы стремимся стать одним \nиз крупнейших строительно-инвестиционных холдингов федерального и международного уровня.`}
        text={`Все это время «Стройград» стремительно развивался, выходил на новые рынки, наращивал собственную производственную базу, осваивал новые направления бизнеса.`}
        className="mt-[200px] lg:mt-[160px] md:mt-[120px] sm:mt-20"
      />

      <ProjectsSlider className="mt-[360px]" />

      <Accordition
        className="mt-[320px] sm:mt-12"
        title={"Сервисы для\nсчастливой жизни"}
        text="Мы стремимся стать одним из крупнейших строительно-инвестиционных холдингов федерального уровня."
        subtitle={
          "Все это время «Стройград» стремительно\nразвивался, выходил на новые рынки."
        }
      />
      <TextBlock
        title="Мы стремимся стать одним из крупнейших строительно-инвестиционных холдингов федерального и международного уровня."
        text="Все это время «Стройград» стремительно развивался, выходил на новые рынки, наращивал собственную производственную базу, осваивал новые направления бизнеса."
        className="mt-[200px] lg:mt-[160px] md:mt-[120px] sm:mt-20"
      />

      <NumSection className="mt-[228px] md:mt-[160px]" />
      <LifeSection />
    </>
  );
}

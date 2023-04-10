import Head from "next/head";
import Image from "next/image";
import Image1 from "./team1.jpg";
import Image2 from "./team2.jpg";
import Image3 from "./team3.jpg";
import Image4 from "./team4.jpg";
// import { NumSection, TeamSection, VacancySection } from "@/screens/index";
import cn from "classnames";
import s from "./vacancy.module.scss";
import { PinLink, Title } from "../../ui";
import {
  NumSection,
  OurTeamSection,
  TextBlock,
  VacancySection,
} from "../../screens";
import { TeamScrollSection } from "../../components";

export default function Vacancy() {
  const pageTitle = "Свободные\nвакансии";
  const numbersData = [
    { id: 1, num: "01", title: "Опыт компании ", number: "10 лет" },
    { id: 2, num: "02", title: "Опыт компании ", number: "16" },
    { id: 3, num: "03", title: "Построенного жилья ", number: "20203" },
    { id: 4, num: "04", title: "Заселённых квартир", number: "4512" },
  ];

  const vacancyList = [
    {
      id: 1,
      title: "Менеджер",
      salary: "от 30 000 руб.",
      experience: "Стаж не менее 3 лет",
      content: [
        {
          title: "Обязаность:",
          list: [
            "Разработка архитектурной части проектной и рабочей документации в соответствии с действующими нормативами;",
            "Организация работы группы архитекторов, контроль качества работы;",
            "Участие в подготовке ответов на замечания по проекту при прохождении экспертизы;",
            "Подготовка технических заданий для работы с конструкторами",
            "и смежными отделами.",
          ],
        },
        {
          title: "Требования:",
          list: [
            "Образование высшее архитектурное;",
            "Умение работать с нормативными документами;",
            "Знание состава и требований к разделам проектной документации (ГОСТ, Постановление Правительства РФ от 16.02.2008 N 87 (в оформлении чертежей);",
            "Профессиональное владение AucoCad, желательно знание Revit.",
          ],
        },
        {
          title: "Условия:",
          list: [
            "Официальное оформление по ТК РФ;",
            "График 5/2 с 09-00 до 18-00;",
            "Работа в комфортном офисе в центре города;",
            "Компания предоставляет обучение Revit , возможность быстрого профессионального роста;",
            "Интересные проекты и задачи;",
            "Дружный, активный коллектив единомышленников;",
            "Возможность карьерного роста внутри компании;",
            "Подарки от компании ко дню рождения;",
            "Заработная плата обсуждается индивидуально по итогам собеседования.",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Менеджер по продажам",
      salary: "от 45 000 руб.",
      experience: "Стаж не менее 3 лет",
      content: [
        {
          title: "Обязаность:",
          list: [
            "Разработка архитектурной части проектной и рабочей документации в соответствии с действующими нормативами;",
            "Организация работы группы архитекторов, контроль качества работы;",
            "Участие в подготовке ответов на замечания по проекту при прохождении экспертизы;",
            "Подготовка технических заданий для работы с конструкторами",
            "и смежными отделами.",
          ],
        },
        {
          title: "Требования:",
          list: [
            "Образование высшее архитектурное;",
            "Умение работать с нормативными документами;",
            "Знание состава и требований к разделам проектной документации (ГОСТ, Постановление Правительства РФ от 16.02.2008 N 87 (в оформлении чертежей);",
            "Профессиональное владение AucoCad, желательно знание Revit.",
          ],
        },
        {
          title: "Условия:",
          list: [
            "Официальное оформление по ТК РФ;",
            "График 5/2 с 09-00 до 18-00;",
            "Работа в комфортном офисе в центре города;",
            "Компания предоставляет обучение Revit , возможность быстрого профессионального роста;",
            "Интересные проекты и задачи;",
            "Дружный, активный коллектив единомышленников;",
            "Возможность карьерного роста внутри компании;",
            "Подарки от компании ко дню рождения;",
            "Заработная плата обсуждается индивидуально по итогам собеседования.",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Строитель",
      salary: "от 28 000 руб.",
      experience: "Стаж не менее 3 лет",
      content: [
        {
          title: "Обязаность:",
          list: [
            "Разработка архитектурной части проектной и рабочей документации в соответствии с действующими нормативами;",
            "Организация работы группы архитекторов, контроль качества работы;",
            "Участие в подготовке ответов на замечания по проекту при прохождении экспертизы;",
            "Подготовка технических заданий для работы с конструкторами",
            "и смежными отделами.",
          ],
        },
        {
          title: "Требования:",
          list: [
            "Образование высшее архитектурное;",
            "Умение работать с нормативными документами;",
            "Знание состава и требований к разделам проектной документации (ГОСТ, Постановление Правительства РФ от 16.02.2008 N 87 (в оформлении чертежей);",
            "Профессиональное владение AucoCad, желательно знание Revit.",
          ],
        },
        {
          title: "Условия:",
          list: [
            "Официальное оформление по ТК РФ;",
            "График 5/2 с 09-00 до 18-00;",
            "Работа в комфортном офисе в центре города;",
            "Компания предоставляет обучение Revit , возможность быстрого профессионального роста;",
            "Интересные проекты и задачи;",
            "Дружный, активный коллектив единомышленников;",
            "Возможность карьерного роста внутри компании;",
            "Подарки от компании ко дню рождения;",
            "Заработная плата обсуждается индивидуально по итогам собеседования.",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Архитектор",
      salary: "от 55 000 руб.",
      experience: "Стаж не менее 3 лет",
      content: [
        {
          title: "Обязаность:",
          list: [
            "Разработка архитектурной части проектной и рабочей документации в соответствии с действующими нормативами;",
            "Организация работы группы архитекторов, контроль качества работы;",
            "Участие в подготовке ответов на замечания по проекту при прохождении экспертизы;",
            "Подготовка технических заданий для работы с конструкторами",
            "и смежными отделами.",
          ],
        },
        {
          title: "Требования:",
          list: [
            "Образование высшее архитектурное;",
            "Умение работать с нормативными документами;",
            "Знание состава и требований к разделам проектной документации (ГОСТ, Постановление Правительства РФ от 16.02.2008 N 87 (в оформлении чертежей);",
            "Профессиональное владение AucoCad, желательно знание Revit.",
          ],
        },
        {
          title: "Условия:",
          list: [
            "Официальное оформление по ТК РФ;",
            "График 5/2 с 09-00 до 18-00;",
            "Работа в комфортном офисе в центре города;",
            "Компания предоставляет обучение Revit , возможность быстрого профессионального роста;",
            "Интересные проекты и задачи;",
            "Дружный, активный коллектив единомышленников;",
            "Возможность карьерного роста внутри компании;",
            "Подарки от компании ко дню рождения;",
            "Заработная плата обсуждается индивидуально по итогам собеседования.",
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Начальник отдела продаж",
      salary: "от 40 000 руб.",
      experience: "Стаж не менее 3 лет",
      content: [
        {
          title: "Обязаность:",
          list: [
            "Разработка архитектурной части проектной и рабочей документации в соответствии с действующими нормативами;",
            "Организация работы группы архитекторов, контроль качества работы;",
            "Участие в подготовке ответов на замечания по проекту при прохождении экспертизы;",
            "Подготовка технических заданий для работы с конструкторами",
            "и смежными отделами.",
          ],
        },
        {
          title: "Требования:",
          list: [
            "Образование высшее архитектурное;",
            "Умение работать с нормативными документами;",
            "Знание состава и требований к разделам проектной документации (ГОСТ, Постановление Правительства РФ от 16.02.2008 N 87 (в оформлении чертежей);",
            "Профессиональное владение AucoCad, желательно знание Revit.",
          ],
        },
        {
          title: "Условия:",
          list: [
            "Официальное оформление по ТК РФ;",
            "График 5/2 с 09-00 до 18-00;",
            "Работа в комфортном офисе в центре города;",
            "Компания предоставляет обучение Revit , возможность быстрого профессионального роста;",
            "Интересные проекты и задачи;",
            "Дружный, активный коллектив единомышленников;",
            "Возможность карьерного роста внутри компании;",
            "Подарки от компании ко дню рождения;",
            "Заработная плата обсуждается индивидуально по итогам собеседования.",
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Менеджер",
      salary: "от 25 000 руб.",
      experience: "Стаж не менее 3 лет",
      content: [
        {
          title: "Обязаность:",
          list: [
            "Разработка архитектурной части проектной и рабочей документации в соответствии с действующими нормативами;",
            "Организация работы группы архитекторов, контроль качества работы;",
            "Участие в подготовке ответов на замечания по проекту при прохождении экспертизы;",
            "Подготовка технических заданий для работы с конструкторами",
            "и смежными отделами.",
          ],
        },
        {
          title: "Требования:",
          list: [
            "Образование высшее архитектурное;",
            "Умение работать с нормативными документами;",
            "Знание состава и требований к разделам проектной документации (ГОСТ, Постановление Правительства РФ от 16.02.2008 N 87 (в оформлении чертежей);",
            "Профессиональное владение AucoCad, желательно знание Revit.",
          ],
        },
        {
          title: "Условия:",
          list: [
            "Официальное оформление по ТК РФ;",
            "График 5/2 с 09-00 до 18-00;",
            "Работа в комфортном офисе в центре города;",
            "Компания предоставляет обучение Revit , возможность быстрого профессионального роста;",
            "Интересные проекты и задачи;",
            "Дружный, активный коллектив единомышленников;",
            "Возможность карьерного роста внутри компании;",
            "Подарки от компании ко дню рождения;",
            "Заработная плата обсуждается индивидуально по итогам собеседования.",
          ],
        },
      ],
    },
    {
      id: 7,
      title: "Менеджер по продажам",
      salary: "от 43 000 руб.",
      experience: "Стаж не менее 3 лет",
      content: [
        {
          title: "Обязаность:",
          list: [
            "Разработка архитектурной части проектной и рабочей документации в соответствии с действующими нормативами;",
            "Организация работы группы архитекторов, контроль качества работы;",
            "Участие в подготовке ответов на замечания по проекту при прохождении экспертизы;",
            "Подготовка технических заданий для работы с конструкторами",
            "и смежными отделами.",
          ],
        },
        {
          title: "Требования:",
          list: [
            "Образование высшее архитектурное;",
            "Умение работать с нормативными документами;",
            "Знание состава и требований к разделам проектной документации (ГОСТ, Постановление Правительства РФ от 16.02.2008 N 87 (в оформлении чертежей);",
            "Профессиональное владение AucoCad, желательно знание Revit.",
          ],
        },
        {
          title: "Условия:",
          list: [
            "Официальное оформление по ТК РФ;",
            "График 5/2 с 09-00 до 18-00;",
            "Работа в комфортном офисе в центре города;",
            "Компания предоставляет обучение Revit , возможность быстрого профессионального роста;",
            "Интересные проекты и задачи;",
            "Дружный, активный коллектив единомышленников;",
            "Возможность карьерного роста внутри компании;",
            "Подарки от компании ко дню рождения;",
            "Заработная плата обсуждается индивидуально по итогам собеседования.",
          ],
        },
      ],
    },
  ];

  const teamList = [
    {
      id: 1,
      name: "Артём Иванов",
      position: "Бухгалтер   /   в компании 5 лет",
      image: Image1,
    },
    {
      id: 2,
      name: "Артём Иванов",
      position: "Бухгалтер   /   в компании 5 лет",
      image: Image2,
    },
    {
      id: 3,
      name: "Артём Иванов",
      position: "Бухгалтер   /   в компании 5 лет",
      image: Image3,
    },
    {
      id: 4,
      name: "Артём Иванов",
      position: "Бухгалтер   /   в компании 5 лет",
      image: Image4,
    },
  ];

  return (
    <>
      <Head>
        <title>Стройград | О компании</title>
      </Head>

      <>
        <section className={s.hero} data-scroll-section>
          <div className="container">
            <Title tag="h1" className={s.hero__title}>
              {pageTitle}
            </Title>
          </div>

          <div className={cn(s.hero__image, "mt-[130px]")}>
            <Image src="/img/vacancy/hero.jpg" fill alt={pageTitle} />
          </div>
        </section>

        <TextBlock
          className="mt-[195px]"
          title="Мы стремимся стать одним
из крупнейших строительно-инвестиционных холдингов федерального и международного уровня. "
          text="Все это время «Стройград» стремительно развивался, выходил на новые рынки, наращивал собственную производственную базу, осваивал новые направления бизнеса."
        />

        <NumSection className="mt-[228px] md:mt-[160px]" />
        <VacancySection className="mt-[452px]" data={vacancyList} />
        {/*    <TeamSection className="mt-[474px]" data={teamList} /> */}
        <OurTeamSection className="mt-[474px]" data={teamList} />
      </>
    </>
  );
}
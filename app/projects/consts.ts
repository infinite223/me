import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiDotnet,
  SiExpo,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiVuedotjs,
  SiCss3,
  SiSass,
} from "react-icons/si";

import { IconType } from "react-icons";

export const iconMap: Record<string, IconType> = {
  React: SiReact,
  "React Native": SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "react-native-game-engine": SiReact,
  Expo: SiExpo,
  ".Net core": SiDotnet,
  Firebase: SiFirebase,
  Redux: SiRedux,
  Vue: SiVuedotjs,
  Css: SiCss3,
  SCSS: SiSass,
  Scss: SiSass,
  Tailwind: SiTailwindcss,
};

export type Project = {
  name: string;
  slug: string;
  description: string;
  technologies: { id: number; name: string; icon: IconType; color: string }[];
  createdAt: Date;
  image:
    | "carsdesignStart"
    | "scheduleApp"
    | "portfolio"
    | "kaban"
    | "monkey"
    | "workSchedule"
    | "downloadSongs"
    | "shoppingNotes";
  type: "Mobile app" | "Web app" | "all";
  links: {
    linkToGithub: string;
    linkToLiveapp?: string;
  };
};

export const myTechnologies: {
  id: number;
  name: string;
  icon: IconType;
  color: string;
}[] = [
  { id: 0, name: "React", icon: SiReact, color: "#61DAFB" },
  { id: 1, name: "React Native", icon: SiReact, color: "#61DAFB" },
  { id: 2, name: "Expo", icon: SiExpo, color: "#000020" },
  { id: 3, name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { id: 4, name: "Scss", icon: SiSass, color: "#CD6799" },
  { id: 5, name: "Redux", icon: SiRedux, color: "#764ABC" },
  { id: 6, name: "Vue", icon: SiVuedotjs, color: "#42b883" },
  { id: 7, name: "Framer motion", icon: SiReact, color: "#e6e6e6" },
  { id: 8, name: ".Net core", icon: SiDotnet, color: "#512bd4" },
  { id: 9, name: "react-native-game-engine", icon: SiReact, color: "#61DAFB" },
  { id: 10, name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { id: 11, name: "Css", icon: SiCss3, color: "#264de4" },
  { id: 12, name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { id: 13, name: "Tailwind", icon: SiTailwindcss, color: "#06b6d4" },
];
export const latestProject = {
  name: "ScheduleWork",
  description:
    "A mobile application for managing the work schedule of employees. It makes it easier to record employees in the work schedule. The application allows you to divide into groups, quickly view the next working days and other co-workers.",
  createdAt: new Date(),
  type: "Mobile app",
  technologies: [
    myTechnologies[0],
    myTechnologies[3],
    myTechnologies[4],
    myTechnologies[5],
    myTechnologies[7],
    myTechnologies[10],
    myTechnologies[12],
  ],
  image: "carsdesignStart",
  links: {
    linkToGithub: "https://github.com/infinite223/Schedule-work-app",
    linkToLiveapp: "https://schedulework-preview.netlify.app/",
  },
};
export const myProjects: Project[] = [
  {
    name: "Cars design",
    slug: "cars-design",
    description:
      "Cars design to aplikacja webowa i mobilna stworzona z myślą o społeczności motoryzacyjnej. Użytkownicy mogą dzielić się projektami swoich samochodów, dodawać potrzebne parametry, zdjęcia, komponenty i wiele więcej. Aplikacja pozwala również tworzyć spoty i rozmawiać z innymi.",
    createdAt: new Date(),
    type: "all",
    technologies: [
      myTechnologies[0],
      myTechnologies[1],
      myTechnologies[2],
      myTechnologies[3],
      myTechnologies[4],
      myTechnologies[5],
      myTechnologies[7],
      myTechnologies[10],
      myTechnologies[12],
    ],
    image: "carsdesignStart",
    links: {
      linkToGithub: "https://github.com/infinite223/Cars-designs-web",
      linkToLiveapp: "https://carsdesigns.netlify.app/",
    },
  },
  {
    name: "Schedule Work (v3)",
    slug: "schedule-work-v3",
    description:
      "Aplikacja mobilna i webowa do zarządzania grafikiem pracy pracowników. Ułatwia zapisywanie pracowników w grafiku. Aplikacja pozwala na tworzenie grup, szybki podgląd najbliższych dni roboczych i współpracowników.",
    createdAt: new Date(),
    type: "all",
    technologies: [
      myTechnologies[0],
      myTechnologies[1],
      myTechnologies[2],
      myTechnologies[3],
      myTechnologies[4],
      myTechnologies[5],
      myTechnologies[10],
      myTechnologies[12],
      myTechnologies[13],
    ],
    image: "scheduleApp",
    links: {
      linkToGithub: "https://github.com/infinite223/Schedule-work-app",
      linkToLiveapp: "https://schedulework-preview.netlify.app/",
    },
  },
  {
    name: "Kaban",
    slug: "kaban",
    description:
      "Kaban to aplikacja zaprojektowana z myślą o funkcjonalnościach tablicy kanban. Cała tablica dla danego projektu jest dynamicznie aktualizowana, dzięki czemu użytkownicy nie muszą odświeżać aplikacji.",
    createdAt: new Date(),
    type: "Mobile app",
    technologies: [
      myTechnologies[0],
      myTechnologies[1],
      myTechnologies[2],
      myTechnologies[3],
      myTechnologies[5],
      myTechnologies[10],
      myTechnologies[12],
    ],
    image: "kaban",
    links: {
      linkToGithub: "https://github.com/infinite223/kaban",
    },
  },
  {
    name: "J-Monkey",
    slug: "j-monkey",
    description:
      "J-monkey to prosta gra mobilna inspirowana popularną grą Flappy Bird.",
    createdAt: new Date(),
    type: "Mobile app",
    technologies: [
      myTechnologies[0],
      myTechnologies[1],
      myTechnologies[2],
      myTechnologies[5],
      myTechnologies[9],
      myTechnologies[12],
    ],
    image: "monkey",
    links: {
      linkToGithub: "https://github.com/infinite223/J-monkey",
      linkToLiveapp:
        "https://play.google.com/store/apps/details?id=com.infinite223.Flappymonkey",
    },
  },
  {
    name: "Work schedule (v2)",
    slug: "work-schedule-v2",
    description:
      "Work schedule to aplikacja webowa, która umożliwia tworzenie grafiku pracy, zapraszanie pracowników i pozwala im zapisywać się na dyżury w wybrane dni i godziny.",
    createdAt: new Date(),
    type: "Web app",
    technologies: [
      myTechnologies[0],
      myTechnologies[3],
      myTechnologies[4],
      myTechnologies[5],
      myTechnologies[7],
      myTechnologies[10],
      myTechnologies[12],
    ],
    image: "workSchedule",
    links: {
      linkToGithub: "https://github.com/infinite223/J-monkey",
      linkToLiveapp:
        "https://play.google.com/store/apps/details?id=com.infinite223.Flappymonkey",
    },
  },
  {
    name: "Download songs",
    slug: "download-songs",
    description:
      "Prosta aplikacja do wyszukiwania piosenek na YouTube i ich pobierania.",
    createdAt: new Date(),
    type: "Web app",
    technologies: [myTechnologies[0], myTechnologies[11], myTechnologies[12]],
    image: "downloadSongs",
    links: {
      linkToGithub: "https://github.com/infinite223/download-songs",
      linkToLiveapp: "https://download-songs.netlify.app/",
    },
  },
  {
    name: "Shopping notes",
    slug: "shopping-notes",
    description:
      "Shopping-notes to prosta aplikacja mobilna pozwalająca użytkownikom tworzyć listy zakupów. Produkty są automatycznie grupowane według sklepów i kategorii, co ułatwia zakupy.",
    createdAt: new Date(),
    type: "Mobile app",
    technologies: [
      myTechnologies[0],
      myTechnologies[1],
      myTechnologies[2],
      myTechnologies[10],
      myTechnologies[12],
      myTechnologies[13],
    ],
    image: "shoppingNotes",
    links: {
      linkToGithub: "https://github.com/infinite223/Shopping-notes",
      linkToLiveapp:
        "https://play.google.com/store/apps/details?id=com.shopping.notes",
    },
  },
];

export const bestProjects: Project[] = [
  myProjects[1],
  myProjects[0],
  myProjects[2],
  myProjects[3],
];

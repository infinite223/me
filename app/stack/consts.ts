import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiDotnet,
  SiExpo,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiFirebase,
  SiVuedotjs,
  SiAngular,
  SiCss3,
  SiSass,
  SiPostman,
  SiDocker,
  SiRider,
  SiMysql,
  SiGit,
  SiGithub,
  SiGitlab,
  SiGitea,
  SiJira,
  SiSqlite,
  SiPostgresql,
} from "react-icons/si";
import { IconType } from "react-icons";

export type Stack = {
  icon: IconType;
  name: string;
  description: string;
  color: string;
};

export const stack: Stack[] = [
  {
    icon: SiReact,
    name: "React",
    description:
      "Biblioteka do tworzenia interfejsów użytkownika oparta na komponentach.",
    color: "#61DAFB",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    description:
      "Framework do Reacta oferujący SSR i generowanie stron statycznych.",
    color: "#000000",
  },
  {
    icon: SiReact,
    name: "React Native",
    description:
      "Framework do tworzenia natywnych aplikacji mobilnych z użyciem React.",
    color: "#61DAFB",
  },
  {
    icon: SiExpo,
    name: "Expo",
    description:
      "Narzędzie ułatwiające tworzenie aplikacji mobilnych w React Native.",
    color: "#000020",
  },
  {
    icon: SiDotnet,
    name: ".NET",
    description:
      "Nowoczesna platforma Microsoftu do budowy aplikacji webowych i API.",
    color: "#512BD4",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    description: "CSS framework oparty na klasach narzędziowych.",
    color: "#38BDF8",
  },
  {
    icon: SiVuedotjs,
    name: "Vue",
    description: "Progresywny framework JavaScript do budowy interfejsów.",
    color: "#42B883",
  },
  {
    icon: SiRedux,
    name: "Redux",
    description: "Biblioteka do zarządzania stanem aplikacji w React.",
    color: "#764ABC",
  },
  {
    icon: SiFirebase,
    name: "Firebase",
    description: "BaaS od Google – baza danych, hosting i wiele więcej.",
    color: "#FFCA28",
  },
];

export const fullStack: Stack[] = [
  {
    icon: SiReact,
    name: "React",
    description:
      "Biblioteka do tworzenia interfejsów użytkownika oparta na komponentach.",
    color: "#61DAFB",
  },
  {
    icon: SiReact,
    name: "React Native",
    description:
      "Framework do tworzenia natywnych aplikacji mobilnych z użyciem React.",
    color: "#61DAFB",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    description:
      "Typowany nadzbiór JavaScriptu zapewniający większą niezawodność kodu.",
    color: "#3178C6",
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
    description:
      "Język programowania wykorzystywany do tworzenia dynamicznych aplikacji webowych.",
    color: "#F7DF1E",
  },
  {
    icon: SiDotnet,
    name: ".NET",
    description:
      "Nowoczesna platforma Microsoftu do budowy aplikacji webowych i API.",
    color: "#512BD4",
  },
  {
    icon: SiAngular,
    name: "Angular",
    description: "Framework do budowy aplikacji webowych oparty na TypeScript.",
    color: "#DD0031",
  },
  {
    icon: SiExpo,
    name: "Expo",
    description:
      "Narzędzie ułatwiające tworzenie aplikacji mobilnych w React Native.",
    color: "#000020",
  },
  {
    icon: SiNextdotjs,
    name: "Next.js",
    description:
      "Framework do Reacta oferujący SSR i generowanie stron statycznych.",
    color: "#000000",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    description: "CSS framework oparty na klasach narzędziowych.",
    color: "#38BDF8",
  },
  {
    icon: SiCss3,
    name: "CSS",
    description: "Język stylów używany do opisu wyglądu dokumentów HTML.",
    color: "#1572B6",
  },
  {
    icon: SiSass,
    name: "SCSS",
    description:
      "Rozszerzenie CSS z zaawansowanymi funkcjami jak zmienne czy zagnieżdżenia.",
    color: "#CC6699",
  },
  {
    icon: SiVuedotjs,
    name: "Vue",
    description: "Progresywny framework JavaScript do budowy interfejsów.",
    color: "#42B883",
  },
  {
    icon: SiRedux,
    name: "Redux",
    description: "Biblioteka do zarządzania stanem aplikacji w React.",
    color: "#764ABC",
  },
  {
    icon: SiFirebase,
    name: "Firebase",
    description: "BaaS od Google – baza danych, hosting i wiele więcej.",
    color: "#FFCA28",
  },
  {
    icon: SiPostman,
    name: "Postman",
    description: "Narzędzie do testowania API i integracji backendowych.",
    color: "#FF6C37",
  },
  {
    icon: SiDocker,
    name: "Docker",
    description:
      "Platforma do tworzenia i uruchamiania aplikacji w kontenerach.",
    color: "#2496ED",
  },
  {
    icon: SiRider,
    name: "JetBrains Rider",
    description: "IDE do .NET, łączące wydajność z funkcjami JetBrains.",
    color: "#000000",
  },
  {
    icon: SiMysql,
    name: "MySQL",
    description: "Popularny system zarządzania relacyjną bazą danych.",
    color: "#4479A1",
  },
  {
    icon: SiSqlite,
    name: "SQLite",
    description:
      "Lekka, plikowa baza danych idealna do aplikacji lokalnych i mobilnych.",
    color: "#003B57",
  },
  {
    icon: SiPostgresql,
    name: "PostgreSQL",
    description: "Zaawansowana, otwartoźródłowa relacyjna baza danych.",
    color: "#336791",
  },
  {
    icon: SiGit,
    name: "Git",
    description: "System kontroli wersji do zarządzania kodem źródłowym.",
    color: "#F05032",
  },
  {
    icon: SiGithub,
    name: "GitHub",
    description: "Hosting repozytoriów Git w chmurze.",
    color: "#181717",
  },
  {
    icon: SiGitlab,
    name: "GitLab",
    description: "Platforma DevOps i hosting Git z własnym CI/CD.",
    color: "#FC6D26",
  },
  {
    icon: SiGitea,
    name: "Gitea",
    description: "Lekkie rozwiązanie do hostowania repozytoriów Git.",
    color: "#609926",
  },
  {
    icon: SiJira,
    name: "Jira",
    description: "Narzędzie do zarządzania projektami i śledzenia zadań.",
    color: "#0052CC",
  },
];

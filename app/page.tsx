"use client";

import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { services } from "./services/consts";
import { stack } from "./stack/consts";
import StackCard from "@/components/StackCard";
import {
  HiAcademicCap,
  HiBriefcase,
  HiHeart,
  HiBadgeCheck,
} from "react-icons/hi";
import { bestProjects } from "./projects/consts";
import { ChevronRight } from "lucide-react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6 md:px-6 pt-6">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
          </span>
          <span className="font-semibold text-sm">Available for Projects</span>
        </div>

        <div className="flex w-full justify-between">
          <h1 className="text-4xl font-bold">
            Hej 👋, nazywam się Dawid Szmigiel!
          </h1>
          {/* <div className="flex gap-3 items-center">
            <button className="bg-zinc-800 rounded-md text-white px-6 py-2 text-sm">
              Kontakt
            </button>
          </div> */}
        </div>

        <p className="mt-2 text-gray-600 max-w-4xl">
          Tworzę nowoczesne i dopracowane rozwiązania cyfrowe od aplikacji
          webowych i mobilnych po estetyczne strony internetowe. Łączę wiedzę
          techniczną z podejściem zorientowanym na użytkownika, tworząc
          produkty, które nie tylko dobrze wyglądają, ale wspierają cele
          biznesowe i rozwijają się wraz z Twoją firmą.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 ">
        {services.map((s, i) => (
          <ServiceCard
            key={i}
            title={s.title}
            icon={s.icon}
            description={s.description}
            gradient={s.gradient}
          />
        ))}
      </div>

      <SectionHeader title="O mnie" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-md p-6 shadow-sm">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <HiAcademicCap className="mr-2" />
            Wykształcenie
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-3">
            <li>Magister informatyki - Politechnika Opolska</li>
            <li>Inżynier informatyki - Politechnika Opolska</li>
            <li>Technikum informatyczne</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <HiBriefcase className="mr-2" />
            Doświadczenie
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-3">
            <li>1,5 roku jako Junior developer w Codefusion</li>
            <li>2 miesiące stażu w Codefusion</li>
            <li>1 miesiąc praktyk w Codefusion</li>
            <li>4 lata tworzenia własnych projektów</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <HiHeart className="mr-2" />
            Hobby
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-3">
            <li>Motoryzacja</li>
            <li>Tuning samochodów</li>
            <li>E-Sport</li>
            <li>Fotografia</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <HiBadgeCheck className="mr-2" />
            Certyfikaty / uprawnienia
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-3">
            <li>–</li>
          </ul>
        </div>
      </div>

      <SectionHeader title="Własne projekty" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-md p-6 shadow-sm max-md:p-3">
        {bestProjects.map((p, i) => (
          <div
            key={i}
            className="relative group bg-gray-50 hover:bg-blue-50 transition-all rounded-md overflow-hidden"
          >
            {/* Wrapper z proporcją 4:3 (75% = 3/4 wysokości) */}
            <div className="w-full pt-[75%]"></div>

            {/* Wnętrze – absolutne pozycjonowanie */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {p.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      <SectionFooter page="projects" title="Zobacz wszystkie moje projekty" />

      <SectionHeader title="Stack" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stack.map((s, i) => (
          <StackCard
            key={i}
            title={s.name}
            icon={s.icon}
            description={s.description}
            color={s.color}
            small
          />
        ))}
      </div>

      <SectionFooter page="stack" title="Zobacz pełny mój stack" />

      <SectionHeader title="Kontakt" />

      <div className="bg-white rounded-md p-6 shadow-sm mt-4">
        <p className="text-gray-800 font-semibold mb-4">
          Masz pomysł na projekt lub szukasz osoby do współpracy? Napisz do
          mnie, a chętnie pomogę w realizacji Twojej wizji. 🚀
        </p>

        <ul className="flex flex-col gap-4 text-gray-700 text-sm">
          <li>
            <a
              href="mailto:szmigielitsolutions@gmail.com"
              className="group flex items-center justify-between hover:text-black transition-colors"
            >
              <span className="flex items-center gap-4">
                <FaEnvelope className="w-5 h-5" />
                szmigielitsolutions@gmail.com
              </span>
              <ChevronRight className="w-4 h-4 opacity-0 translate-x-[-4px] transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 text-gray-500" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dawid-szmigiel-7a7609167/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between hover:text-black transition-colors"
            >
              <span className="flex items-center gap-4">
                <FaLinkedin className="w-5 h-5" />
                linkedin.com/in/dawid-szmigiel-7a7609167
              </span>
              <ChevronRight className="w-4 h-4 opacity-0 translate-x-[-4px] transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 text-gray-500" />
            </a>
          </li>
        </ul>

        <div className="flex flex-col border-t-2 border-zinc-200 pt-5 justify-center items-center w-full text-xs self-center gap-2 mt-5">
          <div className="font-semibold">Dawid Szmigiel IT Solutions</div>
          <div className="flex gap-4 items-center">
            <div className="">NIP: 5761599645</div>

            <div className="">REGON: 542171897</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SectionHeader = ({ title }: { title: string }) => {
  return <h2 className="text-3xl font-semibold mt-4">{title}</h2>;
};

const SectionFooter = ({ title, page }: { title: string; page: string }) => {
  return (
    <Link
      href={page}
      className="group inline-flex items-center text-sm font-light self-center transition-colors hover:text-cyan-600"
    >
      {title}
      <ChevronRight className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
};

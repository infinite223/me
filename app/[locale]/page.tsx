"use client";
import { redirect } from "next/navigation";

import Link from "next/link";
import ServiceCard from "@/app/components/ServiceCard";
import { services } from "./services/consts";
import { stack } from "./stack/consts";
import StackCard from "@/app/components/StackCard";
import {
  HiAcademicCap,
  HiBriefcase,
  HiHeart,
  HiBadgeCheck,
} from "react-icons/hi";
import { bestProjects } from "./projects/consts";
import { ChevronRight } from "lucide-react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import scheduleApp from "../assets/scheduleApp.png";
import carsdesignStart from "../assets/carsdesignStart.png";
import kaban from "../assets/kaban_board_screen.png";
import monkey from "../assets/monkey.png";
import { useTranslations } from "next-intl";

function getImageByName(name: string) {
  switch (name) {
    case "carsdesignStart":
      return carsdesignStart;
    case "scheduleApp":
      return scheduleApp;
    case "kaban":
      return kaban;
    case "monkey":
      return monkey;
    default:
      return scheduleApp;
  }
}
export default function HomePage() {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-6 md:px-6 pt-6">
      {" "}
      <div className="flex gap-2 items-center mb-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
        </span>
        <span className="font-semibold text-sm">Available for Projects</span>
      </div>
      <div className="flex w-full justify-between">
        <h1 className="text-4xl font-bold">{t("main.title")}</h1>
      </div>
      <p className="mt-2 text-gray-600 max-w-4xl">{t("main.description")}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
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
      <SectionHeader title={t("sections.about")} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl p-8 shadow-md">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <HiAcademicCap className="text-blue-600 w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {t("sections.education")}
            </h3>
          </div>
          <ul className="list-disc list-outside text-gray-700 space-y-2 pl-6">
            <li>{t("education.1")}</li>
            <li>{t("education.2")}</li>
            <li>{t("education.3")}</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-100 p-2 rounded-full">
              <HiBriefcase className="text-green-600 w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {t("sections.experience")}
            </h3>
          </div>
          <ul className="list-disc list-outside text-gray-700 space-y-2 pl-6">
            <li>{t("experience.1")}</li>
            <li>{t("experience.2")}</li>
            <li>{t("experience.3")}</li>
            <li>{t("experience.4")}</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-pink-100 p-2 rounded-full">
              <HiHeart className="text-pink-600 w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {t("sections.hobby")}
            </h3>
          </div>
          <ul className="list-disc list-outside text-gray-700 space-y-2 pl-6">
            <li>{t("hobby.1")}</li>
            <li>{t("hobby.2")}</li>
            <li>{t("hobby.3")}</li>
            <li>{t("hobby.4")}</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-yellow-100 p-2 rounded-full">
              <HiBadgeCheck className="text-yellow-600 w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {t("sections.certificates")}
            </h3>
          </div>
          <ul className="list-disc list-outside text-gray-700 space-y-2 pl-6">
            <li>{t("certificates.1")}</li>
            <li>{t("certificates.2")}</li>
            <li>{t("certificates.3")}</li>
            <li>{t("certificates.4")}</li>
          </ul>
        </div>
      </div>
      <SectionHeader title={t("sections.projects")} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-md p-6 shadow-sm max-md:p-3">
        {bestProjects.map((p, i) => (
          <Link key={i} href={`/projects/${p.slug}`}>
            <div className="relative group rounded-md overflow-hidden hover:cursor-pointer bg-zinc-100/90">
              <Image
                alt={p.name}
                src={getImageByName(p.image)}
                className="w-full h-full object-cover transition duration-300 ease-in-out group-hover:blur-sm group-hover:brightness-85"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-opacity-0 group-hover:bg-opacity-30 transition duration-300">
                <span className="opacity-0 group-hover:opacity-100 text-white font-semibold text-2xl transition duration-300">
                  {p.name}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <SectionFooter page="projects" title={t("sectionFooter.projects")} />
      <SectionHeader title={t("sections.stack")} />
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
      <SectionFooter page="stack" title={t("sectionFooter.stack")} />
      <SectionHeader title={t("sections.contact")} />
      <div className="bg-white rounded-md p-6 shadow-sm mt-4">
        <p className="text-gray-800 font-semibold mb-4">{t("contactText")}</p>

        <ul className="flex flex-col gap-4 text-gray-700 text-sm">
          <li>
            <a
              href={`mailto:${t("contactEmail")}`}
              className="group flex items-center justify-between hover:text-black transition-colors"
            >
              <span className="flex items-center gap-4">
                <FaEnvelope className="w-5 h-5" />
                {t("contactEmail")}
              </span>
              <ChevronRight className="w-4 h-4 opacity-0 translate-x-[-4px] transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 text-gray-500" />
            </a>
          </li>
          <li>
            <a
              href={`https://${t("contactLinkedin")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between hover:text-black transition-colors"
            >
              <span className="flex items-center gap-4">
                <FaLinkedin className="w-5 h-5" />
                {t("contactLinkedin")}
              </span>
              <ChevronRight className="w-4 h-4 opacity-0 translate-x-[-4px] transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 text-gray-500" />
            </a>
          </li>
        </ul>

        <div className="flex flex-col border-t-2 border-zinc-200 pt-5 justify-center items-center w-full text-xs self-center gap-2 mt-5">
          <div className="font-semibold">{t("footer.company")}</div>
          <div className="flex gap-4 items-center">
            <div>{t("footer.nip")}</div>
            <div>{t("footer.regon")}</div>
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

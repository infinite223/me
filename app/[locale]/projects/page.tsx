"use client";

import Image from "next/image";
import scheduleApp from "../../assets/scheduleApp.png";
import carsdesignStart from "../../assets/carsdesignStart.png";
import kaban from "../../assets/kaban_board_screen.png";
import monkey from "../../assets/monkey.png";
import workSchedule from "../../assets/workSchedule.png";
import downloadSongs from "../../assets/downloadSongs.png";
import shoppingNotes from "../../assets/shoppingNotes.png";
import { myProjects } from "./consts";
import Link from "next/link";
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
    case "workSchedule":
      return workSchedule;
    case "downloadSongs":
      return downloadSongs;
    case "shoppingNotes":
      return shoppingNotes;
    default:
      return scheduleApp; // fallback
  }
}

export default function ProjectsPage() {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-6 md:px-6">
      <div>
        <h1 className="text-3xl font-semibold">{t("sections.projects")}</h1>

        <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-4 bg-white rounded-md p-6 shadow-sm max-md:p-3">
          {myProjects.map((p, i) => (
            <Link key={i} href={`/projects/${p.slug}`}>
              <div
                key={i}
                className="relative group rounded-md overflow-hidden hover:cursor-pointer bg-zinc-100/90"
              >
                <Image
                  alt="schedule app"
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
      </div>
    </div>
  );
}

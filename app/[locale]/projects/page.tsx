"use client";

import scheduleApp from "../../assets/scheduleApp.png";
import carsdesignStart from "../../assets/carsdesignStart.png";
import kaban from "../../assets/kaban_board_screen.png";
import monkey from "../../assets/monkey.png";
import workSchedule from "../../assets/workSchedule.png";
import downloadSongs from "../../assets/downloadSongs.png";
import shoppingNotes from "../../assets/shoppingNotes.png";
import assetsTrackPlaceholder from "../../assets/assets-track.png";
import { automotiveCover } from "../../assets/automotive-place";
import ProjectCard from "@/app/components/ProjectCard";
import shiftmazeFull from "../../assets/shiftmazeFull.png";
import pizzaApp from "../../assets/pizza-app.png";
import { myProjects } from "./consts";
import { useTranslations } from "next-intl";

function getImageByName(name: string) {
  switch (name) {
    case "assetsTrack":
      return assetsTrackPlaceholder;
    case "automotivePlace":
      return automotiveCover;
    case "shiftmaze":
      return shiftmazeFull;
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
    case "pizza-app":
      return pizzaApp;
    default:
      return scheduleApp;
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
            <ProjectCard
              key={i}
              name={p.name}
              slug={p.slug}
              src={getImageByName(p.image)}
              contain={p.image === "automotivePlace"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

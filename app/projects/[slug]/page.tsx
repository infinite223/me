import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { SectionHeader } from "@/app/page";
import StackCard from "@/components/StackCard";
import { myProjects } from "@/app/projects/consts";
import scheduleApp from "../../../assets/scheduleApp.png";
import carsdesignStart from "../../../assets/carsdesignStart.png";
import kaban from "../../../assets/kaban_board_screen.png";
import monkey from "../../../assets/monkey.png";
import workSchedule from "../../../assets/workSchedule.png";
import downloadSongs from "../../../assets/downloadSongs.png";
import shoppingNotes from "../../../assets/shoppingNotes.png";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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
      return scheduleApp;
  }
}

export default async function ProjectDetails({ params }: PageProps) {
  const param = await params;
  const project = myProjects.find((p) => p.slug === param.slug);
  if (!project) return notFound();

  const image = getImageByName(project.image);

  return (
    <div className="w-full md:px-6">
      <h1 className="text-3xl font-semibold mb-7">{project.name}</h1>

      <div className="bg-white rounded-md p-6 shadow-sm">
        <div className="w-full flex items-center justify-between max-md:flex-col max-md:items-start">
          <div className="flex items-center gap-1 text-sm">
            <ChevronLeft className="w-4 h-4" />
            <Link href="/projects">Wróć do projektów</Link>
          </div>

          <div className="flex items-center gap-1 text-sm">
            <div className="opacity-75">Kategoria:</div>
            <div className="font-semibold">
              {project.type === "Mobile app" && (
                <span className="">Aplikacja mobilna</span>
              )}
              {project.type === "Web app" && <span>Aplikacja webowa</span>}
              {project.type === "all" && (
                <span>Aplikacja webowa oraz mobilna</span>
              )}
            </div>
          </div>
        </div>

        <Image
          src={image}
          alt={project.name}
          className="rounded-md mb-6 bg-zinc-200/50 w-full mt-5"
        />

        <SectionHeader title="Opis projektu" />
        <p className="text-lg mb-8 mt-4">{project.description}</p>

        <SectionHeader title="Wykorzystane technologie" />
        <div className="flex gap-2 flex-wrap mt-4 w-full">
          {project.technologies.map((tech, key) => (
            <StackCard
              color={tech.color}
              icon={tech.icon}
              title={tech.name}
              key={key}
              description=""
              small
            />
          ))}
        </div>
      </div>
    </div>
  );
}

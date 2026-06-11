import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Globe } from "lucide-react";
import { FaGithub, FaGooglePlay } from "react-icons/fa";
import StackCard from "@/app/components/StackCard";
import scheduleApp from "../../../assets/scheduleApp.png";
import carsdesignStart from "../../../assets/carsdesignStart.png";
import kaban from "../../../assets/kaban_board_screen.png";
import monkey from "../../../assets/monkey.png";
import workSchedule from "../../../assets/workSchedule.png";
import downloadSongs from "../../../assets/downloadSongs.png";
import shoppingNotes from "../../../assets/shoppingNotes.png";
import assetsTrackPlaceholder from "../../../assets/assets-track.png";
import automotivePlacePlaceholder from "../../../assets/automotiveplace.png";
import shiftmazeFull from "../../../assets/shiftmazeFull.png";
import { myProjects } from "../consts";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getImageByName(name: string) {
  switch (name) {
    case "assetsTrack":
      return assetsTrackPlaceholder;
    case "automotivePlace":
      return automotivePlacePlaceholder;
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
    default:
      return scheduleApp;
  }
}

const ProjectLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center justify-between hover:text-black hover:bg-zinc-100/60 p-3 rounded-md transition-colors text-gray-700 text-sm"
  >
    <span className="flex items-center gap-4">
      {icon}
      {label}
    </span>
    <ChevronRight className="w-4 h-4 opacity-0 translate-x-[-4px] transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 text-gray-500" />
  </a>
);

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
        <h2 className="text-2xl font-semibold mt-4">Opis projektu</h2>
        <p className="mb-8 mt-4">{project.description}</p>
        <h2 className="text-2xl font-semibold mt-4">
          Wykorzystane technologie
        </h2>

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

        <h2 className="text-2xl font-semibold mt-6">Linki</h2>
        <div className="flex flex-col mt-2">
          {project.links.linkToGithub && (
            <ProjectLink
              href={project.links.linkToGithub}
              icon={<FaGithub className="w-5 h-5" />}
              label="GitHub"
            />
          )}
          {project.links.linkToLiveapp && (
            <ProjectLink
              href={project.links.linkToLiveapp}
              icon={<Globe className="w-5 h-5" />}
              label="Web"
            />
          )}
          {project.links.linkToMobileApp && (
            <ProjectLink
              href={project.links.linkToMobileApp}
              icon={<FaGooglePlay className="w-5 h-5" />}
              label="Google Play"
            />
          )}
        </div>
      </div>
    </div>
  );
}

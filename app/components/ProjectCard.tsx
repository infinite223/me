import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  name: string;
  slug: string;
  src: StaticImageData;
  contain?: boolean;
};

const ProjectCard = ({ name, slug, src, contain }: Props) => (
  <Link
    href={`/projects/${slug}`}
    className="group block rounded-lg overflow-hidden bg-zinc-100 ring-1 ring-black/5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-cyan-600"
  >
    <div
      className={`relative aspect-[3/2] ${contain ? "bg-[#f3f4f7]" : ""}`}
    >
      <Image
        alt={name}
        src={src}
        fill
        sizes="(min-width: 768px) 45vw, 100vw"
        className={`${contain ? "object-contain" : "object-cover"} transition duration-500 ease-out group-hover:scale-[1.03]`}
      />
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-4 pt-10 pb-3 bg-gradient-to-t from-black/70 to-transparent translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-md:translate-y-0 max-md:opacity-100">
        <span className="text-white font-semibold text-lg">{name}</span>
        <ArrowUpRight className="w-5 h-5 text-white" />
      </div>
    </div>
  </Link>
);

export default ProjectCard;

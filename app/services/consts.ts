import { Service } from "@/types/service";
import { Laptop, Monitor, Smartphone } from "lucide-react";

export const services: Service[] = [
  {
    title: "Aplikacje webowe",
    icon: Laptop,
    description:
      "Projektuję i tworzę nowoczesne aplikacje webowe dostosowane do indywidualnych potrzeb biznesowych.",
    gradient: "bg-gradient-to-br from-blue-100 to-transparent",
  },
  {
    title: "Strony internetowe",
    icon: Monitor,
    description:
      "Buduję estetyczne, responsywne i szybkie strony, które skutecznie wspierają Twoją markę w internecie.",
    gradient: "bg-gradient-to-br from-green-100 to-transparent",
  },
  {
    title: "Aplikacje mobilne",
    icon: Smartphone,
    description:
      "Tworzę lekkie i intuicyjne aplikacje mobilne na iOS i Androida z naciskiem na UX i wydajność.",
    gradient: "bg-gradient-to-br from-pink-100 to-transparent",
  },
];

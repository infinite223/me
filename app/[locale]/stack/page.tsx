"use client";

import StackCard from "@/app/components/StackCard";
import { fullStack } from "./consts";
import { useTranslations } from "next-intl";

export default function StackPage() {
  const t = useTranslations("stackPage");

  // Mapowanie nazw -> kluczy bez kropek
  const keyMap: Record<string, string> = {
    ".NET": "DotNET",
    "Next.js": "Nextjs",
  };

  const getKey = (name: string) => keyMap[name] || name;

  return (
    <div className="flex flex-col gap-6 md:px-6">
      <div>
        <h1 className="text-3xl font-semibold">{t("title")}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {fullStack.map((s, i) => (
            <StackCard
              key={i}
              title={s.name}
              icon={s.icon}
              description={t(`descriptions.${getKey(s.name)}`)}
              color={s.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

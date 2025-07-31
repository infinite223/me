"use client";

import StackCard from "@/components/StackCard";
import { fullStack } from "./consts";

export default function StackPage() {
  return (
    <div className="flex flex-col gap-6 md:px-6 pt-6">
      <div>
        <h1 className="text-4xl font-bold">Stack</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {fullStack.map((s, i) => (
            <StackCard
              key={i}
              title={s.name}
              icon={s.icon}
              description={s.description}
              color={s.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

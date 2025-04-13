"use client";

import { useState } from "react";
import Image from "next/image";

const sports = [
  { name: "All Sports", icon: "/icons/allsports.png" },
  { name: "Boxing", icon: "/icons/boxing.png" },

];

export default function SportsFilter() {
  const [active, setActive] = useState("All Sports");

  return (
    <div className="bg-zinc-900 text-white px-4 py-2 rounded-xl shadow-lg overflow-x-auto max-w-full">
      <ul className="flex gap-2">
        {sports.map((sport) => (
          <li
            key={sport.name}
            data-test-id="SPORTFILTER_LIST_ITEM"
            className={`sports-filter__sports-filter-list-item___1fFiC flex items-center gap-1 px-3 py-1 rounded-md text-sm cursor-pointer transition ${
              active === sport.name
                ? "bg-white text-black shadow-sm"
                : "bg-zinc-800 hover:bg-zinc-700"
            }`}
            onClick={() => setActive(sport.name)}
          >
            <Image
              src={sport.icon}
              alt={sport.name}
              width={20}
              height={20}
              className="sports-filter__icon-image___30sst object-contain"
            />
            <span>{sport.name}</span>
            {active === sport.name && (
              <svg
                data-test-id="TICK"
                className="sports-filter__sports-filter-list-check-icon___3TFEk w-4 h-4"
                viewBox="0 0 240 240"
                fill="currentColor"
              >
                <path d="M90.95 182.914L34 125.964l10.484-10.484 46.465 46.704L204.133 49l10.484 10.484z" />
              </svg>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

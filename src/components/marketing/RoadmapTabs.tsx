"use client";

import { useState } from "react";
import { roadmap, roadmapTabs, type RoadmapKey } from "@/data/roadmapData";

export default function RoadmapTabs() {
  const [active, setActive] = useState<RoadmapKey>("12");

  return (
    <div>
      <div className="timelineTabs" role="tablist" aria-label="Rollout phases">
        {roadmapTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={active === tab.key}
            className={["tab", active === tab.key ? "active" : ""].filter(Boolean).join(" ")}
            onClick={() => setActive(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="timelineGrid topSpace">
        {roadmap[active].map((block) => (
          <article className="tcard" key={block.title}>
            <b>{block.title}</b>
            <ul>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

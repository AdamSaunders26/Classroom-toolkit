"use client";

import ControlSidebar from "./components/ControlSidebar";
import TrackerHeader from "./components/TrackerHeader";

export default function TrackerDetailsPages() {
  return (
    <section className="flex flex-col h-full">
      <TrackerHeader />
      <section className="bg-ctyellow flex  h-full ">
        <div className="bg-white flex-1">The rest</div>
        <ControlSidebar />
      </section>
    </section>
  );
}

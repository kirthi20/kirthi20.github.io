"use client";

import Image from "next/image";
import ToggleContainer from "@/components/ToggleContainer";
import SummaryCard from "@/components/SummaryCard";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row w-full h-full md:h-screen gap-4 p-4">
  {/* Left side - Profile */}
  <div className="flex-1 flex items-center justify-center p-8 bg-white rounded-xl shadow">
    <SummaryCard />
  </div>

  {/* Right side - Toggle Sections */}
  <div className="flex-1 flex items-center justify-center p-8 bg-black/20 rounded-xl shadow">
    <ToggleContainer />
  </div>
</div>

  );
}

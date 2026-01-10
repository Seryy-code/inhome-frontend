"use client"
import { useState } from "react"

import HomeIcon from "/src/assets/home.svg?react"
import ProjectIcon from "/src/assets/project.svg?react"
import LocationIcon from "/src/assets/location.svg?react"
import MasterplanIcon from "/src/assets/masterplan.svg?react"
import AmenitiesIcon from "/src/assets/amenities.svg?react"
import VideoIcon from "/src/assets/video.svg?react"
import PaymentIcon from "/src/assets/payment.svg?react"
import PlanIcon from "/src/assets/block plan.svg?react"
 
const NAV_CONFIG = {
  home: { title: "Home", icon: HomeIcon },
  project: { title: "Project", icon: ProjectIcon },
  location: { title: "Location", icon: LocationIcon },
  masterplan: { title: "Masterplan", icon: MasterplanIcon },
  amenities: { title: "Amenities", icon: AmenitiesIcon },
  photo: { title: "Gallery", icon: VideoIcon },
  payment: { title: "Payment", icon: PaymentIcon },
  plan: { title: "Plan", icon: PlanIcon },
};

  
export default function BottomNavigation({ activeIndex, onSelect, sections }) {
  return (
    <div className="fixed bottom-0 left-0 max-h-[10vh] w-full flex justify-center bg-white py-3 shadow-md mont">
      {sections.map((s, i) => {
        const nav = NAV_CONFIG[s.section];
        if (!nav) return null;

        const isActive = activeIndex === i;
        const Icon = nav.icon;

        return (
          <div
            key={`${s.section}-${i}`}
            onClick={() => onSelect(i)}
            className={`flex flex-col px-1 mx-3 items-center cursor-pointer text-xs capitalize
              ${isActive ? "text-[#78530D] font-semibold" : "text-[#727479]"}
            `}
          >
            <Icon
              className={`w-7 h-7 mb-1.5 transition-all duration-200
                ${isActive ? "text-[#78530D] stroke-[0.5px] stroke-[#78530D]" : "text-[#727479]"}
              `}
            />
            <span>{nav.title}</span>
          </div>
        );
      })}
    </div>
  );
}
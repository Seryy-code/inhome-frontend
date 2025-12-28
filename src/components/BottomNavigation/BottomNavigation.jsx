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


export default function BottomNavigation({activeSection}) {
  const [selected, setSelected] = useState(0)

  const menu = [
    { title: "home", icon: HomeIcon },
    { title: "about project", icon: ProjectIcon },
    { title: "location", icon: LocationIcon },
    { title: "masterplan", icon: MasterplanIcon },
    { title: "amenities", icon: AmenitiesIcon },
    { title: "gallery", icon: VideoIcon },
    { title: "payment details", icon: PaymentIcon },
    { title: "block floor plan", icon: PlanIcon },
  ]

  const handleSelect = (index) => {
    setSelected(index)
    activeSection(index)
  }

  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-center bg-white py-3 shadow-md">
      {menu.map((item, index) => {
        const isActive = selected === index
        const Icon = item.icon
        return (
          <div
            key={index}
            onClick={() => handleSelect(index)}
            className={`flex flex-col px-1 mx-3 items-center cursor-pointer text-xs capitalize
              ${isActive ? "text-[#78530D] font-semibold" : "text-[#727479]"}
            `}
          >
            <Icon className={`w-7 h-7 mb-1.5 transition-all duration-200 ${isActive ? "text-[#78530D]" : "text-[#727479]"}`} />
            <span>{item.title}</span>
          </div>
        )
      })}
    </div>
  )
}

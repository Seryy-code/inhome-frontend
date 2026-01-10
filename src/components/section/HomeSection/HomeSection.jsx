"use client"
import { useState } from "react"
import HorizontalSlider from "../../sliders/HorizontalSlider"

function HomeSection({ section  }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const { page } = section;
  

  if (page.type === "default") {
    return (
      <div className="relative w-screen h-screen overflow-hidden bg-red-300">
        <img
          src={page.images[0]}
          alt=""
          className="absolute w-full h-auto bottom-0"
        />
      </div>
    )
  }

  if (page.type === "auto") {
    return (
      <HorizontalSlider
        activeSlide={activeSlide}
        onChange={setActiveSlide}
        type="auto"
        interval={5000}
      >
        {page.images.map((image, index) => (
          <div
            key={index}
            className="relative w-screen h-screen flex-shrink-0 overflow-hidden bg-red-300"
          >
            <img
              src={image}
              alt=""
              className="absolute w-full h-auto bottom-0"
            />
          </div>
        ))}
      </HorizontalSlider>
    )
  }

  return null
}

export default HomeSection

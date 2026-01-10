import { useState } from "react"
import HorizontalSlider from "../../sliders/HorizontalSlider"
import PageRenderer from "../../pages/PageRenderer";

function AmenitiesSection({section}) {
const [slide, setSlide] = useState(0)
const { pages } = section;
  return (
    <div className="w-full h-screen">  
        <HorizontalSlider activeSlide={slide} onChange={setSlide}>
        {pages.map((page, index) => (
          <div key={index} className="w-screen h-screen flex-shrink-0">
            <PageRenderer
              section={section.section}
              page={page}
            />
        </div>
        ))}
      </HorizontalSlider>
    </div>
  )
}

export default AmenitiesSection

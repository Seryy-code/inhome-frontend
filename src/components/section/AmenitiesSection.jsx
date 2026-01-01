import { useState } from "react"
import HorizontalSlider from "../sliders/HorizontalSlider"
import PageRenderer from "../pages/PageRenderer";

function AmenitiesSection({data}) {
const [slide, setSlide] = useState(0)
const filteredData = data.find(item => item.section === "amenities");
  return (
    <div className="w-full h-screen">  
        <HorizontalSlider activeSlide={slide} onChange={setSlide}>
        {filteredData.pages.map((page, index) => (
          <div key={index} className="w-screen h-screen flex-shrink-0">
            <PageRenderer
              section={filteredData.section}
              page={page}
            />
        </div>
        ))}
      </HorizontalSlider>
    </div>
  )
}

export default AmenitiesSection

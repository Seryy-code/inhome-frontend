import { useState } from "react"
import HorizontalSlider from "../sliders/HorizontalSlider"
import PageRenderer from "../pages/PageRenderer"

function ProjectSection({data}) {
const [slide, setSlide] = useState(0)
  return (
    <div className="w-full h-screen">  
        <HorizontalSlider activeSlide={slide} onChange={setSlide}>
        {data.pages.map((page, index) => (
          <div key={index} className="w-screen h-screen flex-shrink-0">
            <PageRenderer
              section={data.section}
              page={page}
            />
        </div>
        ))}
      </HorizontalSlider>
    </div>
  )
}

export default ProjectSection

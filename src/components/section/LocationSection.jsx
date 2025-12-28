import { useState } from "react"
import HorizontalSlider from "../sliders/HorizontalSlider"

function LocationSection() {
const [slide, setSlide] = useState(0)
  return (
    <div className="w-full h-screen bg-green-300">  
        <HorizontalSlider activeSlide={slide} onChange={setSlide}>
            <div className="min-w-[100vw] h-screen bg-red-400">
                <h1>Location Section</h1>
                Slide 1</div>
            <div className="min-w-[100vw] h-screen bg-blue-400">Slide 2</div>
            <div className="min-w-[100vw] h-screen bg-green-400">Slide 3</div>
        </HorizontalSlider>
    </div>
  )
}

export default LocationSection

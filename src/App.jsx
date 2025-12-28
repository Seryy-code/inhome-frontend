"use client"
import { useState } from 'react'

import VerticalSlider from '@/components/sliders/VerticalSlider'
import BottomNavigation from '@/components/BottomNavigation/BottomNavigation'
import HomeSection from '@/components/section/HomeSection'
import LocationSection from '@/components/section/LocationSection'
import ProjectSection from '@/components/section/ProjectSection'

function App() {
const [activeSection, setActiveSection] = useState(1)

  const onChange = (e) =>{
    setActiveSection(e)
  }

  return (
    <>

        <VerticalSlider activeSection={activeSection}> 
          <HomeSection />
          <ProjectSection />
          <LocationSection />
        </VerticalSlider>
        <BottomNavigation activeSection={onChange}/>
    </>
  )
}

export default App

"use client"
import { useState } from 'react'

import VerticalSlider from '@/components/sliders/VerticalSlider'
import BottomNavigation from '@/components/BottomNavigation/BottomNavigation'
import HomeSection from '@/components/section/HomeSection'
import LocationSection from '@/components/section/LocationSection'
import ProjectSection from '@/components/section/ProjectSection'
import homebg from "@/assets/homebg1.jpg"
import homebg2 from "@/assets/homebg2.jpg"
import about_bg_1 from "@/images/about-bg-1.jpg"
import about_img from "@/images/about.jpg"
import firm1 from "@/images/firm1.jpg"
import firm2 from "@/images/firm2.jpg"
import firm3 from "@/images/firm3.jpg"
import firm4 from "@/images/firm4.jpg"
import firm5 from "@/images/firm5.jpg"
import firm6 from "@/images/firm6.jpg"
import partner_logo from "@/images/partner-logo.png"


function App() {
const [activeSection, setActiveSection] = useState(0)
const home_images = [homebg, homebg2]
const aboutProjectData = {
  section: "aboutProject",
  pages: [
    {
      type: 1,
      description: "InvestHome has reputation of reliable partner at Spain real estate market. Our motto - professional work with an individual approach. ",
      achievements_title: "WHAT WE ACHIEVED",
      achievements: [
        "Over 50 completed projects",
        "Over 50,000 sq m of first-class housing",
        "100% investors participate in next projects"
      ],
      image: about_bg_1
    },
    {
      type: 2,
      title: "Our experience in numbers",
      subtitleLeft: "InvestHome Key Numbers",
      stats: [
        { value: "100%", text: "of investors participate in next projects" },
        { value: "20+", text: "years of experience in construction and real estate" },
        { value: "50+", text: "completed projects" },
        { value: "50,000+", text: "m2 of premium housing delivered" }
      ],
      image: about_bg_1
    },
    {
      type: 3,
      partnerImage: about_img,
      partnerLogo: partner_logo,
      description: "YODEZEEN’s philosophy is a testament to our belief in the transformative power of architecture and design. We view each project as an opportunity to create not just spaces, but experiences that enrich lives and inspire emotions.",
      partners: [
        { logo: firm1, text: "Architecture bureau" },
        { logo: firm2, text: "Construction company" },
        { logo: firm3, text: "Legal partner" },
        { logo: firm4, text: "Investment fund" },
        { logo: firm5, text: "Interior design" },
        { logo: firm6, text: "Engineering" },
      ]
    }
  ]
}


  const onChange = (e) =>{
    setActiveSection(e)
  }

  return (
    <>

        <VerticalSlider activeSection={activeSection}> 
          <HomeSection type="auto" images={home_images}/>
          <ProjectSection data={aboutProjectData}/>
          <LocationSection />
        </VerticalSlider>
        <BottomNavigation activeSection={onChange}/>
    </>
  )
}

export default App

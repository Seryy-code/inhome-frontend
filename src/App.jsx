"use client"
import { useState } from 'react'

import VerticalSlider from '@/components/sliders/VerticalSlider'
import BottomNavigation from '@/components/BottomNavigation/BottomNavigation'
import HomeSection from '@/components/section/HomeSection'
import LocationSection from '@/components/section/LocationSection'
import ProjectSection from '@/components/section/ProjectSection'
import MasterplanSection from './components/section/MasterplanSection'
import AmenitiesSection from './components/section/AmenitiesSection'
import PhotoSection from './components/section/PhotoSection'


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
import masterplan_img from "@/images/masterplan.jpg"
import amenities_img from "@/images/amenities1.jpg"
import photo1_img from "@/images/photo1.jpg"
import photo2_img from "@/images/photo2.jpg"
import photo3_img from "@/images/photo3.jpg"
import photo4_img from "@/images/photo4.jpg"
import photo5_img from "@/images/photo5.jpg"
import photo6_img from "@/images/photo6.jpg"
import photo7_img from "@/images/photo7.jpg"
import photo8_img from "@/images/photo8.jpg"
import photo9_img from "@/images/photo9.jpg"


import { list } from 'postcss'


function App() {
const [activeSection, setActiveSection] = useState(0)
const home_images = [homebg, homebg2]
const data = [
  {
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
  },
  {
    section: "location",
    pages: [
        {
          type: 1,
          title: "LOCATION",
          sm_description:
            "A perfection inspired by the Mediterranean sun, warmth, and charm — a seamless blend of elegance, comfort, and coastal beauty.",
          description:
            "Every architectural element and design detail has been thoughtfully crafted to provide an unparalleled living experience, showcasing a dedication to quality in every aspect. \n\nEvery architectural element and design detail has been thoughtfully crafted to provide an unparalleled living experience, showcasing a dedication to quality in every aspect. The residential complex is a masterpiece of design inspired by the warmth of the Mediterranean sun, the beauty of nature, and the timeless charm of Spanish architecture. ",
          dec_image: about_bg_1,
          images: [
            homebg,
            homebg2,
            about_bg_1,
          ],
        },
        {
        type: 2,
        title: "THE ESSENCE OF IDEAL LOCATION",
        categories: [
      {
        title: "Beaches",
        items: [
          {
            name: "Playa del Saladillo",
            text: "One of the longest & most beautiful beaches in Estepona",
            time: "4 min"
          },
          {
            name: "Playa del Sol Villacana",
            text: "Charming & peaceful beach with golden sands",
            time: "4 min"
          },
          {
            name: "Playa de Guadalmanza",
            text: "Peaceful beach with a mix of golden sand and pebbles",
            time: "4 min"
          }
        ]
      },
      {
        title: "Golf courses",
        items: [
          {
            name: "Los Flamingos Golf Club",
            text: "18-hole championship course with picturesque lakes",
            time: "3 min"
          },
          {
            name: "El Paraíso Golf Club",
            text: "Well-established golf course with breathtaking sea views",
            time: "7 min"
          },
          {
            name: "La Resina Golf & Country Club",
            text: "Golf course suitable for all levels of players",
            time: "9 min"
          }
        ]
      },
      {
        title: "Tennis clubs",
        items: [
          {
            name: "Racquet Club Villa Padierna",
            text: "Exclusive tennis club within the luxurious Villa Padierna Palace",
            time: "5 min"
          },
          {
            name: "Bel-Air Tennis Club",
            text: "Modern club with Tennis Academy",
            time: "2 min"
          },
          {
            name: "Roza Rossa",
            text: "Nine courts with attractive modern design",
            time: "13 min"
          }
        ]
      },
      {
        title: "Shopping",
        items: [
          {
            name: "Lidl, Aldi, Mercadona",
            text: "Popular supermarket chains offering a wide range of products",
            time: "3 min"
          },
          {
            name: "El Corte Inglés",
            text: "Luxury department store in Puerto Banús",
            time: "13 min"
          },
          {
            name: "La Cañada Shopping",
            text: "One of the largest shopping malls in Marbella",
            time: "20 min"
          }
        ]
      },
      {
        title: "Restaurants",
        items: [
          {
            name: "Villa Padierna Restaurant",
            text: "World-class gastronomic experience",
            time: "3 min"
          },
          {
            name: "Kalma & Kaos",
            text: "Trendy restaurant with a varied menu",
            time: "3 min"
          },
          {
            name: "Beachside restaurants",
            text: "Charming chiringuitos with Mediterranean cuisine",
            time: "4 min"
          }
        ]
      }
    ],
    image: about_bg_1
        },
        {
        type: 3,
        title: "The essence of ideal location",
          map: {
          center: {
            lat: 36.4256,
            lng: -5.1443
          },
          zoom: 14,
          marker: {
            lat: 36.4256,
            lng: -5.1443,
            label: "Estepona, Spain"
          }
        }
      }
    ]
  },
  {
    section: "masterplan",
    page: {
      image: masterplan_img,
      buttons: [
        {
          block_num: 1,
          position: {
            x: 18, // %
            y: 32  // %
          }
        },
        {
          block_num: 2,
          position: {
            x: 48,
            y: 22
          }
        },
        {
          block_num: 3,
          position: {
            x: 65,
            y: 15
          }
        }
      ]
    },
    apartments: [
      {
        block_num: 1,
        apartment: 1,
        area: 144.1,
        price: 100000,
        available: true
      },
      {
        block_num: 1,
        apartment: 2,
        area: 157.3,
        price: 120000,
        available: false
      },
      {
        block_num: 1,
        apartment: 1,
        area: 144.1,
        price: 100000,
        available: true
      },
      {
        block_num: 1,
        apartment: 2,
        area: 157.3,
        price: 120000,
        available: false
      },
      {
        block_num: 1,
        apartment: 1,
        area: 144.1,
        price: 100000,
        available: true
      },
      {
        block_num: 1,
        apartment: 2,
        area: 157.3,
        price: 120000,
        available: false
      },
      {
        block_num: 1,
        apartment: 1,
        area: 144.1,
        price: 100000,
        available: true
      },
      {
        block_num: 1,
        apartment: 2,
        area: 157.3,
        price: 120000,
        available: false
      },
      {
        block_num: 2,
        apartment: 1,
        area: 157.3,
        price: 100000,
        available: true
      }
    ]
  },
  {
    section: "amenities",
    pages: [
      {
        type: 1,
        title: "Amenities & Lifestyle",
        description: "Essence Residence provides a full set of resort-level amenities, including a gym, indoor heated pool, outdoor pool, children’s pool, sauna, Turkish bath, coworking and lounge areas, premium kitchens, smart home features, and landscaped outdoor spaces.",
        have: [
          "Gym", "Indoor heated pool", "Outdoor pool", "Children's pool", "Sauna", "Turkish bath", "Coworking & lounge", "Smart Home system", "Smart Security", "Fully fitted kitchens", "and more"
        ],
        image: amenities_img
      }
    ]
  },
  {
    section: "photo",
    pages: [
      {
        type: 1,
        title: "Living room",
        image: photo1_img
      },
      {
        type: 2,
        images: [photo3_img, photo2_img]
      },
      {
        type: 1,
        title: "Bedroom",
        image: photo4_img
      },
      {
        type: 3,
        images: [photo5_img, photo6_img, photo7_img]
      },
      {
        type: 4,
        images: [photo8_img, photo9_img]
      },
    ]
  }
]


  const onChange = (e) =>{
    setActiveSection(e)
  }

  return (
    <>

        <VerticalSlider activeSection={activeSection}> 
          <HomeSection type="auto" images={home_images}/>
          <ProjectSection data={data}/>
          <LocationSection data={data}/>
          <MasterplanSection data={data}/>
          <AmenitiesSection data={data} />
          <PhotoSection data={data} />
        </VerticalSlider>
        <BottomNavigation activeSection={onChange}/>
    </>
  )
}

export default App

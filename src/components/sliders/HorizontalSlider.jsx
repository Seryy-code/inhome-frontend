"use client"
import { useEffect } from "react"

function HorizontalSlider({
  activeSlide,
  children,
  onChange,
  type = "default",
  interval = 4000,
}) {
  
  const totalSlides = children.length

  const handlePrev = () => {
    if (activeSlide > 0) onChange(activeSlide - 1)
  }

  const handleNext = () => {
    if (activeSlide < totalSlides - 1) {
      onChange(activeSlide + 1)
    } else {
      onChange(0) 
    }
  }

  useEffect(() => {
    if (type !== "auto") return

    const id = setInterval(() => {
      onChange(
        activeSlide < totalSlides - 1 ? activeSlide + 1 : 0
      )
    }, interval)

    return () => clearInterval(id)
  }, [type, activeSlide, totalSlides, interval, onChange])

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${activeSlide * 100}vw)`,
        }}
      >
        {children}
      </div>

      {type === "default" && children.length != 1 && (
         <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-5">
            <button
            onClick={handlePrev}
            className="px-2 py-3 bg-white/70 cursor-pointer hover:bg-white"
        >
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.0008 10.0006C24.0008 10.2658 23.8954 10.5201 23.7079 10.7077C23.5204 10.8952 23.266 11.0006 23.0008 11.0006H3.41454L10.7083 18.2931C10.8012 18.386 10.8749 18.4963 10.9252 18.6177C10.9755 18.7391 11.0013 18.8692 11.0013 19.0006C11.0013 19.132 10.9755 19.2621 10.9252 19.3835C10.8749 19.5048 10.8012 19.6151 10.7083 19.7081C10.6154 19.801 10.5051 19.8747 10.3837 19.9249C10.2623 19.9752 10.1322 20.0011 10.0008 20.0011C9.86939 20.0011 9.73928 19.9752 9.61789 19.9249C9.4965 19.8747 9.3862 19.801 9.29329 19.7081L0.293287 10.7081C0.20031 10.6152 0.126551 10.5049 0.0762269 10.3835C0.0259027 10.2621 0 10.132 0 10.0006C0 9.86914 0.0259027 9.73901 0.0762269 9.61762C0.126551 9.49622 0.20031 9.38593 0.293287 9.29306L9.29329 0.293056C9.48093 0.105415 9.73542 -1.97712e-09 10.0008 0C10.2662 1.97712e-09 10.5206 0.105415 10.7083 0.293056C10.8959 0.480697 11.0013 0.735192 11.0013 1.00056C11.0013 1.26592 10.8959 1.52042 10.7083 1.70806L3.41454 9.00056H23.0008C23.266 9.00056 23.5204 9.10591 23.7079 9.29345C23.8954 9.48099 24.0008 9.73534 24.0008 10.0006Z" fill="#78530D"/>
            </svg>

        </button>

        <button
            onClick={handleNext}
            className="px-2 py-3 bg-white/70  cursor-pointer hover:bg-white"
        >
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.7075 10.7081L14.7075 19.7081C14.5199 19.8957 14.2654 20.0011 14 20.0011C13.7346 20.0011 13.4801 19.8957 13.2925 19.7081C13.1049 19.5204 12.9994 19.2659 12.9994 19.0006C12.9994 18.7352 13.1049 18.4807 13.2925 18.2931L20.5863 11.0006H1C0.734784 11.0006 0.48043 10.8952 0.292893 10.7077C0.105357 10.5201 0 10.2658 0 10.0006C0 9.73534 0.105357 9.48099 0.292893 9.29345C0.48043 9.10591 0.734784 9.00056 1 9.00056H20.5863L13.2925 1.70806C13.1049 1.52042 12.9994 1.26592 12.9994 1.00056C12.9994 0.735192 13.1049 0.480697 13.2925 0.293056C13.4801 0.105415 13.7346 0 14 0C14.2654 0 14.5199 0.105415 14.7075 0.293056L23.7075 9.29306C23.8005 9.38593 23.8742 9.49622 23.9246 9.61762C23.9749 9.73901 24.0008 9.86914 24.0008 10.0006C24.0008 10.132 23.9749 10.2621 23.9246 10.3835C23.8742 10.5049 23.8005 10.6152 23.7075 10.7081Z" fill="#78530D"/>
            </svg>


        </button>
      </div>
      )}
    </div>
  )
}

export default HorizontalSlider

"use client"

function VerticalSlider({activeSection, children}) {
  return (
    <div className='w-full h-screen overflow-hidden  bg-gray-600'>
            <div
                className="transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateY(-${activeSection * 100}vh)`,
                }}
            >
                {children}
            </div>
    </div>
  )
}

export default VerticalSlider
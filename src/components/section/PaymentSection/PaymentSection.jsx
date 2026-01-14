"use client"

import { useMemo, useState } from "react"

function PaymentSection({ section }) {
  const {page} = section


  const [amount, setAmount] = useState(page.input.min)

  const totalExpensesPercent = useMemo(
    () => page.expenses.reduce((sum, e) => sum + e.percent, 0),
    [page.expenses]
  )

  const finalPercent = 100 - totalExpensesPercent

  const handleChange = (value) => {
    const rounded = Math.round(value / 1000) * 1000
    setAmount(rounded)
  }

  return (
    <div className="w-screen h-screen flex items-center">
      <div className="max-w-[1920px] w-full h-full py-20 px-15 mx-auto flex justify-between">
        <div className="w-[40%]">
          <h2 className="text-6xl text-[#78530D] tracking-widest mb-10 spectral">{page.title}</h2>
          <div className="mb-10 flex flex-wrap justify-between">
            <label className="block mb-3 font-bold text-2xl">Price of the unit</label>
            
            <input
              type="number"
              value={amount}
              min={page.input.min}
              max={page.input.max}
              
              onChange={(e) => handleChange(+e.target.value)}
              className="px-4 py-2 min-w-[140px] text-center text-[#78530D] bg-[#f3eee4] text-lg"
            />

            <input
                type="range"
                min={page.input.min}
                max={page.input.max}
                step={1000}
                value={amount}
                onChange={(e) => handleChange(+e.target.value)}
                style={{
                    backgroundSize: `${((amount - page.input.min) * 100) / (page.input.max - page.input.min)}% 100%`,
                }}
                className="
                    w-full mt-6 h-2 appearance-none cursor-pointer rounded-full outline-none
                    /* Фон линии (незаполненный) */
                    bg-[#DBCBAB66]
                    /* Слой заполнения (градиент) */
                    bg-gradient-to-r from-[#78530D] to-[#78530D] bg-no-repeat

                    /* Точка для Chrome/Safari */
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:h-[34px]
                    [&::-webkit-slider-thumb]:w-[34px]
                    
                    [&::-webkit-slider-thumb]:relative
                    [&::-webkit-slider-thumb]:translate-y-[6px]
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-[#78530D]
                    [&::-webkit-slider-thumb]:cursor-pointer
                    /* Центрирование точки относительно линии 8px */
                    [&::-webkit-slider-thumb]:mt-[-13px] 

                    /* Точка для Firefox */
                    [&::-moz-range-thumb]:h-[34px]
                    [&::-moz-range-thumb]:w-[34px]
                    [&::-moz-range-thumb]:bg-[#78530D]
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:border-none
                "
                />

          </div>
          <div className="space-y-6">
            {page.expenses.map((item, index) => (
              <div key={index} className="flex justify-between items-center pb-3 border-[#DBCBAB66] border-b-[1px]">
                <span className="font-bold text-2xl">{item.title}</span>
                <span className="bg-[#f3eee4] px-4 py-2 min-w-[140px] text-center text-[#78530D] text-lg ">
                  {(amount * item.percent / 100).toLocaleString()} €
                </span>
              </div>
            ))}
            <div className="flex justify-between items-center pb-3 font-medium border-[#DBCBAB66] border-b-[1px]">
              <span className="font-bold text-2xl">Final {finalPercent}% Payment</span>
              <span className="bg-[#f3eee4] px-4 py-2 min-w-[140px] text-center text-[#78530D] text-lg ">
                {( amount + (amount * finalPercent / 100)).toLocaleString()} €
              </span>
            </div>
          </div>
        </div>
        <div
          className="w-[55%] h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${page.images[0]})` }}
        />
      </div>
    </div>
  )
}

export default PaymentSection

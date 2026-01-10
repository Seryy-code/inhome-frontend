import X from "@/assets/close.svg?react"
function ApartmentsModal({ block, apartments, onClose }) {
  return (
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="relative w-[900px] max-w-[95vw] bg-[#F3EEDF] rounded-md px-10 py-8">

        <div className="relative mb-8 text-center">
          <h2 className="text-4xl font-serif text-[#8B5E14]">
            Block {block}
          </h2>
            <X onClick={onClose} className="absolute right-0 top-0 cursor-pointer"/>
        </div>

        <div className="grid grid-cols-4 text-sm uppercase tracking-wide text-[#8B5E14] border-b border-[#C9AE7B] pb-3">
          <div>Apartment Number</div>
          <div>Area</div>
          <div>Price</div>
          <div>Availability</div>
        </div>

        <div className="max-h-[35vh] overflow-y-auto divide-y divide-[#C9AE7B]">
          {apartments.map((a, i) => (
            <div
              key={i}
              className="grid grid-cols-4 py-5 text-[#8B5E14]"
            >
              <div className="font-medium">
                Apartment {a.apartment}
              </div>

              <div>
                {a.area} m²
              </div>

              <div>
                {a.price.toLocaleString()} €
              </div>

              <div
                className={`font-medium ${
                  a.available ? "text-[#8B5E14]" : "text-[#A07A3D]"
                }`}
              >
                {a.available ? "Available" : "Not available"}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ApartmentsModal

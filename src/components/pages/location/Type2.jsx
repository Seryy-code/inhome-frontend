function LocationType2({ data }) {
  if (!data || !data.categories || !Array.isArray(data.categories)) {
    return null;
  }

  return (
    <div className="w-screen min-h-screen flex flex-col px-10 py-14">
      
      {/* Title */}
      <h2 className="text-center text-2xl tracking-widest mb-12">
        {data.title}
      </h2>

      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col gap-10 mb-16 mx-auto">
        {data.categories.map((category, i) => (
          <div key={i} className="flex flex-col gap-6">
            
            {/* Category title */}
            <div className="bg-[#F3EBDD] text-center py-2 text-sm tracking-wide">
              {category.title}
            </div>

            {/* Items */}
            <div className="flex flex-col gap-5">
              {category.items.map((item, idx) => (
                <div key={idx} className="text-sm leading-relaxed">
                  <p className="font-medium">
                    {item.name}
                  </p>
                  <p className="text-gray-600">
                    {item.text} / {item.time}
                  </p>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Bottom image */}
      <div
        className="w-full h-[35vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${data.image})` }}
      />
    </div>
  )
}

export default LocationType2

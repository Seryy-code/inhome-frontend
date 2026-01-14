function AmenitiesType1({ data }) {
  if (!data || !data.have || !Array.isArray(data.have)) {
    return null;
  }

  return (
    <div className="w-screen h-[94vh] flex p-20">
      <div className="w-[40%] flex flex-col  pb-2">

        <h1 className="w-[70%] spectral text-7xl text-[#78530D]">{data.title}</h1>
        <div className="max-w-120 mt-auto px-2 ">
            <ul className="overflow-y-auto max-h-[60vh]">
                {/* <h1 className="text-4xl font-normal mb-[40px]">{data.achievements_title}</h1> */}
            {data.have.map((item, i) => (
                <li className="text-2xl leading-10 my-3" key={i}>{item}</li>
            ))}
            </ul>
        </div>
      </div>
          <div className="w-[60%] flex flex-col justify-between">
             <p className="w-[70%] text-lg mt-[5vh] text-[#432E06] pb-2">{data.description}</p>
                <div
                    className="mt-auto h-[60vh] bg-cover bg-center"
                    style={{ backgroundImage: `url(${data.image})` }}
                />
          </div>
      
    </div>
  )
}
export default AmenitiesType1
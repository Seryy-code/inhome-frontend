function LocationType1({ data }) {
  return (
    <div className="w-screen h-screen flex p-10">
      
      <div className="w-[40%] h-[80vh] flex flex-col justify-between pr-12">
        <div className=" h-[55vh] flex flex-col gap-6 mb-7">
          <h1 className="text-3xl tracking-widest">
            {data.title}
          </h1>

          <p className="spectral text-xl leading-relaxed ">
            {data.sm_description}
          </p>

          <p className="text-base leading-relaxed">
            {data.description}
          </p>
         
        </div>
        <div
          className="w-full h-[40vh] bg-cover bg-center mt-auto mb-0"
          style={{ backgroundImage: `url(${data.dec_image})` }}
        />
        
      </div>

      <div className="w-[60%] h-[80vh] flex flex-col ">
        <div
            className="w-full h-[55vh] bg-cover bg-center mb-7"
            style={{ backgroundImage: `url(${data.images[0]})` }}
        />

        <div className="flex w-full h-[40vh] justify-around gap-8">
            <div
            className="w-1/2 h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${data.images[1]})` }}
            />
            <div
            className="w-1/2 h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${data.images[2]})` }}
            />
        </div>
</div>

    </div>
  )
}

export default LocationType1

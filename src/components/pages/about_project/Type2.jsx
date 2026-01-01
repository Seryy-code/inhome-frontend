function AboutType2({ data }) {
  return (
    <div className="w-screen h-screen flex flex-col spectral ">
      
      <div className="h-[40%] flex p-20 justify-between">
        <div className="w-[30%] text-7xl">
          {data.subtitleLeft}
        </div>

        <div className="w-[50%] grid grid-cols-2 gap-6">
          {data.stats.map((stat, i) => (
            <div key={i}>
              <div className="text-6xl">{stat.value}</div>
              <div className="text-[#2F230D]">{stat.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="h-[60%] bg-cover bg-center"
        style={{ backgroundImage: `url(${data.image})` }}
      />
    </div>
  )
}
export default AboutType2
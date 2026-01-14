import logo from "@/assets/logo.svg"

function AboutType1({ data }) {
  if (!data || !data.achievements || !Array.isArray(data.achievements)) {
    return null;
  }

  return (
    <div className="w-screen h-screen flex ">
      <div className="w-[40%] p-10 flex flex-col gap-6">
        <img src={logo} alt="" className="w-[480px] mt-[4vh] mx-auto"/>
        
        <div className="max-w-120 mx-auto px-2 h-full">
        <p className="spectral text-2xl mt-[10vh] mb-[7vh] text-[#2F230D]">{data.description}</p>

        <ul className="list-disc pl-5">
            <h1 className="text-4xl font-normal mb-[40px]">{data.achievements_title}</h1>
          {data.achievements.map((item, i) => (
            <li className="text-lg leading-10" key={i}>{item}</li>
          ))}
        </ul>
        </div>
      </div>

      <div
        className="w-[60%] h-90vh bg-cover bg-center"
        style={{ backgroundImage: `url(${data.image})` }}
      />
    </div>
  )
}
export default AboutType1
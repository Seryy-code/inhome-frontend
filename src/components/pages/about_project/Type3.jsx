import logo from "@/assets/logo.svg"

function AboutType3({ data }) {
  if (!data || !data.partners || !Array.isArray(data.partners)) {
    return null;
  }

  return (
    <>
    <img src={logo} alt="" className="max-w-[480px] mt-[4vh] mb-4 ml-[90px]"/>
    
    <div className="w-screen h-screen flex p-10 gap-10 ">
      <div className="w-[30%] flex flex-col items-center ">
        {data.partnerImage && <img src={data.partnerImage} className="mb-4" alt="Partner" />}
        {data.partnerLogo && <img src={data.partnerLogo} alt="Partner Logo" />}
      </div>

      <div className="w-[65%]">
        <p className="mb-6">{data.description}</p>

        <div className="grid grid-cols-3 gap-20">
          {data.partners.map((p, i) => (
            <div key={i} className="flex flex-col justify-between text-center w-[280px] h-[170px]">
              {p.logo && <img src={p.logo} className="mx-auto mb-2 max-w-full max-h-[120px]" alt={p.text} />}
              <p className="mt-auto">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
          </>
  )
}
export default AboutType3
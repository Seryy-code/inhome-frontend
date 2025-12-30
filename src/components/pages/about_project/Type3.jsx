import logo from "@/assets/logo.svg"


function AboutType3({ data }) {
  return (
    <>
    <img src={logo} alt="" className="max-w-[480px] mt-[4vh] mb-4 ml-[90px]"/>
    
    <div className="w-screen h-screen flex p-10 gap-10 ">
      <div className="w-[30%] flex flex-col items-center ">
        <img src={data.partnerImage} className="mb-4" />
        <img src={data.partnerLogo} />
      </div>

      <div className="w-[65%]">
        <p className="mb-6">{data.description}</p>

        <div className="grid grid-cols-3 gap-4">
          {data.partners.map((p, i) => (
            <div key={i} className="text-center">
              <img src={p.logo} className="mx-auto mb-2" />
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
          </>
  )
}
export default AboutType3
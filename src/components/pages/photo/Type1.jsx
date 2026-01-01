function PhotoType1({ data }) {
  return (
    <div className="w-screen h-screen relative bg-cover bg-center px-10 pt-15" style={{ backgroundImage: `url(${data.image})` }}>
        <h1 className="font-bold spectral text-7xl text-white tracking-wider">{data.title}</h1>
    </div>
  )
}
export default PhotoType1
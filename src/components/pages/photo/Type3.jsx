function PhotoType3({ data }) {
  if (!data || !data.images || !Array.isArray(data.images) || data.images.length < 3) {
    return null;
  }

  return (
    <div className="flex justify-between gap-5 w-screen h-screen relative px-10 pt-15 ">
        <div
            className="w-[33%] h-90vh bg-cover bg-center hover:w-[50%] transition-all duration-500 ease-in-out"
            style={{ backgroundImage: `url(${data.images[0]})` }}
        />
        <div
            className="w-[33%] h-90vh bg-cover bg-center hover:w-[50%] transition-all duration-500 ease-in-out"
            style={{ backgroundImage: `url(${data.images[1]})` }}
        />
        <div
            className="w-[33%] h-90vh bg-cover bg-center hover:w-[50%] transition-all duration-500 ease-in-out"
            style={{ backgroundImage: `url(${data.images[2]})` }}
        />
    </div>
  )
}
export default PhotoType3
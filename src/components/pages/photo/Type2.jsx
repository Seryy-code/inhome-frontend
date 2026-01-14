function PhotoType2({ data }) {
  if (!data || !data.images || !Array.isArray(data.images) || data.images.length < 2) {
    return null;
  }

  return (
    <div className="flex justify-between gap-5 w-screen h-screen relative px-10 pt-15 ">
        <div
            className="w-[35%] h-90vh bg-cover bg-center hover:w-[150%] transition-all duration-500 ease-in-out"
            style={{ backgroundImage: `url(${data.images[0]})` }}
        />
        <div
            className="w-[65%] h-90vh bg-cover bg-center hover:w-[150%] transition-all duration-500 ease-in-out"
            style={{ backgroundImage: `url(${data.images[1]})` }}
        />
    </div>
  )
}
export default PhotoType2
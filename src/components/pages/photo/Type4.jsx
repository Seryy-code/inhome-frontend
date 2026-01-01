function PhotoType4({ data }) {
  return (
    <div className="flex flex-col w-screen h-screen px-10 pt-15 gap-5">

      <div
        className="flex-1 bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-[5]"
        style={{ backgroundImage: `url(${data.images[0]})` }}
      />

      <div
        className="flex-1 bg-cover bg-center transition-all duration-500 ease-in-out hover:flex-[15]"
        style={{ backgroundImage: `url(${data.images[1]})` }}
      />

    </div>
  )
}

export default PhotoType4

function MasterplanImage({ page, onSelectBlock }) {
  return (
    <div className="relative w-full h-full py-10 px-40">
      
      <div
        className="w-full h-[80vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${page.image})` }}
      />

      {page.buttons.map(btn => (
        <button
          key={btn.block_num}
          onClick={() => onSelectBlock(btn.block_num)}
          className="absolute w-9 h-9 rounded-full bg-white border-2 border-green-500 font-bold
                     flex items-center justify-center hover:scale-110 transition cursor-pointer"
          style={{
            left: `${btn.position.x}vw`,
            top: `${btn.position.y}vh`,
            transform: "translate(-50%, -50%)"
          }}
        >
          {btn.block_num}
        </button>
      ))}

    </div>
  )
}

export default MasterplanImage

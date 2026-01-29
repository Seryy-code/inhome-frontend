export default function SliderCard({ slider, onClick }) {
    const homeSection = slider.data?.find(section => section.section === 'home');
    const mainImage = homeSection?.page?.images?.[0];

    return (
        <div className="relative group">
            <div className="block bg-white h-full cursor-pointer" onClick={onClick}>
                <div className="w-full relative aspect-[3/2] overflow-hidden">
                    {mainImage ? (
                        <img
                            src={import.meta.env.VITE_API_URL + mainImage.src}
                            alt={mainImage.alt || slider.title}
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            style={{ width: '100%', height: '100%' }}
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-400" />
                    )}
                </div>

                <div className="py-6 px-4">
                    <div className="lg:flex justify-between items-end">
                        <div>
                            <h3 className="font-semibold uppercase text-lg">{slider.title}</h3>
                            <p className="font-normal uppercase text-base text-black">
                                {slider.location}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

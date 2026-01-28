import icon from "../../assets/logo.svg";

export default function Header({dataClick}) {
    return (
        <header className="bg-[#1F1918] w-full text-white shadow z-50 px-6 xs:px-4">
            <div className="container mx-auto flex items-center justify-between py-3">
                <a href="/" className={'w-full max-w-[150px] md:max-w-[264px] min-h-[40px]'}>
                    <img width={200} height={40} src={icon} alt="icon" className={'w-full py-[13px] brightness-0 invert'}/>
                </a>
                <button
              onClick={dataClick}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer"
            >
              Log out
            </button>
            </div>
            
        </header>
    );
}

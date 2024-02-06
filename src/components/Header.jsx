import { MdKeyboardArrowRight } from "react-icons/md";

const Header = () => {
    return (
        <header className="bg-[url('/pattern-bg-desktop.png')] bg-no-repeat bg-cover bg-center h-[25vh] flex flex-col justify-start items-center gap-6 pt-6">
            <h1 className="text-white font-bold text-2xl">IP Address Tracker</h1>
            <div className="flex justify-center items-center">
                <input
                    className="p-4 w-[20vw] rounded-s-xl placeholder-DarkGray focus:placeholdertext-VeryDarkGray cursor-pointer"
                    type="text"
                    placeholder="Search for any IP address or domain"
                    id="search"
                />
                <button className="bg-black text-white cursor-pointer px-4 py-[0.92rem] rounded-e-xl hover:bg-[rgba(43,43,43,0.9)]"><MdKeyboardArrowRight size={26} /></button>
            </div>
        </header>
    )
}

export default Header;
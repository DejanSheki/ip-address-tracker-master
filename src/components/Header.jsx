import { MdKeyboardArrowRight } from "react-icons/md";

const Header = () => {
    return (
        <header className="bg-[url('/pattern-bg-desktop.png')] bg-no-repeat bg-cover bg-center h-[40vh] flex flex-col justify-center items-center">
            <h1>IP Address Tracker</h1>
            <div>
                <input type="search" name="search" id="search" />
                <button className="bg-black text-white"><MdKeyboardArrowRight /></button>
            </div>
        </header>
    )
}

export default Header;
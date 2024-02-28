import { Link } from "react-router-dom";

import logo from '../../../assets/logo.png'
const Navbar = () => {
    const navItem = <>
        <Link className="hover:text-[#ff9100] transition-all hover:border-b-2 hover:border-[#ff9100]" to="/">Home</Link>
        <Link className="hover:text-[#ff9100] transition-all hover:border-b-2 hover:border-[#ff9100]"> Item 1</Link>
        <Link className="hover:text-[#ff9100] transition-all hover:border-b-2 hover:border-[#ff9100]"> Item 2</Link>
        <Link className="hover:text-[#ff9100] transition-all hover:border-b-2 hover:border-[#ff9100]"> Item 3</Link>
        <Link className="hover:text-[#ff9100] transition-all hover:border-b-2 hover:border-[#ff9100]"> Item 4</Link>
    </>
    return (
        <div>
            <div className="navbar bg-black bg-opacity-60  max-w-screen-xl fixed z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-black bg-opacity-60 w-52 h-auto z-50">
                            {navItem}
                        </ul>
                    </div>
                    <Link to="/" className=" text-xl uppercase ps-4 "> <img className="w-1/4 ms-6" src={logo} alt="" />
                        bistro boss
                        
                    </Link>
                </div>
                <div className="navbar-end pe-6 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 lg:flex gap-12 text-xl text-white ">
                       {navItem}
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;
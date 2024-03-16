import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import logo from '../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useCart from "../../../Hooks/useCart";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart()
    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('log out successfully')
            })
    }
    const handleAddToCart = (food)=>{
        console.log(food)
    }
    const navItem = <>
        <Link className="hover:text-[#ff9100] transition-all hover:border-b-2 hover:border-[#ff9100]" to="/">Home</Link>
        <Link className="hover:text-[#ff9100] transition-all hover:border-b-2 hover:border-[#ff9100]" to="/menu">Our Menu</Link>
        <Link className="hover:text-[#ff9100] transition-all hover:border-b-2 hover:border-[#ff9100]" to="/order/salad"> Order</Link>
        <Link className="hover:text-[#ff9100] transition-all hover:border-b-2 hover:border-[#ff9100]" to="/secret"> Secret File</Link>
        <Link className="text-[] transition-all" to="/secret">
            <button onClick={()=>handleAddToCart()} className="flex items-center md:mt-2 gap-2">
                <FaCartShopping/>
                <div className="badge bg-[#ff9100] border-[#ff9100] text-white badge-secondary">{cart?.length}+</div>
            </button>
        </Link>
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
                <div className="navbar-center pe-6 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 lg:flex gap-12 text-xl text-white ">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end pe-4 ">
                    <ul className="menu menu-horizontal px-1 lg:flex gap-12 text-xl text-white ">
                        {
                            user && user ? <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className=" m-1 me-14"><FaUser/></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-black bg-opacity-40 me-12  ">
                              <li><a>{user.displayName}</a></li>
                              <li><button onClick={handleLogout}>LogOut</button></li>
                            </ul>
                          </div> : <span><Link className="hover:text-[#ff9100] transition-all hover:border-b-2 hover:border-[#ff9100]" to="/login"> Login</Link></span>
                        }


                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
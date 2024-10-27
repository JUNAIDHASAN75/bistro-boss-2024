import { FaHome, FaShoppingCart } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineNoFood  } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            <div className="flex">
                <div className="md:w-64 bg-[#BB8506] min-h-screen">
                    <ul className="menu ">
                        <li className="bg-transparent"><NavLink className="md:text-lg bg-transparent text-white" to="/">
                            <FaHome></FaHome>
                         User Home</NavLink>
                        </li>
                        <li className="bg-transparent"><NavLink className="md:text-lg bg-transparent text-white" to="/dashboard/cart">
                            <FaShoppingCart></FaShoppingCart>
                            My Cart</NavLink>
                        </li>
                        <div className="divider divider-neutral"></div>
                        <li className="bg-transparent"><NavLink className="md:text-lg bg-transparent text-white" to="/">
                            <FaHome></FaHome>
                         Home</NavLink>
                        </li>
                        <li className="bg-transparent"><NavLink className="md:text-lg bg-transparent text-white" to="/menu">
                            <RxHamburgerMenu ></RxHamburgerMenu>
                         Menu</NavLink>
                        </li>
                        <li className="bg-transparent"><NavLink className="md:text-lg bg-transparent text-white" to="/order/salad">
                            <MdOutlineNoFood></MdOutlineNoFood>
                         Order</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 px-20 bg-slate-100">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
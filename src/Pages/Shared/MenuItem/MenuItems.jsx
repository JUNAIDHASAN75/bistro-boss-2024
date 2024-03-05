import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuItem from "./MenuItem";


const MenuItems = ({ items,img,title }) => {
    return (
        <div>
            <Cover img={img} title={title} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s'}></Cover>
            <section className="my-12">
                <div className="grid md:grid-cols-2 gap-12 px-3">
                    {
                        items.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
                <div className="text-center my-12">
                <Link to={`/order/${title}`} className=" text-center bg-[white] text-[black] font-semibold border-b-4 border-[black] rounded-lg  hover:bg-black hover:border-[#BB8506] hover:text-[#BB8506] transition-all px-3 py-2 mt-2">ORDER YOUR FAVOURITE FOOD</Link>
            </div>
            </section>
        </div>
    );
};

export default MenuItems;
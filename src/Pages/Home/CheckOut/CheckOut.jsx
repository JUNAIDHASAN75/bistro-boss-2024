
import Header from "../../../Components/Headers/Header";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../Hooks/UseMenu";


const CheckOut = () => {
    const [data] = UseMenu();
    const  popularItem = data.filter(item =>item.category === 'popular')
    return (
        <div className="">
            <Header subHeading={"Check It Out"} heading={'FROM OUR MENU'}></Header>
            <section className="my-12">
                <div className="grid grid-cols-2 gap-12 px-3">
                    {
                        popularItem.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
            </section>
            <section className="flex items-center justify-center mx-auto w-full my-12">
                <button className= " bg-white text-black font-semibold border-b-4 border-[#BB8506] rounded-lg hover:text-white hover:bg-black transition-all px-3 py-2 ">View Full Menu</button>
            </section>
        </div>
    );
};

export default CheckOut;
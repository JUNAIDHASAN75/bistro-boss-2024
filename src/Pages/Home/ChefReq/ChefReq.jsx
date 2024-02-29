import Header from "../../../Components/Headers/Header";
import salad from '../../../assets/menu/salad-bg.jpg'
import pizza from '../../../assets/menu/pizza-bg.jpg'
import soup from '../../../assets/menu/soup-bg.jpg'

const ChefReq = () => {
    return (
        <div>
            <Header subHeading={"Should Try"} heading={"CHEF RECOMMENDS"}></Header>
            <section className="my-12">
            <div className="lg:flex gap-12 px-3">
                <div className="w-full">
                    <img src={salad} alt="" />
                    <div className="text-center my-6 px-10">
                        <h4 className="text-xl font-semibold text-black">Caeser Salad</h4>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className=" bg-[#E8E8E8] text-[#BB8506] font-semibold border-b-4 border-[#BB8506] rounded-lg  hover:bg-black transition-all px-3 py-2 mt-2">Add To Card</button>
                    </div>
                </div>
                <div className="w-full">
                    <img src={pizza} alt="" />
                    <div className="text-center my-6 px-10">
                        <h4 className="text-xl font-semibold text-black">Caeser Pizza</h4>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className=" bg-[#E8E8E8] text-[#BB8506] font-semibold border-b-4 border-[#BB8506] rounded-lg  hover:bg-black transition-all px-3 py-2 mt-2">Add To Card</button>
                    </div>
                </div>
                <div className="w-full">
                    <img src={soup} alt="" />
                    <div className="text-center my-6 px-10">
                        <h4 className="text-xl font-semibold text-black">Caeser Soup</h4>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className=" bg-[#E8E8E8] text-[#BB8506] font-semibold border-b-4 border-[#BB8506] rounded-lg  hover:bg-black transition-all px-3 py-2 mt-2">Add To Card</button>
                    </div>
                </div>
            </div>
            </section>
        </div>
    );
};

export default ChefReq;
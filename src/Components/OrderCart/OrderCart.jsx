

const OrderCart = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div className="md:relative  md:h-[490px]">
            <img className="w-full" src={image} alt="" />
            <p className="absolute top-2 end-2 bg-black text-[#BB8506] px-2 rounded-lg">{price}</p>
            <div className="text-center my-6 md:px-10">
                <h4 className="text-xl font-semibold text-black">{name}</h4>
                <p>{recipe}</p>
                <button className="md:absolute bottom-5  start-36  bg-[#E8E8E8] text-[#BB8506] font-semibold border-b-4 border-[#BB8506] rounded-lg  hover:bg-black transition-all px-3 py-2 mt-2">Add To Card</button>
            </div>
        </div>
    );
};

export default OrderCart;
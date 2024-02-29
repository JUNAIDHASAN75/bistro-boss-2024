

const MenuItem = ({ item }) => {
    console.log(item)
    const { name, recipe, image, price } = item
    return (
        <div className="flex items-start w-full gap-3">
            <div className="">
                <img className="w-[120px] rounded-e-full rounded-b-full shadow-lg shadow-black" src={image} alt="" />
            </div>
            <div>
                <h4>{name}</h4>
                <p>{recipe}</p>
            </div>
            <div className="text-[#BB8506]">
                {price}
            </div>
        </div>
    );
};

export default MenuItem;
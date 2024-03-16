import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";



const OrderCart = ({ item }) => {
    const { name, image, recipe, price,_id } = item;
    const [,refetch] = useCart()
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure= useAxiosSecure()
    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem ={
                menuId : _id,
                email:user?.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts',cartItem)
            .then(res=>{
                console.log(res.data)
                if(res?.data?.insertedId){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${name} Add To Cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
                // refetch cart to update the cart item count
                refetch()
            })
        }
        else {
            Swal.fire({
                title: "You Are Not Logged In",
                text: "Please Login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please Go To Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state:{from: location}})
                }
            });

        }

    }

    return (
        <div className="md:relative  md:h-[490px]">
            <img className="w-full" src={image} alt="" />
            <p className="absolute top-2 end-2 bg-black text-[#BB8506] px-2 rounded-lg">{price}</p>
            <div className="text-center my-6 md:px-10">
                <h4 className="text-xl font-semibold text-black">{name}</h4>
                <p>{recipe}</p>
                <button onClick={handleAddToCart} className="md:absolute bottom-5  start-36  bg-[#E8E8E8] text-[#BB8506] font-semibold border-b-4 border-[#BB8506] rounded-lg  hover:bg-black transition-all px-3 py-2 mt-2">Add To Card</button>
            </div>
        </div>
    );
};

export default OrderCart;
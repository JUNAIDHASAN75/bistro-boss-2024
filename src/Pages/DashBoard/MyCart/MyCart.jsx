import { RiDeleteBin6Line } from "react-icons/ri";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
// import { useState } from "react";
// import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const MyCart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure();
    // let totalPrice = 0;
    // const handleTotalPrice =(item)=>{
    //     item.forEach(item=>{
    //         totalPrice += item.price
    //     })
    //     return totalPrice
    // }
    // handleTotalPrice(cart)
    
    // const [currentPage, setCurrentPage] = useState(1);
    // const ITEMS_PER_PAGE = 6;
    // const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    // const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    // const currentItems = cart.slice(indexOfFirstItem, indexOfLastItem);

    // const totalPages = Math.ceil(cart.length / ITEMS_PER_PAGE);
    const totalPrice = cart.reduce((total, item) => total + item?.price, 0);
    const tPrice = totalPrice.toFixed(2);
    // const handlePageChange = (newPage) => {
    //     setCurrentPage(newPage);
    // };
    const handldeDeleteCart = (item) => {
        Swal.fire({
            title: "Remove It!!!",
            text: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${item}`)
                    .then(res =>{
                        // console.log(res.status ===200)
                        if(res.status ===200){
                            refetch()
                            Swal.fire({
                                title: "remove!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                
            }
        });

    }
    return (
        <div className="mt-16 bg-[white] p-12 rounded-sm">
            <div className="flex">
                <div className="text-3xl font-semibold text-black uppercase font-sans w-full">Total Order: {cart?.length}</div>
                <div className="text-3xl font-semibold text-black uppercase font-sans w-full">Total Price: {tPrice} $</div>
                <div className=""><button className=" bottom-5  start-36  bg-[#BB8506] text-[white] font-semibold border-b-4 border-[#BB8506] rounded-lg  hover:bg-black transition-all px-3 py-2 uppercase">pay</button></div>
            </div>
            <div className="overflow-x-auto mt-12">
                <table className="table w-full">
                    {/* head */}
                    <thead className="rounded-lg bg-[#BB8506]">
                        <tr className="text-white  uppercase">
                            <th>

                            </th>
                            <th>Item image</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart?.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask rounded-sm w-12 h-12">
                                                <img src={item?.image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item?.name}
                                </td>
                                <td>{item?.price} $</td>
                                <th>
                                    <button onClick={() => handldeDeleteCart(item?._id)} className="bg-[#B91C1C] text-2xl text-white p-2 rounded-md"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                </th>
                            </tr>)
                        }

                        {/* row 2 */}

                    </tbody>
                    {/* foot */}


                </table>
            </div>
            {/* <div className='flex gap-2 px-6 mt-12 items-center'>
                <button
                    className='text-5xl text-[#BB8506] tooltip'
                    data-tip={currentPage !== 1 ? 'PreV Page' : null}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <IoIosArrowDropleftCircle />
                </button>
                <span className='text-xl text-black'>{currentPage}/{totalPages}</span>
                <button
                    className='text-5xl text-[#BB8506] tooltip'
                    data-tip='Next Page'
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <IoIosArrowDroprightCircle />
                </button>
            </div>
            <span className='px-6'>
                Page {currentPage} of {totalPages} | {ITEMS_PER_PAGE} Items Per Page
            </span> */}
        </div>
    );
};

export default MyCart;
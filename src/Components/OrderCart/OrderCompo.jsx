
import { useState } from 'react';
import OrderCart from './OrderCart';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";


const OrderCompo = ({ item }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 6;
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = item.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(item.length / ITEMS_PER_PAGE);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
     
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-6 px-6">
                {currentItems.map((item) => (
                    <OrderCart key={item?._id} item={item}></OrderCart>
                ))}
            </div>
            <div className='flex gap-2 px-6 mt-12 items-center'>
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
            </span>
        </div>
    );
};

export default OrderCompo;
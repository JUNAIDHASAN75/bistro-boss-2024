import Header from "../../../Components/Headers/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'



import { Pagination } from 'swiper/modules';

const OrderOnline = () => {
    return (
        <div>
            <Header subHeading={"From 11:00am to 10:00pm"} heading={"Order online"}></Header>
            <section>
                <Swiper
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{
                        clickable: true,
                        

                      
                        
                    }}
                    modules={[Pagination]}
                    className="mySwiper my-12 w-3/4 "
                >
                    <SwiperSlide className="mb-16">
                        <img className="w-3/4 mx-auto" src={slide1} alt="" />
                        <p className="text-3xl uppercase -mt-12  text-white  text-center ">salads</p>
                        </SwiperSlide>
                    <SwiperSlide className="">
                        <img className="w-3/4 mx-auto" src={slide2} alt="" />
                        <p className="text-3xl uppercase -mt-12  text-white  text-center ">pizzas</p>
                        </SwiperSlide>
                    <SwiperSlide className="">
                        <img className="w-3/4 mx-auto" src={slide3} alt="" />
                        <p className="text-3xl uppercase -mt-12  text-white  text-center ">Soups</p>
                        </SwiperSlide>
                    <SwiperSlide className="">
                        <img className="w-3/4 mx-auto" src={slide4} alt="" />
                        <p className="text-3xl uppercase -mt-12  text-white  text-center ">desserts</p>
                        </SwiperSlide>
                    <SwiperSlide className="">
                        <img className="w-3/4 mx-auto" src={slide5} alt="" />
                        <p className="text-3xl uppercase -mt-12  text-white  text-center ">salads</p>
                        </SwiperSlide>

                </Swiper>
            </section>

        </div>
    );
};

export default OrderOnline;
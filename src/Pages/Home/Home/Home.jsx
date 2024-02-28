import Banner from "../Banner/Banner";
import BistroTitle from "../BistroTitle/BistroTitle";
import CheckOut from "../CheckOut/CheckOut";
import OrderOnline from "../OrderOnline/OrderOnline";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <BistroTitle></BistroTitle>
            <CheckOut></CheckOut>
        </div>
    );
};

export default Home;
import Banner from "../Banner/Banner";
import BistroTitle from "../BistroTitle/BistroTitle";
import CheckOut from "../CheckOut/CheckOut";
import ChefReq from "../ChefReq/ChefReq";
import OrderOnline from "../OrderOnline/OrderOnline";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OrderOnline></OrderOnline>
            <BistroTitle></BistroTitle>
            <CheckOut></CheckOut>
            <ChefReq></ChefReq>
        </div>
    );
};

export default Home;
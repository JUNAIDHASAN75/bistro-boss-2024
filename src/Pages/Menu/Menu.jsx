
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import img from '../../assets/menu/banner3.jpg'
import pizzas from '../../assets/menu/pizza-bg.jpg'
import salads from '../../assets/menu/salad-bg.jpg'
import soups from '../../assets/menu/soup-bg.jpg'
import drink from '../../assets/menu/drinks.jpg'
import desserts from '../../assets/menu/dessert-bg.jpeg'
import UseMenu from '../../Hooks/UseMenu';
import Header from '../../Components/Headers/Header';
import MenuItems from '../Shared/MenuItem/MenuItems';
const Menu = () => {
    const [data] = UseMenu();
    const  dessert = data.filter(item =>item.category === 'dessert')
    const  soup = data.filter(item =>item.category === 'soup')
    const  salad = data.filter(item =>item.category === 'salad')
    const  pizza = data.filter(item =>item.category === 'pizza')
    const  offered = data.filter(item =>item.category === 'offered')
    const  drinks = data.filter(item =>item.category === 'drinks')
    
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={img} title={"OUR MENU"} subTitle={"would you like to tru our dish?"}></Cover>
            <div className='my-12'>
                <Header heading={"TODAY'S OFFER"} subHeading={"Don`t Miss"}></Header>
                <MenuItems items={offered}></MenuItems>
            </div>
            <div className='my-12'>
                <MenuItems items={dessert} img={desserts} title={"dessert"}></MenuItems>
            </div>
            <div className='my-12'>
                <MenuItems items={pizza} img={pizzas} title={"pizza"}></MenuItems>
            </div>
            <div className='my-12'>
                <MenuItems items={salad} img={salads} title={"salad"}></MenuItems>
            </div>
            <div className='my-12'>
                <MenuItems items={soup} img={soups} title={"soup"}></MenuItems>
            </div>
            <div className='my-12'>
                <MenuItems items={drinks} img={drink} title={'drink'}></MenuItems>
            </div>
        </div>
    );
};

export default Menu;
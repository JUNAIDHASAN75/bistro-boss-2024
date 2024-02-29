
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import img from '../../assets/menu/banner3.jpg'
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={img} title={"OUR MENU"} subTitle={"would you like to tru our dish?"}></Cover>
            <div>
                <h2>this is menu</h2>
            </div>
        </div>
    );
};

export default Menu;
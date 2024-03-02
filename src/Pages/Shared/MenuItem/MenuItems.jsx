import Cover from "../Cover/Cover";
import MenuItem from "./MenuItem";


const MenuItems = ({ items,img,title }) => {
    return (
        <div>
            <Cover img={img} title={title} subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s'}></Cover>
            <section className="my-12">
                <div className="grid grid-cols-2 gap-12 px-3">
                    {
                        items.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
            </section>
        </div>
    );
};

export default MenuItems;
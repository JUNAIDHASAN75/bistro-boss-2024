import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import OrderCoverImg from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import UseMenu from "../../Hooks/UseMenu";
import OrderCompo from "../../Components/OrderCart/OrderCompo";
import { useParams } from "react-router-dom";


const Order = () => {
    const categories= ['salad','pizza', 'soup','dessert','drinks'] ;
    const {category} = useParams();
    console.log(category)
    const initailIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initailIndex);
    const [data] = UseMenu();
    
    const salad = data.filter(item => item.category === 'salad');
    const pizza = data.filter(item => item.category === 'pizza');
    const soup = data.filter(item => item.category === 'soup');
    const dessert = data.filter(item => item.category === 'dessert');
    const drinks = data.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>Bistro | Order</title>
            </Helmet>
            <Cover img={OrderCoverImg} title={"our shop"} subTitle={"Would you like to try a dish?"}></Cover>
            <section className="my-12">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="text-center my-12">
                        <Tab>salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soup</Tab>
                        <Tab>dessert</Tab>
                        <Tab>drinks</Tab>

                    </TabList>
                    <TabPanel>
                        <OrderCompo item={salad}></OrderCompo>
                    </TabPanel>
                    <TabPanel>
                        <OrderCompo item={pizza}></OrderCompo>
                    </TabPanel>
                    <TabPanel>
                        <OrderCompo item={soup}></OrderCompo>
                    </TabPanel>
                    <TabPanel>
                        <OrderCompo item={dessert}></OrderCompo>
                    </TabPanel>   
                    <TabPanel>
                        <OrderCompo item={drinks}></OrderCompo>
                    </TabPanel>
                    
                </Tabs>
            </section>
        </div>
    );
};

export default Order;
import { useEffect, useState } from "react";
const UseMenu = () => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
    }, [])
    return [data, isLoading]
};

export default UseMenu;
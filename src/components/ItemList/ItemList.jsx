import React, {useState, useEffect} from "react";
import { Firebase } from "../../firebase/index";
import Item from "../Item/Item";
import "../ItemList/ItemList.css";

function ItemList() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        Firebase.getAll('catalogue').then(docs => {
            const arr = [];
            docs.forEach(item => {
            const data = item.data();
            arr.push(
                <Item
                key={item.id}
                id={item.id}
                title={data.title}
                price={data.price}
                pictureUrl={data.pictureUrl}
                />
            );
        });
        setItems(arr);
        });
    }, []);

    return(
        <>
            <div className="contenedor-items">
                {items}
            </div>
        </>
    )
}

export default ItemList
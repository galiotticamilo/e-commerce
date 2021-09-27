import Item from "../Item/Item";
import React, {useEffect, useState} from "react";
import { Firebase } from "../../firebase/index";

function ItemCategoryList() {
    
    const [itemsCategory, setItemsCategory] = useState([]);

    useEffect(() => {
        Firebase.getAll('catalogue', {
            field: "category",
            condition: "==",
            value: "another"}).then(docs => {
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
        setItemsCategory(arr);
        });
    }, []);

    return(
        <section className="contenedor-items">  
            {itemsCategory}
        </section>
    )
}

export default ItemCategoryList
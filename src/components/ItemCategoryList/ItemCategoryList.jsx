import ItemCategory from "../ItemCategory/ItemCategory";
import React, {useEffect, useState} from "react";
import { Firebase } from "../../firebase/index";

function ItemCategoryList() {
    
    const [itemsCategory, setItemsCategory] = useState([]);

    useEffect(() => {
        Firebase.getAll('catalogue', {
            field: "category",
            condition: "==",
            value: "par"}).then(docs => {
                const arr = [];
                docs.forEach(item => {
                const data = item.data();
                arr.push(
                    <ItemCategory
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
        <div className="contenedor-items">  
            {itemsCategory}
        </div>
    )
}

export default ItemCategoryList
import React, {useState} from "react";
import Item from "../Item/Item";
import ajin01 from "../../img/ajin01.jpg";
import ajin02 from "../../img/ajin02.jpg";
import ajin03 from "../../img/ajin03.jpg";
import ajin04 from "../../img/ajin04.jpg";
import ajin05 from "../../img/ajin05.jpg";
import ajin06 from "../../img/ajin06.jpg";
import ajin07 from "../../img/ajin07.jpg";
import ajin08 from "../../img/ajin08.jpg";
import ajin09 from "../../img/ajin09.jpg";
import ajin10 from "../../img/ajin10.jpg";
import ajin11 from "../../img/ajin11.jpg";
import ajin12 from "../../img/ajin12.jpg";
import "../ItemList/ItemList.css";

function ItemList() {

    const catalogue = [
        {
            id: "1",
            title: "Ajin 01",
            description: "",
            price: "$495",
            pictureUrl: ajin01, 
        },
        {
            id: "2",
            title: "Ajin 02",
            description: "Tomo número 02 de Ajin",
            price: "$495",
            pictureUrl: ajin02, 
        },
        {
            id: "3",
            title: "Ajin 03",
            description: "Tomo número 03 de Ajin",
            price: "$495",
            pictureUrl: ajin03, 
        },
        {
            id: "4",
            title: "Ajin 04",
            description: "Tomo número 04 de Ajin",
            price: "$495",
            pictureUrl: ajin04, 
        },
        {
            id: "5",
            title: "Ajin 05",
            description: "Tomo número 05 de Ajin",
            price: "$495",
            pictureUrl: ajin05, 
        },
        {
            id: "6",
            title: "Ajin 06",
            description: "Tomo número 06 de Ajin",
            price: "$495",
            pictureUrl: ajin06, 
        },
        {
            id: "7",
            title: "Ajin 07",
            description: "Tomo número 07 de Ajin",
            price: "$495",
            pictureUrl: ajin07, 
        },
        {
            id: "8",
            title: "Ajin 08",
            description: "Tomo número 08 de Ajin",
            price: "$495",
            pictureUrl: ajin08, 
        },
        {
            id: "9",
            title: "Ajin 09",
            description: "Tomo número 09 de Ajin",
            price: "$495",
            pictureUrl: ajin09, 
        },
        {
            id: "10",
            title: "Ajin 10",
            description: "Tomo número 10 de Ajin",
            price: "$495",
            pictureUrl: ajin10, 
        },
        {
            id: "11",
            title: "Ajin 11",
            description: "Tomo número 11 de Ajin",
            price: "$495",
            pictureUrl: ajin11, 
        },
        {
            id: "12",
            title: "Ajin 12",
            description: "Tomo número 12 de Ajin",
            price: "$495",
            pictureUrl: ajin12, 
        }
    ]

    const itemsCatalogue = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(catalogue.map(catalogue => <Item key={catalogue.id} title={catalogue.title} price={catalogue.price} pictureUrl={catalogue.pictureUrl}/>));
            }, 2000);
        });
    }

    const [itemsState, setItemsState] = useState()

    itemsCatalogue().then((result) => setItemsState(result));

    return(
        <>
            <div className="contenedor-items">
                {itemsState}
            </div>
        </>
    )
}

export default ItemList
import ItemCategory from "../ItemCategory/ItemCategory";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
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

function ItemCategoryList() {

    const catalogue = [
        {
            id: "1",
            title: "Ajin # 01",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cumque atque minima quia eveniet, ad id, tempora iusto nulla, neque animi? Accusantium suscipit ipsum tempora! Animi porro labore dolorem in.",
            price: "$495",
            pictureUrl: ajin01, 
        },
        {
            id: "2",
            title: "Ajin # 02",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cumque atque minima quia eveniet, ad id, tempora iusto nulla, neque animi? Accusantium suscipit ipsum tempora! Animi porro labore dolorem in.",
            price: "$495",
            pictureUrl: ajin02, 
        },
        {
            id: "3",
            title: "Ajin # 03",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cumque atque minima quia eveniet, ad id, tempora iusto nulla, neque animi? Accusantium suscipit ipsum tempora! Animi porro labore dolorem in.",
            price: "$495",
            pictureUrl: ajin03, 
        },
        {
            id: "4",
            title: "Ajin # 04",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cumque atque minima quia eveniet, ad id, tempora iusto nulla, neque animi? Accusantium suscipit ipsum tempora! Animi porro labore dolorem in.",
            price: "$495",
            pictureUrl: ajin04, 
        },
        {
            id: "5",
            title: "Ajin # 05",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cumque atque minima quia eveniet, ad id, tempora iusto nulla, neque animi? Accusantium suscipit ipsum tempora! Animi porro labore dolorem in.",
            price: "$495",
            pictureUrl: ajin05, 
        },
        {
            id: "6",
            title: "Ajin # 06",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cumque atque minima quia eveniet, ad id, tempora iusto nulla, neque animi? Accusantium suscipit ipsum tempora! Animi porro labore dolorem in.",
            price: "$495",
            pictureUrl: ajin06, 
        },
        {
            id: "7",
            title: "Ajin # 07",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cumque atque minima quia eveniet, ad id, tempora iusto nulla, neque animi? Accusantium suscipit ipsum tempora! Animi porro labore dolorem in.",
            price: "$495",
            pictureUrl: ajin07, 
        },
        {
            id: "8",
            title: "Ajin # 08",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cumque atque minima quia eveniet, ad id, tempora iusto nulla, neque animi? Accusantium suscipit ipsum tempora! Animi porro labore dolorem in.",
            price: "$495",
            pictureUrl: ajin08, 
        },
        {
            id: "9",
            title: "Ajin # 09",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cumque atque minima quia eveniet, ad id, tempora iusto nulla, neque animi? Accusantium suscipit ipsum tempora! Animi porro labore dolorem in.",
            price: "$495",
            pictureUrl: ajin09, 
        },
        {
            id: "10",
            title: "Ajin # 10",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cumque atque minima quia eveniet, ad id, tempora iusto nulla, neque animi? Accusantium suscipit ipsum tempora! Animi porro labore dolorem in.",
            price: "$495",
            pictureUrl: ajin10, 
        },
        {
            id: "11",
            title: "Ajin # 11",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cumque atque minima quia eveniet, ad id, tempora iusto nulla, neque animi? Accusantium suscipit ipsum tempora! Animi porro labore dolorem in.",
            price: "$495",
            pictureUrl: ajin11, 
        },
        {
            id: "12",
            title: "Ajin # 12",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus cumque atque minima quia eveniet, ad id, tempora iusto nulla, neque animi? Accusantium suscipit ipsum tempora! Animi porro labore dolorem in.",
            price: "$495",
            pictureUrl: ajin12, 
        }
    ]

    const {categoryId} = useParams()

    const productProps = () => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(catalogue)
            }, 2000);
        }).then(result => {
            const filter = result.filter(element => element.id % 2===0)
            setProductState(filter)
        });
    }

    useEffect(productProps, [categoryId])

    const [ProductState, setProductState] = useState()  

    return(
        <div className="contenedor-items">  
            {ProductState && ProductState.map(element => <ItemCategory id={element.id} key={element.id} pictureUrl={element.pictureUrl} price={element.price} title={element.title} />)}
        </div>
    )
}

export default ItemCategoryList
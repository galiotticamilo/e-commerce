import ItemDetail from "../ItemDetail/ItemDetail"
import ajin01 from "../../img/ajin01.jpg";
import React, {useState} from "react";

function ItemDetailContainer() {

    const producto = [
        {
            id: "1",
            title: "Ajin 01",
            description: "Tomo número 1 de Ajin",
            price: "$495",
            pictureUrl: ajin01, 
        }
    ]

    const productProps = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(producto[0])
            }, 2000);
        });
    }

    const [ProductState, setProductState] = useState()

    productProps().then((result) => setProductState(result));

    return(
        <>
            {ProductState && <ItemDetail description={ProductState.description}/>}
        </>
    )
}

export default ItemDetailContainer
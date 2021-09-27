import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Firebase } from '../../firebase/index';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Link } from "react-router-dom"

export default function ItemDetailContainer() {

    const [itemDom, setItemDom] = useState();

    const { itemId } = useParams();

    <Link to={`/item/${itemId}`}>
        <h1></h1>
    </Link>

    useEffect(() => {
        Firebase.get(`catalogue/${itemId}`).then(res => {
            const item = res.data();
            setItemDom(
                <ItemDetail
                    id={res.id}
                    objeto={item}
                />
            );
        });
    }, []);

    return(
        <>
            {itemDom}
        </>
    )}
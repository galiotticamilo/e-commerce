import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer(props) {
    return(
        <>
            <h3>{props.greeting}</h3>
            <ItemCount stock={10} initial={1} onAdd={(count) => {console.log("¡Agregado! Items: " + count)}}/>
        </>
    )
}

export default ItemListContainer
import NavBar from "../components/NavBar/NavBar"
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import ItemCategoryList from "../components/ItemCategoryList/ItemCategoryList";
import {CartProvider} from "../context/CartContext";
import Cart from '../components/Cart/Cart'
import Payment from "../components/Payment/Payment"

function Pages() {
    return(
        <CartProvider>
            <Router>
                <NavBar/>
                <Switch>  
                    <Route exact path="/">
                        <ItemListContainer/>
                    </Route>
                    <Route exact path="/category/:id">
                        <ItemCategoryList/>
                    </Route>
                    <Route exact path="/item/:itemId">
                        <ItemDetailContainer/>
                    </Route>
                    <Route exact path="/cart">
                        <Cart/>
                    </Route>
                    <Route exact path="/cart/payment">
                        <Payment/>
                    </Route>
                </Switch>
            </Router>
        </CartProvider>
    )
}

export default Pages
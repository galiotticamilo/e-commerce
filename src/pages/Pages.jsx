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
                <Switch>  
                    <Route exact path="/">
                        <NavBar/>
                        <ItemListContainer/>
                    </Route>
                    <Route exact path="/category/:id">
                        <NavBar/>
                        <ItemCategoryList/>
                    </Route>
                    <Route exact path="/item/:itemId">
                        <NavBar/>
                        <ItemDetailContainer/>
                    </Route>
                    <Route exact path="/cart">
                        <NavBar/>
                        <Cart/>
                    </Route>
                    <Route exact path="/cart/payment">
                        <NavBar/>
                        <Payment/>
                    </Route>
                </Switch>
            </Router>
        </CartProvider>
    )
}

export default Pages
import NavBar from "./components/NavBar/NavBar"
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div>
      <Router>
        <Switch>  
          <Route exact path="/">
            <NavBar/>
            <ItemListContainer/>
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer/>
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

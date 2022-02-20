import {
BrowserRouter as Router,
Routes,
Route,
} from "react-router-dom";
import { Cart } from "./components/pages/Cart";
import { Catalog } from "./components/pages/Catalog";


export function AppRoutes() {
    return (
        <Router>
<Route path="/catalog">
<Catalog />

</Route>
<Route path="/cart">
    <Cart />

</Route>
        </Router>
    )
}

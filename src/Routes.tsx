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
            <Routes>
<Route path="/catalog" element={<Catalog  />} />



<Route path="/cart" element={<Cart  />}  />
  
    

</Routes>
        </Router>
    )
}

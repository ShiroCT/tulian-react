import "./css/Navbar.css"
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"
 
 const Navbar = () => {
     return(
         <nav className="nav-container">
              <NavLink to="/"><img src="../Parlare.png" alt="logo" className="logo" /></NavLink> 
              <h2 style={{ fontFamily: "Arial", textTransform: "uppercase" }}>E-commerce Parlare</h2>

              <div className="a-container">
                <NavLink style={{fontWeight:"bold", textDecoration:'none', color:'white'}} to="/category/latino">📘Idiomas Latinos</NavLink>
                <NavLink style={{fontWeight:"bold", textDecoration:'none', color:'white'}} to="/category/germánica">📗Idiomas Germanicos</NavLink>
                <NavLink style={{fontWeight:"bold", textDecoration:'none', color:'white'}} to="/category/asiatica">📒Idiomas Asiaticos</NavLink>
            </div>
             <CartWidget/>
         </nav>
     )
 }
 export default Navbar
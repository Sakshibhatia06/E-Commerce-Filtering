import "./Sidebar.css";
import {AiOutlineShoppingCart} from "react-icons/ai";
import Category from "./Category";
import Price from "./Price";
import Colors from "./Colors";


const Sidebar = ({handleChange}) =>{
  return (
   <>
   <section className="sidebar">
    <div className="logo-container">
        <h1><AiOutlineShoppingCart className="nav-icons"/></h1>
    </div>
    <Category handleChange={handleChange} />
    <Price handleChange={handleChange}/>
    <Colors handleChange={handleChange}/>
   </section>
   </>
  );
};
export default Sidebar;
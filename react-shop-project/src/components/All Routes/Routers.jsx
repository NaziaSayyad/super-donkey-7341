import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Beauty from "../../pages/Beauty";
import Electronics from "../../pages/Electronics";
import Clothes from "../../pages/Alltype";
import Jwellery from "../../pages/Jwellery";
import Shoes from "../../pages/Shoes";
import Home from "../../pages/Home/Home";
import Cart from "../../pages/Cart/MainCart";
import SignIn from "../../pages/Signup/signiIn";
function Routers (){
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/electronics" element={<Electronics />}></Route>
            <Route path="/clothes" element={<Clothes />}></Route>
            <Route path="/shoes" element={<Shoes />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
    )

}
export default Routers;
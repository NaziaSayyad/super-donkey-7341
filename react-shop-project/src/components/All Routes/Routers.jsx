import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Beauty from "../../pages/Beauty";
import Electronics from "../../pages/Electronics";
import Clothes from "../../pages/clothes";
import Jwellery from "../../pages/Jwellery";
import Shoes from "../../pages/Shoes";
import Home from "../../pages/Home/Home";

function Routers (){
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/beauty" element={<Beauty />}></Route>
            <Route path="/electronics" element={<Electronics />}></Route>
            <Route path="/clothes" element={<Clothes />}></Route>
            <Route path="/shoes" element={<Shoes />}></Route>
            <Route path="/jwellery" element={<Jwellery />}></Route>
        </Routes>
    )

}
export default Routers;
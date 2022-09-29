import { useEffect } from "react";
import { useState } from "react"
import axios from 'axios';
import Products from "./Products/products";
const getdata = () =>{
    return axios.get(`https://my-personal-api-data.herokuapp.com/api/smartphones`)
}

function Electronics(){
    const [data, setdata] =useState({});

    const fetchdata = () =>{
        getdata().then((res) => setdata(res));
    }
    useEffect(()=>{
        fetchdata();
    }, [])
    return(
        <>
        <h1> Electronics Page </h1>
        <Products />
        </>
    )

}
export default Electronics
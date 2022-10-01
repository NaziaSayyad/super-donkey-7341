import { useEffect } from "react";
import { useState } from "react"
import axios from 'axios';
import Products from "./Products/products";
import { Box, Button, Divider, Flex, Grid, GridItem, MenuOptionGroup, Select } from "@chakra-ui/react";
import SideBar from "./Products/SideBar";
const getdata = () =>{
    return axios.get(`https://intense-journey-23599.herokuapp.com/api/shoe`)
}
const handlesorting = (params = {}) =>{
    return axios.get(`https://intense-journey-23599.herokuapp.com/api/shoe`,{
        params:{
            _sort:"params.sort",
            _order : "params.order"
        }
    })
}


function Electronics(){
    const [data, setdata] =useState([]);

    const fetchdata = () =>{
        getdata().then((res) => setdata(res.data));
    }
    const handleAsc = () =>{
        // handlesorting({sort:"price",order:"asc"}).then((res) => setdata(res))

        console.log('in');
    }
    const handledesc =() =>{
        // handlesorting({sort:"price",order:"desc"}).then((res) => setdata(res))
        console.log('lk');
    }
    useEffect(()=>{
        fetchdata();
    }, [])

    console.log(data)
    return(
        <>
   <select>
    <option> MASTERS</option>
    <option> HIGH TO LOW </option>
    <option> LOW TO HIGH </option>
   </select>
        <Divider />
            <Flex>
                <SideBar />
            {/* <Box border='1px solid Black' width='full' ml='3' h='800px'> */}
               
            <Grid templateColumns='repeat(3, 1fr)' gap={3} p='4' border='1px solid red'>
           {     
            data.map((el) => (
            <GridItem key={el.id} _hover= {{shadow:'dark-lg'}}>
                     <Products 
                id = {el.id}
                img = {el.image}
                name = {el.name}
                price = {el.price}
                />
               
               </GridItem>
            ))
            }
            </Grid>
            {/* </Box> */}
            </Flex>
            
        </>
    )

}
export default Electronics
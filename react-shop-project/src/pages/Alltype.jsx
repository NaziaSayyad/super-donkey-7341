import { Box, Button, ButtonGroup, Divider, Flex, Grid, GridItem, Select, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Cartdrawer from "./Cart/CartsideDrawer";
import SideBar from "./Products/SideBar";
import axios from "axios";

const getdata = () => {
    return axios.get(`https://my-personal-api-data.herokuapp.com/api/products`)
}
const handlesorting = (params = {}) => {
    return axios.get(`https://my-personal-api-data.herokuapp.com/api/products`, {
        params: {
            _sort: "params.sort",
            _order: "params.order"
        }
    })
}
function Clothes (){
        const [data, setdata] = useState([]);
    
        const fetchdata = () => {
            getdata().then((res) => setdata(res.data));
        }
        const handleAsc = () => {
            // handlesorting({sort:"price",order:"asc"}).then((res) => setdata(res))
    
            console.log('in');
        }
        const handledesc = () => {
            // handlesorting({sort:"price",order:"desc"}).then((res) => setdata(res))
            console.log('lk');
        }
        useEffect(() => {
            fetchdata();
        }, [])
    
        console.log(data)
        return (
            <>
                <Select placeholder='Select option' w='150px'>
                    <option value='option1' onClick={handleAsc}>Option 1</option>
                    <option value='option2' onClick={handledesc}>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                <Divider />
                <Flex>
                    <SideBar />
                    {/* <Box border='1px solid Black' width='full' ml='3' h='800px'> */}
    
                    <Grid templateColumns='repeat(3, 1fr)' gap={3} p='4' >
                        {
                            data.map((el) => (
                                <GridItem key={el.id} _hover={{ shadow: 'dark-lg' }}>
                                    {/* <Products
                                        id={el.id}
                                        img={el.image}
                                        name={el.name}
                                        price={el.price}
                                        item = {el}
                                    />
                                </GridItem> */}
                                 <Box width='full' h='600px'p='1'>
                        <Box>
                            <Image  src={el.image} h='350px' w='full' />
                        </Box>
                        <Box>
                            <Text  fontWeight='bold'> {el.name}</Text>
                        </Box>
                        <Box display='flex' gap='1' mt='2'>
                            <Image  src="https://img.shop.com/Image/resources/images/onecart-icon.svg" w='20px' />
    
                            <Text fontSize='15px'> Sold By Motives </Text>
                        </Box>
                        <Box mt='2'> 
                            <Text fontWeight='bold'>{`$${el.price}`}</Text>
                        </Box>
                        <Flex gap='1' mt='2'> 
                            <Text fontWeight='bold'>+$0.28 / 2% </Text>
                            <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" width='15px'/>
                            <Text> Cashback</Text>
                        </Flex>
                        
                        <ButtonGroup p='2' gap='20' mt='50px'>
                        <Button size='sm' border='3px solid #000062'_hover={{bg:'#000062',color:'white'}}>See Details </Button>    
                       <Cartdrawer 
                       key={el.id}
                       cartitem={el}
                       />
    
                        </ButtonGroup>
    
                            
                    
                    </Box>
                    </GridItem>
                            ))
                        }
                    </Grid>
                    {/* </Box> */}
                </Flex>
    
            </>
        )
    
    

}
export default Clothes
// https://my-personal-api-data.herokuapp.com/api/products
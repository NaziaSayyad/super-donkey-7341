import { Box, Button, ButtonGroup, color, Divider, Flex, Grid, GridItem, Image, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import Cartdrawer from "../Cart/CartsideDrawer";

function Products({img,name,id,price,item}) {
//    console.log(item.id,"item");

//    if(item.id==id){
    
//    }
// console.log('iid',id)
    return (
        <>
        
                <Box border='1px solid Black' width='full' h='600px'p='1'>
                    <Box>
                        <Image  src={img} h='350px' w='full' />
                    </Box>
                    <Box>
                        <Text  fontWeight='bold'> {name}</Text>
                    </Box>
                    <Box display='flex' gap='1' mt='2'>
                        <Image  src="https://img.shop.com/Image/resources/images/onecart-icon.svg" w='20px' />

                        <Text fontSize='15px'> Sold By Motives </Text>
                    </Box>
                    <Box mt='2'> 
                        <Text fontWeight='bold'>{`$${price}`}</Text>
                    </Box>
                    <Flex gap='1' mt='2'> 
                        <Text fontWeight='bold'>+$0.28 / 2% </Text>
                        <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" width='15px'/>
                        <Text> Cashback</Text>
                    </Flex>
                    
                    <ButtonGroup p='2' gap='20' mt='50px'>
                    <Button size='sm' border='3px solid #000062'_hover={{bg:'#000062',color:'white'}}>See Details </Button>    
                   <Cartdrawer 
                   key={id}
                   cartitem={id}
                   
                   />

                    </ButtonGroup>

                        
                
                </Box>
           

        </>
    )

}
export default Products
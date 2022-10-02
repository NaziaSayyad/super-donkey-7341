import { Box, Button, Container, Divider, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";

const  data = JSON.parse(localStorage.getItem("data"));

function Cart() {
    const [count,setcount] =useState(1)
    console.log(data)
    const remove =(index) =>{
        data.splice(index,1);
        localStorage.setItem("data",JSON.stringify(data));
        Cart();
    }
    return(
        <>
        <Heading fontWeight='bold'> Your Cart </Heading>
        <Divider border='1px solid' mt={5} />
        <Heading> Shipment from Market America </Heading>
                    
        {
            data.map((el,index) =>(
                <>
                <Box key={el.id} width='600px'p='5' mt={5} shadow='lg'>
                    <Divider border='1px solid black' mt={5} />
                    <Flex>
                    <Image src={el.image}  w='250px' />
                    <Box p={5}>
                    <Text fontWeight='bold'> {el.name}</Text> 
                    <Text fontWeight='bold'> {`Price:$ ${el.price}`}</Text>
                    </Box>
                    <Box>
                        <Grid templateColumns='repeat(1,50px)'p={5} gap='3'>
                            <GridItem> <Button border='1px solid' onClick={() => (setcount(count+1))}>+</Button></GridItem>
                            <GridItem> <Button border='1px solid'>{`Qty:${count}`}</Button></GridItem>
                            <GridItem> <Button border='1px solid' disabled={count===1} onClick={() => setcount(count-1)}>-</Button></GridItem>
                        </Grid>
                    </Box>
                    <Button onClick={() => remove(index)}> Remove </Button>
                    </Flex>
                    <Divider border='1px solid black' mt={5} />
                    <Flex justifyContent='flex-end'>
                    <Text fontWeight='bold'> Store Total :</Text>
                    <Text fontWeight='bold'> {`$${el.price*count}`}</Text>
                    </Flex>
                    </Box>
                     
                </>
            ))
        }
        
        
        </>
    )
}
export default Cart
import { Box, Button, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Grid, GridItem, Image, LinkBox, Text, useDisclosure, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
let dataarray = JSON.parse(localStorage.getItem("data")) || [];
function Cartdrawer({cartitem}){
    const handlelocation = () =>{
        <Link to='/'> </Link>
    }
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setdata] = useState([]);
    const [append , setappend] = useState([]);
    const [count,setcount] =useState(1)

    const handleCountInc = () =>{
        setcount(count+1)
    }
    const handlecountdec = () =>{
        setcount(count-1)
    }
localStorage.setItem("data",JSON.stringify([...dataarray,cartitem]))
// console.log(data,"dat")
console.log(dataarray)
    return (
        <>
<Button size='sm' border='1px solid #000062' color='white' bg='#000062' _hover='none'onClick={onOpen}>Add To cart </Button>
    <Drawer placement='right' onClose={onClose} isOpen={isOpen} size='md'>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
               <DrawerHeader borderBottomWidth='1px' display='flex' gap='3'>
                        {/* <img src="https://img.shop.com/Image/resources/logos/shop-s-logo-icon.svg" width='30px' /> */}
                        <h1> shop.com</h1>
                    </DrawerHeader>
                    <DrawerHeader>
                        <h1> Categories </h1>
                    </DrawerHeader>

                    <DrawerBody>
                    {/* {console.log(data)} */}
                        {
                        dataarray?.map((el) =>(
                            <Container key={el.id}>
                            <Flex>
                                <Image src={el.image} w='150px' />
                                <Box>
                                <Text fontSize='18px' ml='5'> {el.name}</Text>
                                <Flex mt='2' ml='5'>
                                <Text>$2.59 </Text>
                                <Image  src="https://img.shop.com/Image/resources/images/onecart-icon.svg" w='20px' />
                                <Text> Cashback</Text>
                                </Flex>
                                </Box>
                            </Flex>
                           <Box>
                           <Flex gap='5%'>
                               <Box ml='70%'>
                               <Grid templateColumns='repeat(1,20px)' gap='2'>
                                    <GridItem> <Button onClick={handleCountInc}> ^</Button></GridItem>
                                    <GridItem> <Button>{count}</Button> </GridItem>
                                    <GridItem> <Button onClick={handlecountdec}> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEX///8jHyAAAAAhHyAhHR4fHR78/PwEAAAeGRqbm5skHiASDxDv7+/R0dEcFxiQjo9kYmP49/gPCwywrq/d3d00NDQaFRfGxMVxcXEQCQtta2xWVlY5OTm3t7eFhYXh4eFHRUZOTE1dWVpAPT4oJSYSExMvMDBRUVErKSp+fX7X1NXh3+CioqINAAVOIY+lAAAEJUlEQVR4nO3abWOaMBSG4SURQUFUVBQtVWuttVv//98b2tYqSfENBLf7+m7CkXjyEPz1CwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4H9U/wdmyDDsBDKY9wqcoTdPZugMC5whi/ckQyGELx/6Bc3QH0i/JmqhfPIKmiGTt4jElgrdYr7kYRh+zCCiRRkljgLxxYmKWKm9yNnN8D4qYIIj+rK5m1/UZDv3Cdp2bTe+UvJ37hMc04jEHkuOcx5/LJXYqzBo5Dz+cZ1wv0Kl7HmePxVvbquDCt1OjqOfZuIfVqjch2lug08f3P0Ck+H9VW6Dn2rkikMqfG7lNHbrOUyNrdzbt5qeTFeofDfOZejY9VV6bFlkrjDr7vfSz4VqyUYOIashLZWu0JLdHK75TD2pUr+VhFxfPe5aCn3gEm5h4lH/roWQneu+7G5Hais0uYOPOV3zmRq2pVUooqt2jek80Faosuzbb4afYmlpFarly+VB/O3FVfpv0M6ngV2k5fqima7RvziID10/NVZSr7/MaxO6yDT50rXbWLuwL/RkLT1UshG+5BckLtJdBXqJ4qIg3tYLFCpYlbBNHKqPbL1CIUfnXlh3lG6iH+OUeojxqS0NLdVenddSvcm7fgOtAh7KLtIztFThDs75/UwH6ZgrRNMqZ583GQaOXqIvTu+BLbXUB3Cisk6gDN6eQ32hOtGp+1gcaOtcJY8qb4Ve85m8maGlboL4KRrpx5TtQ/2slPO1nyV5Ul9nJwXx+tr4ySvzbREMF6pOuNBN1NZvfw7PKAVomFrqscXmzSLtM+rU5X1zsTS01OVLVsNIorb+EUuWGLWztZx0ct6cbWQ0/WGUPq9IhH6pUTubYeNuCufHjdsQtc+NCjfXXW3ONtJPeD+Er7axiU4qtkukbQK0/pRuCuJVjtrZ2lr3T0q2tTuTRG19lyji/UcBtkG8eVihch8OX61sT7XTJ2oVitrZhqZdw7f3O2TL1g99lS8rFLWz9V+NZxvfu1xsOPRV7mtR75IL4M0DrcKkTX4lFcOptlDXHUPeXHest1Sh7PWmUSZRW1+hSo7vqsCPMgxnG0kQ73ZsQ7OV6+rvEmnmIL54WwSGQ9+qRu1ssa231KYjfT30ONWN2tm0F51mzfC1wlE722/T2UaKUsGi0lE7mzcxHRcfVlj5qJ2tPjY8P+wt0KaQ4/troodMbyO+3UnUztYztNQvln0nUTvbsPZTS/XV3UTtbP3B0tRSm+GgUqfa1/BmpiAeVe1U+xr1J72lyqfqnWpf4zHVUmtl/YGkOH82z4S7n2Pt/U/ZF5S/2HV2FTo5/QOuYlrW10vG0LrbqJ1tOpPh9q/3szuO2kfEE1cGk39yhX6795wNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwI38B19Esw1raLWMAAAAASUVORK5CYII="
                                    width='20px'/> 
                                    </Button>
                                    </GridItem>
                               </Grid>
                               </Box>
                                <Box>
                                    <Text ml='5' fontWeight='bold'>{`$ ${el.price}`}</Text>
                                    
                                </Box>
                            </Flex>
                           </Box>
                           </Container>   
                        ))
                         
                    }
                     
                    </DrawerBody>
                    <DrawerFooter border='5px solid green' p='6'>
                    <Container>
                        {/* <Text fontWeight='bold' mb='5'> Subtotal:$ </Text> */}
                        <LinkBox  h='50px' colorScheme='white' color='white' fontWeight='bold' bg='#000063'
                            border='1px'  variant='solid' w='full' textAlign='center'> <Link to='/cart'> Checkout/View Cart  
                             </Link>
                     </LinkBox>
                    </Container>
                    {/* <Container> */}
                    </DrawerFooter>
                    <DrawerFooter>
                    <LinkBox  colorScheme='white' color='#000063' fontWeight='bold'
                            border='1px' _hover={{ bg: '#000063', color: 'white' }} variant='solid' w='full'textAlign='center'> <Link to='/'>
                                 Continue Shopping 
                             </Link>
                     </LinkBox>
                    {/* </Container> */}
                    </DrawerFooter>
                </DrawerContent>

                </DrawerOverlay>
            </Drawer>
        </>
    )
}
export default Cartdrawer

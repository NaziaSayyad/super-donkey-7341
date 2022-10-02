import {
    Box, Button, ButtonGroup, Container,
    Divider,
    Flex, Grid, GridItem, Heading, Image, Input, Select, Spacer, Text, VStack
} from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"
import SideWindow from "./sidenav"
import Signup from "../../pages/Signup/signup"
import Cartdrawer from "../../pages/Cart/CartsideDrawer"
import Footer from "../../pages/Footer"
function Navbar() {
    return (
        <>
        <Box   mb='5'>
        <Flex alignItems='center' gap='250px' mt='2' p='3'>
                <Box>
                    <Link to='/'>
                        <img src="https://img.shop.com/Image/resources/logos/shop-logo-us.svg" alt="logo" width='150px' />
                    </Link>
                </Box>
                {/* ....................................search box with 3 things .......................................................... */}
                <Box   display='flex' >
                    <Select placeholder='All Departments' border='none'>
                        <option olorScheme='white' color='#000063' fontWeight='bold'
                            border='1px' _hover={{ bg: '#000063', color: 'white' }} variant='solid' value='Auto'>Auto </option>
                        <option value='Camera'>Camera </option>
                        <option value='Beauty'> Beauty</option>
                        <option value='Books'> Books</option>
                        <option value='Clothes'>Clothes</option>
                        <option value='Bussiness'>Bussiness</option>
                        
                    </Select>
                    <Input placeholder='SearchShop.com....' border='none'  />

                    <Box h='50px'>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh5209frLrggKixsE4P_YxwXnAJeJCoOLvzQ&usqp=CAU" cursor='pointer'
                            alt="loko" width='70px' height='full' />
                    </Box>

                </Box>
                <Spacer />
                <Image  src="https://img.shop.com/Image/header2013/usa-shopping-annuity-biotin-gummies-head-banner1664295986848.png"
                />
            </Flex>
        <Divider />
            <Flex mt='2%' mb='2%'>
            <SideWindow />
            <Box ml='10%'>
               <Flex gap='10'>
            <Text _hover={{color:'#03a9f4'}} cursor='pointer' color='#202340' fontWeight='semibold'> Exclusive Brands </Text>
            <Text _hover={{color:'#03a9f4'}} cursor='pointer'color='#202340'fontWeight='semibold'> Stores </Text>
            <Text _hover={{color:'#03a9f4'}} cursor='pointer'color='#202340'fontWeight='semibold'> Deals </Text>
            <Text _hover={{color:'#03a9f4'}} cursor='pointer'color='#202340'fontWeight='semibold'> Shop Travel </Text>
            <Text _hover={{color:'#03a9f4'}} cursor='pointer'color='#202340'fontWeight='semibold'>Department  </Text>
            
               </Flex>
            </Box>
            <Flex gap='30px' ml='15%'>
                <Signup mt='5%' />
                <Box display='flex'  mt='5%'>
                    <Image src="https://img.shop.com/Image/resources/images/icon-orders-24px.svg"  _hover={{color:'#03a9f4'}}/>
                    <Text fontWeight='bold' _hover={{color:'#03a9f4'}}>Orders  </Text>
                </Box>
                <Link to='/cart'> 
                <Flex gap={1} ml='15%' mt='20%'>
                <Image src="https://img.shop.com/Image/resources/images/icon-shopping-cart-24px.svg" _hover={{color:'#03a9f4'}}/> 
                <Text fontWeight='bold' _hover={{color:'#03a9f4'}}> Cart </Text>
                </Flex>
                 </Link>
               </Flex>
            </Flex>
        </Box>
            
            <Footer />
          
           


        </>
    )

}
export default Navbar
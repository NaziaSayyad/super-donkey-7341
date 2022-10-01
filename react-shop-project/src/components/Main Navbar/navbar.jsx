import {
    Box, Button, ButtonGroup, Container,
    Flex, Grid, GridItem, Heading, Image, Input, Select, Spacer, Text, VStack
} from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"
import SideWindow from "./sidenav"
import Signup from "../../pages/Signup/signup"
function Navbar() {
    return (
        <>
        <Box border='5px  solid green' h='150px' mb='5'>
        <Flex alignItems='center' gap='7' mt='2' p='3' border='1px solid'>
                <Box>
                    <Link>
                        <img src="https://img.shop.com/Image/resources/logos/shop-logo-us.svg" alt="logo" width='150px' />
                    </Link>
                </Box>
                {/* ....................................search box with 3 things .......................................................... */}
                <Box border='1px solid'  display='flex' >
                    <Select placeholder='Select option' border='none'>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
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

            <Flex>
            <SideWindow />
            <Box ml='10%' border='1px solid '>
               <Flex gap='10'>
            <Text _hover={{color:'#03a9f4'}} cursor='pointer' color='#202340' fontWeight='semibold'> Exclusive Brands </Text>
            <Text _hover={{color:'#03a9f4'}} cursor='pointer'color='#202340'fontWeight='semibold'> Stores </Text>
            <Text _hover={{color:'#03a9f4'}} cursor='pointer'color='#202340'fontWeight='semibold'> Deals </Text>
            <Text _hover={{color:'#03a9f4'}} cursor='pointer'color='#202340'fontWeight='semibold'> Shop Travel </Text>
            <Text _hover={{color:'#03a9f4'}} cursor='pointer'color='#202340'fontWeight='semibold'>Department  </Text>
            
               </Flex>
            </Box>
            <Flex gap={1} ml='15%'>
                <Signup />
                <Button> Oders </Button>
                <Button> Cart </Button></Flex>
            </Flex>
        </Box>
            
            
          
           


        </>
    )

}
export default Navbar
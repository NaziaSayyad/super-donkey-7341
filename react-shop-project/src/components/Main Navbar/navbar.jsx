import {
    Box, Button, ButtonGroup, Container,
    Flex, Grid, GridItem, Heading, Image, Input, Select, Spacer, Text, VStack
} from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"
import SideWindow from "./sidenav"
import Boxes from '../../pages/Home/Boxes';
import Circleimages from "../../pages/Home/circleimage";
function Navbar() {
    return (
        <>

            <Flex alignItems='center' gap='7' margin='50px' border='1px solid'>
                <Box>
                    <Link>
                        <img src="https://img.shop.com/Image/resources/logos/shop-logo-us.svg" alt="logo" width='150px' />
                    </Link>
                </Box>
                <Box border='1px solid' borderRadius='5' display='flex'>
                    <Select placeholder='Select option'>
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
                    <Input placeholder='SearchShop.com....' />

                    <Box>
                        <img src="data:image/png;base64,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"
                            alt="loko" width='60px' height='60px'

                        />
                    </Box>

                </Box>
                <Spacer />
                <ButtonGroup gap='2'>
                    <Button colorScheme='teal'>Sign Up</Button>
                    <Button colorScheme='teal'>Log in</Button>
                </ButtonGroup>
            </Flex>
            <SideWindow />
            {/* ..........................................................x..body part......................................................................... */}
            
            {/* 1 division is Missing   */}
            
           


        </>
    )

}
export default Navbar
import {  Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Heading, PopoverTrigger, Select, useDisclosure } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom";
import Sidecontent from "./sideNavboxescontent";
function SideWindow() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen}>Categories</Button>
            <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px' display='flex' gap='3'>
                        <img src="https://img.shop.com/Image/resources/logos/shop-s-logo-icon.svg" width='30px' />
                        <h1> shop.com</h1>
                    </DrawerHeader>
                    <DrawerHeader>
                        <h1> Categories </h1>
                    </DrawerHeader>

                    <DrawerBody>
                
                        <>
                        {/* ......This will use in cart drawer  */}
                       
{/* ....................................................................................................................................................                        */}
                        {/* <Box display='flex' gap='5' margin='2'>
                            <img src="https://img.shop.com/Image/resources/images/icon-sign-in-24px.svg" />
                            <Link> Sign In</Link>
                        </Box>
                        <Box display='flex' gap='5' margin='2'>
                            <img src="https://img.shop.com/Image/resources/images/icon-track-orders-24px.svg" />
                            <Link>Track orders </Link>
                        </Box> */}

{/* ...................................................passing component for same content .................................................................. */}

                       <>
                       <Sidecontent  name='Halloween' path='#' />
                       <Sidecontent  name='Featured Brand Shark Ninja' path='#' />
                       <Sidecontent  name='Newly Launched Product' />
                       <Sidecontent  name='Clothes' path='/clothes' />
                       <Sidecontent  name='Beauty' path='/beauty' />
                       <Sidecontent  name='shoes' path='/shoes' />
                       <Sidecontent  name='Electronics'path='/electronics' />
                       <Sidecontent  name='Jwellery' path='/jwellery'/>
                       <Sidecontent  name='Food & Drink' path='#' />
                       <Sidecontent  name='Sports' path='/shoes' />
                       <Sidecontent  name='Traavel' path='#' />
                       <Sidecontent  name='Health &  Neutrition' path='#'/>
                       </>



                      </>  

                    </DrawerBody>
                </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    )
}
export default SideWindow
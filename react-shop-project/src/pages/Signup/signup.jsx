
import React from "react";
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Input,  Text, useDisclosure } from "@chakra-ui/react"
import { Link } from "react-router-dom";

function Signup() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()
  
    return (
      <>
    <Flex>
    <Image src='https://img.shop.com/Image/resources/images/icon-account-circle-24px.svg' 
       w= '35px' ref={btnRef} colorScheme='teal' onClick={onOpen} cursor='pointer' mt='12%' _hover={{color:'#03a9f4'}}/>
       <Text fontSize='18px' mt={2} fontWeight='bold' _hover={{color:'#03a9f4'}}> Sign in</Text>
    </Flex>
        
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
                
                <>
                {/* ......This will use in cart drawer  */}
               
{/* ....................................................................................................................................................                        */}
                <Box display='flex' gap='5' margin='2'>
                    <img src="https://img.shop.com/Image/resources/images/icon-sign-in-24px.svg" />
                    <Link to='/signin'> Signu In </Link>
                </Box>
                <Box display='flex' gap='5' margin='2'>
                    <img src="https://img.shop.com/Image/resources/images/icon-track-orders-24px.svg" />
                    <Link>Track orders </Link>
                </Box>

{/* ...................................................passing component for same content .................................................................. */}

               {/* <>
               <Sidecontent  name='Halloween' path='#' />
               <Sidecontent  name='Featured Brand Shark Ninja' path='#' />
               <Sidecontent  name='Newly Launched Products' path='/clothes' />
               <Sidecontent  name='Beauty' path='/beauty' />
               <Sidecontent  name='shoes' path='/shoes' />
               <Sidecontent  name='Electronics'path='/electronics' />
               <Sidecontent  name='Jwellery' path='/jwellery'/>
               <Sidecontent  name='Food & Drink' path='#' />
               <Sidecontent  name='Sports' path='/shoes' />
               <Sidecontent  name='Traavel' path='#' />
               <Sidecontent  name='Health &  Neutrition' path='#'/>
               </> */}



              </>  

            </DrawerBody>

          <DrawerFooter>
            <Button type='submit' form='my-form'>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
     
  export default Signup
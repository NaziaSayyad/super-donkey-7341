
import React from "react";
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Input, Text, useDisclosure } from "@chakra-ui/react"

function Signup() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef()
  
    return (
      <>
    <Flex>
    <Image src='https://img.shop.com/Image/resources/images/icon-account-circle-24px.svg' 
       w= '35px' ref={btnRef} colorScheme='teal' onClick={onOpen} cursor='pointer' />
       <Text fontSize='18px' mt={2}> Signin</Text>
    </Flex>
        
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }
  export default Signup
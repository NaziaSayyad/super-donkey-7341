import { Box, Divider, Heading, Image, Input, Select, Spacer, Stack, Text } from "@chakra-ui/react"

function SideBar() {
    return (
        <div>

            <Box  width='200px' ml='5'>
                <Box mt='5'>
                    <Box display='flex' gap='1' ml='5'>
                        <Input type='checkbox' w='5' h='5' border='2px solid Black' />
                        <Image src='https://img.shop.com/Image/resources/images/onecart-icon.svg' w='15px' />
                        <Heading size='xs'> One Cart(857)</Heading>
                    </Box>
                    <Box mt='5'></Box>
                    <Spacer />
                    <Divider />
                    <Spacer />
                </Box>
                <Box mt='15%'>
                    <Box display='flex' gap='1' ml='5'>
                        <Input type='checkbox' w='5' h='5' border='2px solid Black' />
                        <Text> Sales Times(931) </Text>
                    </Box>
                    <Box display='flex' gap='1' width='200px' ml='5'>
                        <Input type='checkbox' w='5' h='5' border='2px solid' />
                        <Text>Shipping Offer(564) </Text>

                        {/* ........................size section .......................... */}
                    </Box>
            <Stack spacing={3} mt = '5'>
                <Select variant='outline' placeholder='Size' />
                <Select variant= 'outline' placeholder="size" />
                <Select variant='outline' placeholder='Brand' />
                <Select variant= 'outline' placeholder="Material" />
                <Select variant='outline' placeholder='Color' />
                <Select variant= 'outline' placeholder="Price Range" />
                <Select variant='outline' placeholder='Store' />
             </Stack>
            </Box>
        </Box>

            <Spacer />
        </div>
    )
}
export default SideBar
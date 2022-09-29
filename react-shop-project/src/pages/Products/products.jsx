import { Box, Grid, GridItem } from "@chakra-ui/react"
import SideBar from "./SideBar"

function Products() {
    return (
        <>

            <SideBar />

            <Box border='1px solid Black'>
                <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    <GridItem w='100%' h='10' bg='blue.500' />
                    <GridItem w='100%' h='10' bg='blue.500' />
                    <GridItem w='100%' h='10' bg='blue.500' />
                    <GridItem w='100%' h='10' bg='blue.500' />
                    <GridItem w='100%' h='10' bg='blue.500' />
                </Grid>

            </Box>
        </>
    )

}
export default Products
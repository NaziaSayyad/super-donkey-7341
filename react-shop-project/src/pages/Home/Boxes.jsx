import { Container, Grid, Image, Text } from "@chakra-ui/react";

function Boxes({img,title}) {
    return(
        <>
        <Image src= {img} w='350' />
        <Container maxW='180'>
        <Text justifyContent='center'> {title}  </Text> 
        </Container>

        </>
        
    )

}
export default Boxes;
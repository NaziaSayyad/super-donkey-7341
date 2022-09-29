import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Sidecontent({name,path}){
    return(
        <>
        <Box _hover={{bg :'#e0e0e0'}} w='full'>
                      <Heading as ='h4' marginTop='7%' size='sm' _hover={{color : '#2196f3'}}> 
                       <Link to={path} key={path}> {name} </Link>
                        </Heading>
                      </Box>
        </>
    )
}
export default Sidecontent;
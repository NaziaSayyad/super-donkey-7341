import { Box, Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Form } from "react-router-dom";

const intistate ={
  email : "",
  password : ""
}
const usersdata = JSON.parse(localStorage.getItem("users"));
function SignIn(){
    const [formstate, setform ] = useState(intistate)
    const [users, setusers] = useState([]);
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setform({
        ...formstate,
        [name]: value
      })
    }
    const handlesubmit =(e) =>{
      e.preventDefault();
      console.log(formstate,"form")
  
      setusers([...users,formstate]);
      // setform(intistate);
    }
    console.log("users",users)
  localStorage.setItem("users",JSON.stringify(users));
   const {email, password} = intistate;
    return (
      
    <>
        <Heading ml='15%'> SignIn </Heading>
        <Flex justifyContent='space-evenly'>
        <Box width='350px' mt='5'>
        <form onSubmit={(e) => handlesubmit(e)}>
        <FormLabel>Email</FormLabel>

        <label> Email addres </label>
        <Input mt={2} w='150px'  border='1px solid'type='email'  name="email" value={email}  onChange={handleInputChange} placeholder='yourname@example.com' /> <br />
         <label> Pasword : </label>
         <Input mt={2} border='1px solid' w='150px' type='text' name= "password" value={password}  onChange={handleInputChange} placeholder="Please Enter your paasword " /> <br />
        <Button mt={2} border='1px solid' bg='#414467' color='white' _hover='none' type="submit"> SignIn </Button>
        </form>
        </Box>

            <Box border='1px solid green ' mr='15%' w='350px'>   
                <Heading> Dont Have An Account ? </Heading>
                <Text> With a SHOP.COM account, 
                  you can enjoy the following benefits: up to 50% Cashback on eligible purchases, redeem discount coupons, 
                  
                  order status and history, saved payment options and addresses, exclusive emails and more. Learn more</Text>
                 <Button ml={5}> Create a New Account </Button>
            </Box>
        </Flex>
        </>
    )
}
export default SignIn
function errorMessageExample() {
   
  }
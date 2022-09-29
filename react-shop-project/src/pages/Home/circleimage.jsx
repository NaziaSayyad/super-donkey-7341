import { Image, Text } from "@chakra-ui/react"

function Circleimages({img,title}){

    return(
        <>
        <Image
  borderRadius='full'
  boxSize='150px'
  src={img}
  alt='Dan Abramov'
  border='5px solid #bdbdbd'
/>
<Text>{title}</Text>
        </>
    )
}
export default Circleimages
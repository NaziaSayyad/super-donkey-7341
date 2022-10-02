import {
    Box, Button, ButtonGroup, Container,
    Flex, Grid, GridItem, Heading, Image, Input, Select, Spacer, Text, VStack
} from "@chakra-ui/react"
import React from "react"
import { Link } from "react-router-dom"
import Boxes from "./Boxes"
import Circleimages from "./circleimage"
import Footer from "../Footer"
import LargeWithLogoCentered from "./foot"
function Home(){
    return(
        <>
        {/* ..................................................Body Starting ........................................................................... */}
        <Box  p='4' mt='5%' shadow='2xl'>
                <Container>
                    <Box display='flex' gap='2'>
                        <Text fontSize='2xl'> $50,008,362 </Text>
                        <Text>awarded in</Text>
                        <img src="https://img.shop.com/Image/resources/images/cashback-icon.svg" width='20px' />
                        <Text> Cashback!</Text>
                        <Button colorScheme='white' color='#000063' fontWeight='bold'
                            border='1px' _hover={{ bg: '#000063', color: 'white' }} variant='solid'> Learn More </Button>
                    </Box>
                </Container>

                <Image
                    src="https://img.shop.com/Image/homepage/shop-usa-98251-halloween-hero1662131555209.jpg"
                    alt="logo"
                    width='99%'
                    mt='2%'
                    m='1'
                    mr='1'

                />
            </Box>
 {/* ..................................................Body Starting ........................................................................... */}
       
            <Box  mt='2%' boxShadow='2xl' >
                <Heading alignContent='end' ml='60%'> Popular Brands </Heading>
                <Flex margin='20px'>
                    <Box>
                        <Image src="https://img.shop.com/Image/homepage/SHOP_USA_98552_2022_Fall_Health_Banners_Social_Media_Assets_lgmedia1662747644423.jpg"
                            width='400px'
                        />
                    </Box>
                    <Box margin='2' ml='10'>
                        <VStack>
                            <Grid templateColumns='repeat(5, 150px)' gap={10}>
                                <GridItem w='fit-content'> <img src="https://img.shop.com/Image/homepage/nike_140x110-img.gif" alt='box-img' /></GridItem>
                                <GridItem> <img src="https://img.shop.com/Image/homepage/michaelkors_140x110-img.gif" alt='box-img' /></GridItem>
                                <GridItem> <img src="https://img.shop.com/Image/homepage/coach_brand7.jpg" alt='box-img' /></GridItem>
                                <GridItem> <img src="https://img.shop.com/Image/homepage/adidaslogo_140_1100.jpg" alt='box-img' /></GridItem>
                                <GridItem> <img src="https://img.shop.com/Image/homepage/shark-ninja-logo1660227901172.jpg" alt='box-img' /></GridItem>
                            </Grid>
                        </VStack>
                        <VStack>
                            <Grid templateColumns='repeat(4, 250px)' templateRows='repeat(1,fr)' gap='2'>

                                <GridItem w='fit-content'> <Boxes
                                    img='https://img.shop.com/Image/homepage/us-hp-rastelli-mp171591662065623159.jpg'
                                    title='9% Cashback Back to School,To Meal Prep get Free Shipping with Rastelli'
                                />
                                </GridItem>
                                <GridItem w='fit-content'> <Boxes
                                    img='https://img.shop.com/Image/homepage/us-hp-kohls-banner1663338955644.png'
                                    title='15% off any order. Code: ENJOY15'
                                />
                                </GridItem>
                                <GridItem w='fit-content'> <Boxes
                                    img='https://img.shop.com/Image/homepage/us-hp-puma-fill1664285534537.jpg'
                                    title='2% CashbackGoodbye Summer Sale - 30% off Sitewide. Code: SEEYA'
                                />
                                </GridItem>
                                <GridItem w='fit-content'> <Boxes
                                    img='https://img.shop.com/Image/homepage/us-hp-jcpenny-fill1664286115343.png'
                                    title='2% Cashback Seasonal Event: Extra 20% off Orders. Code: ITSFALL2'
                                />
                                </GridItem>
                            </Grid>
                        </VStack>

                    </Box>
                </Flex>
            </Box>
            {/* .......................................................................next /..................................... */}
             {/* ........................................slideshow component................................................................................... */}
             <Box mt='2%' boxShadow='2xl' >
                <Grid templateColumns='repeat(4, 1fr)' gap={5} ml='2%' mt='2%'>

                    <GridItem w='fit-content' fontWeight='bold'> <Boxes
                        img='https://img.shop.com/Image/homepage/pet-health-102558-cbd-formula-tincture-banner-media1660238368054.jpg'
                        title='2% Cashback'
                    />
                    </GridItem>
                    <GridItem w='fit-content' fontWeight='bold'> <Boxes
                        img='https://img.shop.com/Image/homepage/pethealth-usa-102561-liver-digestion-support-media1660238677102.jpg'
                        title='2% Cashback'
                    />
                    </GridItem>
                    <GridItem w='fit-content' fontWeight='bold'> <Boxes
                        img='https://img.shop.com/Image/homepage/shop-usa-102565-biotin-gummies-media1660237073941.jpg'
                        title='2% Cashback'
                    />
                    </GridItem>
                    <GridItem w='fit-content' fontWeight='bold'> <Boxes
                        img='https://img.shop.com/Image/homepage/shopping-annuity-usa-eng-102568-premium-apple-cider-vinegar-ginger-gummies-banner-media1660237565944.jpg'
                        title='2% Cashback'
                    />
                    </GridItem>
                </Grid>
            </Box>
            {/* ........................................Circle images  component................................................................................... */}
            <Box  mt='2%' boxShadow='2xl' >
                <Heading> Fall Must-Haves</Heading>
    <Flex alignItems='center' ml='10' justifyItems='center' p='6'
     gap='2' margin='50px'  fontWeight='bold'>
                        <Box ml='10'>
                        <Circleimages
                                img='https://img.shop.com/Image/260000/266700/266794/products/1920610566.jpg?plain&size=400x400'
                                title='WOMENS SWEATER'
                            />
                           </Box>
                           <Box ml='10'>
                        <Circleimages
                                img='https://img.shop.com/Image/270000/278200/278200/products/1893109510.jpg?plain&size=400x400'
                                title='SCARVES'
                            />
                            </Box>
                            <Box ml='10'>
                           <Circleimages
                                img='https://img.shop.com/Image/260000/266700/266794/products/1920629638.jpg?plain&size=400x400'
                                title='WOMENS JEANS '
                            />
                            </Box>
                            <Box ml='10'>
                         <Circleimages
                                img='https://img.shop.com/Image/280000/289600/289605/products/1946502092.jpg?plain&size=400x400'
                                title='WOMENS BOOTS'
                            />
                            </Box>
                            <Box ml='10'>
                        <Circleimages
                                img='https://img.shop.com/Image/260000/266700/266794/products/1940554751.jpg?plain&size=400x400'
                                title='BAGS & TOTES'
                            />
                            </Box>
                        <Box ml='10'>
                           <Circleimages
                                img='https://img.shop.com/Image/250000/251800/251872/products/1927616009.jpg?plain&size=400x400'
                                title='PUPKIN SPICE '
                            />
                            </Box>
                </Flex>
            </Box>

            {/* ........................................Another Small images  component................................................................................... */}

            <Box  mt='2%' boxShadow='2xl' >
                <Grid templateColumns='repeat(4, 1fr)' gap={5} ml='2%' mt='2%'>

                    <GridItem w='fit-content' fontWeight='bold'> <Boxes
                        img='https://img.shop.com/Image/homepage/LDV-SHOP-usa-eng-102612-hydrate-3.0-banner-media1660240995106.jpg'
                        title='2% Cashback'
                    />
                    </GridItem>
                    <GridItem w='fit-content' fontWeight='bold'> <Boxes
                        img='https://img.shop.com/Image/homepage/ldv-usa-102616-elixir-media1660241109060.jpg'
                        title='2% Cashback'
                    />
                    </GridItem>
                    <GridItem w='fit-content' fontWeight='bold'> <Boxes
                        img='https://img.shop.com/Image/homepage/motives-usa-can-101580-lala-palette-banner-media-min1660241284590.jpg'
                        title='2% Cashback'
                    />
                    </GridItem>
                    <GridItem w='fit-content' fontWeight='bold'> <Boxes
                        img='https://img.shop.com/Image/homepage/motives-usa-can-102620-30th-anniv-lip-banner-media-min1660241408665.jpg'
                        title='2% Cashback'
                    />
                    </GridItem>
                </Grid>
            </Box>

            {/* ........................................Another Slider  component................................................................................... */}
            
            {/* ........................................Another Small images  component................................................................................... */}
            
            <Box  mt='2%' boxShadow='2xl' >
                <Grid templateColumns='repeat(4, 1fr)' gap={5} ml='2%' mt='2%' p={5}>

                    <GridItem w='fit-content' fontWeight='bold' p={2}> <Boxes
                        img='https://img.shop.com/Image/homepage/fatjoe-us-eng-100507-memoir_Homepage-Feature_media_Banner1654115337667.jpeg'
                        title='2% Cashback'
                    />
                    </GridItem>
                    <GridItem w='fit-content' fontWeight='bold'> <Boxes
                        img='https://img.shop.com/Image/homepage/us-hp-plt1664222559212.gif'
                        title='2% Cashback Up to 50% off Everything + An Additional 12% off Sale.Code: USA12AFF'
                    />
                    </GridItem>
                    <GridItem w='fit-content' fontWeight='bold'> <Boxes
                        img='https://img.shop.com/Image/homepage/us-hp-cheapoair-fill1664286590129.png'
                        title='5% Cashback Save Up to $40 off our fees on Flights Use special code SHOP40. Book Now!'
                    />
                    </GridItem>
                    <GridItem w='fit-content' fontWeight='bold'> <Boxes
                        img='https://img.shop.com/Image/homepage/us-curvyclothes-mp17186-sep221663176133526.jpg'
                        title='10% Cashback 10% off All Orders + Free Shipping on Order $50 or move.'
                    />
                    </GridItem>
                </Grid>
            </Box>

            {/* ........................................Another Small images  component................................................................................... */}
            <Box  mt='2%' boxShadow='2xl' >
                <Heading ml='50%' > Our Brands </Heading>
                <Grid templateColumns='repeat(5, 1fr)' gap={3} ml='2%' mt='2%'>

                    <GridItem w='fit-content' fontWeight='bold'> <Boxes
                        title='HEALTH & NETRUTIONS'
                        img='https://img.shop.com/Image/homepage/healthnutirtion1572880380738.jpg'
                    />
                    </GridItem>
                    <GridItem w='fit-content' fontWeight='bold'> <Boxes
                        title='BEAUTY'
                        img='https://img.shop.com/Image/homepage/lipstick1572880828301.jpg'
                    />
                    </GridItem>
                    <GridItem w='fit-content' fontWeight='bold'> <Boxes
                        title='HOME & CLEANING'
                        img='https://img.shop.com/Image/homepage/home_ma1572880950379.jpg'
                    />
                    </GridItem>
                    <GridItem w='fit-content' fontWeight='bold'> <Boxes
                        title='BABY & KIDS'
                        img='https://img.shop.com/Image/homepage/baby-kids1572881179463.jpg'

                    />
                    </GridItem>
                    <GridItem w='fit-content' fontWeight='bold'> <Boxes
                        title='JWELLERY'
                        img='https://img.shop.com/Image/homepage/1840336563__225x225-img__.jpg'
                    />
                    </GridItem>
                </Grid>
            </Box>
            <LargeWithLogoCentered />
        </>
    )

}
export default Home
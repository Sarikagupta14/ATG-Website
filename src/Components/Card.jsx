
import React from 'react';
import { Box, Image, Heading, Text } from '@chakra-ui/react';
import image1 from '../images/top.png';

const Card = () => {
  return (
       <Box mt="72px"
       width="100%"
       height={{base:"226px",lg:"440px"}}
       backgroundImage={image1} className='img1'
       bgSize="cover"
       bgRepeat="no-repeat"
      >
        <Box pt={{base:"164px", lg:"286px" }} ml={{base:"50px",lg:"200px"}}>
      <Heading
        fontWeight="700"
        color={"white"}
        fontSize={{ base: '24px', lg: '36px' }}
        lineHeight={{ base: '32px', lg: '46.8px' }}
        maxWidth="399px"
        maxHeight="47px"
      >
        Computer Engineering
      </Heading>
      <Text
        color="#fff"
        fontWeight="400"
        fontSize={{ base: '11px', lg: '18px' }}
        lineHeight={{ base: '18px', md: '23.4px' }}
        position="absolute"
    
        width={{ base: '200px', md: '327px' }}
        maxHeight="23px"
      >
        142,765 computer Engineers follow this
      </Text>
    </Box>
    </Box>
  );
}

export default Card;
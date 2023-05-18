
import React from 'react';
import { Box, Input, InputGroup, InputLeftElement, ChakraProvider, useBreakpointValue, Flex, Image, IconButton } from '@chakra-ui/react';
import { RiSearchLine } from 'react-icons/ri';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '../images/logo.png';
import { Login } from './Login';

const Header = () => {
  const displaySearchInput = useBreakpointValue({ base: false, md: true });

  return (
    <>

      <Flex alignItems={{ base: 'center', md: 'flex-start' }} mb="-70px" p="10px">
        <Image h="40px" src={logo} alt='' />

        {displaySearchInput ? (
          <Flex w="70%">
          <Box width={{ base: '100%', md: '360px' }} mx="auto" mt={{ base: '4', md: '0' }}>
            <InputGroup width="100%" height="42px">
              <InputLeftElement pointerEvents="none" children={<RiSearchLine />} />
              <Input type="text" placeholder="Search for your favourite groups in ATG" />
            </InputGroup>
          </Box>
          <Login/>
          </Flex>
        ) : (
          <IconButton
            icon={<HamburgerIcon />}
           
            aria-label="Open navigation"
            variant="ghost"
            size="md"
            ml="auto"
            
          />
          
        )}
        
      </Flex>
    
    </>
  );
}

export default Header;
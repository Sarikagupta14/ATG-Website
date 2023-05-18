// import React from 'react';
import { Box, ChakraProvider, Text, Button, Menu, MenuButton, MenuList, MenuItem, Flex, useBreakpointValue } from '@chakra-ui/react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { Signup } from './Signup';

const Navbar = () => {
  const isBase = useBreakpointValue({ base: true, md: false });

  if (isBase) {
    return (
      <Flex justifyContent="space-around" mt="27px"  w="100%">
        <Text className="black" mt="9px" color="black" textDecoration="none" height="21px" width="93px" left="200px" top="559px" fontFamily="IBM Plex Sans" fontSize="16px" fontWeight="400" lineHeight="21px" letterSpacing="0em" textAlign="left">
            All Posts(368)
          </Text>
          {/* <Menu>
            <MenuButton as={Button} colorScheme="gray" variant="outline" size="sm">
              Filter: All
              <Signup />
            </MenuButton>
            <MenuList>
              <MenuItem>Action</MenuItem>
              <MenuItem>Another action</MenuItem>
              <MenuItem>Something else here</MenuItem>
            </MenuList>
          </Menu> */}
          <Signup/>
      </Flex>
    );
  }

  return (
    <Box>
      <Flex alignItems="center" mt="47px">
        <Flex w="30%" m="auto">
          <Text className="black" color="black" textDecoration="none" height="21px" width="93px" left="200px" top="559px" fontFamily="IBM Plex Sans" fontSize="16px" fontWeight="400" lineHeight="21px" letterSpacing="0em" textAlign="left">
            All Posts(32)
          </Text>

          <Box className="gray" color="gray" textDecoration="none" display="flex" flexDirection="row" gap="20px" left="313px" top="559px">
            <Text>Article</Text>
            <Text>Event</Text>
            <Text>Education</Text>
            <Text>Job</Text>
          </Box>
        </Flex>

        <Flex w="40%" justifyContent="center">
          <Menu>
            <MenuButton as={Button} colorScheme="gray" variant="outline" size="sm">
              Write a Post
            </MenuButton>
            <MenuList>
              <MenuItem>Action</MenuItem>
              <MenuItem>Another action</MenuItem>
              <MenuItem>Something else here</MenuItem>
            </MenuList>
          </Menu>

          <Box className="blue" ml="20px" color="#fff" backgroundColor="rgb(126, 154, 230)" width="120px" height="36px" borderRadius="5px" left="860px">
            <ChakraProvider>
              <Signup />
            </ChakraProvider>
          </Box>
        </Flex>
      </Flex>

      <Box w="70%" m="auto" mt="10px" border="1px solid gray"></Box>
    </Box>
  );
}

export default Navbar;
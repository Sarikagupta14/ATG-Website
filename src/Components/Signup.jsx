import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Text,
    useColorModeValue,
    Image,
    Textarea,
    Heading,
    ModalContent,
    ModalHeader,
    ModalBody,
    Modal,
    useDisclosure,
    ModalOverlay,
    ModalCloseButton,
    ModalFooter,
    IconButton,
    Img,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
  import { FaGoogle, FaFacebook } from "react-icons/fa";
  
  export const Signup = () => {
    const [formData, setformDate] = useState("");
  
    const handleChange = (e) => {
      const { value, name } = e.target;
      setformDate({
        ...formData,
        [name]: value,
      });
    };
  
    const handlecreate = async () => {};
  
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button onClick={onOpen} bgColor="transparent">
        <AiOutlineUsergroupAdd/>Join Team
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          {/* <ModalOverlay /> */}
          <ModalContent
          mt="100px"
            w={{ base: "360px", lg: "736px" }}
            maxW={{ base: "100%", lg: "100%" }}
            // bgColor={"gray.100"}
          >
            <Text
              fontSize="14px"
              fontWeight="500"
              lineHeight="16px"
              w="100%"
              h="50px"
              bgColor={"#EFFFF4"}
              pt="18px"
              align={"center"}
              color={"#008A45"}
            >
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </Text>
            <ModalBody bgColor={"transparent"}>
              <Flex minH={"auto"} align={"center"} justify={"center"} w="100%" flexDirection={{ base: "column", md: "row", lg: "row" }}>
                <Stack mx={"auto"} w="320px" h="437px" maxW={"lg"}>
                  <Box>
                    <Stack>
                      <Stack align={""} mt="24px" mb="24px">
                        <Heading
                          fontSize={"24PX"}
                          fontWeight={"700"}
                          lineHeight={"31.2px"}
                        >
                          Sign In
                        </Heading>
                      </Stack>
                      <Box>
                        <FormControl id="email" mb="0px" isRequired>
                          <Input
                            fontSize={"md"}
                            bgColor={"#F7F8FA"}
                            name="username"
                            onChange={handleChange}
                            type="email"
                            placeholder="Email"
                          />
                        </FormControl>
                        <FormControl id="name" isRequired>
                          <Input
                            fontSize={"md"}
                            bgColor={"#F7F8FA"}
                            name="password"
                            onChange={handleChange}
                            type="password"
                            placeholder="Confirm Password"
                          />
                        </FormControl>
                      </Box>
                      <Stack>
                        <Button
                          h="40px"
                          onClick={handlecreate}
                          loadingText="Submitting"
                          size="lg"
                          borderRadius="20px"
                          mt="18px"
                          bg={"#2F6CE5"}
                          color={"white"}
                          _hover={{
                            bg: "blue.500",
                          }}
                        >
                          Sign In
                        </Button>
                       
                      </Stack>
                      
                    </Stack>
                    
                  </Box>
                  <Button mt="24px" fontSize={"14px"} h="38px">
                        <FaFacebook />Sign up with Facebook
                        </Button>
                  <Button mt="8px" mb="36px" fontSize={"14px"} h="38px">
                         <FaGoogle /> Sign up with Google
                        </Button>
                        <Text align={"center"} mt="26px" fontSize="13px">Forgot Password?</Text>
                       
                       
                </Stack>
            <Box w="50%">
  <Text mb="31px" align={"end"} fontSize="13px">Don’t have an account yet?  <a href="#">Create new for free!</a> </Text>
  <Box >
    <img src="https://github.com/shwetra/assa/assets/104376252/7c7f8f38-830f-48b3-ae5d-b34654566f5d"/>
  </Box>
  {/* <Text fontSize={"11px"} mt="-35px" align={"right"}>By signing up, you agree to our Terms & conditions, Privacy policy</Text> */}
  
              
            </Box>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
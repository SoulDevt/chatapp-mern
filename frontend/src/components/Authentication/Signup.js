import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {


    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();
    const [picLoading, setPicLoading] = useState(false);


    const handleClick = () => {
        setShow(!show);
    }

    const postDetails = (pics) => {

    }

    const submitHandler = (pics) => {

    }

  return (
   <VStack spacing="5px" color='black'>
        <FormControl id='first-name' isRequired>
            <FormLabel>Name</FormLabel>
            <Input 
            placeholder="Enter Your Name"
            onChange= {(e) => setName(e.target.value)}/>
        </FormControl>

        <FormControl id='email' isRequired>
            <FormLabel>Email</FormLabel>
            <Input 
            placeholder="Enter Your Email"
            onChange= {(e) => setEmail(e.target.value)}/>
        </FormControl>

        <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
                <Input 
                type={show ? 'text' : "password"}
                placeholder="Enter Your Password"
                onChange= {(e) => setPassword(e.target.value)}/>

                <InputRightElement width="4.5rem" onClick= {handleClick}>
                    <Button h="1.75rem" size="sm">
                        { show ? "Hide" : "Show" }
                    </Button>
                </InputRightElement>
            </InputGroup>

        </FormControl>

        <FormControl id='password' isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
                <Input 
                type={show ? 'text' : "password"}
                placeholder="Confirm Password"
                onChange= {(e) => setName(e.target.value)}/>

                <InputRightElement width="4.5rem" onClick= {handleClick}>
                    <Button h="1.75rem" size="sm">
                        { show ? "Hide" : "Show" }
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>

        <FormControl id='pic' isRequired>
            <FormLabel>Upload your Picture</FormLabel>
            <InputGroup>
                <Input 
                type="file"
                p={1.5}
                accepte='image/*'
                onChange= {(e) => postDetails(e.target.files[0])}/>
            </InputGroup>
        </FormControl>


        <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop : 15 }}
        onClick = {submitHandler}>

            Sign Up

        </Button>

   </VStack>
  )
}

export default Signup
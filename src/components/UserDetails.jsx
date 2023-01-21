import { Box, Button, Flex, HStack, IconButton, Img, Icon, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BiUserPlus } from "react-icons/bi"
import { MdVerified } from "react-icons/md"
import { BsThreeDots } from "react-icons/bs"

const UserDetails = ({ username, name, website, phone }) => {

    return (
        <Flex p={10} gap={10}>
            <Box boxSize={["100px", "150px", "190px"]}>
                <Img borderRadius={"50%"} src={"https://pbs.twimg.com/profile_images/1562753500726976514/EPSUNyR3_400x400.jpg"} />
            </Box>
            <VStack gap={4} align={"start"}>
                <HStack spacing={"15px"} align={"center"}>
                    <HStack pr={4}>
                        <Text color={"white"} >{username}</Text>
                        <MdVerified color="blue" />
                    </HStack>

                    <Button px={5} size={["xs", "xs", "sm"]} borderRadius={"10px"}>Following</Button>
                    <Button px={5} size={["xs", "xs", "sm"]} borderRadius={"10px"} >Message</Button>
                    <IconButton size={["xs", "xs", "sm"]} icon={<BiUserPlus />} borderRadius={"10px"} />
                    <Icon cursor={"pointer"} as={BsThreeDots} color={"white"} />
                </HStack>
                <HStack color={"white"} spacing={10}>
                    <Text fontSize={["sm", "sm", "md"]}>1502 posts</Text>
                    <Text fontSize={["sm", "sm", "md"]}>232 followers</Text>
                    <Text fontSize={["sm", "sm", "md"]}>262 following</Text>
                </HStack>
                <VStack color={"white"} spacing={1} align={"start"}>
                    <Text>{name}</Text>
                    <Text>{website}</Text>
                    <Text>{phone}</Text>
                </VStack>
            </VStack>
        </Flex>
    )
}

export default UserDetails
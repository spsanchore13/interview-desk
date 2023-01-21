
import { Divider, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BsCameraReels, BsFillTagFill, BsGrid3X3Gap } from 'react-icons/bs';
import UserDetails from '../components/UserDetails';
import UserPosts from '../components/UserPosts';

const UserPage = () => {

    const [user, setUser] = useState({});
    const [post, setPost] = useState([])

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users/1").then((res) =>
            // console.log(res.data)
            setUser(res.data)
        ).catch((err) =>
            console.log(err)
        )
    }, [])

    useEffect(() => {
        axios("https://picsum.photos/v2/list").then((res) => {
            const pictures = res.data.slice(0, 15);
            setPost(pictures)
        }
        ).catch((err) =>
            console.log(err)
        )
    }, [])


    return (
        <Stack bgColor={"#121212"} p={5} align={"center"}>
            < UserDetails
                {...user}
            />
            <Divider />
            <HStack color={"white"} spacing={5} py={2}>
                <HStack>
                    <BsGrid3X3Gap />
                    <Text>Posts</Text>
                </HStack>
                <HStack>
                    <BsCameraReels />
                    <Text>Reels</Text>
                </HStack>
                <HStack align={"center"}>
                    <BsFillTagFill />
                    <Text>Tagged</Text>
                </HStack>
            </HStack>
            <SimpleGrid columns={[3]} gap={5}>
                {
                    post && post?.map((el) =>
                        <UserPosts key={el.id} title={el.author} url={el.download_url} />
                    )
                }
            </SimpleGrid>

        </Stack >
    )
}

export default UserPage
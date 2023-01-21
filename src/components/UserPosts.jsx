import { Img, Stack } from '@chakra-ui/react'
import React from 'react'

const UserPosts = ({ title, url }) => {
    return (
        <Stack>
            <Img cursor={"pointer"} w={"100%"} src={url} alt={title} />
        </Stack>
    )
}

export default UserPosts
import React from 'react'
import { AddIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { Box, HStack, Icon, IconButton, Img, Menu, MenuButton, MenuItem, MenuList, Stack, Text, useMediaQuery, VStack } from '@chakra-ui/react';
import { BiAlarm, BiHomeAlt, BiSearchAlt } from 'react-icons/bi';
import { BsCameraReelsFill, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Nav_ITEMS = [{
    path: "/",
    route: "Home",
    icon: BiHomeAlt
},
{
    path: "/search",
    route: "Search",
    icon: SearchIcon
},

{
    path: "/explore",
    route: "Explore",
    icom: BiSearchAlt
},
{
    path: "/about",
    route: "About",
    icon: BiAlarm
},
{
    path: "/reels",
    route: "Reels",
    icon: BsCameraReelsFill
}

]
const Sidebar = () => {

    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')



    return (
        <Stack bgColor={"black"} pos={"fixed"} top={0} left={0} h={"100vh"} w={isLargerThan800 ? "20%" : "10%"}>
            {isLargerThan800 ? <Box pl={5}>
                <Img w={"60%"} src={"https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Logo.wine.svg"} alt={"instagram-logo"} />
            </Box> :
                <Box pl={"20px"} p={3} py={5} px={"15px"}>
                    <Icon as={BsInstagram} w={"30px"} h={"30px"} color={"white"} />
                </Box>
            }

            <VStack color={"white"} gap={3} align={"center"}>
                {
                    Nav_ITEMS.map((el) =>
                        <HStack w={"80%"} spacing={4} p={3} borderRadius="30px" cursor={"pointer"} _hover={{ bgColor: "#30363c" }} >
                            <Link to={el.path}>
                                <Icon as={el.icon} w="25px" h="30px" />
                            </Link>
                            {isLargerThan800 &&
                                <Link to={el.path}>
                                    <Text>{el.route}</Text>
                                </Link>}
                        </HStack>
                    )
                }

            </VStack>
            <Box h="10px" pos="absolute" bottom={10} w="100%" pl={isLargerThan800 ? 8 : "10px"}>
                <Menu >
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                        color="white"
                        _hover={{ bgColor: "transparent" }}
                    />
                    <MenuList bgColor={"black"} color="white" w="50px">
                        <MenuItem icon={<AddIcon />} bgColor={"black"}>
                            New Tab
                        </MenuItem>

                    </MenuList>
                </Menu>
            </Box>
        </Stack>
    )
}

export default Sidebar
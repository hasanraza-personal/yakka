import { Flex } from '@chakra-ui/react'
import React from 'react'
import Brand from '../brand/Brand'
import SideDrawer from '../sidedrawer/SideDrawer'

const Header = () => {
    return (
        <>
            <Flex h={55} borderBottomColor='#e5e5e5' boxShadow='xs' justifyContent='space-between' alignItems='center' p='0 10px 0 10px'>
                <Brand />
                <SideDrawer />
            </Flex>
        </>
    )
}

export default Header

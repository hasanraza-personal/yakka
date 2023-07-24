import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../public/images/logo.png'

const Brand = ({onClose}) => {
    return (
        <>
            <Flex as={Link} to='/' alignItems='center' className='avoid__focus' onClick={onClose}>
                <Box as={Image} boxSize={8} src={Logo} alt='logo'></Box>
                <Box fontFamily='Rubik-Bold' fontSize={30} color='#246bfd' ml={2}>Yakka</Box>
            </Flex>
        </>
    )
}

export default Brand

import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'
import HomeImage from '../../../public/images/home-img.svg'

const Situation = () => {
    return (
        <>
            <Flex flexDirection='column' alignItems='center' my='25px'>
                <Box fontFamily='Rubik-SemiBold' fontSize='20px'>Look At YourSelf You Are Trapped</Box>
                <Box as={Image} src={HomeImage} boxSize={200} alt='Image' />
                <Box fontSize='18px'>
                    You see that person above, It’s <span className='bold__text'>you! </span> 
                    You are <span className='bold__text'>trapped</span> in the world of <span className='bold__text'>porn</span>. 
                    Ask yourself are you going to <span className='bold__text'>spend</span> the rest of your <span className='bold__text'>life</span> watching porn and trapped like this. 
                    If your <span className='bold__text'>answer</span> is NO, then this is the right moment, to <span className='bold__text'>Start Your New Journey</span>.
                </Box>
            </Flex>
        </>
    )
}

export default Situation

import React from 'react'
import { ReasonList } from './ReasonList'
import ReasonImage from '../../public/images/reason-img.svg';
import { Box, Flex, Image } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';

const Reason = () => {
    return (
        <>
            <Helmet>
                <title>NoFap - Plenty of reasons</title>
                <meta name="description" content="You have plenty of reasons to take NoFap challange" />
                <link rel='canonical' href='https://www.nofap.online/reasons' />
                <meta name="keywords" content="Mastrubation, Health, Free, NoFap, Challange, Life, Free life, Good Health, Porn, Girl, Woman, Milf, Sex, Indian" />
            </Helmet>

            <Flex flexDirection='column' alignItems='center' p='10px' mb='20px'>
                <Flex flexDirection='column' alignItems='center'>
                    <Box fontFamily='Rubik-SemiBold' fontSize='20px' textDecor='underline'>Reasons For Not Watching Porn</Box>
                    <Box as={Image} src={ReasonImage} boxSize={200} />
                </Flex>

                <Box>
                    {ReasonList.map((reason, index) => (
                        <Flex key={index} mt='25px'>
                            <Box as={Image} src={reason.image} boxSize={35} />
                            <Box ml='5px' fontSize='18px'>{reason.reason}</Box>
                        </Flex>
                    ))}
                </Box>
            </Flex>
        </>
    )
}

export default Reason

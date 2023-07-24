import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Flex, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import IndexImage from '../../public/images/index-img.svg'
import { Helmet } from 'react-helmet-async';

const Index = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [instaBrowser, setInstaBrowser] = useState(false)

    const handleRedirect = () => {
        setLoading(true)
        setTimeout(() => {
            navigate('/home')
            setLoading(false)
        }, 1000)
    }

    useEffect(() => {
        let str = navigator.userAgent;
        let i = str.indexOf("Instagram");
        if (i != -1) {
            setInstaBrowser(true)
        } else {
            setInstaBrowser(false)
        }
    }, [])

    return (
        <>
            <Helmet>
                <title>Yakka - Unlock Yourself</title>
                <meta name="description" content="It's time to do, what it takes, to become what you want to be in future." />
                <link rel='canonical' href='https://www.nofap.online/' />
                <meta name="keywords" content="Hard work, Success, Struggle, Entrepreneur, Business, Startup, Idea" />
            </Helmet>

            {instaBrowser &&
                <Box p='5px'>
                    <Alert Alert status='error' borderRadius='5px' >
                        <AlertIcon />
                        <Box>
                            <AlertTitle>Instagram Browser Detected!</AlertTitle>
                            <AlertDescription>
                                Login with Google is not supported in Instagram Browser.
                            </AlertDescription>
                        </Box>
                    </Alert>
                </Box>
            }

            <Flex className='index__container'>
                <Box as={Image} boxSize={300} src={IndexImage} />
                <Box fontSize='24px' fontFamily='Rubik-Bold'>Unlock Yourself</Box>
                <Box fontSize='18px' fontFamily='Rubik-regular' lineHeight='normal' mt='4px'>
                    Do whatever it takes, to become, what you want to be in future.
                </Box>
                <Box w='100%' mt='20px' mb='30px'>
                    <Button w='100%' borderRadius='20px' className='blue__button' isLoading={loading} loadingText='Taking First Step' onClick={handleRedirect}>Let's Do It</Button>
                </Box>
            </Flex>
        </>
    )
}

export default Index

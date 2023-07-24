import { Alert, AlertDescription, AlertIcon, AlertTitle, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
// import Situation from './components/Situation'
import Streak from './components/Streak'
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const [instaBrowser, setInstaBrowser] = useState(false)

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
                <link rel='canonical' href='https://www.nofap.online/home' />
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

            <Box p='10px'>
                <Streak />
                {/* <Situation /> */}
            </Box>
        </>
    )
}

export default Home

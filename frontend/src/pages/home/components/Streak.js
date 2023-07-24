import { Alert, AlertIcon, Box, Button, Flex, Image, SimpleGrid, useToast } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { AlertContext } from '../../../context/AlertState';
import { StreakColors } from './StreakColors'
import ResetStreak from '../../../public/images/reset-streak-img.svg'
import StartStreak from '../../../public/images/start-journey-img.svg'
import WelcomeImage from '../../../public/images/welcome-img.svg'
import { GoogleLoginContext } from '../../../context/GoogleLoginState';
import { UserContext } from '../../../context/UserState';
import axios from 'axios';

const Streak = () => {
    const { openAlert, closeAlert, cancelAlertRef, setAlertImageDiv, setAlertTitle, setAlertDesc, setAlertButtonDiv } = useContext(AlertContext);
    const { handleGoogleLogin } = useContext(GoogleLoginContext)
    const { globalUser, globalEmail } = useContext(UserContext)
    const toast = useToast();
    const [streak, setStreak] = useState(false)
    const [day, setDay] = useState(0)
    const [color, setColor] = useState(null)

    const handleColor = (color, day, name) => {
        toast({
            position: 'top',
            duration: 1500,
            render: () => (
                <Box p='10px 20px 10px 20px' bg={color} borderRadius='5px' lineHeight='normal'>
                    <Box fontFamily='Rubik-Bold' fontSize='17px'>Day {day}</Box>
                    <Box>{name}</Box>
                </Box>
            ),
        })
    }

    const alertStreak = (param) => {
        // Check for user
        openAlert();
        if (!globalUser) {
            setAlertImageDiv(<Box as={Image} src={WelcomeImage} boxSize={200} />);
            setAlertTitle('Welcome, To Yakka');
            setAlertDesc('In order to use Yakka, You need to login');
            setAlertButtonDiv(<Flex flexDirection='column' w='100%' mt='10px' gap='2'>
                <Button className='blue__button' onClick={handleLogin}>Login With Google</Button>
                <Button ref={cancelAlertRef} onClick={closeAlert} _focusVisible={{ outline: 'none' }}>Cancel</Button>
            </Flex>)
            return
        }

        // Alert start streak
        if (param === 'start') {
            setAlertImageDiv(<Box as={Image} src={StartStreak} boxSize={200} />);
            setAlertTitle('Start Your New Journey');
            setAlertDesc(`Once you start your Journey. Be Discipline and Consistent, these two are the only things that can make you great.`);
            setAlertButtonDiv(<Flex flexDirection='column' w='100%' mt='10px' gap='2'>
                <Button className='blue__button' onClick={startStreak}>Let's Begin</Button>
                <Button ref={cancelAlertRef} onClick={closeAlert} _focusVisible={{ outline: 'none' }}>I Am Happy</Button>
            </Flex>)
            return
        }

        // Alert stop streak
        if (param === 'reset') {
            setAlertImageDiv(<Box as={Image} src={ResetStreak} boxSize={200} />);
            setAlertTitle('Yes I Am Slave');
            setAlertDesc('I can’t control myself. I am a slave of my own desire. Next time, before breaking your streak, ask yourself, will I ever be able to control myself?');
            setAlertButtonDiv(<Flex flexDirection='column' w='100%' mt='10px' gap='2'>
                <Button className='red__button' onClick={resetStreak}>Reset My Streak</Button>
                <Button ref={cancelAlertRef} onClick={closeAlert} _focusVisible={{ outline: 'none' }}>I Am In Control</Button>
            </Flex>)
            return
        }
    }

    // Start streak
    const startStreak = async () => {
        let userData = {
            email: globalEmail,
            fapTime: new Date().toString()
        }

        try {
            let response = await axios({
                method: 'POST',
                url: '/api/profile/startstreak',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: userData
            });
            setStreak(true)
            calculateTimeDiff(response.data.fapTime)
            closeAlert()
            toast({
                position: 'top',
                title: response.data.msg,
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
        } catch (err) {
            toast({
                position: 'top',
                title: err.response.data.msg,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    }

    // Reset Streak
    const resetStreak = async () => {
        let userData = {
            email: globalEmail,
        }

        try {
            let response = await axios({
                method: 'POST',
                url: '/api/profile/resetstreak',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: userData
            });
            setStreak(false)
            setDay(0)
            closeAlert()
            toast({
                position: 'top',
                title: response.data.msg,
                status: 'warning',
                duration: 15000,
                isClosable: true,
            });
        } catch (err) {
            toast({
                position: 'top',
                title: err.response.data.msg,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    }

    // Get current streak
    const getStreak = async () => {
        try {
            let response = await axios({
                method: 'GET',
                url: '/api/profile/getstreak',
                headers: {
                    'Content-Type': 'application/json'
                },
                params: { email: globalEmail },
            });
            if (response.data.fapTime !== null) {
                setStreak(true)
                calculateTimeDiff(response.data.fapTime)
            }
        } catch (err) {
            toast({
                position: 'top',
                title: err.response.data.msg,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    }

    // Calculate streak
    const calculateTimeDiff = (param) => {
        let fapTime = new Date(param)
        let currentTime = new Date();
        var timeDifference = currentTime.getTime() - fapTime.getTime();

        let seconds = Math.floor(timeDifference / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24)
        setDay(days + 1)
        setColor(StreakColors[days].color)
    }

    const handleLogin = () => {
        closeAlert()
        handleGoogleLogin()
    }

    useEffect(() => {
        if (globalUser) {
            getStreak()
        }
        // eslint-disable-next-line
    }, [day])

    return (
        <>
            <Flex flexDir='column' alignItems='center'>
                {streak &&
                    <Box p='10px 20px 10px 20px' mb='15px' w='100%' bg={color} borderRadius='5px' lineHeight='normal'>
                        <Box fontFamily='Rubik-Bold' fontSize='17px'>Day {day}</Box>
                        <Box mt='5px'>Remember, Discipline and Consistency is way important than anything, without these,
                            you won't be able to achieve great things in life.
                        </Box>
                    </Box>
                }

                <Flex className='streak__container' shadow='base' border='2px solid black'>
                    <Flex>
                        <Flex alignItems='baseline'>
                            <Box className='streak'>DAY</Box>
                            <Box className='streak__day__count' color='black'>{day}</Box>
                        </Flex>
                    </Flex>
                </Flex>

                <Box w='100%' mt='20px'>
                    <SimpleGrid columns={7} spacing={3}>
                        {StreakColors.map((color, index) => {
                            return (
                                <Box h='50px' border={day === color.day && '3px solid black'} borderRadius='5px' bg={color.color} key={index} onClick={() => handleColor(color.color, color.day, color.name)} />
                            )
                        })}
                    </SimpleGrid>

                    <Box w='100%' my='20px'>
                        {!streak ?
                            <Button w='100%' className='blue__button' onClick={() => alertStreak('start')}>Start New Journey</Button>
                            :
                            // <Button w='100%' className='red__button' onClick={() => alertStreak('reset')}>Yes, I Am A Slave</Button>
                            <Button w='100%' className='red__button'>The Above Days will Never Come Back</Button>

                        }
                    </Box>
                </Box>
            </Flex>
        </>
    )
}

export default Streak

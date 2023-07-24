import { Box, Button, Divider, Drawer, DrawerContent, DrawerOverlay, Flex, Icon, Image, useDisclosure, useToast } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { BoxArrowRight, FileText, Gear, Google, House, List, PencilSquare, Share } from 'react-bootstrap-icons'
import Brand from '../brand/Brand'
import UserImage from '../../public/images/user.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { AlertContext } from '../../context/AlertState'
import LogoutImage from '../../public/images/logout-img.png';
import { GoogleLoginContext } from '../../context/GoogleLoginState'
import { UserContext } from '../../context/UserState'
import Feedback from './Feedback'
import SocialShare from './SocialShare'

const SideDrawer = () => {
    const { openAlert, closeAlert, cancelAlertRef, setAlertImageDiv, setAlertTitle, setAlertDesc, setAlertButtonDiv } = useContext(AlertContext);
    const { handleGoogleLogin } = useContext(GoogleLoginContext)
    const { setGlobalEmail, globalEmail, setGlobalUser, globalUser } = useContext(UserContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isFeedbackOpen, onOpen: openFeedback, onClose: closeFeedback } = useDisclosure()
    const { isOpen: isDrawerOpen, onOpen: OpenDrawer, onClose: closeDrawer } = useDisclosure();
    const btnRef = React.useRef()
    const toast = useToast()
    const navigate = useNavigate()

    const sidebarGeneralItems = [
        {
            icon: House,
            name: 'Home',
            url: '/home'
        },
        // {
        //     icon: FileText,
        //     name: 'Reasons',
        //     url: '/reasons'
        // },
        {
            icon: Gear,
            name: 'Settings',
            url: '/settings'
        }
    ]

    const handleRedirect = () => {
        onClose();
    }

    const logoutAlert = () => {
        setAlertImageDiv(<Box as={Image} src={LogoutImage} boxSize='80px' mb='15px' />);
        setAlertTitle('Logout');
        setAlertDesc('Are you Sure? You want to logout');
        setAlertButtonDiv(<Flex flexDirection='row-reverse' w='100%' mt='10px' gap='2'>
            <Button className='red__button' onClick={handleLogout} w='48%'>Logout</Button>
            <Button ref={cancelAlertRef} onClick={closeAlert} _focusVisible={{ outline: 'none' }} w='48%'>Cancel</Button>
        </Flex>)
        onClose();

        setTimeout(() => {
            openAlert()
        }, 250)
    }

    const handleLogin = () => {
        onClose()
        handleGoogleLogin()
    }

    const handleLogout = () => {
        localStorage.removeItem('nofap-user')
        setGlobalEmail(null)
        setGlobalUser(null)
        closeAlert()
        navigate('/')
        toast({
            position: 'top',
            title: "Logout Successful",
            status: 'success',
            duration: 2000,
            isClosable: true,
        });
    }

    const showFeedback = () => {
        onClose()
        setTimeout(() => {
            openFeedback()
        }, 250)
    }

    const showShare = () => {
        onClose()
        setTimeout(() => {
            OpenDrawer()
        }, 250)
    }

    return (
        <>
            <Feedback isFeedbackOpen={isFeedbackOpen} closeFeedback={closeFeedback} />
            <SocialShare isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
            <Flex alignItems='center'>
                <Icon as={List} fontSize='40px' ref={btnRef} onClick={onOpen} />
            </Flex>

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent width='75% !important'>
                    <Box p='20px 18px 20px 18px' zIndex='200'>
                        <Brand onClose={onClose} />

                        <Box mt='20px'>
                            {globalUser &&
                                <>
                                    <Flex alignItems='center'>
                                        <Box as={Image} src={UserImage} boxSize='50px' />
                                        <Box lineHeight='normal' ml='8px'>
                                            <Box fontSize='18px' fontFamily='Rubik-Medium'>NoFap Member</Box>
                                            <Box fontSize='15px' color='#37474F'>{globalEmail}</Box>
                                        </Box>
                                    </Flex>

                                    <Divider my='15px' />
                                </>
                            }

                            <Box>
                                {sidebarGeneralItems.map((items, index) => (
                                    <Flex as={NavLink} to={items.url} className='navlink__item' key={index} onClick={handleRedirect}>
                                        <Icon as={items.icon} className='navlink-icon' />
                                        <Box className='navlink-text'>{items.name}</Box>
                                    </Flex>
                                ))}

                                {!globalUser ?
                                    <Flex className='navlink__item' onClick={handleLogin}>
                                        <Icon as={Google} className='navlink-icon' />
                                        <Box className='navlink-text'>Login With Google</Box>
                                    </Flex>
                                    :
                                    <Flex className='navlink__item' onClick={logoutAlert}>
                                        <Icon as={BoxArrowRight} className='navlink-icon' />
                                        <Box className='navlink-text'>Logout</Box>
                                    </Flex>
                                }

                            </Box>

                            <Divider my='15px' />

                            <Box>
                                {/* Feedback */}
                                <Flex className='navlink__item' onClick={showFeedback}>
                                    <Icon as={PencilSquare} className='navlink-icon' />
                                    <Box className='navlink-text'>Feedback</Box>
                                </Flex>

                                {/* Tell A Friend */}
                                <Flex className='navlink__item' onClick={showShare}>
                                    <Icon as={Share} className='navlink-icon' />
                                    <Box className='navlink-text'>Tell A Friend</Box>
                                </Flex>
                            </Box>
                        </Box>
                    </Box>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SideDrawer

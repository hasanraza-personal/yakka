import { Box, Drawer, DrawerContent, DrawerOverlay, Flex, Icon, Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import { XCircleFill } from 'react-bootstrap-icons'
import WhatsAppImage from '../../public/images/whatsapp-img.png'
import ShareImage from '../../public/images/share-img.png'

const SocialShare = ({ isDrawerOpen, closeDrawer }) => {
    const [whatsappLink, setWhatsappLink] = useState('');

    const handleShare = () => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            setWhatsappLink(`https://api.whatsapp.com/send?phone=&text=https://www.nofap.online`)
        } else {
            setWhatsappLink(`https://web.whatsapp.com/send?phone=&text=https://www.nofap.online`)
        }
    }


    return (
        <>
            <Drawer placement='bottom' onClose={closeDrawer} isOpen={isDrawerOpen}>
                <DrawerOverlay />
                <DrawerContent bg='#fff' borderTopRadius='10px'>
                    <Box>
                        {/* Head */}
                        <Flex justifyContent='space-between' p='12px' alignItems='center' borderBottom='1px solid #cac8c8'>
                            {/* Left */}
                            <Flex alignItems='center' lineHeight='normal' gap='10px'>
                                <Box as={Image} src={ShareImage} alt='icon' boxSize='25px' />
                                <Flex flexDirection='column' fontSize='13px'>
                                    <Box fontWeight='bold'>Share it on whatsapp</Box>
                                    <Box>Share your account to your friends</Box>
                                </Flex>
                            </Flex>

                            {/* Right */}
                            <Box>
                                <Icon as={XCircleFill} fontSize='20px' onClick={closeDrawer} />
                            </Box>
                        </Flex>
                        {/* Body */}
                        <Box p='10px'>
                            <a href={whatsappLink} target='_blank' rel="noreferrer" className='avoid-focus'>
                                <Box as={Image} src={WhatsAppImage} boxSize='45px' onClick={handleShare} />
                                <Box fontSize='12px'>Whatsapp</Box>
                            </a>
                        </Box>
                    </Box>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SocialShare

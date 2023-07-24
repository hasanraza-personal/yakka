import { Box, Button, Divider, Flex, Icon, Image, Stack, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useContext } from 'react'
import { CaretRight, Key, ShieldCheck, Trash } from 'react-bootstrap-icons'
import { Link, useNavigate } from 'react-router-dom';
import { AlertContext } from '../../context/AlertState';
import { UserContext } from '../../context/UserState';
import DeleteImage from '../../public/images/delete-img.png'

const Settings = () => {
    const { openAlert, closeAlert, cancelAlertRef, setAlertImageDiv, setAlertTitle, setAlertDesc, setAlertButtonDiv } = useContext(AlertContext);
    const { globalEmail, setGlobalEmail, setGlobalUser, globalUser } = useContext(UserContext)
    const toast = useToast();
    const navigate = useNavigate()

    const deleteAlert = () => {
        setAlertImageDiv(<Box as={Image} src={DeleteImage} boxSize='80px' mb='15px' />);
        setAlertTitle('Logout');
        setAlertDesc('Are you Sure? You want to logout');
        setAlertButtonDiv(<Flex flexDirection='column' w='100%' mt='10px' gap='2'>
            <Button className='red__button' onClick={handleDelete}>Delete My Account</Button>
            <Button ref={cancelAlertRef} onClick={closeAlert} _focusVisible={{ outline: 'none' }}>Cancel</Button>
        </Flex>)
        openAlert()
    }

    const handleDelete = async () => {
        let data = {
            email: globalEmail
        }

        try {
            let response = await axios({
                method: 'POST',
                url: '/api/auth/deleteaccount',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            });
            localStorage.removeItem('nofap-user');
            setGlobalEmail(null)
            setGlobalUser(null)
            closeAlert()
            navigate('/');

            toast({
                position: 'top',
                title: "Your Account hasn been deleted successfully",
                status: 'success',
                duration: 3000,
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

    return (
        <>
            <Box className='setting__container'>
                <Stack spacing='5px'>
                    <Flex as={Link} to='/privacypolicy' className='setting__item'>
                        <Flex alignItems='center'>
                            <Icon as={ShieldCheck} />
                            <Box ml='5px'>Privacy Policy</Box>
                        </Flex>
                        <Icon as={CaretRight} />
                    </Flex>

                    <Flex as={Link} to='/termsandconditions' className='setting__item'>
                        <Flex alignItems='center'>
                            <Icon as={Key} />
                            <Box ml='5px'>Terms And Conditions</Box>
                        </Flex>
                        <Icon as={CaretRight} />
                    </Flex>
                </Stack>

                {globalUser &&
                    <>
                        <Divider my='15px' />

                        <Flex alignItems='center' fontSize='18px' color='red' onClick={deleteAlert}>
                            <Icon as={Trash} />
                            <Box ml='5px'>Delete My Account</Box>
                        </Flex>
                    </>
                }
            </Box>
        </>
    )
}

export default Settings

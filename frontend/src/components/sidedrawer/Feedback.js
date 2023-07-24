import { Box, Button, Flex, Modal, ModalContent, ModalOverlay, Textarea, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'

const Feedback = ({ isFeedbackOpen, closeFeedback }) => {
    const [feedback, setFeedback] = useState('')
    const toast = useToast()

    const handleSubmit = async () => {
        const userData = {
            feedback
        }

        try {
            let response = await axios({
                method: 'POST',
                url: '/api/profile/submitfeedback',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: userData
            });
            setFeedback('')
            closeFeedback()
            toast({
                position: 'top',
                title: response.data.msg,
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        } catch (err) {
            toast({
                position: 'top',
                title: err.response.data.msg,
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    }

    return (
        <>
            <Modal closeOnOverlayClick={false} isOpen={isFeedbackOpen} onClose={closeFeedback}>
                <ModalOverlay />
                <ModalContent>
                    <Box p='20px 15px 20px 15px'>
                        <Textarea placeholder='Write your feddback here...' rows='5' onChange={(e) => setFeedback(e.target.value)} />
                        <Flex w='100%' justifyContent='space-between' mt='10px'>
                            <Button w='48%' onClick={closeFeedback}>Cancel</Button>
                            <Button w='48%' className='blue__button' onClick={handleSubmit}>Submit Feedback</Button>
                        </Flex>
                    </Box>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Feedback

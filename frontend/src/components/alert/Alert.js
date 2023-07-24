import { AlertDialog, AlertDialogContent, AlertDialogOverlay, Box, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AlertContext } from '../../context/AlertState';

const Alert = () => {
    const { isAlertOpen,
        closeAlert,
        cancelAlertRef,
        alertImageDiv,
        alertTitle,
        alertDesc,
        alertButtonDiv
    } = useContext(AlertContext);

    return (
        <>
            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelAlertRef}
                onClose={closeAlert}
                isOpen={isAlertOpen}
            >
                <AlertDialogOverlay />

                <AlertDialogContent p='20px'>
                    <Flex flexDirection='column' alignItems='center'>
                        {alertImageDiv}
                        <Box fontSize='22px' fontFamily='Rubik-Medium'>{alertTitle}</Box>
                        <Box fontSize='18px'>{alertDesc}</Box>
                        {alertButtonDiv}
                    </Flex>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}

export default Alert

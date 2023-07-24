import { useDisclosure } from '@chakra-ui/react';
import React, { createContext, useState } from 'react'

export const AlertContext = createContext();

const AlertState = (props) => {
    const { isOpen: isAlertOpen, onOpen: openAlert, onClose: closeAlert } = useDisclosure();
    const cancelAlertRef = React.useRef()

    const [alertImageDiv, setAlertImageDiv] = useState('');
    const [alertTitle, setAlertTitle] = useState('');
    const [alertDesc, setAlertDesc] = useState('');
    const [alertButtonDiv, setAlertButtonDiv] = useState('');

    const value = {
        isAlertOpen,
        openAlert,
        closeAlert,
        cancelAlertRef,
        alertImageDiv,
        setAlertImageDiv,
        alertTitle,
        setAlertTitle,
        alertDesc,
        setAlertDesc,
        alertButtonDiv,
        setAlertButtonDiv
    };

    return (
        <AlertContext.Provider value={value}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState

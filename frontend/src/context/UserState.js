import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserState = (props) => {
    const [globalEmail, setGlobalEmail] = useState(localStorage.getItem('nofap-user'))
    const [globalUser, setGlobalUser] = useState(localStorage.getItem('nofap-user'));

    const value = {
        globalEmail,
        setGlobalEmail,
        globalUser,
        setGlobalUser
    }

    return (
        <>
            <UserContext.Provider value={value}>
                {props.children}
            </UserContext.Provider>
        </>
    )
}

export default UserState

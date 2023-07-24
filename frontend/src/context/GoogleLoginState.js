import { useGoogleLogin } from '@react-oauth/google';
import { useToast } from '@chakra-ui/react';
import React, { createContext, useContext } from 'react'
import axios from 'axios'
import { UserContext } from './UserState';

export const GoogleLoginContext = createContext();

const GoogleLoginState = (props) => {
    const { setGlobalEmail, setGlobalUser } = useContext(UserContext)
    const toast = useToast()
    const handleGoogleLogin = useGoogleLogin({
        onSuccess: async tokenResponse => {
            try {
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${tokenResponse.access_token}`
                    }
                })
                const googleData = res.data

                let email = googleData.email
                let username = email.substring(0, email.lastIndexOf("@"));
                let userData = {
                    googleId: googleData.sub,
                    email,
                    username,
                    name: googleData.name,
                }

                try {
                    let response = await axios({
                        method: 'POST',
                        url: '/api/auth/login',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: userData
                    });
                    localStorage.setItem('nofap-user', response.data.email);
                    setGlobalEmail(response.data.email)
                    setGlobalUser(response.data.email)

                    toast({
                        position: 'top',
                        title: "Welcome NoFap Member",
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

            } catch (error) {
                toast({
                    position: 'top',
                    title: "Something went wrong. Please try again",
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
            }
        }
    })

    const value = {
        handleGoogleLogin
    }

    return (
        <GoogleLoginContext.Provider value={value}>
            {props.children}
        </GoogleLoginContext.Provider>
    )
}

export default GoogleLoginState

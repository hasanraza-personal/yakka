import { Container, Image, Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import PrivacyPolicyImage from '../../public/images/privacypolicy-img.svg'
import '../../css/privacypolicy.css'

const PrivacyPolicy = () => {
    return (
        <>
            <Container mt='20px' mb='55px'>
                <Box className="privay-policy-heading">Nofap Privacy Policy</Box>
                <Box className="privacy-policy-date">Updated October 27, 2022</Box>
                <Box className="privacy-policy-short-info">NoFap’s Privacy Policy describes how NoFap collects, uses, and shares your personal data.</Box>
                <Box className="privacy-policy-image">
                    <Image className="img-fluid" src={PrivacyPolicyImage} boxSize='250px' />
                </Box>
                <Box className="privacy-policy-desc">At Nofap, accessible from <Link to="https://www.nofap.online" color='#246bfd !important'>https://www.nofap.online</Link>, one of our main priorities
                    is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and
                    recorded by Nofap and how we use it.
                </Box>
                <Box className="privacy-policy-desc">If you have additional questions or require more information about our Privacy Policy,
                    do not hesitate to contact us.
                </Box>
                <Box className="privacy-policy-desc">This Privacy Policy applies only to our online activities and is valid for visitors
                    to our website with regards to the information that they shared and/or collect in Nofap.
                </Box>
                <Box className="privacy-policy-heading">Consent</Box>
                <Box className="privacy-policy-desc">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</Box>
                <Box className="privacy-policy-heading">Information we collect</Box>
                <Box className="privacy-policy-desc">As a visitor, you can browse our website to find out more about our Website. You are not
                    required to provide us with any personal information as a visitor.
                </Box>
                <Box className="privacy-policy-desc">When you register for an Account, we may ask for your contact information, including items such as name, email address.</Box>
                <Box className="privacy-policy-or">OR</Box>
                <Box className="privacy-policy-desc">When you login through your Google account, we will collect information, such as name and email address.</Box>
                <Box className="privacy-policy-heading">How we use your information</Box>
                <Box className="privacy-policy-desc">
                    We use the information we collect in various ways, including to:
                    <ul>
                        <li>Provide, operate, and maintain our website</li>
                        <li>Improve, personalize, and expand our website</li>
                        <li>Develop new products, services, features, and functionality</li>
                        <li>Communicate with you</li>
                        <li>Send you emails</li>
                    </ul>
                </Box>
            </Container>
        </>
    )
}

export default PrivacyPolicy

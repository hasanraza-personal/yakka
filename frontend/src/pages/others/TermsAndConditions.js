import { Box, Container, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/termsandconditions.css'
import TermsAndConditionsImage from '../../public/images/termsandcondition-img.svg'

const TermsAndConditions = () => {
    return (
        <>
            <Container my='10px' mb='55px'>
                <Box className="privay-policy-heading" lineHeight='normal'>NoFap Terms and Condition</Box>
                <Box className="privacy-policy-date">Updated October 27, 2022</Box>
                <Box className="privacy-policy-short-info">Welcome to NoFap!</Box>
                <Box className="privacy-policy-image">
                    <Image className="Image-fluid" alt='Terms Image' src={TermsAndConditionsImage} boxSize='250px' />
                </Box>
                <Box className="privacy-policy-desc">These terms and conditions outline the rules and regulations for the use of NoFap's Website,
                    located at <Link to="https://www.nofap.online" textDecoration='underline' color='#246bfd'>https://www.nofap.online</Link>.
                </Box>
                <Box className="privacy-policy-desc">By accessing this website we assume you accept these terms and conditions. Do not continue to use NoFap if you do
                    not agree to take all of the terms and conditions stated on this page.
                </Box>
                <Box className="privacy-policy-heading">Cookies</Box>
                <Box className="privacy-policy-desc">We employ the use of cookies. By accessing NoFap, you agreed to use cookies in agreement with the
                NoFap's <Link to="https://www.nofap.online/privacypolicy" textDecoration='underline' color='#246bfd'>Privacy Policy</Link>.
                </Box>
                <Box className="privacy-policy-desc">
                    Most interactive websites use cookies to let us retrieve the users details for each visit. Cookies are used by our website to enable the functionality of
                    certain areas to make it easier for people visiting our website.
                </Box>
                <Box className="privacy-policy-heading">License</Box>
                <Box className="privacy-policy-desc">Unless otherwise stated, NoFap and/or its licensors own the intellectual property rights for all material on NoFap.
                    All intellectual property rights are reserved. You may access this from NoFap for your own personal use subjected to restrictions set in these terms and conditions.
                </Box>
                <Box className="privacy-policy-or">You must not:</Box>
                <Box className="privacy-policy-desc">
                    <ul>
                        <li>Republish material from NoFap</li>
                        <li>Sell, rent or sub-license material from NoFap</li>
                        <li>Reproduce, duplicate or copy material from NoFap</li>
                        <li>Redistribute content from NoFap</li>
                    </ul>
                </Box>
                <Box className="privacy-policy-desc">This Agreement shall begin on the date hereof.</Box>
                <Box className="privacy-policy-desc">
                    You hereby grant NoFap a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your data in any and all forms, formats or media.
                </Box>
                <Box className="privacy-policy-heading">Your Privacy</Box>
                <Box className="privacy-policy-desc">
                    Please read <Link href="https://www.nofap.online/privacypolicy" color='#246bfd' textDecoration='underline'>Privacy Policy</Link>.
                </Box>
                <Box className="privacy-policy-heading">Removal of content from our website</Box>
                <Box className="privacy-policy-desc">
                    If you find any content on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests
                    to remove content but we are not obligated to or so or to respond to you directly.
                </Box>
                <Box className="privacy-policy-heading">Information</Box>
                <Box className="privacy-policy-desc">
                    <span className="terms-and-condition-span">
                        The information contained in this web site is subject to change without notice.<br />
                        Copyright © 2022 NoFap. All rights reserved.
                    </span><br /><br />
                    Updated by The NoFap Team on Oct. 27, 2022
                </Box>
            </Container>
        </>
    )
}

export default TermsAndConditions

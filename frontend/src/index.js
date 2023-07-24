import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, Container } from '@chakra-ui/react'
import './public/fonts/Rubik-Regular.ttf'
import './public/fonts/Rubik-Medium.ttf'
import './public/fonts/Rubik-SemiBold.ttf'
import './public/fonts/Rubik-Bold.ttf'
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<HelmetProvider>
			<BrowserRouter>
				<ChakraProvider>
					<Container p={0}>
						<GoogleOAuthProvider clientId='659528398914-ooa4k45idh4umo4gfsguulbmh2ap9ln3.apps.googleusercontent.com'>
							<App />
						</GoogleOAuthProvider>
					</Container>
				</ChakraProvider>
			</BrowserRouter>
		</HelmetProvider>
	</React.StrictMode>
);
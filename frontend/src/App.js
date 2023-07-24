import { Route, Routes } from "react-router-dom";
import Alert from "./components/alert/Alert";
import Header from "./components/header/Header";
import AlertState from "./context/AlertState";
import GoogleLoginState from "./context/GoogleLoginState";
import UserState from "./context/UserState";
import Home from "./pages/home/Home";
import Index from "./pages/Index/Index";
import PrivacyPolicy from "./pages/others/PrivacyPolicy";
import TermsAndConditions from "./pages/others/TermsAndConditions";
// import Reason from "./pages/reason/Reason";
import Settings from "./pages/settings/Settings";

function App() {
	return (
		<>
			<UserState>
				<AlertState>
					<GoogleLoginState>
						<Header />
						<Routes>
							<Route path='/' element={<Index />} />
							<Route path='/home' element={<Home />} />
							{/* <Route path='/reasons' element={<Reason />} /> */}
							<Route path='/settings' element={<Settings />} />
							<Route path='/privacypolicy' element={<PrivacyPolicy />} />
							<Route path='/termsandconditions' element={<TermsAndConditions />} />
						</Routes>
					</GoogleLoginState>
					<Alert />
				</AlertState>
			</UserState>
		</>
	);
}

export default App;

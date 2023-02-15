import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingAdminPage from "./pages/LandingAdminPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignUpPage />} />
                    <Route path="/sign-in-page" element={<SignInPage />} />
                    <Route path="/landing-admin-page" element={<LandingAdminPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

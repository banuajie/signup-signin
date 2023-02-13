import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignUpPage />} />
                    <Route path="/sign-in-page" element={<SignInPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

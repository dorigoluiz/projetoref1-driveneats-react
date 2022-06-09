import ResetStyles from "../assets/css/ResetStyles";
import GlobalStyles from "../assets/css/GlobalStyles";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import FirstScreen from "../components/screens/FirstScreen";
import OrderScreen from "../components/screens/OrderScreen";

function App () {
    return (
        <BrowserRouter>
            <ResetStyles />
            <GlobalStyles />
                <Routes>
                    <Route path="/" element={<FirstScreen />} />
                    <Route path="/pedido" element={<OrderScreen />} />
                </Routes>
        </BrowserRouter>
    )
}

export default App
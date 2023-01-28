import GlobalStyle from "./css/GlobalStyle";
import Home from "./pages/Home/Home.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import CartBuy from "./pages/CartBuy/CartBuy";
import SignIn from "./pages/SignIn/SigIn";


function App() {

  return (
    <AuthProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="CartBuy" element={<CartBuy/>}/>
          <Route path="/Sign-In" element={<SignIn />}/>
        </Routes>
      </BrowserRouter>
      </AuthProvider >
      );
}

      export default App;

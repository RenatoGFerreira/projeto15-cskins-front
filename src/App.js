import GlobalStyle from "./css/GlobalStyle";
import Home from "./pages/Home/Home.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";


function App() {

  return (
    <AuthProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider >
      );
}

      export default App;

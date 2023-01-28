import { ScreenContainer, LogoContainer, BarContainer, InputContainer, SignUpContainer } from "./StyledHeader.js"
import { Link } from "react-router-dom"
import { useState } from "react"


export default function Header() {

    const [showSignIn, setShowSignIn] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)

    function botao(){
        alert("funcionou")
    }

    return (
        <ScreenContainer>
            <LogoContainer>
                <span>CSkins</span>
                <p>The best site skin buy.</p>
            </LogoContainer>
            <BarContainer>
                <InputContainer>
                    <input placeholder="Pesquisar"></input>
                </InputContainer>
                <SignUpContainer>
                    <button onClick={()=> botao()}>Cadastre-se</button>
                    <button onClick={()=> botao()}>Entrar</button>
                    <ion-icon name="cart-outline"></ion-icon>
                    <ion-icon name="exit-outline"></ion-icon>
                </SignUpContainer>
            </BarContainer>
            
            
        </ScreenContainer>
    )
}


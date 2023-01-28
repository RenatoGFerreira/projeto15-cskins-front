import { ScreenContainer, LogoContainer, BarContainer, InputContainer, SignUpContainer, ContainerSignInPq, ContainerSignUpPq} from "./StyledHeader.js"
import { Link } from "react-router-dom"
import { useState } from "react"


export default function Header() {

    const [showSignIn, setShowSignIn] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)


    return (
        <ScreenContainer>
            <LogoContainer>
                <Link to="">
                <span>CSkins</span>
                <p>The best site skin buy.</p>
                </Link>
            </LogoContainer>
            <BarContainer>
                <InputContainer>
                    <input placeholder="Pesquisar"></input>
                </InputContainer>
                <SignUpContainer>
                    <button onClick={() => {
                        setShowSignUp(true)
                        setShowSignIn(false)
                    }
                    }>Cadastre-se</button>
                    <button onClick={() => {
                        setShowSignIn(true)
                        setShowSignUp(false)
                    }
                    }>Entrar</button>
                    <ion-icon name="cart-outline"></ion-icon>
                    <ion-icon name="exit-outline"></ion-icon>
                </SignUpContainer>
            </BarContainer>

            <ContainerSignInPq showSignIn={showSignIn}>
                <form>
                    <input></input>
                    <input></input>
                    <button>Entrar</button>
                </form>
                <button onClick={() => {
                    setShowSignIn(!showSignIn)
                    setShowSignUp(false)
                }}>Cancelar</button>
            </ContainerSignInPq> 

            <ContainerSignUpPq showSignUp={showSignUp}>
                <form>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <button>Cadastrar</button>
                </form>
                <button onClick={() => {
                    setShowSignUp(!showSignUp)
                    setShowSignIn(false)
                }}>Cancelar</button>
            </ContainerSignUpPq>
        </ScreenContainer>
    )
}


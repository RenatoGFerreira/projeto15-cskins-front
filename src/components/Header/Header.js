import { ScreenContainer, LogoContainer, BarContainer, InputContainer, SignUpContainer} from "./StyledHeader.js"
import { Link } from "react-router-dom"
import { useState } from "react"
import SignIn from "../SIgnIn/SIgnIn.js"
import SignUp from "../SIgnUp/SIgnUp.js"



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

            <SignIn showSignIn={showSignIn} setShowSignIn={setShowSignIn} setShowSignUp={setShowSignUp}/>
            <SignUp showSignUp={showSignUp} setShowSignIn={setShowSignIn} setShowSignUp={setShowSignUp}/>
        </ScreenContainer>
    )
}

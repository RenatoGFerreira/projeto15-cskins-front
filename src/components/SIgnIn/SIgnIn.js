import { ContainerSignInPq } from "./StyledSignIn.js";
import axios from "axios";
import BASE_URL from "../../constants/url.js"
import { useContext, useState } from "react";
import AuthContext from "../../context/authContext.js"

export default function SignIn({ showSignIn, setShowSignIn, setShowSignUp }) {

    const { token, setToken } = useContext(AuthContext)
    const [form, setForm] = useState({ email: "", password: "" });

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    async function sendRegistration(e) {
        e.preventDefault();

        const body = {
            ...form
        }

        console.log(body);

        try {
            const promise = await axios.post(`${BASE_URL}/sign-in`, body)
            setShowSignIn(false)
            console.log(promise.data.token);
            setToken(promise.data.token);
            localStorage.setItem("token", JSON.stringify(promise.data.token));

            const emptyInput = { email: "", password: "" }
            setForm(emptyInput)
            alert("Login efetuado com sucesso!")
        } catch (error) {
            console.log(error);
            alert("email e/ou senha incorretos!")
        }

    }

    return (
        <ContainerSignInPq showSignIn={showSignIn}>
            <form onSubmit={sendRegistration}>
                <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleForm}
                    placeholder="E-mail"
                    required>
                </input>
                <input
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleForm}
                    placeholder="Senha"
                    required>
                </input>
                <button type="submit">Entrar</button>
            </form>
            <button onClick={() => {
                setShowSignIn(!showSignIn)
                setShowSignUp(false)
            }}>Cancelar</button>
        </ContainerSignInPq>
    )
}
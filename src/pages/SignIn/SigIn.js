import {Logincomponent } from "./StyledSignIn.js"
import { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../../context/authContext";
import BASE_URL from "../../constants/url";

export default function SignIn({ showSignIn, setShowLogin, setShowSignUp }){

    const {token, setToken } =  useContext(AuthContext)
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
            const promise = await axios.post(BASE_URL, body);
            setShowLogin(false)
            console.log(promise.data.token);
            setToken(promise.data.token);
            localStorage.setItem("token", JSON.stringify(promise.data.token));

            const emptyInput = { email: "", password: "" }
            setForm(emptyInput)
        } catch (error) {
            console.log(error);
            console.log(token)
            alert("email e/ou senha incorretos")
        }
    }

    return (
        <Logincomponent showLogin={showSignIn}>
            <form  onSubmit={sendRegistration}>
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
                setShowLogin(!showSignIn)
                setShowSignUp(false)
            }}>Cancelar</button>
        </Logincomponent>
    )
}

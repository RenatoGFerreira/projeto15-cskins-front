import { ContainerSignUpPq } from "./StyledSignUp.js";
import { useState, useContext } from "react";
import axios from "axios";
import BASE_URL from "../../constants/url.js"

export default function SignUp({ showSignUp, setShowSignUp, setShowSignIn }){

    const [form, setForm] = useState({ name: "", email: "", password: "", confirmedPass: "" })

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
            await axios.post(`${BASE_URL}/sign-up`, body);
            setShowSignUp(false);
            const emptyInput = { name: "", email: "", password: "", confirmedPass: "" }
            setForm(emptyInput)
            alert("Cadastro efetuado com sucesso!")
        } catch (error) {
            alert(error.response.data.message);
        }

    }

    return(
        <ContainerSignUpPq showSignUp={showSignUp}>
                <form onSubmit={sendRegistration}>
                <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleForm}
                    placeholder="Nome"
                    required>
                </input>
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
                <input
                    name="confirmedPass"
                    type="password"
                    value={form.confirmedPass}
                    onChange={handleForm}
                    placeholder="Confirme a senha"
                    required>
                </input>
                <button type="submit">Cadastrar</button>
            </form>
                <button onClick={() => {
                    setShowSignUp(!showSignUp)
                    setShowSignIn(false)
                }}>Cancelar</button>
            </ContainerSignUpPq>
    )
}
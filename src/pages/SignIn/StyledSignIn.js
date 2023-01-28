import styled from "styled-components";

export const Logincomponent = styled.div`
    position: fixed;
    display: ${props => props.showLogin === true ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 60px;
    right: 60px;
    height: 20vh;
    width: 20vw;
    background-color: grey;
    opacity: 0.7;
    border-radius: 8px;
    form{
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
    }
    input{
        width: 250px;
        height: 25px;
        margin: 10px;
    }
    button{
        background-color: none;
        border: none;
        margin: 10px;
        border-radius: 5px;
    }
`
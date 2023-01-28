import styled from "styled-components";


export const ContainerSignInPq = styled.div`
    border: 1px solid black;
    position: absolute;
    top: 30vh;
    left: 40vw;

    display: ${props => props.showSignIn===true ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 30vh;
    width: 20vw;

    background-color: #cecece;
    border-radius: 8px;
    z-index: 1;
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
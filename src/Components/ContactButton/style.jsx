import styled from "styled-components";



export const ContactButtonMain = styled.button`
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 28px;
    font-family: 'Roboto';
    color: #dcffdf;
    font-size: 1em;
    text-decoration: none;
    background-color: transparent;
    border-color: #dcffdf;
    border-style: solid;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1vh 4vw;
    min-width: 100%;
    transition: ease 1s;

    &:hover{
        background-color: #9ab29c;
    }
`

export const ContactDescriptionSpan = styled.span`
    display: flex; 
    justify-content: center;
    align-items: center;
    min-height: 100%;
    min-width: 100%;
`
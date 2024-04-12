import styled from "styled-components";


export const PillarsCollapsableButton = styled.button`
    width: 80vw;
    max-height: ${props => props.state === 'true'? '800px' : '50px'};
    overflow-y: ${props => props.state === 'true'? 'visible' : 'hidden'};
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 28px;
    font-family: 'Roboto';
    font-size: 1em;
    text-decoration: none;
    background-color: transparent;
    border-style: solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 1vh 4vw;
    transition: all  0.8s linear;
    border-color: #dcffdf;
    color: #dcffdf;


`

export const PillarsButtonHeaderSpan = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const PillarsButtonTitleSpan = styled.span`
    min-width: 90%;
    max-width: 90%;   
    font-weight: 600;
    font-size: 1.2em;
`

export const PillarsDescParagraph = styled.p`
    text-align: justify;
    transition: all  0.8s linear;
`
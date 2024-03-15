import styled from "styled-components";

export const JoinUsBaseDiv = styled.div`
    background-color: #438eba;
    color: #DCFFDF;
    min-height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    color:#dcffdf;
    padding: 4vh 4vw 0 4vw;
    scroll-snap-align: start;

    .align-right{
        align-self: end;
    }
`

export const JoinUsTitle = styled.h2`
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 2.5em;
    padding: 0 20vw 0 0;
    margin: 0;
`

export const FamiliesDescriptionParagraph = styled.p`
    text-align: justify;
    font-weight: 300;
    font-family: 'Roboto';
    font-size: 0.8em;
    padding: 0 2em;
`

export const FamiliesAdressesList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 2vh 0;
    padding: 0;
    gap: 2vh;
`
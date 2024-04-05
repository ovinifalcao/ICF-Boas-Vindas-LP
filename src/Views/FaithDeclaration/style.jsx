import styled from "styled-components";


export const FaithDeclarationMainDiv = styled.div`
    background-color: #944c1c;
    color: #ffffff;
    min-height: 95vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 4vh 4vw 0 4vw;
    scroll-snap-align: start;
    gap: 2vh;

    .align-right{
        align-self: end;
    }
`

export const FaithDeclarationTitle = styled.h3`
    font-family: 'Roboto';
    font-size: 2.5em;
    font-weight: 500;
    padding: 0;
    margin: 0;
`

export const FaithDeclarationGroupDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5vh;

    .rightBoxes{
        padding-left: 20vh;
    }

    .leftBoxes{
        padding-right: 20vh;
    }
`

export const StatementsSpan = styled.span`

`

export const StatementsTitles = styled.h4`
    font-family: 'Roboto';
    font-size: 1.2em;
    font-weight: 600;
    padding: 0;
    margin: 0;
`
export const StatementsDescription = styled.p`
    font-family: 'Roboto';
    font-size: 0.8em;
    font-weight: 200;
    padding: 0;
    margin: 0;
    text-align: justify;
`
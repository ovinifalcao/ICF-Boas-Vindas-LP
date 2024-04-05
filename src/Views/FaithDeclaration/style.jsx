import styled from "styled-components";


export const FaithDeclarationMainDiv = styled.div`
    background-color: #944c1c;
    color: #ffffff;
    min-height: 95vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    scroll-snap-align: start;
    /* gap: 2vh; */
    padding-top: 4vh;

    .align-right{
        align-self: end;
        padding-right: 4vh;
    }

`

export const FaithDeclarationTitle = styled.h3`
    font-family: 'Roboto';
    font-size: 2.5em;
    font-weight: 500;
    padding: 0 4vw 0 4vw;;
    margin: 0;
    
`

export const FaithDeclarationGroupDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5vh;

`

export const StatementsSpan = styled.span`

`
export const StatementsSpanRight = styled.span`
    display:flex;
    flex-direction: row;
    padding-right: 4vw;
    margin-top: 2vh;
    gap: 4vw;
`

export const StatementsSpanCenter = styled.span`
    display:flex;
    flex-direction: row;
    padding: 0 4vw 0 4vw;
    margin-top: 2vh;
    gap: 4vw;
`
export const StatementsSpanLeft = styled.span`
    display:flex;
    flex-direction: row;
    padding-left: 4vw;
    margin-top: 2vh;
    gap: 4vw;
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

export const StatementsDecorativeImgTop = styled.img`
    opacity: 0.60;
`

export const StatementsDecorativeImgBottom = styled.img`

`
import styled from "styled-components"


export const PillarsMainDiv = styled.div`
    background-color: #292929;
    color: #dcffdf;
    min-height: 100vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    scroll-snap-align: start;
    gap: 2vh;

    .align-right{
        align-self: end;
        padding: 4vh 4vw 0 4vw;
    }

    .withPadding{
        padding: 4vh 4vw 0 4vw;
    }
`

export const PillarsHeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5vw;
`

export const PillarsHeaderTitle = styled.h3`
    max-width: 60vw;
    font-size: 3em;
    font-weight: 500;
    text-align: right;
    justify-content: space-around;
`

export const PillarsHeaderImg = styled.img`
    max-width: 40vw;
    opacity: 0.7;
`

export const PillarsFooterImg = styled.img`
    max-width: 100%;
`

export const PillarsCollapsableButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2vh;
    min-width: 100%;
    max-width: 100%;
    align-items: center;
`


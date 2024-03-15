import styled from "styled-components"


export const WellcomeVideoBaseDiv = styled.div`
    background-color: #2c698d;
    color: #ffffff;
    min-height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color:#dcffdf;
    padding: 4vh 4vw 0 4vw;
    scroll-snap-align: start;

    .align-right{
        align-self: end;
    }
`

export const WellcomeVideoTitleBox = styled.div`
    margin: 0 10vw;
    padding: 0 0 3vh 4vw; 
    border-left: 0.5vw solid #dcffdf;
`

export const WellcomeVideoContent = styled.div`
    border: 5px;
    border-radius: 23px;
    overflow: hidden;
`

export const WellcomeVideoTitle = styled.h3`
    font-size: 1.8em;
    font-family: "Roboto";
    font-weight: 500;
    margin: 0;
`
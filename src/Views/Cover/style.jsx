import styled from "styled-components";


export const CoverBaseDiv = styled.div`
    background-color: #1f8874;
    color: #ffffff;
    min-width: 100vw;
    min-height: 94vh;
    max-width: 100vw;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: flex-end;
    scroll-snap-align: start;
`

export const CoverHead = styled.div`
    margin: 0 0 4vh 4vw;
`

export const CoverTitle = styled.h1 `
    font-family: 'Manrope';
    font-size: 3.5em;
    font-weight: 700;
    max-width: 80vw;
    margin: 0;
    line-height: 105%;
`

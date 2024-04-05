import styled from "styled-components";


export const OurStructureMainDiv = styled.div`
    background-color: #359660;
    color: #ffffff;
    min-height: 100vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    padding: 4vh 4vw 0 4vw;
    scroll-snap-align: start;
    font-family: 'Roboto';
    gap: 2vh;
    position: relative;

    .align-right{
        align-self: end;
    }
`

export const OurStructureTitle = styled.h3`
    font-size: 2.5em;
    font-weight: 500;
    padding-right: 30%;
    line-height: 0.9em;
    z-index: 1;
`
export const OurStructureDescDiv = styled.div`
    display: block;
    padding-bottom: 4vh;
`

export const OurStructureSubtitle = styled.h4`
    font-size: 1.5em;
    font-weight: 500;
    padding: 0;
    margin: 0;
    padding-right: 60%;
`
export const OurStructureDescParagraph = styled.p`
    font-size: 0.9em;
    font-weight: 200;
    padding: 0;
    margin: 0;
    text-align:justify;
`
export const OurStructureDecorativeImg = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 75%;
`
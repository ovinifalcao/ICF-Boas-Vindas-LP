import styled from "styled-components";



export const ContactUsBaseDiv = styled.div`
    background-color: #292929;
    color: #ffffff;
    min-height: 100vh;
    max-width: 100vw;
    max-height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color:#dcffdf;
    padding: 4vh 4vw 0 4vw;
    scroll-snap-align: start;
    justify-content: space-between;
    position: relative;

    .align-right{
        align-self: end;
    }
`

export const ContactGroupDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vh;
    min-width: 100%;
`

export const ContactUsTitle = styled.h2`
    max-width: 40vw;
    font-size: 3em;
    text-align: right;
    line-height: 0.9;
    padding-top: 4vh;
    z-index:0;
`

export const ContactUsDecorativeImg = styled.img`
    position: absolute;
    left: 0;
    top: 0;
`
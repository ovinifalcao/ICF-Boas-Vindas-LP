import styled from "styled-components";

export const VisiteYouMainDiv = styled.div`
    background-color: #cd7130;
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
`

export const VisiteTitle = styled.h1`
  font-size: 3em;
  font-weight: 600;
  padding:0 50vw 0 4vh;
  margin:0;
  line-height: 0.9em;
`;

export const VisiteSubtitle = styled.p`
  font-size: 1em;
  font-weight: 200;
  padding:0 4vh;
  margin:0;
  line-height: 0.9em;
  text-align: justify;
`;

export const VisiteActionButonSpan = styled.span`
  padding:0 4vh;
  margin:0;
`;

export const VisiteDecorativeImg = styled.img`
`
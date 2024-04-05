
import styled from "styled-components";


export const CalendarBaseDiv = styled.div`
    background-color: #1f8874;
    min-height: 100vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color:#dcffdf;
    padding: 4vw 0;
    overflow: hidden;

    scroll-snap-align: start;

    .align-right{
        align-self: end;
        padding-right: 4vh;
    }

`

export const CalendarHeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    gap: 4vw;

`

export const CalendarHeaderImage = styled.img`
    min-width: 40vw;
`

export const CalendarTitle = styled.h2`
    font-size: 3em;
    text-align: right;
    line-height: 0.9;
    z-index:0;
    text-align: left;
    margin: 0;
`

export const CalendarParagraph = styled.p`
    text-align: justify;
    font-weight: 300;
    font-family: 'Roboto';
    font-size: 0.9em;
    padding: 0 10vw;
`

export const CalendarItemList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 2vh 0;
    padding: 0;
    gap: 2vh;
`

export const CalendarPlaceButtonSpan = styled.span`
    width: 80%;
    margin: 2vh 0;
`
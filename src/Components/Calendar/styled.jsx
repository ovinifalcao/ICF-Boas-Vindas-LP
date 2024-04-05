import styled from "styled-components";


export const CalendarItemBaseDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2vw;
    max-width: 70vw;
    padding-bottom: 2vh;
    border-bottom: 1px solid lightgray;
`

export const CalendarItemDescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family:'Roboto';
`

export const CalendarItemName = styled.span`
   font-weight: 600;
    font-size: 1.2em;
`

export const CalendarItemDesc = styled.span`
    font-weight: 300;
    font-size:  0.8em;
`

export const CalendarItemHour = styled.span`
    font-weight: 300;
    font-size:  0.9em;
`

export const CalendarItemDay = styled.span`
    font-weight: 300;
    font-size:  0.9em;
`

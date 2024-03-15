import styled from "styled-components";


export const FamiliesAdressBaseDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2vw;
    max-width: 70vw;
    padding-bottom: 2vh;
    border-bottom: 1px solid lightgray;
`

export const FamiliesDescriptionBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family:'Roboto';
`

export const FamilyName = styled.span`
   font-weight: 600;
    font-size: 1em;
`

export const FamilyInfo = styled.span`
    font-weight: 300;
    font-size:  1em;
`

export const FamilyReponsible = styled.span`
    margin-top: 0.8vh;
    font-weight: 300;
    font-size:  0.7em;
`
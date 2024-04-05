import styled from "styled-components";

export const Container = styled.div`
  background-color: #1f8874;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #DCFFDF;
  font-size: 0.8em;
  font-family: 'Manrope';
  padding:0;
  margin:0;
  text-align: right;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  font-weight: 100;
  font-size: 2em;
  padding:0;
  margin:0;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 50px;
  font-size: 3em;
  font-weight: 600;
  padding:0;
  margin:0;
  line-height: 0.9em;
`;

export const RightDiv = styled.div`
    padding:0;
    margin:0;
    max-width: 30vw;
`

export const LeftDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    padding:0;
    margin:0;
    gap: 2vh;
    max-width: 30vw;

`


export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 50px;
  font-size: 1.2em;
  font-weight: 200;
  padding:0;
  margin:0;
`;

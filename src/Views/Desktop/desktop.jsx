
import QrCode  from "../../Components/QrCode/QrCode";
import Logo from "../../Components/logoICF/logo";
import {Container, Title, Subtitle, Description, RightDiv, LeftDiv}  from "./style";


export default function Desktop() {
    return (
      <Container>
        <LeftDiv>
            <Logo className="align-right" fillColor={"#DCFFDF"} width={"5vw"}/>
            <Title>Família Capão</Title>
            <Subtitle>Nosso site funciona melhor no celular</Subtitle>
            <Description>Queremos que você nos conheça mas não planejamos essa página para ser acessada via computadores ou tables, mas não se preocupe apenas <b>aponte o seu celular para o QRCode ao lado e vamos te levar até lá.</b> </Description>
        </LeftDiv>
        <RightDiv>
            <QrCode width={"30vw"} />
        </RightDiv>
      </Container>
    );
};
  
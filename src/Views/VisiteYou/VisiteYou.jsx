import ContactButton from "../../Components/ContactButton/ContactButton";
import Logo from "../../Components/logoICF/logo";
import { VisiteActionButonSpan, VisiteDecorativeImg, VisiteSubtitle, VisiteTitle, VisiteYouMainDiv } from "./style";


export default function VisiteYou(){
    return(
        <VisiteYouMainDiv>
            <Logo className="align-right" fillColor={"#dcffdf"} width={"15vw"}/>
            <VisiteTitle>Gostaria de uma visita?</VisiteTitle>
            <VisiteSubtitle>Nosso ministério pastoral está  à disposição caso você precise de uma visita em sua casa. Clique no botão abaixo e vamos marcar esse tempo precioso!</VisiteSubtitle>
            <VisiteActionButonSpan>
                <ContactButton ContactName={"Whatsapp"} InnerText="Nos chame no Whatsapp" linkRef={"https://wa.me/5511911573146"}/>
            </VisiteActionButonSpan>
            <VisiteDecorativeImg src="https://icfcapao.com.br/img/visite_01.png" alt="Irmão expondo suas biblias"/>
        </VisiteYouMainDiv>
    )
}
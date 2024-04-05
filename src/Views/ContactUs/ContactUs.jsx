import ArrowDownBlock from "../../Components/ArrowDown/ArrowDown";
import ContactButton from "../../Components/ContactButton/ContactButton";
import Logo from "../../Components/logoICF/logo";
import { ContactGroupDiv, ContactUsBaseDiv, ContactUsTitle } from "./style";

export default function ContactUs(){
    return(
        <>
            <ContactUsBaseDiv>
                <Logo className="align-right" fillColor={"#d6d6d6"} width={"15vw"}/>
                <ContactUsTitle className="align-right">Quer falar com a gente?</ContactUsTitle>
                <ContactGroupDiv>
                    <ContactButton ContactName={"Whatsapp"} InnerText="11 9726-8267" linkRef={"https://wa.me/5511911573146"}/>
                    <ContactButton ContactName={"Mail"} InnerText="familiacapao@igrejadafamilia.org.br" linkRef={"mailto:familiacapao@igrejadafamilia.org.br?subject=Fale com a gente - Site"} />
                    <ContactButton ContactName={"Instagram"} InnerText="@icfcapao" linkRef={"https://www.instagram.com/icfcapao/"}/>
                    <ContactButton ContactName={"Youtube"} InnerText="@ICFFamiliaCapao" linkRef={"https://www.youtube.com/c/ICFFam%C3%ADliaCap%C3%A3o"}/>
                    <ContactButton ContactName={"TikTok"} InnerText="@icfcapao" linkRef={"https://www.tiktok.com/@icfcapao"}/>
                </ContactGroupDiv>
                <ArrowDownBlock />
            </ContactUsBaseDiv>
        </>
    )
}
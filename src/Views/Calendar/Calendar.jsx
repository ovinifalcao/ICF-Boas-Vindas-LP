import ContactButton from "../../Components/ContactButton/ContactButton";
import Logo from "../../Components/logoICF/logo";
import CalendarItem from "../../Components/Calendar/Calendar";
import { CalendarBaseDiv, CalendarHeaderDiv, CalendarHeaderImage, CalendarItemList, CalendarParagraph, CalendarPlaceButtonSpan, CalendarTitle } from "./style";
import { useEffect, useState } from "react";
import api from "../../Services/Api";
import ArrowDownBlock from "../../Components/ArrowDown/ArrowDown";



export default function Calendar(){

    const [dateCalendar, setDateCalendar] = useState([])

    useEffect(() => {
            api
            .get("api/Calendar/BoasVindas?qtd=4")
            .then((response) => setDateCalendar(response.data));
        },[]);

    return(
        <CalendarBaseDiv>
            <Logo className="align-right" fillColor={"#3ac7b3"} width={"15vw"}/>
            <CalendarHeaderDiv>
                <CalendarHeaderImage src="https://icfcapao.com.br/img/calendar_01.png" alt="Visão da Igreja cheia durante uma minstração"/>
                <CalendarTitle>Próximos Eventos Locais</CalendarTitle>
            </CalendarHeaderDiv>
            <CalendarParagraph>Se junte a nós em algum evento na nossa Igreja. Eles acontecem quase sempre aos sábados e domingos, dá uma olhada:</CalendarParagraph>
            <CalendarItemList>
                {dateCalendar.map((item, i) => (
                    <CalendarItem infos={item}/>
                ))}
                
            </CalendarItemList>
            
            <CalendarPlaceButtonSpan>
                <ContactButton className="placeButton" ContactName={"Place"} linkRef={"https://www.google.com/search?sca_esv=0d192b7b40015184&rlz=1C1GCEU_pt-BRBR991BR991&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ACQVn0_nFJESUZtVQKQFsyWrx276UmFciA:1712349178587&q=Familia+Capao+ICF&rflfq=1&num=10&ved=2ahUKEwj6jpXk9auFAxWhpZUCHUm0A4kQtgN6BAgwEAI#rlfi=hd:;si:17839392072493998585,l,ChFGYW1pbGlhIENhcGFvIElDRkjUhMvF062AgAhaHxAAEAEQAhgAGAEYAiIRZmFtaWxpYSBjYXBhbyBpY2aSARBjaHJpc3RpYW5fY2h1cmNoqgFREAEqFSIRZmFtaWxpYSBjYXBhbyBpY2YoDDIfEAEiG1yTTSA5hZYC4z80yo5P-covOxzW0WkLxZ_AnDIVEAIiEWZhbWlsaWEgY2FwYW8gaWNm;mv:[[-23.6762937,-46.795782900000006],[-23.6787578,-46.7981877]]"} InnerText={"Rua Anum-Dourado, 75"}></ContactButton>
            </CalendarPlaceButtonSpan>
            <ArrowDownBlock/>
        
        </CalendarBaseDiv>
    )
}
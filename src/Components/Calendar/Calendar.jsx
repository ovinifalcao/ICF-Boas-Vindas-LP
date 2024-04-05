import {CalendarItemBaseDiv, CalendarItemDescriptionBox, CalendarItemName, CalendarItemDesc, CalendarItemDay, CalendarItemHour} from "./styled";
import CalendarIcon from "./CalendarIcon";

export default function CalendarItem(props){

    const data = new Date(Date.parse(props.infos.start)).toLocaleDateString("pt-br");
    const horarioInicial = new Date(Date.parse(props.infos.start)).getHours();
    const horariofinal = new Date(Date.parse(props.infos.end)).getHours();
    
    return(
        <CalendarItemBaseDiv>
            <CalendarIcon width={"10vw"} fillColor={"#dcffdf"} />
            <CalendarItemDescriptionBox>
                <CalendarItemName> {props.infos.summary} </CalendarItemName>
                <CalendarItemDesc> {props.infos.desc.descricao} </CalendarItemDesc>
                <CalendarItemDay> <b>Dia:</b>  { data}</CalendarItemDay>
                <CalendarItemHour> <b>Horário:</b>  Das {horarioInicial}hrs até {horariofinal}hrs </CalendarItemHour>
            </CalendarItemDescriptionBox>
        </CalendarItemBaseDiv>
    )
}
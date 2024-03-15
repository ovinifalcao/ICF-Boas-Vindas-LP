import { FamiliesAdressBaseDiv, FamiliesDescriptionBox, FamilyName, FamilyInfo, FamilyReponsible } from "./styled";
import FamiliesLogo from "../../Components/FamiliesLogo/FamiliesLogo";

export default function FamiliesAddress(){
    return(
        <FamiliesAdressBaseDiv>
            <FamiliesLogo width={"10vw"} fill={"#DCFFDF"} />
            <FamiliesDescriptionBox>
                <FamilyName> Pequena Família Dom José </FamilyName>
                <FamilyInfo> R. Anum Preto, 505 </FamilyInfo>
                <FamilyInfo> Quintas-Feiras  |  Às 20:30 </FamilyInfo>
                <FamilyReponsible> <b>Responsáveis:</b> Maria Joana & Marcio Gabriel Marcelo & Cláudia Solar </FamilyReponsible>
            </FamiliesDescriptionBox>
        </FamiliesAdressBaseDiv>
    )
}
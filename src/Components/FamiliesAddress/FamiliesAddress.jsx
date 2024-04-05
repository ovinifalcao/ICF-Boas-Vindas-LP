import { FamiliesAdressBaseDiv, FamiliesDescriptionBox, FamilyName, FamilyInfo, FamilyReponsible } from "./styled";
import FamiliesLogo from "../../Components/FamiliesLogo/FamiliesLogo";

export default function FamiliesAddress({family}){

    return(
        <FamiliesAdressBaseDiv>
            <FamiliesLogo width={"10vw"} fill={"#DCFFDF"} />
            <FamiliesDescriptionBox>
                <FamilyName> {family.name} </FamilyName>
                <FamilyInfo> {family.address} </FamilyInfo>
                <FamilyInfo> {family.desc} </FamilyInfo>
                <FamilyReponsible> <b>Responsáveis:</b> {family.owners} </FamilyReponsible>
            </FamiliesDescriptionBox>
        </FamiliesAdressBaseDiv>
    )
}
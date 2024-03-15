import ArrowDownBlock from "../../Components/ArrowDown/ArrowDown";
import Logo from "../../Components/logoICF/logo";
import { CoverTitle, CoverBaseDiv, CoverHead } from "./style"

export default function Cover() {

    return (
        <CoverBaseDiv>
            <CoverHead>
                <Logo fillColor={"#fff"} width={"20vw"}/>
                <CoverTitle> Nós somos a Família Capão</CoverTitle>
            </CoverHead>
            <ArrowDownBlock/>
        </CoverBaseDiv>
    )
}
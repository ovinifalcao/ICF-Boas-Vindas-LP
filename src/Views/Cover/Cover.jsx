import ArrowDownBlock from "../../Components/ArrowDown/ArrowDown";
import Logo from "../../Components/logoICF/logo";
import { CoverTitle, CoverBaseDiv, CoverHead } from "./style"

export default function Cover() {

    return (
        <CoverBaseDiv bgUrl={"https://icfcapao.com.br/img/main_bg.png"}>
            <CoverHead>
                <Logo fillColor={"#fff"} width={"18vw"}/>
                <CoverTitle> Nós somos a Família Capão</CoverTitle>
            </CoverHead>
            <ArrowDownBlock/>
        </CoverBaseDiv>
    )
}
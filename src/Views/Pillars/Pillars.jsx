import Logo from "../../Components/logoICF/logo";
import { PillarsCollapsableButtonDiv, PillarsFooterImg, PillarsHeaderDiv, PillarsHeaderImg, PillarsHeaderTitle, PillarsMainDiv } from "./style";
import PillarsButton from "../../Components/PillarsButton/PillarsButton";



export default function Pillars(){
    return(
        <>
            <PillarsMainDiv>
                <Logo className="align-right" fillColor={"#dcffdf"} width={"15vw"}/>
                <PillarsHeaderDiv>
                    <PillarsHeaderTitle>Nossos Pilares</PillarsHeaderTitle>
                    <PillarsHeaderImg src="https://icfcapao.com.br/img/pillars_01.png"></PillarsHeaderImg>
                </PillarsHeaderDiv>

                <PillarsCollapsableButtonDiv>
                    <PillarsButton btnTitle={"Família"} content={"Loren Ipsum"}/>
                    <PillarsButton btnTitle={"Formação"} content={"Loren Ipsum"}/>
                    <PillarsButton btnTitle={"Missões"} content={"Loren Ipsum"}/>
                    <PillarsButton btnTitle={"Transformação"} content={"Loren Ipsum"}/>
                </PillarsCollapsableButtonDiv>

                <PillarsFooterImg src="https://icfcapao.com.br/img/pillars_02.png"></PillarsFooterImg>
            </PillarsMainDiv>
        </>
    )
}
import Logo from "../../Components/logoICF/logo";
import { OurStructureDecorativeImg, OurStructureDescDiv, OurStructureDescParagraph, OurStructureMainDiv, OurStructureSubtitle, OurStructureTitle } from "./style";
import HierarchyChart  from "../../Components/HierarchyChart/HierarchyChart";


export default function OurStructure(){
    return(
        <OurStructureMainDiv>
            <OurStructureDecorativeImg src="https://icfcapao.com.br/img/structure_01.png" alt="Mulher de mãos levantadas adorando ao Senhor."/>
            <Logo className="align-right" fillColor={"#ca699f"} width={"15vw"}/>
            <OurStructureTitle>Nossa Estrutura</OurStructureTitle>
            <HierarchyChart width={"100%"}/>
            <OurStructureDescDiv>
                <OurStructureSubtitle>Modelo Ministerial</OurStructureSubtitle>
                <OurStructureDescParagraph>
                    Cremos que Deus, em sua multiforme graça, facultou a cada igreja cristã características próprias, de acordo com sua identidade, propósito e função no Reino de Deus. <strong>O modelo da Igreja Cristã da Família respeita as características da identidade que nos foi dada.</strong> O nome deste modelo é Ministerial. 
                    Por esta razão, entendemos que cada membro do Corpo de Cristo, a Igreja, é um ministro (servo) de Deus que deve ser treinado para descobrir, desenvolver e utilizar suas habilidades e ser capacitado pelo poder do Espírito para servir através de um ou mais ministérios.
                </OurStructureDescParagraph>
            </OurStructureDescDiv>
        </OurStructureMainDiv>
    )
}
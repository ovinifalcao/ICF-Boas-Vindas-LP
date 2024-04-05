import ArrowDownBlock from "../../Components/ArrowDown/ArrowDown"
import FamiliesAddress from "../../Components/FamiliesAddress/FamiliesAddress"
import Logo from "../../Components/logoICF/logo"
import { FamiliesAdressesList, FamiliesDecorativeImg, FamiliesDescriptionParagraph, JoinUsBaseDiv, JoinUsTitle } from "./style"

export default function JoinUs(){
    return(
        <JoinUsBaseDiv>
            <FamiliesDecorativeImg src="https://icfcapao.com.br/img/join_01.png" alt="Irmãos servindo a santa ceia"/>    
            <Logo className="align-right" fillColor={"#bc7145"} width={"15vw"}/>
            <JoinUsTitle>Como fazer parte da Família</JoinUsTitle>
            <FamiliesDescriptionParagraph>
                A melhor Forma de se achegar a família é participar dos nossos  pequenos grupos que acontecem às quintas  e sexta, Nos reunimos nos lares dos nossos irmãos, compartilhamos um tempo incrível com palavra, louvor, oração e comunhão para estreitar o nossos laços como comunidade. Você vem?
            </FamiliesDescriptionParagraph>
            <FamiliesAdressesList>
                <li><FamiliesAddress/> </li>
                <li><FamiliesAddress/> </li>   
                <li><FamiliesAddress/> </li>   
                <li><FamiliesAddress/> </li>   
            </FamiliesAdressesList>  
            <ArrowDownBlock/>  
        </JoinUsBaseDiv>
    )
}

import ArrowDownBlock from "../../Components/ArrowDown/ArrowDown"
import { Families } from "../../Components/FamiliesAddress/Families"
import FamiliesAddress from "../../Components/FamiliesAddress/FamiliesAddress"
import Logo from "../../Components/logoICF/logo"
import { FamiliesAdressesList, FamiliesDecorativeImg, FamiliesDescriptionParagraph, JoinUsBaseDiv, JoinUsTitle } from "./style"

export default function JoinUs(){

    const familiesData = Families;

    return(
        <JoinUsBaseDiv>
            <FamiliesDecorativeImg src="https://icfcapao.com.br/img/join_01.png" alt="Irmãos servindo a santa ceia"/>    
            <Logo className="align-right" fillColor={"#bc7145"} width={"15vw"}/>
            <JoinUsTitle>Como fazer parte da Família</JoinUsTitle>
            <FamiliesDescriptionParagraph>
                A melhor Forma de se achegar a família é participar dos nossos  pequenos grupos que acontecem às quintas  e sexta, Nos reunimos nos lares dos nossos irmãos, compartilhamos um tempo incrível com palavra, louvor, oração e comunhão para estreitar o nossos laços como comunidade. Você vem?
            </FamiliesDescriptionParagraph>
            <FamiliesAdressesList>

               {familiesData.map((item, i) => (
                    <li key={i}><FamiliesAddress family={item} key={i}/> </li> 
                ))}
            </FamiliesAdressesList>  
            <ArrowDownBlock/>  
        </JoinUsBaseDiv>
    )
}

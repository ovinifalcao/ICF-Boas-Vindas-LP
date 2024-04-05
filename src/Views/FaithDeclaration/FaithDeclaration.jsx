import ArrowDownBlock from "../../Components/ArrowDown/ArrowDown"
import Logo from "../../Components/logoICF/logo"
import { StatementsDescriptionText } from "./StatementsDescriptions"
import { FaithDeclarationGroupDiv, FaithDeclarationMainDiv, FaithDeclarationTitle, StatementsDescription, StatementsSpan, StatementsTitles } from "./style"



export default function FaithDeclaration() {
    return(
        <>
            <FaithDeclarationMainDiv>
                <Logo className="align-right" fillColor={"#6bb3e3"} width={"15vw"}/>
                <FaithDeclarationTitle>Nossos Fundamentos</FaithDeclarationTitle>
                
                <FaithDeclarationGroupDiv>
                    <StatementsSpan className="rightBoxes">
                        <StatementsTitles>A Bíblia</StatementsTitles>
                        <StatementsDescription>{StatementsDescriptionText.biblia}</StatementsDescription>
                    </StatementsSpan>

                    <StatementsSpan className="rightBoxes">
                        <StatementsTitles>Condição do Homem</StatementsTitles>
                        <StatementsDescription>{StatementsDescriptionText.condicao}</StatementsDescription>
                    </StatementsSpan>

                    <StatementsSpan className="rightBoxes">
                        <StatementsTitles>Nosso Senhor e Salvador</StatementsTitles>
                        <StatementsDescription>{StatementsDescriptionText.salvador}</StatementsDescription>
                    </StatementsSpan>

                    <StatementsSpan>
                        <StatementsTitles>O Plano da Redenção</StatementsTitles>
                        <StatementsDescription>{StatementsDescriptionText.plano}</StatementsDescription>
                    </StatementsSpan>

                    <StatementsSpan>
                        <StatementsTitles>Batistmo nas águas</StatementsTitles>
                        <StatementsDescription>{StatementsDescriptionText.batismoAguas}</StatementsDescription>
                    </StatementsSpan>

                    <StatementsSpan>
                        <StatementsTitles>Batismo no Espírito Santo</StatementsTitles>
                        <StatementsDescription>{StatementsDescriptionText.batismoEspirito}</StatementsDescription>
                    </StatementsSpan>

                    <StatementsSpan>
                        <StatementsTitles>O Casamento</StatementsTitles>
                        <StatementsDescription>{StatementsDescriptionText.casamento}</StatementsDescription>
                    </StatementsSpan>

                    <StatementsSpan className="leftBoxes">
                        <StatementsTitles>A Esperança Bendita</StatementsTitles>
                        <StatementsDescription>{StatementsDescriptionText.esperanca}</StatementsDescription>
                    </StatementsSpan>

                    <StatementsSpan className="leftBoxes">
                        <StatementsTitles>A Santificação</StatementsTitles>
                        <StatementsDescription>{StatementsDescriptionText.santificacao}</StatementsDescription>
                    </StatementsSpan>

                    <StatementsSpan className="leftBoxes">
                        <StatementsTitles>O Juízo Final</StatementsTitles>
                        <StatementsDescription>{StatementsDescriptionText.juizo}</StatementsDescription>
                    </StatementsSpan>
                </FaithDeclarationGroupDiv>

                <ArrowDownBlock/>
            </FaithDeclarationMainDiv>
            
        </>
    )
}
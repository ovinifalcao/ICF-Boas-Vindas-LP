import { CoverTitle, CoverBaseDiv } from "./style"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Cover() {

    return (
        <CoverBaseDiv>
            <CoverTitle> Nós Somos a Família Capão</CoverTitle>
            <ExpandMoreIcon fontSize="large"/>
        </CoverBaseDiv>
    )
}
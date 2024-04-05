import { useState } from "react";
import { PillarsButtonHeaderSpan, PillarsButtonTitleSpan, PillarsCollapsableButton, PillarsDescParagraph } from "./style";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function PillarsButton({btnTitle, content}){

    const [openState, setOpenState] = useState(false)

    var handleClick = () =>{
        setOpenState(openState => !openState)
    }

    return(
        <>
            <PillarsCollapsableButton type="button" state={openState.toString()} onClick={handleClick}>
                <PillarsButtonHeaderSpan>
                    <PillarsButtonTitleSpan>{btnTitle}</PillarsButtonTitleSpan> 
                    <ExpandMoreIcon/>
                </PillarsButtonHeaderSpan>
                <PillarsDescParagraph>{content}</PillarsDescParagraph>
            </PillarsCollapsableButton >
        </>
    )
}
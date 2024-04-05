import { ContactButtonMain, ContactDescriptionSpan } from "./style";
import Whatsapp  from "./Icons/Whatsapp";
import Mail  from "./Icons/Mail";
import Instagram  from "./Icons/Instagram";
import Youtube  from "./Icons/Youtube";
import Tiktok  from "./Icons/Tiktok";
import { Place } from "@mui/icons-material";


function ButtonIconChooser(contactName) {
    switch(contactName){
        case "Whatsapp":
            return <Whatsapp width={"1.5em"}/>
        case "Mail":
            return <Mail width={"1.5em"}/>
        case "Instagram":
            return <Instagram width={"1.5em"}/>
        case "Youtube":
            return <Youtube width={"1.5em"}/>
        case "TikTok":
            return <Tiktok width={"1.5em"}/>
        case "Place":
                return <Place width={"1.5em"}/>
        default :
            return <> ? </>
    }
}

export default function ContactButton({InnerText, ContactName, linkRef}){

    function handleClick() {
         window.open(linkRef, '_blank');
    }

    return(
        <>
            <ContactButtonMain onClick={handleClick}>
                {ButtonIconChooser(ContactName) }
                <ContactDescriptionSpan>{InnerText}</ContactDescriptionSpan>
            </ContactButtonMain>
        </>
    )
}
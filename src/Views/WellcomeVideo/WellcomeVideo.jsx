
import ArrowDownBlock from "../../Components/ArrowDown/ArrowDown";
import Logo from "../../Components/logoICF/logo";
import { WellcomeVideoBaseDiv, WellcomeVideoContent, WellcomeVideoTitle, WellcomeVideoTitleBox } from "./style";


export default function WellcomeVideo(){
    return(
        <WellcomeVideoBaseDiv>
            <Logo className="align-right" fillColor={"#d39672"} width={"15vw"}/>
            <WellcomeVideoTitleBox>
                <WellcomeVideoTitle>
                    Temos um recado especial para você
                </WellcomeVideoTitle>
            </WellcomeVideoTitleBox>

            <WellcomeVideoContent>
                <iframe width="333" height="592"
                src="https://www.youtube.com/embed/xRl3Ypsd7Xs"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
                </iframe>
            </WellcomeVideoContent>
            <ArrowDownBlock/>
        </WellcomeVideoBaseDiv>
    )
}
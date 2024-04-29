import PhotoForAboutUs from "../photo_component/PhotoForAboutUs"
import TextForAboutUs from "../text_component/TextForAboutUs"
import { aboutUsText } from "../../../data/dataForAboutUs/dataForAboutUs"
import "/3k2s/CourceProject/PaperProjectUserInterface/react-paper-user-app-vite/src/styles/stylesForComponents/about_us/titleAboutUsComponent/titleAboutUsComponent.css"


export default function TitleForAboutUs()
{
    return (
    <div id="title-component">
        <PhotoForAboutUs />
        <TextForAboutUs {...aboutUsText} />
    </div>
    )
}
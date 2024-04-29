import TitleForAboutUs from "../text_photo_component/TitleForAboutUs"
import "../../../styles/stylesForComponents/about_us/mainAboutUs/mainAboutUs.css"
import FormHelp from "../form_help_component/FormHelpComponent"

export default function AboutUs() {
    return (
        <main id="about-us-component">
            <TitleForAboutUs />
            <FormHelp />
        </main>
    )
}
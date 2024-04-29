import FormHelp from "../form_help_component/FormHelpComponent";
import "../../../styles/stylesForComponents/about_us/helpComponent/helpComponent.css"

export default function HelpDiv()
{
    return (
        <div id="component-form-help">
            <form>
                <h1>Служба поддержки</h1>
                <FormHelp />
            </form>
        </div>
    )
}
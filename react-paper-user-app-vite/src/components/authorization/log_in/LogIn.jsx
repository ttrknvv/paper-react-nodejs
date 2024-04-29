import InputData from "../input_data_component/InputData";
import "../../../styles/stylesForComponents/authorization/logIn/logIn.css"
import Button from "../button/Button";
import "../../../styles/stylesForComponents/authorization/button/button.css"

export default function LogIn()
{
    return (
        <>
        <div id="photo-component-login">
            <img src="/ProjectImages/LogIn.png" alt="" />
        </div>
        <div id="form-for-input-login">
            <form>
                <InputData />
                <InputData />
                <Button />
            </form>
        </div>
    </>
    )
}
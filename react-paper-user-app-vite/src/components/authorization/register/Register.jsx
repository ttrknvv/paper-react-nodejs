import "../../../styles/stylesForComponents/authorization/register/register.css"
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    function navTo()
    {
        navigate("/about", { replace: true});
    }
    
    return (
        <>
            {/* <div id="form-for-input-register">
                <a onClick={navTo}>Войти</a><a>Зарегистрироваться</a>
                <form>
                    <InputData nameInput={"login-login"} textForInput={"Логин"}/>
                    <InputData nameInput={"password-login"} textForInput={"Пароль"}/>
                    <InputData nameInput={"phone-login"} textForInput={"Номер телефона"}/>
                    <InputData nameInput={"email-login"} textForInput={"Электронная почта"}/>
                    <Button />
                </form>
            </div> */}
        </>
        
    )
}
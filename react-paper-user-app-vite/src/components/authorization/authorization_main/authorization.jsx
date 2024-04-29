import InputData from "../input_data_component/InputData";
import LogIn from "../log_in/LogIn";
import "../../../styles/stylesForComponents/authorization/authorizationMain/authorization.css"
import Register from "../register/Register";

export default function Authorization() {
    return (
        <main id="auth-main">
            {/* <LogIn /> */}
            <Register />
        </main>
    )
}
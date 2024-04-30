import "../styles/stylesForComponents/mainStyle/index.css"
import { Router } from "./router/Router";
import { ConfigProvider } from "antd";

export default function App() {

  const theme={
    components: {
        Input: {
            activeBg: "transparent",
            activeBorderColor: "#930000",
            hoverBg: "transparent",
            hoverBorderColor: "#930000",
            inputFontSize: 20
        }},
        token: {
            colorPrimary: '#AC7373',
            colorBgContainer: "transparent",
            colorErrorBorderHover: "#ed4d4e"
        }
    };

  return (
    <ConfigProvider theme={theme}>
        <Router />
    </ConfigProvider>
  )
}


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
            inputFontSize: 20,
        },
        Tabs: {
          itemColor: "#AC7373",
          itemActiveColor: "#930000",
          itemHoverColor: "#930000",
          itemSelectedColor: "#930000",
          titleFontSizeLG: "1.8vw"
        },
    },
        token: {
            colorPrimary: '#AC7373',
            colorBgContainer: "transparent",
            colorErrorBorderHover: "#ed4d4e",
            colorText: "#AC7373",
            fontFamily: "Inter",
        }
    };

  return (
    <ConfigProvider theme={theme}>
        <Router />
    </ConfigProvider>
  )
}


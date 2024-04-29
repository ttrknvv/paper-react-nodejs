import Header from "./header/main_header/AppHeader";
import "../styles/stylesForComponents/mainStyle/index.css"
//import AboutUs from "./about_us/main_about_us/AboutUs";
import Footer from "./footer/main_footer/Footer";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Router } from "./router/Router";

const AboutUs = lazy(() => import("./about_us/main_about_us/AboutUs"))

export default function App() {

  return (
    <Router />
    // <BrowserRouter>
    //   <div> 
    //     <Header />
    //       <Routes>
    //           <Route exact path="*" element={<Authorization />} />
    //           <Route path="/about" element={<Suspense fallback={<p>LOADING</p>}><AboutUs /></Suspense>} />
    //           <Route path="/subscription" element={<Subscription />} />
    //           <Route path="/catalog" element={<Catalog />} />
    //       </Routes>
    //     <Footer />
    //   </div>
    // </BrowserRouter>
  )
}


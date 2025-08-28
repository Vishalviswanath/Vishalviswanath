// App.jsx
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Index from "./components/Index";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ReactGA from "react-ga4";

function App() {

  useEffect(() => {
    ReactGA.initialize("G-3Z8C96ZCLM");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "App.jsx" });

  }, [])

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      // easing: "ease-in-out",
    });

  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Index />} />
        <Route path=":path" element={<Index />} />
      </Route>
    </Routes>
  );
}

export default App;

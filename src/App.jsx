// App.jsx
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Index from "./components/Index";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
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

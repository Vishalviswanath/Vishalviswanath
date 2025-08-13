import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Index from "./components/Index";

function App() {
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

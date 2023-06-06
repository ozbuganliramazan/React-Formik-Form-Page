import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import GeneralForm from "./pages/GeneralForm";
import PortalForm from "./pages/PortalForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<GeneralForm />} />
        <Route path="/portal" element={<PortalForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

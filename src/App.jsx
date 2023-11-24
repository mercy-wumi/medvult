import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import PatientSignUp from "./components/PatientSignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="signup-patient" element={<PatientSignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

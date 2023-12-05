import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import PatientSignUp from "./pages/PatientSignUp";
import DoctorSignUp from "./pages/DoctorSignUp";
import DoctorDashOverview from "./pages/DoctorDashOverview";
import PatientSignIn from "./pages/PatientSignIn";
import PatientMedicalRecord from "./pages/PatientMedicalRecord";
import DoctorSignIn from "./pages/DoctorSignIn";
import MyPatient from "./pages/MyPatient";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="signup-patient" element={<PatientSignUp />} />
        <Route path="signin-patient" element={<PatientSignIn />} />
        <Route path="signup-doctor" element={<DoctorSignUp />} />
        <Route path="signin-doctor" element={<DoctorSignIn />} />
        <Route exact path="dashboard/" element={<Dashboard />}>
          <Route index="true" element={<DoctorDashOverview />} />
          <Route path="patient-record" element={<PatientMedicalRecord />} />
          <Route path="my-patient" element={<MyPatient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

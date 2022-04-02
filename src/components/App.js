import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Login/Signup";
import { UserAuthContextProvider, useUserAuth } from "../Contex/UserAuthContex";
import ProtectedRoute from "./Login/ProtectedRoute";
import "./Login/Form.css";
import Home from "./Pages/Home";
import Wasp from "./Pages/Wasp/Wasp";
import Task from "./Pages/Task/Task";

import Country from "./Pages/OncePages/Country/Country";
import Currency from "./Pages/OncePages/Currency/Currency";
import Languages from "./Pages/OncePages/Languages/Languages";
import Measure from "./Pages/OncePages/Measure/Measure";
import WorkType from "./Pages/OncePages/WorkType/WorkType";
import Category from "./Pages/OncePages/Category/Category";
import Status from "./Pages/OncePages/Status/Status";
import Codes from "./Pages/OncePages/Codes/Codes";
import EmailMaster from "./Pages/OncePages/EmailMaster/EmailMaster";
import OurCompany from "./Pages/OncePages/OurCompany/OurCompany";
import Domain from "./Pages/OncePages/Domain/Domain";

import ImportedRecord from "./Pages/Tact/ImportedRecord";
import ImportExport from "./Pages/Tact/TactPages/ImportExport";
import SearchTact from "./Pages/Tact/TactPages/SearchTact";
import AddTact from "./Pages/Tact/TactPages/AddTact";

import SpCost from "./Pages/Cost/SpCost";
import Checker from "./Pages/Cost/Checker";
import ReChecker from "./Pages/Cost/ReChecker";
import Tally from "./Pages/Cost/Tally";

import CompanyStationary from "./Pages/Boss/CompanyStationary";
import UserDirectory from "./Pages/Boss/UserDirectory";
import Permission from "./Pages/Boss/Permission";
import StaffMailers from "./Pages/Boss/StaffMailers";
import Report from "./Pages/Boss/Report";
import Backup from "./Pages/Boss/Backup";
import AddUser from "./Pages/Boss/AddUser";
import EmailSend from "./Pages/Boss/EmailSend";
import EditUser from "./Pages/Boss/EditUser";
import EditCompanyStationary from "./Pages/Boss/EditCompanyStationary";

import Footer from "./Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes basename="/">
          <Route
            path="/home"
            element={
              // <ProtectedRoute>
              <Home />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/Wasp"
            element={
              // <ProtectedRoute>
              <Wasp />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/Task"
            element={
              // <ProtectedRoute>
              <Task />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/Country"
            element={
              // <ProtectedRoute>
              <Country />
              // </ProtectedRoute>
            }
          />
          <Route
            path="/Currency"
            element={
              //   <ProtectedRoute>
              <Currency />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/Languages"
            element={
              //  <ProtectedRoute>
              <Languages />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/Measure"
            element={
              //  <ProtectedRoute>
              <Measure />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/WorkType"
            element={
              //  <ProtectedRoute>
              <WorkType />
              //</ProtectedRoute>
            }
          />

          <Route
            path="/Category"
            element={
              //  <ProtectedRoute>
              <Category />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/Status"
            element={
              //  <ProtectedRoute>
              <Status />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/Codes"
            element={
              // <ProtectedRoute>
              <Codes />
              // </ProtectedRoute>
            }
          />

          <Route
            path="/EmailMaster"
            element={
              //  <ProtectedRoute>
              <EmailMaster />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/OurCompany"
            element={
              // <ProtectedRoute>
              <OurCompany />
              // </ProtectedRoute>
            }
          />

          <Route
            path="/Domain"
            element={
              // <ProtectedRoute>
              <Domain />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/ImportedRecords"
            element={
              // <ProtectedRoute>
              <ImportedRecord />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/ImportExport"
            element={
              //  <ProtectedRoute>
              <ImportExport />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/SearchTact"
            element={
              //  <ProtectedRoute>
              <SearchTact />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/AddTact"
            element={
              //  <ProtectedRoute>
              <AddTact />
              // </ProtectedRoute>
            }
          />

          <Route
            path="/Checker"
            element={
              //  <ProtectedRoute>
              <Checker />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/ReChecker"
            element={
              //  <ProtectedRoute>
              <ReChecker />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/SpCost"
            element={
              //  <ProtectedRoute>
              <SpCost />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/Tally"
            element={
              //  <ProtectedRoute>
              <Tally />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/CompanyStationary"
            element={
              //  <ProtectedRoute>
              <CompanyStationary />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/UserDirectory"
            element={
              //  <ProtectedRoute>
              <UserDirectory />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/Permission"
            element={
              //  <ProtectedRoute>
              <Permission />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/StaffMailers"
            element={
              //  <ProtectedRoute>
              <StaffMailers />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/Report"
            element={
              //  <ProtectedRoute>
              <Report />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/Backup"
            element={
              //  <ProtectedRoute>
              <Backup />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/AddUser"
            element={
              //  <ProtectedRoute>
              <AddUser />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/EditUser"
            element={
              //  <ProtectedRoute>
              <EditUser />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/EditCompanyStationary"
            element={
              //  <ProtectedRoute>
              <EditCompanyStationary />
              //  </ProtectedRoute>
            }
          />

          <Route
            path="/EmailSend"
            element={
              //  <ProtectedRoute>
              <EmailSend />
              //  </ProtectedRoute>
            }
          />

          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserAuthContextProvider>
      <Footer />
    </div>
  );
};

export default App;

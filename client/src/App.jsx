import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from './pages/DashboardPage';
import ApplicationPage from './pages/ApplicationPage';
import AddCandidatePage from './pages/AddCandidatePage';

function App() {
 
  return (
    <>
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardPage/>}/>
                <Route path="/Application" element={<ApplicationPage/>}/>
                <Route path="/Candidates" element={<AddCandidatePage/>}/>
            </Routes>
       </BrowserRouter>
    </>
  )
}

export default App

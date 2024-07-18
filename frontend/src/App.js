import './App.css';
import Button from '@mui/material/Button';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import HealthNews from './Components/HealthNews';
import { ElectricalServicesRounded, Home } from '@mui/icons-material';
import Exercise from './Components/Exercise';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExploreOurTools from './Components/ExploreOurTools';
import PredictDiabetes from './Components/PredictDiabetes';
import CalculateBMI from './Components/CalculateBMI';
import HomePage from './Pages/HomePage';
import Doctors from './Pages/Doctors';
import DiabetesChecker from './Pages/DiabetesChecker';
import BMI from './Pages/BMI';
import Personalized from './Pages/Personalized';



function App() {
  return (
    <div className='bg-[#fffff8]'>
    {/* <Navbar/>
    <Profile/>
    <main>
        <HealthNews />
      </main>
  <Exercise/>
  <ExploreOurTools/> */}
  
  <Navbar />
  <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/predict-diabetes" element={<DiabetesChecker/>} />
            <Route path="/calculate-bmi" element={<BMI/>} />
            <Route path="/exercise-routine" element={<ExploreOurTools />} />

            <Route path='/doctors' element={<Doctors/>}/>
            <Route path='/personalized' element={<Personalized/>}/>
            {/* <Route path="/diabetesChecker" element={<DiabetesChecker/>}/>
            <Route path='/bmi' element={<BMI/>}/> */}
    </Routes>
    </div>
  );
}

export default App;
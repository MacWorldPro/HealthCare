import "./App.css";
import Button from "@mui/material/Button";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import HealthNews from "./Components/HealthNews";
import { ElectricalServicesRounded, Home } from "@mui/icons-material";
import Exercise from "./Components/Exercise";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExploreOurTools from "./Components/ExploreOurTools";
import PredictDiabetes from "./Components/PredictDiabetes";
import CalculateBMI from "./Components/CalculateBMI";
import HomePage from "./Pages/HomePage";
import Doctors from "./Pages/Doctors";
import DiabetesChecker from "./Pages/DiabetesChecker";
import BMI from "./Pages/BMI";
import Personalized from "./Pages/Personalized";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';



function App() {
  const [show, setShow] = useState(true);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Downscroll
        setShow(false);
      } else {
        // Upscroll
        setShow(true);
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div className="bg-secondary overflow-x-hidden">
      {/* <Navbar/>
    <Profile/>
    <main>
        <HealthNews />
      </main>
  <Exercise/>
  <ExploreOurTools/> */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: show ? 0 : -60 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
      </motion.div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/predict-diabetes" element={<DiabetesChecker />} />
        <Route path="/calculate-bmi" element={<BMI />} />
        <Route path="/exercise-routine" element={<ExploreOurTools />} />

        <Route path="/doctors" element={<Doctors />} />
        <Route path="/personalized" element={<Personalized />} />
        {/* <Route path="/diabetesChecker" element={<DiabetesChecker/>}/>
            <Route path='/bmi' element={<BMI/>}/> */}
      </Routes>
    </div>
  );
}

export default App;

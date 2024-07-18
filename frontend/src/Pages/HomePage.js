import React from 'react';
import Navbar from '../Components/Navbar';
import HealthNews from '../Components/HealthNews';
import ExploreOurTools from '../Components/ExploreOurTools';
import Exercise from '../Components/Exercise';
import Footer from '../Components/Footer';
import ChatBotComponent from '../Components/ChatBot';
import Profile from '../Components/Profile';

const HomePage = () => {
  return (
    <>
      <main className="flex flex-col items-center p-4 space-y-8">
        <Profile/>
        <HealthNews/>
        <Exercise />
        <ExploreOurTools />
        <ChatBotComponent />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;

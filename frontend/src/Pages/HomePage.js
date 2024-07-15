import React from 'react';
import Navbar from '../Components/Navbar';
import HealthNews from '../Components/HealthNews';
import ExploreOurTools from '../Components/ExploreOurTools';
import Exercise from '../Components/Exercise';
import Footer from '../Components/Footer';
import ChatBotComponent from '../Components/ChatBot';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-4 space-y-8">
        <HealthNews />
        <Exercise />
        <ExploreOurTools />
        <ChatBotComponent />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;

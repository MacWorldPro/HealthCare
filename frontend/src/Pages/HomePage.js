import React from "react";
import Navbar from "../Components/Navbar";
import HealthNews from "../Components/HealthNews";
import ExploreOurTools from "../Components/ExploreOurTools";
import Exercise from "../Components/Exercise";
import Footer from "../Components/Footer";
import ChatBotComponent from "../Components/ChatBot";
import Profile from "../Components/Profile";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FadeInSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width:"100vw"
      }}
    >
      {children}
    </motion.div>
  );
};

const HomePage = () => {
  

  const ref1 = useRef(null);
  const inView = useInView(ref1, { once: false });

  return (
    <>
      <main className="flex flex-col ">
        <Profile />

        <FadeInSection>
          <HealthNews />
        </FadeInSection>

        <FadeInSection>
          <Exercise />
        </FadeInSection>

        <FadeInSection>
          <ExploreOurTools />
        </FadeInSection>

        
        <ChatBotComponent/>
      </main>

      <motion.div
        ref={ref1}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Footer />
      </motion.div>
    </>
  );
};

export default HomePage;

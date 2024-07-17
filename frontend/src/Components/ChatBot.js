import React, { useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

const RedirectButton = ({ to, label }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(to);

  return (
    <button onClick={handleClick}>
      {label}
    </button>
  );
};

const ChatBotComponent = () => {
  const steps = [
    {
      id: 'welcome',
      message: 'Welcome to the Diabetes Health Assistant. How can I help you today?',
      trigger: 'options',
    },
    {
      id: 'options',
      options: [
        { value: 'predict_diabetes', label: 'Predict Diabetes', trigger: 'predict_diabetes' },
        { value: 'predict_bmi', label: 'Predict BMI', trigger: 'predict_bmi' },
        { value: 'news', label: 'Latest Diabetes News', trigger: 'news' },
        { value: 'details', label: 'Details about Diabetes', trigger: 'details' },
        { value: 'exercise', label: 'Exercise Tips', trigger: 'exercise' },
        { value: 'doctor', label: 'Suggest a Doctor', trigger: 'doctor' },
      ],
    },
    {
      id: 'predict_diabetes',
      component: (
        <RedirectButton to="/predict-diabetes" label="Predict Diabetes" />
      ),
      trigger: 'options',
    },
    {
      id: 'predict_bmi',
      component: (
        <RedirectButton to="/calculate-bmi" label="Predict BMI" />
      ),
      trigger: 'options',
    },
    {
      id: 'news',
      component: (
        <RedirectButton to="/health-news" label="Latest Diabetes News" />
      ),
      trigger: 'options',
    },
    {
      id: 'details',
      message: 'Diabetes is a chronic condition that affects the way your body processes blood sugar. Would you like to know about symptoms, treatments, or prevention?',
      trigger: 'details_options',
    },
    {
      id: 'details_options',
      options: [
        { value: 'symptoms', label: 'Symptoms', trigger: 'symptoms' },
        { value: 'treatments', label: 'Treatments', trigger: 'treatments' },
        { value: 'prevention', label: 'Prevention', trigger: 'prevention' },
      ],
    },
    {
      id: 'symptoms',
      message: 'Common symptoms of diabetes include increased thirst, frequent urination, extreme hunger, unexplained weight loss, fatigue, irritability, and blurred vision.',
      trigger: 'options',
    },
    {
      id: 'treatments',
      message: 'Treatments for diabetes include lifestyle changes, monitoring blood sugar, insulin therapy, and medication.',
      trigger: 'options',
    },
    {
      id: 'prevention',
      message: 'Prevention tips include maintaining a healthy diet, regular physical activity, and keeping a healthy weight.',
      trigger: 'options',
    },
    {
      id: 'exercise',
      component: (
        <RedirectButton to="/exercise-routine" label="Exercise Tips" />
      ),
      trigger: 'options',
    },
    {
      id: 'doctor',
      component: (
        <RedirectButton to="/doctors" label="Suggest a Doctor" />
      ),
      trigger: 'options',
    },
  ];

  const theme = {
    background: '#f0f8ff',
    headerBgColor: '#87CEFA',
    headerFontColor: '#fff',
    headerFontSize: '16px',
    botBubbleColor: '#87CEFA',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBot steps={steps} floating={true} />
    </ThemeProvider>
  );
};

export default ChatBotComponent;

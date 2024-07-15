import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

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
      message: 'You can predict diabetes using our tool here:',
      component: (
        <Link to="/predict-diabetes" target="_blank" rel="noopener noreferrer">
          Predict Diabetes
        </Link>
      ),
      trigger: 'options',
    },
    {
      id: 'predict_bmi',
      message: 'You can predict your BMI using our tool here:',
      component: (
        <Link to="/predict-bmi" target="_blank" rel="noopener noreferrer">
          Predict BMI
        </Link>
      ),
      trigger: 'options',
    },
    {
      id: 'news',
      message: 'Check out the latest news about diabetes here:',
      component: (
        <Link to="/health-news" target="_blank" rel="noopener noreferrer">
          Latest Diabetes News
        </Link>
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
      message: 'Find exercise tips for managing diabetes here:',
      component: (
        <Link to="/exercise-tips" target="_blank" rel="noopener noreferrer">
          Exercise Tips
        </Link>
      ),
      trigger: 'options',
    },
    {
      id: 'doctor',
      message: 'Here are some recommended doctors for diabetes care:',
      component: (
        <Link to="/suggest-doctor" target="_blank" rel="noopener noreferrer">
          Suggest a Doctor
        </Link>
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

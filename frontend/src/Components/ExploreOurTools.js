import React from 'react';
import { Link } from 'react-router-dom';

const tools = [
  {
    name: 'Predict Your Diabetes',
    description: 'Use our tool to predict your risk of diabetes.',
    image: 'https://via.placeholder.com/150',
    path: '/predict-diabetes'
  },
  {
    name: 'Calculate BMI',
    description: 'Calculate your Body Mass Index.',
    image: 'https://via.placeholder.com/150',
    path: '/calculate-bmi'
  },
  {
    name: 'Personalised Recommendation',
    description: 'Based on our prediction Personalised Recommendation',
    image: 'https://via.placeholder.com/150',
    path: 'personalized'
  }
];

const ExploreOurTools = () => {
  return (
    <div className="flex flex-col items-center mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Explore Our Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tools.map((tool) => (
          <Link to={tool.path} key={tool.name} className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
            <img src={tool.image} alt={tool.name} className="mb-4 w-32 h-32 object-cover rounded-full" />
            <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
            <p className="text-center">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreOurTools;

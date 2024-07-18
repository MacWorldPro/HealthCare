import React from 'react';
import { Link } from 'react-router-dom';
import diabetes from "../Assets/diabetes.jpg"
import images from "../Assets/images.jpg"
import user from "../Assets/download.jpg"

const tools = [
  {
    name: 'Predict Your Diabetes',
    description: 'Use our tool to predict your risk of diabetes.',
    image: diabetes,
    path: '/predict-diabetes'
  },
  {
    name: 'Calculate BMI',
    description: 'Calculate your Body Mass Index.',
    image: images,
    path: '/calculate-bmi'
  },
  {
    name: 'Personalised Recommendation',
    description: 'Based on our prediction Personalised Recommendation',
    image: user,
    path: 'personalized'
  }
];

const ExploreOurTools = () => {
  return (
    <div className="flex flex-col w-11/12 items-center mt-10 p-6 bg-secondary shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Explore Our Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tools.map((tool) => (
          <Link to={tool.path} key={tool.name} className={`flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md ${tool.name==="Predict Your Diabetes"?("hover:bg-[#97f6bb]"):(`${tool.name==="Calculate BMI"?("hover:bg-[#97f6bb]"):("hover:bg-[#c9bbf7] col-span-2")}`)} transition duration-200`}>
            <img src={tool.image} alt={tool.name} className="mb-4 h-48 w-48 object-cover rounded-full" />
            <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
            <p className="text-center">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreOurTools;

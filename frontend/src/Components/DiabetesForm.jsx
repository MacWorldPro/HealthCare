import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'; // Import axios for making HTTP requests
import { useAuth0 } from "@auth0/auth0-react"; // Import Auth0 hook

const DiabetesForm = () => {
    const { user } = useAuth0(); // Get the logged-in user
    const [gender, setGender] = useState("");
    const { handleSubmit, register } = useForm();
    const [val, setVal] = useState("");

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:8080/predict', {
                Gender: gender,
                AGE: data.age,
                Urea: data.urea,
                Cr: data.cr,
                HbA1c: data.HbA1c,
                Chol: data.Chol,
                TG: data.TG,
                HDL: data.HDL,
                LDL: data.LDL,
                VLDL: data.VLDL,
                BMI: data.BMI,
                email: user.email // Include the user's email
            });
            setVal(response.data.predicted_value);
        } catch (error) {
            console.error("There was an error!", error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4 bg-white border border-gray-300 rounded-lg shadow-md">
            <div className="text-center mb-4">
                <h1 className="text-2xl font-bold">Diabetes Predictor</h1>
                <p className="text-sm text-gray-500">All fields are mandatory *</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col">
                    <label className="mb-1 text-gray-700">Gender</label>
                    <div className="flex space-x-2">
                        <button
                            type="button"
                            onClick={() => setGender("M")}
                            className={`py-2 px-4 rounded-md ${gender === "M" ? "bg-orange-400 text-white" : "bg-gray-200 text-gray-700"}`}
                        >
                            Male
                        </button>
                        <button
                            type="button"
                            onClick={() => setGender("F")}
                            className={`py-2 px-4 rounded-md ${gender === "F" ? "bg-orange-400 text-white" : "bg-gray-200 text-gray-700"}`}
                        >
                            Female
                        </button>
                    </div>
                </div>

                {['age', 'urea', 'cr', 'HbA1c', 'Chol', 'TG', 'HDL', 'LDL', 'VLDL', 'BMI'].map((field) => (
                    <div key={field} className="flex flex-col">
                        <label htmlFor={field} className="mb-1 text-gray-700 capitalize">{field}</label>
                        <input
                            type="text"
                            className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                            name={field}
                            {...register(field)}
                        />
                    </div>
                ))}

                <div className="col-span-2">
                    <button type="submit" className="w-full py-2 px-4 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition duration-300">
                        Submit
                    </button>
                </div>
            </form>
            {val && (
                <div className="mt-4 text-center">
                    <div className="text-gray-700 font-bold">Predicted Value</div>
                    <div className="text-xl text-orange-500">{val}</div>
                </div>
            )}
        </div>
    );
};

export default DiabetesForm;

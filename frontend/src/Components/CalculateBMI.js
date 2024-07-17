import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { calcBMI } from "../Services/operations/Tools";

const BmiForm = () => {
    const { handleSubmit, register } = useForm();
    const [val, setVal] = useState("");

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("weight", data.weight);
        formData.append("height", data.height);

        const result = await calcBMI(formData);
        setVal(result);
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-300 rounded-lg shadow-md">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold">BMI Calculator</h1>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col">
                    <label htmlFor="weight" className="mb-1 text-gray-700 font-semibold">Weight</label>
                    <input
                        type="text"
                        className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        name="weight"
                        {...register("weight", { required: true })}
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="height" className="mb-1 text-gray-700 font-semibold">Height</label>
                    <input
                        type="text"
                        className="py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                        name="height"
                        {...register("height", { required: true })}
                    />
                </div>
                <button type="submit" className="w-full py-2 px-4 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition duration-300">
                    Submit
                </button>
            </form>
            {val && (
                <div className="mt-6 text-center">
                    <div className="text-gray-700 font-bold">Calculated BMI</div>
                    <div className="text-xl text-orange-500">{val}</div>
                </div>
            )}
        </div>
    );
};

export default BmiForm;

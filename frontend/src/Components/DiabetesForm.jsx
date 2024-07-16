import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'; // Import axios for making HTTP requests
import "../formStyle.css";

const DiabetesForm = () => {
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
                BMI: data.BMI
            });
            setVal(response.data.predicted_value);
        } catch (error) {
            console.error("There was an error!", error);
        }
    };

    return (
        <div className='border-2 border-black h-fit flex flex-col justify-between p-5'>
            <div className='font-extrabold text-3xl'>Diabetes Predictor<br /><span className='font-extralight text-sm'>All fields are mandatory *</span></div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                <div className='flex flex-col'>
                    <div>Gender</div>
                    <div className='flex gap-2'>
                        <button type="button" onClick={() => setGender("M")} className={`${gender === "M" ? "border-orange-400 border-2" : "border-gray-600 border-2"}`}>
                            Male
                        </button>
                        <button type="button" onClick={() => setGender("F")} className={`${gender === "F" ? "border-orange-400 border-2" : "border-gray-600 border-2"}`}>
                            Female
                        </button>
                    </div>
                </div>

                <label htmlFor='age'>Age</label>
                <input type="text" className='textBox' name="age" {...register("age")} />

                <label htmlFor='urea'>Urea</label>
                <input type="text" className='textBox' name="urea" {...register("urea")} />

                <label htmlFor='cr'>Cr</label>
                <input type="text" className='textBox' name="cr" {...register("cr")} />

                <label htmlFor='HbA1c'>HbA1c</label>
                <input type="text" className='textBox' name="HbA1c" {...register("HbA1c")} />

                <label htmlFor='Chol'>Chol</label>
                <input type="text" className='textBox' name="Chol" {...register("Chol")} />

                <label htmlFor='TG'>TG</label>
                <input type="text" className='textBox' name="TG" {...register("TG")} />

                <label htmlFor='HDL'>HDL</label>
                <input type="text" className='textBox' name="HDL" {...register("HDL")} />

                <label htmlFor='LDL'>LDL</label>
                <input type="text" className='textBox' name="LDL" {...register("LDL")} />

                <label htmlFor='VLDL'>VLDL</label>
                <input type="text" className='textBox' name="VLDL" {...register("VLDL")} />

                <label htmlFor='BMI'>BMI</label>
                <input type="text" className='textBox' name="BMI" {...register("BMI")} />

                <button type="submit">Submit</button>
            </form>
            <div>
                <div>Predicted Value</div>
                <div>{val}</div>
            </div>
        </div>
    );
};

export default DiabetesForm;

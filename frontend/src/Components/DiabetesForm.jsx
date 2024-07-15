import React, { useState } from 'react'
import { useForm, SubmitHandler, Form } from "react-hook-form"
import "../formStyle.css"
import {calcDiabetes} from '../Services/operations/Tools'

const DiabetesForm = () => {

    const [gender,setGender]=useState("")
    const {handleSubmit,register}=useForm()
    const [val,setVal]=useState("")

    const onSubmit=async(data)=>{
        const formData=new FormData()

        formData.append("Gender",gender)
        formData.append("AGE",data.age)
        formData.append("Urea",data.urea)
        formData.append("Cr",data.cr)
        formData.append("HbA1c",data.HbA1c)
        formData.append("Chol",data.Chol)
        formData.append("TG",data.TG)
        formData.append("HDL",data.HDL)
        formData.append("LDL",data.LDL)
        formData.append("VLDL",data.VLDL)
        formData.append("BMI",data.BMI)

        // const result=await calcDiabetes(formData)
        // setVal(result)
    }

  return (
            <div className='border-2 border-black h-fit flex flex-col justify-between p-5'>
            <div className='font-extrabold text-3xl'>Diabetes Predictor<br></br><span className='font-extralight text-sm'>All fiels are mandatory *</span></div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                <div className='flex flex-col'>
                    <div>
                        Gender
                    </div>
                    <div className='flex gap-2'>
                        <button onClick={()=>setGender("Male")} className={`${gender==="Male" ? "border-orange-400 border-2" : "border-gray-600 border-2"}`}>
                            Male
                        </button>
                        <button onClick={()=>setGender("Female")} className={`${gender==="Female" ? "border-orange-400 border-2" : "border-gray-600 border-2"}`}>
                            Female
                        </button>
                    </div>
                </div>

                <label htmlFor='age'>Age
                </label>
                <input type="text" className='textBox' name="age"/>

                <label htmlFor='urea'>Urea
                </label>
                <input type="text" className='textBox' name="urea"/>

                <label htmlFor='cr'>Cr
                </label>
                <input type="text" className='textBox' name="cr"/>

                <label htmlFor='HbA1c'>HbA1c
                </label>
                <input type="text" className='textBox' name="HbA1c"/>

                <label htmlFor='Chol'>Chol
                </label>
                <input type="text" className='textBox' name="Chol"/>

                <label htmlFor='TG'>TG
                </label>
                <input type="text" className='textBox' name="TG"/>

                <label htmlFor='HDL'>HDL
                </label>
                <input type="text" className='textBox' name="HDL"/>

                <label htmlFor='LDL'>LDL
                </label>
                <input type="text" className='textBox' name="LDL"/>

                <label htmlFor='VLDL'>VLDL
                </label>
                <input type="text" className='textBox' name="VLDL"/>

                <label htmlFor='BMI'>BMI
                </label>
                <input type="text" className='textBox' name="BMI"/>
            </form>
            <div>
                <div>
                    Predicted Value
                </div>
                <div className=''>
                    {val}
                </div>
            </div>
            </div>
  )
}

export default DiabetesForm
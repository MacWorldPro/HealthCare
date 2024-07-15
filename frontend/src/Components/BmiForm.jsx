import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {calcBMI} from "../Services/operations/Tools"

const BmiForm = () => {

    const {handleSubmit,register}=useForm()
    const [val,setVal]=useState("")

    const onSubmit=async(data)=>{
        const formData=new FormData()

        formData.append("weight",data.weight)
        formData.append("height",data.height)

        const result=await calcBMI(formData);
        setVal(result)
    }

  return (
      <div className="border-2 border-black h-[40%] flex flex-col justify-between p-5">
      <div className="font-extrabold text-3xl">BMI Calculator</div>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="weight">Weight</label>
        <input type="text" className='textBox' name="weight" />

        <label htmlFor="height">Height</label>
        <input type="text" className='textBox' name="height" />
      </form>

      <div>
        Calculated BMI<br/>
        {val}
      </div>
      </div>
  );
};

export default BmiForm;

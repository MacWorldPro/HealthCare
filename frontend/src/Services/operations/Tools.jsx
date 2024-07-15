import React from 'react'
import axios from "axios"

export function calcDiabetes(data,token){

    return async()=>{
        try {
            const response=axios.post('api',{
                data:data,
                "Content-type":"multipart/form-data",
                Authorization:`Bearer ${token}`
            })
            console.log(response)
            return response
        
          } catch (error) {
                console.log("Unable to upload data to server")
          }
    }
}

export function calcBMI(data,token){

    return async()=>{
        try{
            const response=axios.post('api',{
                data:data,
                "Content-type":"multipart/form-data",
                Authorization:`Bearer ${token}`
            })
            console.log(response)
            return response
        }catch(error){
            console.log("Unable to calculate BMI")
        }
    }
}
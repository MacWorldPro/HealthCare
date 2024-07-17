import React, { useEffect, useState } from 'react'
import axios from "axios"
import { diet_key } from '../utils';

const Diet = ({predictedValue}) => {

    const [res, setRes] = useState(null);

    let problem=predictedValue===2?("diabetic"):(predictedValue===1?("pre-diabetic"):("healthy"))

    const options = {
        method: 'GET',
        url: 'https://api.spoonacular.com/recipes/complexSearch',
        params: {
          diet: problem,
        },
        headers: {
          'x-api-key': diet_key,
        }
      };

      useEffect(()=>{
        (async()=>{
            try {
                const response = await axios.request(options);
                console.log(response.data);
                setRes(response.data.results)
            } catch (error) {
                console.error(error.message);
            }
      })()
      },[problem])

      console.log("res",res)


  return (
    <div>
        <div className='font-extrabold text-2xl my-10'>
            Recommended Diet Plan
        </div>
        <div className='grid grid-cols-3 gap-5 px-4'>
        {
            res?(
            res.map((food)=>(
                <div>
                <div className='' key={food.id}>
                    <h1 className='font-bold text-xl w-11/12'>{food.title}</h1>
                    <img src={food.image} alt={food.title} className='w-11/12'/>
                </div>
                </div>
            ))):(<p>Loading...</p>)
        }
        </div>
    </div>
  )
}

export default Diet
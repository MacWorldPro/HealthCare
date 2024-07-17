import React, { useEffect, useState } from 'react'
import axios from "axios"
import { workout_key } from '../utils';

const Workout = () => {

  let muscle='biceps';

  const [workouts,setWorkouts]=useState(null)

  const options = {
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/exercises?muscle='+muscle,
    headers:{
      'X-Api-Key':workout_key,
    }
  };

      useEffect((()=>{
        (async()=>{
          try {
            const response = await axios.request(options);
            setWorkouts(response.data)
            console.log(workouts);
          } catch (error) {
            console.error(error);
          }
        })()
      }),[])

  return (
    <div>
        <div className='font-extrabold text-2xl my-10'>
          Recommended Workout Plan
        </div>
        <div className='grid grid-cols-3 gap-5 '>
        {
          workouts?
          (workouts.map((workout,index)=>(
            <div className='flex flex-col' key={index}>
              <div className='text-xl font-bold'>
                {workout.name}
              </div>
              <div>
                Instructions:{workout.instructions}
              </div>
            </div>
          ))):(
            <div>
              Loading...
            </div>
          )
        }
        </div>
    </div>
  )
}

export default Workout
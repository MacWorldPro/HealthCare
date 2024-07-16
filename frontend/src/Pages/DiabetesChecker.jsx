// DiabetesChecker.js
import React from 'react';
import DiabetesForm from "../Components/DiabetesForm";
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from "../Components/Loading"; // A loading component to show while checking auth status

const DiabetesChecker = () => {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
        <DiabetesForm/>
    </div>
  )
}

export default withAuthenticationRequired(DiabetesChecker, {
  onRedirecting: () => <Loading />,
});

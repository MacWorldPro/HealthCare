import React, { useEffect, useState } from "react";
import axios from "axios";
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from "../Components/Loading"; // A loading component to show while checking auth status

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://indian-doctors-and-jaipur-medical-professionals.p.rapidapi.com/doctors/all',
    headers: {
      'x-rapidapi-key': '0a26e6b0a6msh523a6c6ee2762e2p1b1485jsne3044a1afccb',
      'x-rapidapi-host': 'indian-doctors-and-jaipur-medical-professionals.p.rapidapi.com'
    }
  };

  const fetchDoctors = async (retryCount = 0) => {
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 429 && retryCount < 5) {
        // Too many requests, retry after a delay
        const delay = Math.pow(2, retryCount) * 1000; // Exponential backoff
        console.warn(`Retrying in ${delay / 1000} seconds...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        return fetchDoctors(retryCount + 1);
      } else {
        console.error(error);
        throw error;
      }
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchDoctors();
        setDoctors(data);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
      }
    })();
  }, []);

  return (
    <div>
      {doctors.map((doctor, index) => (
        <div key={index}>
          {doctor.map((doc) => (
            <div key={doc.username} className="flex">
              <div>{doc.username}</div>
              <div>{doc.reviewtext}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default withAuthenticationRequired(Doctors, {
  onRedirecting: () => <Loading />,
});

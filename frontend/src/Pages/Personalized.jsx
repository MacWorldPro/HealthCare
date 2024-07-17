import React, { useEffect, useState } from 'react';
import Diet from '../Components/Diet';
import Workout from '../Components/Workout';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from "../Components/Loading"; // A loading component to show while checking auth status

const Personalized = () => {
  const { user, isLoading } = useAuth0();
  const [predictedValue, setPredictedValue] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`/api/user/${user.email}`)
        .then(response => response.json())
        .then(data => {
          if (data.predicted_value) {
            setPredictedValue(data.predicted_value);
          }
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [user]);

  if (isLoading || !user) {
    return <Loading />;
  }

  return (
    <div>
      <Diet predictedValue={predictedValue} />
      <Workout />
      {/* <Medic/> */}
    </div>
  );
};

export default withAuthenticationRequired(Personalized, {
  onRedirecting: () => <Loading />,
});

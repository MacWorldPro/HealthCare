import { useAuth0 } from "@auth0/auth0-react";
import React,{useEffect} from "react";
import axios from 'axios';

const LogoutButton = () => {
  const { logout,user } = useAuth0();
  const name = user.nickname;
const email = user.email;
const pic = user.picture;

const saveHandler = async () => {
    try {
        const config = {
            headers: {
                "Content-type": "application/json",
            },
        };
        await axios.post(
            "http://localhost:8080/api/user",
            {
                name,
                email,
                pic,
            },
            config
        );
    } catch (error) {
        console.log(error);
    }
};
useEffect(()=>{
  saveHandler();

  localStorage.setItem("userInfo", JSON.stringify(user))
  
},[])
  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;
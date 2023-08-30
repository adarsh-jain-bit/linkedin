import React, { useEffect, useState } from "react";
import HomeComponent from "../Components/HomeComponent";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import Loader from "../Components/common/Loader/Index";
const Home = ({ currentUser }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      // console.log(res)
      if (!res?.accessToken) {
        navigate("/");
      } else {
        setLoading(false);
      }
    });
  }, []);
  return loading ? <Loader /> : <HomeComponent currentUser={currentUser} />;
};

export default Home;

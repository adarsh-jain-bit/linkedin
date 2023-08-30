import React, { useEffect, useState } from "react";
import ConnectionsComponent from "../Components/ConnectionsComponents";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseconfig";
import Loader from "../Components/common/Loader/Index";

export default function Connections({ currentUser }) {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/");
      } else {
        setLoading(false);
      }
    });
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <ConnectionsComponent currentUser={currentUser} />
  );
}

import React,{useEffect,useState} from 'react'
import LoginComponent from '../Components/LoginComponent'
import { auth } from "../firebaseconfig";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import Loader from '../Components/common/Loader/Index';
const Login = () => {
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      console.log(res)
     if(res?.accessToken){
      navigate("/home")
     }else{
     setLoading(false)
     }
    })
      },[])
  return  loading ?  <Loader/> : <LoginComponent/>
}

export default Login
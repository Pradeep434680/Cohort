import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

import { ButtonWarning } from "../components/ButtonWarning";
import { useState } from "react";
// import axios from "axios";
import axios from 'axios';
export function Signup()
{
    const navigate = useNavigate();
    const [firstname ,setFirstname] = useState("")
    const [lastname ,setLastname] = useState("")
    const [password ,setPassword] = useState("")
    const [username ,setUsername] = useState("")
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center ">
         <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign up"}/>
            <SubHeading label={"Enter your information to create an account"}/>
            <InputBox 
                onChange={(e) => {setFirstname(e.target.value)}} 
                label="First Name" 
                placeholder="Enter First Name"
                />          
            <InputBox onChange={(e)=>{setLastname(e.target.value)}} label={"Last Name "} placeholder={"Enter Last Name"}/>
            <InputBox onChange={(e)=>{setUsername(e.target.value)}}label={"Email"} placeholder={"Enter your E-mail"}/>
            <InputBox onChange={(e)=>{setPassword(e.target.value)}} label={"Password"} placeholder={"Enter Password"}/>
            <div className="pt-4">
             <Button onClick={async () => {
                const response = await axios.post("http://localhost:8080/api/v1/user/signup", {
              username,
              firstname,
              lastname,
              password
            });
            
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("username", username)

            
            
            
            
            localStorage.setItem("amount", total_amount.data.balance);

            
            navigate("/dashboard")
          }} label={"Sign up"} />
        </div>
        <ButtonWarning label={"Already have an account? " } buttonText={"Sign in"} to={"/signin"} />
        </div>
        </div>
    </div>
}

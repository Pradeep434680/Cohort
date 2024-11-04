// import { ButtonWarning } from "../components/ButtomWarning";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { ButtonWarning } from "../components/ButtonWarning";
import { useNavigate } from "react-router-dom";

export function Signin()
{
     const navigate = useNavigate();        
    return <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                 <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign In"}/>
                <SubHeading label={"Enter your credentials to access your account"} />
                <InputBox label={"Email"} placeholder={"enter your username"}/>
                <InputBox label={"Password"} placeholder={"Enter your password"}/>
                <button onClick={
                () => navigate("/dashboard")
                } type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-3 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-2 me-1.5 mb-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-2.5 p-2 w-full">Sign in</button>
                <ButtonWarning label={"Don't have an account?"} to={'/signup'} buttonText={"sign up"}/>
            </div>

        </div>

    </div>
}
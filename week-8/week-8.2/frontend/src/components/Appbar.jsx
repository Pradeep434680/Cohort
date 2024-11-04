import { Profile } from "./Profile";

export function Appbar()
{
    const username = localStorage.getItem("username") || "User";

    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
            PayTM App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
               <a href="http://localhost:5173/signup">Sign up</a>
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200  flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    <button onClick={
                        ()=>{
                            <div className="flex text-center bg-red-100 w-20 h-10">

                            </div>
                        }
                    }>{username[0].toUpperCase()}</button>
                </div>
            </div>
        </div>
    </div>
}
import { useState } from "react"
import { FaUserDoctor } from "react-icons/fa6";
import { Link } from "react-router";

export function Login(){
    const [mode, setMode]= useState("Login")
    return(

        <div className="bg-[#e8f1ff]">
            <div className=" m-20 flex flex-col gap-5 items-center  border-2 border-gray-300 rounded-lg p-5">
                <div className="flex justify-center items-center text-center gap-5">
                    <FaUserDoctor className="text-3xl text-blue-600" />
                    <h1 className="text-2xl text-blue-600 font-bold">DocTime</h1>
                </div>
                <div className="py-2 px-5 bg-gray-200 rounded-2xl flex gap-20">
                    <button onClick={()=>setMode('Login')}>Sign in</button>
                    <button onClick={()=>setMode('Register')}>Sign up</button>
                </div>

                {mode==="Login" && (
                    <div>
                        <form action="">
                            <div>
                                <label htmlFor="Email">Email:</label>
                                <input type="email" placeholder="exemple@email.com" />
                            </div>

                            <div>
                                <label htmlFor="Password">Password</label>
                                <input type="password" name="password" id="password" />
                            </div>

                            <button className="">Sign in</button>
                        </form>

                        <span>No account? 
                            <Link to="" onClick={()=>setMode('Redistration')}>Sign in</Link>
                        </span>
                    </div>
                )}
            </div>
            
        </div>
    )
}
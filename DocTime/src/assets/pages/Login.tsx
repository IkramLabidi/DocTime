import { useState } from "react"
import { FaUserDoctor } from "react-icons/fa6";
import { Link } from "react-router";

export function Login(){
    const [mode, setMode]= useState("Login")
    return(
        <div className="min-h-screen bg-[#f0f7ff] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-md flex flex-col items-center gap-8 py-12 px-8 md:px-12 transition-all duration-300">

                <div className="flex flex-col gap-3 items-center">
                    <FaUserDoctor className="text-4xl text-blue-600" />
                    <h1 className="text-3xl text-blue-700 font-extrabold tracking-tight">DocTime</h1>
                    <p className="text-gray-500 text-sm font-medium">Your Health, Our Priority</p>
                </div>

                <div className="relative flex items-center bg-gray-100/80 border border-gray-200 rounded-xl p-1.5 gap-1 shadow-inner w-full">
                    <div
                        className={`absolute top-1.5 bottom-1.5 rounded-lg bg-white shadow-sm transition-all duration-300 ease-in-out`}
                        style={{
                            width: "calc(50% - 6px)",
                            left: mode === "Login" ? "6px" : "calc(50%)",
                        }}
                    />

                    <button
                        onClick={() => setMode("Login")}
                        className={`realtive z-10 flex-1 py-2.5 rounded-lg text-sm font-bold duration-300 cursor-pointer
                            ${mode === "Login" ? "text-blue-600" : "text-gray-500"}`}
                    >
                        Sign in
                    </button>

                    <button
                        onClick={() => setMode("Register")}
                        className={`relative z-10 flex-1 py-2.5 rounded-lg text-sm font-bold duration-300 cursor-pointer
                            ${mode === "Register" ? "text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
                    >
                        Sign up
                    </button>
                </div>

                <div className="w-full">
                    {mode === "Login" ? (
                        <div className="flex flex-col gap-6 transition-all duration-300">
                            <form action="Login" className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-sm font-bold text-gray-700 ml-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="name@example.com"
                                        className="bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between items-center ml-1">
                                        <label htmlFor="Password" className="text-sm font-bold text-gray-700">Password</label>
                                        <Link to="" className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors">Forgot Password?</Link>
                                    </div>
                                    <input
                                        type="password"
                                        name="Password"
                                        id="Password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
                                    />
                                </div>

                                <button className="mt-2 bg-blue-600 text-white font-bold w-full py-3.5 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all cursor-pointer">
                                    Sign in
                                </button>
                            </form>

                            <div className="text-center text-sm">
                                <span className="text-gray-500 font-medium">No Account? </span>
                                <button
                                    onClick={() => setMode("Register")}
                                    className="text-blue-600 font-bold hover:text-blue-700 transition-colors cursor-pointer ml-1"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-6 transition-all duration-300">
                            <form className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="reg-name" className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="reg-name"
                                        placeholder="John Doe"
                                        className="bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="reg-email" className="text-sm font-bold text-gray-700 ml-1">Email</label>
                                    <input
                                        type="email"
                                        id="reg-email"
                                        placeholder="name@example.com"
                                        className="bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="reg-password" className="text-sm font-bold text-gray-700 ml-1">Password</label>
                                    <input
                                        type="password"
                                        id="reg-password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-gray-400"
                                    />
                                </div>

                                <button className="mt-2 bg-blue-600 text-white font-bold w-full py-3.5 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all cursor-pointer">
                                    Create Account
                                </button>
                            </form>

                            <div className="text-center text-sm">
                                <span className="text-gray-500 font-medium">Already have an account? </span>
                                <button
                                    onClick={() => setMode("Login")}
                                    className="text-blue-600 font-bold hover:text-blue-700 transition-colors cursor-pointer ml-1"
                                >
                                    Sign In
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>

        
    )
}
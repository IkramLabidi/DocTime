import {History} from "../components/about/history";
import { Values } from "../components/about/values";
import { Comments } from "../components/about/comments";

export function About(){
    return (
        <div className="flex flex-col ">
            <div className="bg-[#e8f1ff] py-12 px-6 md:px-12 w-full space-y-4">
                <h1 className="font-bold text-5xl text-blue-600">About <span className="text-gray-900">DocTime</span></h1>
                <p className="text-lg md:text-xl text-gray-500">Your trusted health partner for simplified access to medical care.</p>
            </div>
            <History />
            <Values/>
            <Comments/>
        </div>
    )
}
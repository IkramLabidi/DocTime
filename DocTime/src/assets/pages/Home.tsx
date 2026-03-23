import { Header } from "../components/home/header";
import { Specialities } from "../components/home/specialities";
import { Questions } from "../components/home/questions";

export function Home(){
    return (
        <div className="flex flex-col ">
            <Header />
            <Specialities/>
            <Questions/>
        </div>
    )
}
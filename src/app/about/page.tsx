import Values from "../components/about/Values";
import Story from "../components/about/Story";
import Team from "../components/about/Team";

export default function About(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 w-screen min-h-screen bg-black bg-opacity-40">
            <Story />
            <Values />
            <Team />
        </div>
    )
}
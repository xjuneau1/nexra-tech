import Values from "../components/about/Values";
import Story from "../components/about/Story";
import Team from "../components/about/Team";
import PageBreak from "../components/about/PageBreak";

export default function About(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto w-screen min-h-screen bg-black/70 bg-cover">
            <Story />
            <Values />
            <Team />
        </div>
    )
}
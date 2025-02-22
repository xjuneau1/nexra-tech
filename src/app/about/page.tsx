import Mission from "../components/about/Mission";
import Story from "../components/about/Story";
import Team from "../components/about/Team";

export default function About(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-3 w-screen min-h-screen">
            <Story />
            <Mission />
            <Team />
        </div>
    )
}
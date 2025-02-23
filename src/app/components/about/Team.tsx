import Image from "next/image";
import teams from "../../../../public/team.json";
import PageBreak from "./PageBreak";

export default function Team() {
  return (
    <div className="col-span-2 mt-36">
      <PageBreak />
      <h2 className="text-5xl text-center font-bold text-[#f1c40f] tracking-wide [text-shadow:_1px_3px_1px_rgb(0_0_0_/_40%)] pt-12">Meet the Team</h2>
      <div className="flex flex-col items-center">
        {teams.map((team, index) => (
          <div key={index} className="w-full md:w-11/12 text-white md:rounded-xl my-8 p-4">
            <div className="text-3xl text-center font-bold [text-shadow:_1px_3px_1px_rgb(0_0_0_/_40%)] my-4">{team.teamName}</div>
            <div className="flex flex-col md:flex-row md:flex-wrap">
              {team.members.map((member) => (
                <div key={member.name} className="flex flex-col w-full justify-center items-center md:w-5/12 border rounded-xl p-4 py-16 my-8 mx-auto backdrop-blur-sm">
                  <Image src={member.img} alt="" width={200} height={200} className="rounded-md" />
                  <h2 className="text-[#a29bfe] text-2xl font-bold">{member.name}</h2>
                  <p className="text-[#ff6b6b] font-semibold">{member.role}</p>
                  <p className="text-center">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

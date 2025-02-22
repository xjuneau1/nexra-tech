import team from "../../../../public/team.json";

export default function Team() {
  return (
    <div className="text-white">
      <div className="">
        {team.map((team) => (
          <div className="p-4">
            <div>{team.teamName}</div>
            <div>
              {team.members.map((member) => (
                <div>{member.name}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

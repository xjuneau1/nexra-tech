export default function Services() {
  const services = [
    {
      name: "Bespoke solutions tailored to business needs.",
      info: [
        "Web & mobile development, UI/UX design.",
        "Cloud Infrastructure & DevOps",
      ],
    },
    {
      name: "Cloud migration, serverless architecture, and cost optimization.",
      info: [
        "CI/CD pipelines, Kubernetes, and automation.",
        "Cybersecurity & Compliance",
      ],
    },
    {
        name: "Security audits, penetration testing, and risk assessments.",
        info: [
          "Compliance support for GDPR, HIPAA, and ISO standards.",
          "AI & Automation Solutions",
        ],
      },
      {
        name: " AI-powered analytics, chatbots, and process automation.",
        info: [
          "Machine learning and predictive modeling.",
          "IT Consulting & Managed Services",
          "Strategy planning, system integration, and dedicated IT support."
        ],
      },
  ];
 
  
  
  return (
    <div className="col-span-2 p-2 my-16 md:p-32">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 w-full h-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col w-full justify-center items-center 
            col-span-1 
            bg-white border rounded-lg
            p-12
            bg-gradient-to-br from-[#1a1a40] to-[#3a0ca3] border border-[#2a2a70] 
            text-white
            "
          >
            <h2 className="font-semibold text-2xl font-bold text-[#a29bfe] text-center mb-4">{service.name}</h2>
            <ul className="list-disc">
            {service.info.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

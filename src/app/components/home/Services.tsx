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
    <div className="col-span-2 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-2 w-full h-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col w-full justify-center items-center 
            col-span-1 
            bg-white border rounded-lg
            p-8
            "
          >
            <h2>{service.name}</h2>
            {service.info.map((info, index) => (
              <p key={index}>{info}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

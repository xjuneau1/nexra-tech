export default function Values() {
  const values = [
    {
      name: "Innovation at the Core",
      desc: "Technology evolves rapidly, and so do we. At Nexra, we push the boundaries of AI-driven automation, cloud computing, and cybersecurity to develop future-ready solutions. Our commitment to continuous improvement and forward-thinking strategies enables businesses to stay ahead of the competition and achieve sustainable growth.",
    },
    {
      name: "Security & Trust",
      desc: "In an increasingly digital world, data security and privacy are more critical than ever. We implement robust, enterprise-grade security measures to protect sensitive information and ensure compliance with the latest industry standards. Trust and transparency are at the heart of everything we do, ensuring our clients can operate with confidence.",
    },
    {
      name: "Driving Business Success",
      desc: "Technology should be a growth enabler, not a barrier. Our goal is to deliver scalable, intelligent solutions that optimize efficiency, enhance productivity, and unlock new opportunities for businesses of all sizes. We take a collaborative approach, working closely with clients to align technology with their unique goals and long-term vision.",
    },
  ];
  return (
    <div
  className="col-span-2"
>
  {/* Content Container */}
  <div className="flex flex-col items-center justify-center max-w-4xl mx-auto mt-16 p-2">
    {/* Section Title */}
    <h2 className="text-5xl font-bold text-[#f1c40f] tracking-wide [text-shadow:_1px_3px_1px_rgb(0_0_0_/_40%)]">
      Our Values
    </h2>

    {/* Values Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
      {values.map((value) => (
        <div
          key={value.name}
          className="relative text-center p-6 rounded-xl border border-[#a29bfe] shadow-[0_0_15px_rgba(162,155,254,0.3)] backdrop-blur-sm bg-black/40"
        >
          {/* Value Title */}
          <h3 className="text-xl font-semibold text-[#a29bfe] mb-2">
            {value.name}
          </h3>

          {/* Description */}
          <p className="text-white text-sm leading-relaxed">{value.desc}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}

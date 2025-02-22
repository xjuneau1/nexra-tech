export default function About() {
  return (
    <div className="col-span-2 mt-16">
      <div
        className="relative bg-cover bg-center py-32"
        style={{ backgroundImage: "url('/about-bg.png')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-6">
          {/* Section Title */}
          <h2 className="text-5xl font-bold text-[#a29bfe]">Our Story</h2>
          <p className="mt-4 text-lg leading-relaxed">
            Nexra Tech was founded by a team of visionary engineers with a
            shared passion for innovation and technology-driven growth. With
            decades of combined expertise in software development, artificial
            intelligence, and cloud computing, we set out to bridge the gap
            between cutting-edge solutions and real-world business challenges.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="text-5xl font-bold text-[#a29bfe]">500+</h3>
              <p className="text-lg">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#ff6b6b]">20+</h3>
              <p className="text-lg">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-[#f1c40f]">10,000+</h3>
              <p className="text-lg">Clients Impacted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

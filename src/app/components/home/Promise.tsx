export default function Promise() {
  return (
    <div className="col-span-2 mt-16">
      <div
        className="relative bg-cover bg-center py-32"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-6">
          {/* Section Title */}
          <h2 className="text-5xl font-bold text-[#a29bfe]">Our Promise</h2>
          <p className="mt-4 text-xl md:text-2xl font-semibold">
            At Nexra, we are committed to delivering <span className="text-[#f1c40f]">cutting-edge technology
            solutions</span> that empower businesses to succeed. Our team of experts
            work tirelessly to ensure that every product and service we offer
            is innovative, reliable, and tailored to meet real-world business
            needs. We prioritize performance, security, and seamless
            integration, so our clients can focus on what matters most—growth
            and success. With Nexra, you’re not just getting technology; you’re
            getting a partner dedicated to helping you thrive in the digital
            era.
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

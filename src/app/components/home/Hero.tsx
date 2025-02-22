export default function Hero() {
  return (
    <div className="col-span-2 relative min-h-[400px] sm:min-h-[400px] md:min-h-[500px] mt-16">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: "url('/wave-shape.svg')" }}
      ></div>

      {/* Site Name: Positioned at the top-left */}
      <div className="absolute top-6 left-6 text-white text-4xl sm:text-5xl md:text-6xl font-bold">
      <img src="/logo.svg" width={500} height={300} alt="Nexora Tech Logo" />
      </div>

      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center h-full w-full text-white text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Empowering Business
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-4">
          Transform your operations with cutting-edge technology
        </p>
        <button className="border rounded-lg px-4 py-2">
          Get a Free Consultation
        </button>
      </div>
    </div>
  );
}

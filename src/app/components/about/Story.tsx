import Image from "next/image";

export default function Story() {
  return (
    <div className="col-span-2 relative">
      {/* Background with Gradient Overlay */}
      <div className="relative bg-cover bg-center bg-black/70 pt-36 p-2 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2a] to-black opacity-80 "></div>

        {/* Content Container */}
        <div className="relative flex flex-col md:flex-row items-center justify-center rounded-xl ">
          <div className="flex flex-col">
            <h2 className="block md:hidden text-5xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a29bfe] to-[#ffffff] ">
              Our Story
            </h2>

            <div className="flex flex-col-reverse md:flex-row justify-center items-center ">
              <div className="flex flex-col p-4">
                <h2 className="hidden md:block text-5xl text-center pb-8 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#a29bfe] to-[#ffffff] ">
                  Our Story
                </h2>
                <p className="text-lg text-white text-center max-w-3xl leading-relaxed">
                  From AI-driven automation that enhances operational efficiency
                  to seamless cloud solutions that ensure scalability and
                  security, Nexra empowers businesses to thrive in the digital
                  age. Our mission is to redefine industries by delivering
                  customized, high-performance technology solutions that drive
                  growth, optimize workflows, and create lasting impact.
                </p>

                <p className="text-lg text-white text-center max-w-3xl mt-4 leading-relaxed">
                  At Nexra, we believe that technology should not only solve
                  problems but also unlock new opportunities. That’s why we
                  partner with businesses of all sizes, helping them navigate
                  the ever-evolving digital landscape with confidence and
                  agility. Whether it’s modernizing legacy systems, integrating
                  AI for smarter decision-making, or building scalable digital
                  infrastructures, we are committed to pushing boundaries and
                  shaping the future of innovation.
                </p>
              </div>
              <Image
                src={"/NEXRA.webp"}
                alt=""
                width={400}
                height={400}
                className="rounded-2xl my-8 md:mx-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//

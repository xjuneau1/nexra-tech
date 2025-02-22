import Image from "next/image";

export default function Intro() {
  return (
    <div className="col-span-1 sm:col-span-1 md:col-span-2 flex justify-center items-start min-h-max my-24 md:my-36 md:px-16 p-2">
      <div className="flex flex-col-reverse md:flex-row items-center p-4 md:p-8 bg-gradient-to-br from-[#1a1a40] to-[#3a0ca3] text-white rounded-2xl shadow-lg w-full">
        <div className="p-8">
        <h2 className="text-5xl font-bold mb-4 text-[#a29bfe]">Nexra Tech</h2>
        <p className="text-lg leading-relaxed">
          At <span className="font-semibold text-[#ff6b6b]">Nexra Tech</span>,
          we empower businesses with cutting-edge technology solutions. Our
          mission is to bridge the gap between innovation and efficiency,
          providing tailored digital services that drive growth, optimize
          operations, and enhance customer experiences. With expertise in
          **software development, cloud integration, and AI-driven solutions**,
          we help businesses stay ahead in an ever-evolving digital landscape.
        </p>
        </div>
        <Image src={"/work_code.webp"} alt="" width={400} height={400}  className="my-8 rounded-xl"/>
      </div>
    </div>
  );
}

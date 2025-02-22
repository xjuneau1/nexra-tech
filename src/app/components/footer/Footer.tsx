export default function Footer() {
  const links = ["Home", "About", "Services", "Contact", "FAQ"];
  const handleGetHref = (link: string) => {
    if (link === "Home") {
      return "/";
    } else {
      return link.toLowerCase()
    }
  };
  return (
    <div className="col-span-2 w-full h-full">
      <footer className="bg-gradient-to-r from-[#0a0f1f] to-[#1a1f36] text-white py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo & Description */}
          <div>
          <img src="/logo.svg" width={500} height={300} alt="Nexora Tech Logo" />
            <p className="text-gray-400 mt-2">
              Innovating the future with AI-driven solutions and cutting-edge
              technology.
            </p>
          </div>

          {/* Quick Links */}
          <ul
        className="flex flex-col w-full items-center"> <div className="text-xl font-semibold text-blue-400">Quick Links</div> 
        {links.map((link, index) => (
          <li key={index} className="text-gray-400 mt-2 text-center">
            <a href={handleGetHref(link)} className="">
              {link}
            </a>
          </li>
        ))}
      </ul>

          {/* Social Media & Contact */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400">
              Connect with Us
            </h3>
            <p className="text-gray-400 mt-3">contact@nexra.com</p>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-purple-800 mt-8 opacity-50"></div>

        {/* Copyright */}
        <p className="text-center text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} Nexra Tech. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default function Footer() {
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
          <div>
            <h3 className="text-xl font-semibold text-blue-400">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#" className="hover:text-purple-300 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div>
            <h3 className="text-xl font-semibold text-blue-400">
              Connect with Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a href="#" className="hover:text-purple-300 transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-purple-300 transition">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="hover:text-purple-300 transition">
                <i className="fab fa-github"></i>
              </a>
            </div>
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

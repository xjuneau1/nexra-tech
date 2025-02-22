interface NavlinksProps {
    links: string[];
    isMenuOpen: boolean;
    handleGetHref: Function
  }
  
  const Navlinks: React.FC<NavlinksProps> = ({ links, isMenuOpen, handleGetHref }) => {
    
    return (
        <ul
        className={`md:hidden bg-gray-800 transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {links.map((link, index) => (
          <li key={index} className="text-white text-center">
            <a href={handleGetHref(link)} className="block p-4">
              {link}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Navlinks;
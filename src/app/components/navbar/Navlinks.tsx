interface NavlinksProps {
    links: string[];
    isMenuOpen: boolean;
  }
  
  const Navlinks: React.FC<NavlinksProps> = ({ links, isMenuOpen }) => {
    const handleGetHref = (link: string) => {
      if (link === "Home") {
        return "/";
      } else {
        return link.toLowerCase()
      }
    };
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
    //   <ul className="flex flex-col md:flex-row items-center justify-center w-full p-8">
    //     {links.map((link, index) => {
    //       return (
    //         <li key={index} className="text-white mx-4">
    //           <a href={handleGetHref(link)} className="block p-2">{link}</a>
    //         </li>
    //       );
    //     })}
    //   </ul>
    );
  };
  
  export default Navlinks;
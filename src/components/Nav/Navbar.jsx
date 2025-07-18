import  { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../../assets/logo.jpg"
import "./Nav.css";

const NavbarHook = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navStructure = {
    main: [
      { name: "About Us", scroll: "about" },
      { name: "Projects", to: "/projects" },
      { name: "Team", to: "/team" },
      { name: "Gallery", to: "/gallery" },
      { name: "Contact", scroll: "contact" }
    ],
    resources: [
      { name: "Syllabus", to: "/syllabuses" },
      { name: "Blogs/Articles", to: "/blogs" },
      { name: "Chronicle", to: "/chronicle" }
    ],
    volunteer: [
      { name: "Blood Portal", to: "/donar" },
      { name: "Register as Volunteer", to: "/volunteer" },
      { name: "Certificate", to: "/certificate" }
    ]
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const renderNavLink = ({ name, to, scroll }) => (
    <NavLink
      to={to || ""}
      className="nav-link px-4 py-2 text-gray-700 hover:text-red-500 transition-colors duration-200"
      onClick={() => {
        if (scroll) {
          scrollToSection(scroll);
        } else {
          setIsMenuOpen(false);
        }
      }}
    >
      {name}
    </NavLink>
  );

  const renderDropdown = (title, items) => (
    <div className="relative group dropdown-container">
      <button
        className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-red-500 transition-colors duration-200"
      >
        {title}
        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
      </button>
      
      <div className="dropdown-menu absolute left-0 top-full min-w-[200px] bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 origin-top opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100">
        {items.map((item, idx) => (
          <div key={idx} className="w-full">
            {renderNavLink(item)}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          </NavLink>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navStructure.main.map((item, idx) => (
              <div key={idx}>{renderNavLink(item)}</div>
            ))}
            {renderDropdown("Get Involved", navStructure.volunteer)}
            {renderDropdown("Resources", navStructure.resources)}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            lg:hidden fixed inset-0 bg-white
            transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex flex-col p-4 space-y-4">
            <div className="flex justify-end">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <X size={24} />
              </button>
            </div>
            
            {navStructure.main.map((item, idx) => (
              <div key={idx} className="py-2">
                {renderNavLink(item)}
              </div>
            ))}
            
            <div className="border-t pt-4">
              <div className="text-sm font-semibold text-gray-500 mb-2">Resources</div>
              {navStructure.resources.map((item, idx) => (
                <div key={idx} className="py-2">
                  {renderNavLink(item)}
                </div>
              ))}
            </div>
            
            <div className="border-t pt-4">
              <div className="text-sm font-semibold text-gray-500 mb-2">Get Involved</div>
              {navStructure.volunteer.map((item, idx) => (
                <div key={idx} className="py-2">
                  {renderNavLink(item)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarHook;
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { Menu, X } from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const navItems = [
    { path: '/admin/dashboard', label: 'Dashboard' },
    { path: '/admin/add-project', label: 'Add Project' },
    { path: '/admin/add-syllabus', label: 'Add Syllabus' },
    { path: '/admin/add-blog', label: 'Add Blogs' },
    { path: '/admin/add-chronicle', label: 'Add Chronicle' },
    { path: '/admin/Blood', label: 'Blood Management' },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Menu Button - Only visible when sidebar is closed */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="lg:hidden fixed top-32 -left-4 z-40 p-2 rounded-md bg-white shadow-md"
          aria-label="Open menu"
        >
          <Menu size={24} className="text-[#E74646]" />
        </button>
      )}

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:relative top-0 left-0 h-screen bg-white
          w-[280px] transform transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0 z-50' : '-translate-x-full lg:translate-x-0 lg:z-0'}
          lg:shadow-none border-r border-gray-200
        `}
      >
        <div className="flex flex-col h-full p-6 relative">
          {/* Close button - Only visible in mobile when sidebar is open */}
          {isOpen && (
            <button 
              onClick={() => setIsOpen(false)}
              className="lg:hidden absolute top-16 right-2 p-2 rounded-md hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X size={24} className="text-[#E74646]" />
            </button>
          )}

          {/* Logo Section */}
          <div className="mb-12 mt-16">
            <h2 className="text-4xl font-bold">
              UD<span className="text-[#E74646]">DESH</span>YA
            </h2>
          </div>

          {/* Navigation Section */}
          <nav className="space-y-4">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`
                  w-full text-left px-4 py-3 rounded-md font-medium
                  transition-all duration-200 ease-in-out
                  ${location.pathname === item.path 
                    ? 'bg-[#E74646] text-white hover:bg-[#d63e3e]' 
                    : 'text-gray-700 hover:bg-gray-50'}
                `}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Logout Section */}
          <button
            onClick={handleLogout}
            className="mt-10 w-full  px-4 py-3 border-2 border-[#E74646] text-[#E74646] rounded-md font-medium 
                     hover:bg-[#E74646] hover:text-white transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Sidebar;
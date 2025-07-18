import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import Sidebar from './Sidebar';
import AddSyllabus from './AddSyllabus';

const Project = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/admin-login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl font-medium text-[#E74646]">Loading...</div>
      </div>
    );
  }

  return user ? (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <AddSyllabus />
    </div>
  ) : null;
};

export default Project;
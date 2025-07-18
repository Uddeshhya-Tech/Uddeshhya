import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../firebase';
import Sidebar from './Sidebar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PencilIcon, TrashIcon, PlusIcon } from 'lucide-react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const QuillContentRenderer = ({ content }) => {
  if (!content) return null;
  const sanitizedContent = DOMPurify.sanitize(content);
  return (
    <div 
      className="quill-content text-gray-600 text-sm"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};

QuillContentRenderer.propTypes = {
  content: PropTypes.string.isRequired,
};

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [syllabuses, setSyllabuses] = useState([]);
  const [chronicles, setChronicles] = useState([]);
  const [activeTab, setActiveTab] = useState('projects'); // 'projects', 'syllabuses', 'blogs', or 'chronicles'
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Fetch blogs from Firebase
  const fetchBlogs = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      const blogsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBlogs(blogsData);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      toast.error('Failed to load blogs');
    }
  };

  // Fetch projects from Firebase
  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      const projectsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProjects(projectsData);
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast.error('Failed to load projects');
    }
  };

  // Fetch syllabuses from Firebase
  const fetchSyllabuses = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'syllabus'));
      const syllabusesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setSyllabuses(syllabusesData);
    } catch (error) {
      console.error('Error fetching syllabuses:', error);
      toast.error('Failed to load syllabuses');
    }
  };

  // Fetch chronicles from Firebase
  const fetchChronicles = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'chronicles'));
      const chroniclesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setChronicles(chroniclesData);
    } catch (error) {
      console.error('Error fetching chronicles:', error);
      toast.error('Failed to load chronicles');
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        fetchProjects();
        fetchBlogs();
        fetchSyllabuses();
        fetchChronicles();
      } else {
        navigate('/admin-login');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleDelete = async (id, type) => {
    toast.info(
      <div>
        <p>Are you sure you want to delete this {type}?</p>
        <div className="flex justify-end gap-2 mt-2">
          <button
            onClick={() => {
              toast.dismiss();
              deleteItem(id, type);
            }}
            className="px-3 py-1 bg-red-500 text-white rounded-md"
          >
            Yes
          </button>
          <button
            onClick={() => toast.dismiss()}
            className="px-3 py-1 bg-gray-500 text-white rounded-md"
          >
            No
          </button>
        </div>
      </div>,
      {
        autoClose: false,
        closeButton: false,
        position: "top-center",
      }
    );
  };

  const deleteItem = async (id, type) => {
    try {
      const collectionName = 
        type === 'project' ? 'projects' : 
        type === 'blog' ? 'blogs' : 
        type === 'chronicle' ? 'chronicles' : 'syllabus';
      
      await deleteDoc(doc(db, collectionName, id));
      
      if (type === 'project') {
        setProjects(projects.filter(project => project.id !== id));
      } else if (type === 'blog') {
        setBlogs(blogs.filter(blog => blog.id !== id));
      } else if (type === 'chronicle') {
        setChronicles(chronicles.filter(chronicle => chronicle.id !== id));
      } else {
        setSyllabuses(syllabuses.filter(syllabus => syllabus.id !== id));
      }
      
      toast.success(`${type} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting ${type}:`, error);
      toast.error(`Failed to delete ${type}`);
    }
  };

  const handleEdit = (id, type) => {
    navigate(
      type === 'project' 
        ? `/admin/edit-project/${id}` 
        : type === 'blog'
        ? `/admin/edit-blog/${id}`
        : type === 'chronicle'
        ? `/admin/edit-chronicle/${id}`
        : `/admin/edit-syllabus/${id}`
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl font-medium text-[#E74646]">Loading...</div>
      </div>
    );
  }

  // Helper function to get title for the active tab
  const getActiveTabTitle = () => {
    switch(activeTab) {
      case 'projects': return 'Projects';
      case 'syllabuses': return 'Syllabuses';
      case 'blogs': return 'Blogs';
      case 'chronicles': return 'Chronicles';
      default: return '';
    }
  };

  // Helper function to get add route for the active tab
  const getAddRoute = () => {
    switch(activeTab) {
      case 'projects': return '/admin/add-project';
      case 'syllabuses': return '/admin/add-syllabus';
      case 'blogs': return '/admin/add-blog';
      case 'chronicles': return '/admin/add-chronicle';
      default: return '';
    }
  };

  return user ? (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <ToastContainer />
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <div className="flex-1 p-4 lg:p-8 bg-gray-50">
        <div className="max-w-7xl mx-auto pt-16 lg:pt-20">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'projects' 
                  ? 'bg-[#E74646] text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Manage Projects
            </button>
            <button
              onClick={() => setActiveTab('syllabuses')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'syllabuses' 
                  ? 'bg-[#E74646] text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Manage Syllabus
            </button>
            <button
              onClick={() => setActiveTab('blogs')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'blogs' 
                  ? 'bg-[#E74646] text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Manage Blogs
            </button>
            <button
              onClick={() => setActiveTab('chronicles')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'chronicles' 
                  ? 'bg-[#E74646] text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Manage Chronicles
            </button>
          </div>

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl lg:text-4xl font-bold">
              Manage <span className="text-[#E74646]">
                {getActiveTabTitle()}
              </span>
            </h2>
            <button
              onClick={() => navigate(getAddRoute())}
              className="flex items-center gap-2 px-4 py-2 bg-[#E74646] text-white rounded-md hover:bg-[#d63e3e] transition-colors"
            >
              <PlusIcon size={20} />
              Add {activeTab === 'projects' ? 'Project' : 
                   activeTab === 'blogs' ? 'Blog' : 
                   activeTab === 'chronicles' ? 'Chronicle' : 'Syllabus'}
            </button>
          </div>

          {/* Content for Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-3xl p-4 md:p-6 shadow-md shadow-gray-300 bg-custom-gradient h-[391px] flex flex-col"
                >
                  <div className="relative">
                    <img
                      src={project.imageUrl}
                      className="w-full h-[140px] object-cover rounded-lg"
                      alt={project.title}
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <button
                        onClick={() => handleEdit(project.id, 'project')}
                        className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                      >
                        <PencilIcon size={16} className="text-[#E74646]" />
                      </button>
                      <button
                        onClick={() => handleDelete(project.id, 'project')}
                        className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                      >
                        <TrashIcon size={16} className="text-[#E74646]" />
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h1 className="text-[#E74646] my-2 font-bold">
                      {project.title.toUpperCase()}
                    </h1>
                    <div className="max-h-[180px] overflow-hidden">
                      <QuillContentRenderer content={project.content} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Content for Syllabuses Tab */}
          {activeTab === 'syllabuses' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {syllabuses.map((syllabus) => (
                <div
                  key={syllabus.id}
                  className="bg-white rounded-3xl p-4 md:p-6 shadow-md shadow-gray-300 bg-custom-gradient flex flex-col"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h1 className="text-[#E74646] font-bold text-lg">
                      {syllabus.title}
                    </h1>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(syllabus.id, 'syllabus')}
                        className="p-2 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition-colors"
                      >
                        <PencilIcon size={16} className="text-[#E74646]" />
                      </button>
                      <button
                        onClick={() => handleDelete(syllabus.id, 'syllabus')}
                        className="p-2 bg-gray-100 rounded-full shadow-md hover:bg-gray-200 transition-colors"
                      >
                        <TrashIcon size={16} className="text-[#E74646]" />
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="max-h-[200px] overflow-hidden">
                      <QuillContentRenderer content={syllabus.description} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Content for Blogs Tab */}
          {activeTab === 'blogs' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-3xl p-4 md:p-6 shadow-md shadow-gray-300 bg-custom-gradient h-[391px] flex flex-col"
                >
                  <div className="relative">
                    <img
                      src={blog.imageUrl}
                      className="w-full h-[140px] object-cover rounded-lg"
                      alt={blog.title}
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <button
                        onClick={() => handleEdit(blog.id, 'blog')}
                        className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                      >
                        <PencilIcon size={16} className="text-[#E74646]" />
                      </button>
                      <button
                        onClick={() => handleDelete(blog.id, 'blog')}
                        className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                      >
                        <TrashIcon size={16} className="text-[#E74646]" />
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="flex items-center justify-between my-2">
                      <h1 className="text-[#E74646] font-bold">
                        {blog.title.toUpperCase()}
                      </h1>
                      <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        {blog.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{blog.excerpt}</p>
                    <div className="max-h-[120px] overflow-hidden">
                      <QuillContentRenderer content={blog.content} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Content for Chronicles Tab */}
          {activeTab === 'chronicles' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {chronicles.map((chronicle) => (
                <div
                  key={chronicle.id}
                  className="bg-white rounded-3xl p-4 md:p-6 shadow-md shadow-gray-300 bg-custom-gradient h-[340px] flex flex-col"
                >
                  <div className="relative">
                    <img
                      src={chronicle.imageUrl}
                      className="w-full h-[200px] object-cover rounded-lg"
                      alt={`${chronicle.month} ${chronicle.year}`}
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      <button
                        onClick={() => handleEdit(chronicle.id, 'chronicle')}
                        className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                      >
                        <PencilIcon size={16} className="text-[#E74646]" />
                      </button>
                      <button
                        onClick={() => handleDelete(chronicle.id, 'chronicle')}
                        className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                      >
                        <TrashIcon size={16} className="text-[#E74646]" />
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 mt-4">
                    <div className="flex justify-between items-center">
                      <h1 className="text-[#E74646] font-bold text-lg">
                        {chronicle.month} {chronicle.year}
                      </h1>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {chronicle.month} {chronicle.year}
                      </span>
                    </div>
                    {chronicle.title && (
                      <h2 className="text-gray-700 font-medium mt-2">
                        {chronicle.title}
                      </h2>
                    )}
                    {chronicle.description && (
                      <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                        {chronicle.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          
        </div>
      </div>
    </div>
  ) : null;
};

export default AdminDashboard;
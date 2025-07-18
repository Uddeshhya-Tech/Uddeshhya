import { lazy, Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db } from './firebase.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

// Regular Components
import Nav from "./components/Nav/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import RecruitmentResult from "./components/RecruitmentResult/RecruitmentResult.jsx";
import Login from "./components/Admin/Login.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";
import Projects from "./components/Admin/Project.jsx";
import Chronicle from "./components/Chronicle.jsx";
import Blood from "./components/Admin/BloodDash.jsx";
import AddChronicle from "./components/Admin/Chronicle.jsx";
import EditChronicle from "./components/Admin/EditChronicle.jsx";
import EditProject from "./components/Admin/EditProject.jsx";
import Syllabus from "./components/Syllabus.jsx";
import DetailSyllabus from "./components/DetailSyllabus.jsx";
import AddBlog from "./components/Admin/Blog.jsx";
import BlogDes from "./components/Blogdes.jsx";
import EditBlog from "./components/Admin/EditBlogs.jsx";
import AddSyllabus from "./components/Admin/Syllabus.jsx";
import UpdateSyllabus from "./components/Admin/UpdateSyllabus.jsx";

// Lazy Loaded Components
const Home = lazy(() => import("./pages/Home.jsx"));
const Team = lazy(() => import("./pages/Team.jsx"));
const Project = lazy(() => import("./pages/Projects.jsx"));
const Bloggg = lazy(() => import("./pages/Blogs.jsx"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails.jsx"));
const Donar = lazy(() => import("./pages/Donar.jsx"));
const Volunteer = lazy(() => import("./pages/Registerasvolunteer.jsx"));
const Gallery = lazy(() => import("./pages/Gallery.jsx"));
const Certificate = lazy(() => import("./components/Certificate/Certificate.jsx"));
const Priivcy= lazy(() => import("./pages/Privacy.jsx"));

// Protected Route Component
const ProtectedRoute = ({ children, requireSuperAdmin = false }) => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async (userEmail) => {
      try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", userEmail));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          setUserRole(userData.role);
        } else {
          console.error("User not found in database");
          setUserRole(null);
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
        setUserRole(null);
      }
      setLoading(false);
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        fetchUserRole(user.email);
      } else {
        setUserRole(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#E74646]"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  if (requireSuperAdmin && userRole !== 'superadmin') {
    toast.error('Only superadmin can access this section', {
      position: "top-center",
      autoClose: 3000,
    });
    return <Navigate to="/admin/blood" replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  requireSuperAdmin: PropTypes.bool
};

// Admin Layout Component
const AdminLayout = ({ children }) => {
  return <div className="admin-layout">{children}</div>;
};

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

// Main App Component
export default function App() {
  return (
    <Router>
      <Nav />
      <ToastContainer />
      <Suspense fallback={
        <div className="w-full h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#E74646]"></div>
        </div>
      }>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/blogs" element={<Bloggg />} />
          <Route path="/projects/:name" element={<ProjectDetails />} />
          <Route path="/donar" element={<Donar />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/chronicle" element={<Chronicle />} />
          <Route path="/recruitment-result" element={<RecruitmentResult />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/syllabuses" element={<Syllabus />} />
          <Route path="/syllabus/:id" element={<DetailSyllabus />} />
          <Route path="/blogs/:name" element={<BlogDes />} />
          <Route path="/privacypolicy" element={<Priivcy />} />

          {/* Blood Management - Accessible by both admin and superadmin */}
          <Route
            path="/admin/blood"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Blood />
                </AdminLayout>
              </ProtectedRoute>
            }
          />

          {/* Superadmin Only Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute requireSuperAdmin={true}>
                <AdminLayout>
                  <AdminDashboard />
                </AdminLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/add-project"
            element={
              <ProtectedRoute requireSuperAdmin={true}>
                <AdminLayout>
                  <Projects />
                </AdminLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/add-syllabus"
            element={
              <ProtectedRoute requireSuperAdmin={true}>
                <AdminLayout>
                  <AddSyllabus />
                </AdminLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/edit-project/:id"
            element={
              <ProtectedRoute requireSuperAdmin={true}>
                <AdminLayout>
                  <EditProject />
                </AdminLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/add-blog"
            element={
              <ProtectedRoute requireSuperAdmin={true}>
                <AdminLayout>
                  <AddBlog />
                </AdminLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/add-chronicle"
            element={
              <ProtectedRoute requireSuperAdmin={true}>
                <AdminLayout>
                  <AddChronicle />
                </AdminLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/edit-blog/:id"
            element={
              <ProtectedRoute requireSuperAdmin={true}>
                <AdminLayout>
                  <EditBlog />
                </AdminLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/edit-chronicle/:id"
            element={
              <ProtectedRoute requireSuperAdmin={true}>
                <AdminLayout>
                  <EditChronicle />
                </AdminLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/edit-syllabus/:id"
            element={
              <ProtectedRoute requireSuperAdmin={true}>
                <AdminLayout>
                  <UpdateSyllabus />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}
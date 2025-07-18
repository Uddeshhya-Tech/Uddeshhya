import { NavLink, useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { collection, getDocs } from 'firebase/firestore';
import DOMPurify from 'dompurify';

const ContentRenderer = ({ content }) => {
  if (!content) return null;
  const sanitizedContent = DOMPurify.sanitize(content);
  
  return (
    <div 
      className="content text-gray-600 text-sm"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};

ContentRenderer.propTypes = {
  content: PropTypes.string.isRequired,
};

function BlogDetails() {
  const { pathname } = useLocation();
  const { name } = useParams();
  const [blogs, setBlogs] = useState([]);
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Fetch all blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = collection(db, 'blogs');
        const blogsSnapshot = await getDocs(blogsCollection);
        const blogsList = blogsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogs(blogsList);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Fetch current blog details
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const blogDoc = doc(db, 'blogs', name);
        const blogSnapshot = await getDoc(blogDoc);
        
        if (blogSnapshot.exists()) {
          setBlogData({
            id: blogSnapshot.id,
            ...blogSnapshot.data()
          });
        } else {
          console.log("No such blog with name:", name);
        }
      } catch (error) {
        console.error("Error fetching blog data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (name) {
      fetchBlogData();
    }
  }, [name]);

  const QuillContentRenderer = ({ content }) => {
    if (!content) return null;
    return (
      <div 
        className="prose prose-lg lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  };

  QuillContentRenderer.propTypes = {
    content: PropTypes.string
  };

  // Filter out the current blog from related blogs
  const relatedBlogs = blogs.filter(blog => blog.id !== name);

  // Updated slider settings
  const settings = {
    dots: true,
    infinite: relatedBlogs.length > 4,
    speed: 500,
    slidesToShow: Math.min(4, relatedBlogs.length),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, relatedBlogs.length),
          infinite: relatedBlogs.length > 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: relatedBlogs.length > 1
        }
      }
    ]
  };

  if (loading) {
    return (
      <div className="pt-20 px-8 lg:px-20">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div>
      <div className="pt-20 px-8 lg:px-20 mb-10">
        {/* Current blog display code remains the same */}
        <h1 className="font-bold text-2xl md:text-5xl md:text-start mb-8">
          Our{" "}
          <span className="text-[#E74646]">
            <NavLink to={"/projects"}>Blog</NavLink>
          </span>
          <span className="text-[#E74646] mx-4">{">"}</span>
          <span className="text-[#E74646] font-medium text-xl md:text-3xl">
            {blogData ? blogData.title?.toUpperCase() : (name ? name.toUpperCase() : 'LOADING...')}
          </span>
        </h1>

        {blogData && (
          <div className="max-w-5xl mx-auto">
            {blogData.imageUrl && (
              <div className="mb-8">
                <img 
                  src={blogData.imageUrl} 
                  alt={blogData.title || 'Blog image'} 
                  className="w-full h-[25rem] object-cover rounded-md"
                />
              </div>
            )}
            
            <h2 className="font-bold text-xl md:text-2xl text-center my-5">
              {blogData.title}
            </h2>
            
            <QuillContentRenderer content={blogData.content} />
          </div>
        )}

        {!blogData && !loading && (
          <div className="text-center py-8">
            <p className="text-gray-600">Blog details not found. Please check the Blog name and try again.</p>
          </div>
        )}
      </div>

      {/* Related Blogs Section */}
      {relatedBlogs.length > 0 && (
        <div className="px-8 lg:px-20 mb-10">
          <h1 className="text-4xl mt-10 lg:text-5xl font-bold pb-4 lg:py-6 text-center md:text-end">
            Related <span className="text-[#E74646]">Blogs</span>
          </h1>
          
          <div className="relative">
            <Slider {...settings}>
              {relatedBlogs.map((blog) => (
                <div key={blog.id} className="outline-none px-2 py-5">
                  <div className="bg-white rounded-3xl p-4 md:p-6 shadow-md shadow-gray-300 h-[415px] flex flex-col">
                    <div className="flex-shrink-0">
                      <img
                        loading="lazy"
                        src={blog.imageUrl}
                        className="w-full h-[170px] object-cover rounded-lg"
                        alt={blog.title}
                        onError={(e) => {
                          e.target.src = '/placeholder-image.jpg';
                          e.target.alt = 'Image not available';
                        }}
                      />
                    </div>
                    
                    <div className="flex-grow flex flex-col relative mt-4">
                      <h1 className="text-[#E74646] font-bold mb-2">
                        {blog.title?.toUpperCase()}
                      </h1>
                      
                      <div className="relative overflow-hidden" style={{ maxHeight: '120px' }}>
                        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
                        <ContentRenderer content={blog.content || "No description available."} />
                      </div>
                      
                      <div className="mt-auto pt-4 text-right">
                        <NavLink 
                          to={`/blogs/${blog.id}`}
                          className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
                        >
                          Read More...
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogDetails;
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

// Content Renderer Component
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

const BlogCarousel = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Fetch blogs from Firebase
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = collection(db, 'blogs');
        const blogSnapshot = await getDocs(blogsCollection);
        const blogsList = blogSnapshot.docs.map(doc => ({
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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-2xl font-medium text-[#E74646]">Loading...</div>
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
    <div className="container mx-auto px-4 md:px-10">
      <Slider {...settings}>
        {blogs.map((blog) => (
          <div key={blog.id} className="outline-none px-2 py-5">
            <div className="bg-white rounded-3xl p-4 md:p-6 shadow-md shadow-gray-300 h-[415px] flex flex-col">
              {/* Image container */}
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
              
              {/* Category badge */}
              {blog.category && (
                <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs mt-3">
                  {blog.category}
                </span>
              )}
              
              {/* Content container */}
              <div className="flex-grow flex flex-col relative mt-2">
                <h1 className="text-[#E74646] font-bold mb-2">
                  {blog.title?.toUpperCase()}
                </h1>
                
                {/* Description with fade effect */}
                <div className="relative overflow-hidden" style={{ maxHeight: '100px' }}>
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
                  <ContentRenderer 
                    content={blog.content || "No content available."} 
                  />
                </div>
                
                {/* Read More link */}
                <div className="mt-auto pt-4 text-right">
                  <a 
                    href={`/blogs/${blog.id}`}
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
                  >
                    Read More...
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BlogCarousel;
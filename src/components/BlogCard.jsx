import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { NavLink } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

// Badge Component
const Badge = ({ children, variant = "default", className = "", ...props }) => {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    secondary: "bg-red-100 text-red-800",
    destructive: "bg-red-100 text-red-800",
    outline: "border border-gray-200 text-gray-800"
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["default", "secondary", "destructive", "outline"]),
  className: PropTypes.string
};

// Skeleton Component
const Skeleton = ({ className = "", ...props }) => {
  return (
    <div
      className={`animate-pulse rounded-md bg-gray-200 ${className}`}
      {...props}
    />
  );
};

Skeleton.propTypes = {
  className: PropTypes.string
};

// Card Components
const Card = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ className = "", children, ...props }) => {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardContent = ({ className = "", children, ...props }) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

const CardFooter = ({ className = "", children, ...props }) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

// QuillContentRenderer Component
const QuillContentRenderer = ({ content }) => {
  if (!content) return null;
  const sanitizedContent = DOMPurify.sanitize(content);
  
  return (
    <div 
      className="text-sm text-gray-600 line-clamp-3"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }} 
    />
  );
};

QuillContentRenderer.propTypes = {
  content: PropTypes.string
};

// BlogCard Component
const BlogCard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    
    try {
      const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
      
      return new Intl.DateTimeFormat('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        // hour: '2-digit',
        // minute: '2-digit',
        // hour12: true,
        // timeZone: 'Asia/Kolkata'
      }).format(date);
    } catch (error) {
      console.error("Error formatting date:", error);
      return 'Date unavailable';
    }
  };

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
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader className="p-0">
              <Skeleton className="h-48 w-full" />
            </CardHeader>
            <CardContent className="mt-4">
              <Skeleton className="h-4 w-1/4 mb-2" />
              <Skeleton className="h-6 w-3/4 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {blogs.map((blog) => (
        <Card key={blog.id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
          <NavLink to={`/blogs/${blog.id}`}>
            <CardHeader className="relative p-0">
              <img
                src={blog.imageUrl || "/api/placeholder/800/600"}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardHeader>
            
            <CardContent className="pt-4">
              {blog.category && (
                <Badge variant="secondary" className="mb-2">
                  {blog.category}
                </Badge>
              )}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600 transition-colors duration-300">
                {blog.title}
              </h3>
              <QuillContentRenderer content={blog.content} />
            </CardContent>

            <CardFooter className="flex items-center justify-between pt-4">
              <span className="text-sm text-gray-500">
                {formatDate(blog.createdAt)}
              </span>
              <span className="text-sm font-medium text-red-600 flex items-center gap-1">
                Read More
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </CardFooter>
          </NavLink>
        </Card>
      ))}
    </div>
  );
};

BlogCard.propTypes = {
  // Add any props if you plan to make the component more flexible
};

export {
  Badge,
  Skeleton,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  BlogCard as default
};
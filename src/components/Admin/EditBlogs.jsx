import { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { uploadImageToCloudinary } from "../../utils/cloudinary";
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const validateFile = (file) => {
  const MAX_SIZE = 5 * 1024 * 1024; // 5MB
  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

  if (!ALLOWED_TYPES.includes(file.type)) {
    throw new Error('File type not supported. Please upload a JPEG, PNG, GIF, or WebP image.');
  }

  if (file.size > MAX_SIZE) {
    throw new Error('File is too large. Please upload an image under 5MB.');
  }

  return true;
};

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [currentImageUrl, setCurrentImageUrl] = useState('');
  const [content, setContent] = useState('');
  // const [excerpt, setExcerpt] = useState('');
  // const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [initialLoading, setInitialLoading] = useState(true);
  const [contentFocused, setContentFocused] = useState(false);

  // Fetch existing blog data
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(db, 'blogs', id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const blogData = docSnap.data();
          setTitle(blogData.title);
          setContent(blogData.content);
          // setExcerpt(blogData.excerpt);
          // setCategory(blogData.category);
          setCurrentImageUrl(blogData.imageUrl);
        } else {
          toast.error('Blog not found');
          navigate('/admin/dashboard');
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
        toast.error('Error loading blog');
      } finally {
        setInitialLoading(false);
      }
    };

    fetchBlog();
  }, [id, navigate]);

  const validateForm = () => {
    if (!title.trim()) {
      toast.error('Please enter a blog title');
      return false;
    }
    if (imageFile) {
      try {
        validateFile(imageFile);
      } catch (error) {
        toast.error(error.message);
        return false;
      }
    }
  
    if (!content.trim()) {
      toast.error('Please enter blog content');
      return false;
    }
    return true;
  };

  const handleUpdateBlog = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      setProgress(10);

      let imageUrl = currentImageUrl;

      // Only upload new image if one was selected
      if (imageFile) {
        imageUrl = await uploadImageToCloudinary(imageFile);
        if (!imageUrl) {
          throw new Error('Failed to upload image to Cloudinary');
        }
      }
      setProgress(50);

      // Update Firestore
      const blogRef = doc(db, 'blogs', id);
      await updateDoc(blogRef, {
        title: title.trim(),
        imageUrl,
        content: content.trim(),
        // excerpt: excerpt.trim(),
        // category: category.trim(),
        updatedAt: serverTimestamp(),
      });

      setProgress(100);
      toast.success('Blog updated successfully!');
      navigate('/admin/dashboard');

    } catch (error) {
      console.error('Update blog error:', error);
      toast.error(error.message || 'Failed to update blog. Please try again.');
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };

  if (initialLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse text-2xl font-medium text-[#E74646]">
          <svg className="animate-spin mr-3 h-10 w-10 inline text-[#E74646]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="animate-fade-in-out">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-4 sm:p-6 md:p-8 mb-16 mt-8 sm:mb-10 min-h-screen bg-gray-50 animate-fade-in">
      <div className="max-w-4xl mx-auto pt-4 sm:pt-6">
        <div className="flex items-center justify-between mb-6 animate-slide-down">
          <h2 className="text-2xl sm:text-3xl font-bold relative">
            Edit <span className="text-[#E74646]">Blog</span>
            <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-[#E74646] rounded animate-slide-right"></span>
          </h2>
          
          {/* Desktop buttons */}
          <div className="hidden sm:flex space-x-4 animate-fade-in">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="px-4 py-2 bg-gray-600 text-white rounded-md font-medium hover:bg-gray-700 
                       transition-all duration-300 transform hover:scale-105 hover:shadow-md"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdateBlog}
              disabled={loading}
              className="px-6 py-2 bg-[#E74646] text-white rounded-md font-medium hover:bg-[#d63e3e] 
                       disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300
                       transform hover:scale-105 hover:shadow-md flex items-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : 'Update Blog'}
            </button>
          </div>
        </div>

        <div className="space-y-6 bg-white p-4 sm:p-6 rounded-lg shadow-md animate-fade-up">
          {/* Title Input */}
          <div className="transition-all duration-300 transform hover:translate-x-1 focus-within:scale-[1.01]">
            <label className="block text-gray-700 mb-2 font-medium">Blog Title</label>
            <input
              type="text"
              placeholder="Enter blog title"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E74646] focus:border-transparent"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

         

          

          {/* Image Upload */}
          <div className="transition-all duration-300 hover:shadow-sm rounded-lg p-1">
            <label className="block text-gray-700 mb-2 font-medium">Blog Image</label>
            {currentImageUrl && (
              <div className="mb-4 transform transition-transform duration-500 hover:translate-y-1">
                <div className="relative group overflow-hidden rounded-lg border border-gray-200 w-40 h-40 sm:w-48 sm:h-48 shadow-sm hover:shadow-md transition-all duration-300">
                  <img 
                    src={currentImageUrl} 
                    alt="Current blog" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <p className="mt-2 text-xs text-gray-500">Current image</p>
              </div>
            )}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0">
              <label className="flex justify-center items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md cursor-pointer hover:bg-gray-200 transition-all duration-300 group w-full sm:w-auto transform hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 group-hover:text-[#E74646] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Choose Image
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setImageFile(file);
                      toast.success(`Image "${file.name}" selected`);
                    }
                  }}
                />
              </label>
              {imageFile && (
                <p className="ml-0 sm:ml-4 text-sm text-gray-600 truncate max-w-xs animate-fade-in">
                  {imageFile.name}
                </p>
              )}
            </div>
            <p className="mt-2 text-xs text-gray-500">Supported formats: JPEG, PNG, GIF, WebP (max 5MB)</p>
          </div>

          {/* Blog Content */}
          <div className={`transition-all duration-300 ${contentFocused ? 'shadow-md -mx-2 px-2' : ''}`}>
            <label className="block text-gray-700 mb-2 font-medium">Blog Content</label>
            <div 
               className={`editor-container h-64 sm:h-64 md:max-h-72 border border-gray-300 rounded-md overflow-hidden transition-all duration-300 ${contentFocused ? 'border-[#E74646]' : ''}`}onFocus={() => setContentFocused(true)}
              onBlur={() => setContentFocused(false)}
            >
              <ReactQuill
                value={content}
                onChange={setContent}
                theme="snow"
                modules={{
                  toolbar: [
                    [{ 'header': [1, 2, 3, false] }],
                    ['bold', 'italic', 'underline'],
                    [{ 'align': [] }],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    ['link', 'image'],
                    ['clean']
                  ]
                }}
              />
            </div>
            <p className="mt-2 text-xs text-gray-500">Scroll within the editor to see more content</p>
          </div>

          {/* Progress bar */}
          {progress > 0 && (
            <div className="relative pt-1 animate-fade-in">
              <div className="flex items-center justify-between mb-1">
                <div className="text-sm font-medium text-gray-700">
                  {progress < 100 ? 'Updating project...' : 'Complete!'}
                </div>
                <div className="text-sm font-medium text-[#E74646]">{progress}%</div>
              </div>
              <div className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-200">
                <div
                  style={{ width: `${progress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#E74646] transition-all duration-500 ease-in-out"
                ></div>
              </div>
            </div>
          )}
        </div>
        
        {/* Mobile buttons - fixed at bottom */}
        <div className="fixed bottom-0 left-0 right-0 sm:hidden bg-white p-4 border-t border-gray-200 z-10 animate-slide-up shadow-lg">
          <div className="flex space-x-2 max-w-4xl mx-auto">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="flex-1 px-4 py-3 bg-gray-600 text-white rounded-md font-medium text-sm transform active:scale-95 transition-transform duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdateBlog}
              disabled={loading}
              className="flex-1 px-4 py-3 bg-[#E74646] text-white rounded-md font-medium text-sm flex justify-center items-center transform active:scale-95 transition-transform duration-200"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : 'Update Blog'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default  EditBlog;
// AddBlog.js
import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { uploadImageToCloudinary } from "../../utils/cloudinary";
import { useNavigate } from 'react-router-dom';
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

const AddBlog = () => {
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [content, setContent] = useState('');
//   const [excerpt, setExcerpt] = useState('');
//   const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [contentFocused, setContentFocused] = useState(false);

  const validateForm = () => {
    if (!title.trim()) {
      toast.error('Please enter a blog title');
      return false;
    }
    if (!imageFile) {
      toast.error('Please select a featured image');
      return false;
    }
  
    try {
      validateFile(imageFile);
    } catch (error) {
      toast.error(error.message);
      return false;
    }
    if (!content.trim()) {
      toast.error('Please enter blog content');
      return false;
    }
    return true;
  };

  const handleAddBlog = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);
      setProgress(10);

      // Upload to Cloudinary
      const imageUrl = await uploadImageToCloudinary(imageFile);
      if (!imageUrl) {
        throw new Error('Failed to upload image to Cloudinary');
      }
      setProgress(50);

      // Add to Firestore
      await addDoc(collection(db, 'blogs'), {
        title: title.trim(),
        imageUrl,
        content: content.trim(),
       
        createdAt: serverTimestamp(),
        views: 0,
        likes: 0
      });

      setProgress(100);
      toast.success('Blog added successfully!');
      navigate('/admin/dashboard');

    } catch (error) {
      console.error('Add blog error:', error);
      toast.error(error.message || 'Failed to add blog. Please try again.');
    } finally {
      setLoading(false);
      setProgress(0);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      toast.success(`Image "${file.name}" selected`);
    }
  };

  return (
    <div className="flex-1 p-4 sm:p-6 md:p-8 mb-16 mt-8 sm:mb-10 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto pt-4 sm:pt-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold relative">
            Add New <span className="text-[#E74646]">Blog</span>
            <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-[#E74646] rounded"></span>
          </h2>
          
          <div className="hidden sm:flex space-x-4">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="px-4 py-2 bg-gray-600 text-white rounded-md font-medium hover:bg-gray-700 
                       transition-all duration-300"
            >
              Cancel
            </button>
            <button
              onClick={handleAddBlog}
              disabled={loading}
              className="px-6 py-2 bg-[#E74646] text-white rounded-md font-medium hover:bg-[#d63e3e] 
                       disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300
                       flex items-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : 'Add Blog'}
            </button>
          </div>
        </div>

        <div className="space-y-6 bg-white p-4 sm:p-6 rounded-lg shadow-md">
          {/* Title Input */}
          <div className="transition-all duration-300">
            <label className="block text-gray-700 mb-2 font-medium">Blog Title</label>
            <input
              type="text"
              placeholder="Enter blog title"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E74646] focus:border-transparent"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Category Input */}
          {/* <div className="transition-all duration-300">
            <label className="block text-gray-700 mb-2 font-medium">Blog Category</label>
            <input
              type="text"
              placeholder="Enter blog category"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E74646] focus:border-transparent"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div> */}

          {/* Excerpt Input */}
          {/* <div className="transition-all duration-300">
            <label className="block text-gray-700 mb-2 font-medium">Blog Excerpt</label>
            <textarea
              placeholder="Enter a short excerpt"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E74646] focus:border-transparent"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
            />
          </div> */}

          {/* Image Upload */}
          <div className="transition-all duration-300">
            <label className="block text-gray-700 mb-2 font-medium">Featured Image</label>
            {imagePreview && (
              <div className="mb-4">
                <div className="w-full h-48 border border-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={imagePreview} 
                    alt="Blog preview" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0">
              <label className="flex justify-center items-center px-4 py-2 bg-gray-100 text-gray-700 rounded-md cursor-pointer hover:bg-gray-200 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Choose Image
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          </div>

          {/* Blog Content */}
          <div className={`transition-all  duration-300 `}>
            <label className="block text-gray-700 mb-2 font-medium">Blog Content</label>
            <div 
              className={`editor-container h-64 sm:h-64 md:max-h-72 border border-gray-300 rounded-md overflow-hidden transition-all duration-300 ${contentFocused ? 'border-[#E74646]' : ''}`}
              onFocus={() => setContentFocused(true)}
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
          </div>

          {/* Progress bar */}
          {progress > 0 && (
            <div className="relative pt-1">
              <div className="flex items-center justify-between mb-1">
                <div className="text-sm font-medium text-gray-700">
                  {progress < 100 ? 'Adding blog...' : 'Complete!'}
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
        
        {/* Mobile buttons */}
        <div className="fixed bottom-0 left-0 right-0 sm:hidden bg-white p-4 border-t border-gray-200 z-10">
          <div className="flex space-x-2 max-w-4xl mx-auto">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="flex-1 px-4 py-3 bg-gray-600 text-white rounded-md font-medium text-sm"
            >
              Cancel
            </button>
            <button
              onClick={handleAddBlog}
              disabled={loading}
              className="flex-1 px-4 py-3 bg-[#E74646] text-white rounded-md font-medium text-sm flex justify-center items-center"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : 'Add Blog'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
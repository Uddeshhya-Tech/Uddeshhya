import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const AddSyllabus = () => {
  const navigate = useNavigate();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [descriptionFocused, setDescriptionFocused] = useState(false);

  const validateForm = () => {
    if (!title.trim()) {
      toast.error('Please enter a syllabus title');
      return false;
    }
    if (!description.trim()) {
      toast.error('Please enter syllabus description');
      return false;
    }
    return true;
  };

  const handleAddSyllabus = async () => {
    if (!validateForm()) return;

    try {
      setLoading(true);

      // Add to Firestore
      await addDoc(collection(db, 'syllabus'), {
        title: title.trim(),
        description: description.trim(),
        createdAt: serverTimestamp(),
      });
      
      // Reset form and show success message
      toast.success('Syllabus added successfully!');
      navigate('/admin/dashboard');

    } catch (error) {
      console.error('Add syllabus error:', error);
      toast.error(error.message || 'Failed to add syllabus. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 p-4 sm:p-6 md:p-8 mb-16 mt-8 sm:mb-10 min-h-screen bg-gray-50 animate-fade-in">
      <div className="max-w-4xl mx-auto pt-4 sm:pt-6">
        <div className="flex items-center justify-between mb-6 animate-slide-down">
          <h2 className="text-2xl sm:text-3xl font-bold relative">
            Add New <span className="text-[#E74646]">Syllabus</span>
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
              onClick={handleAddSyllabus}
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
              ) : 'Add Syllabus'}
            </button>
          </div>
        </div>
        
        <div className="space-y-6 bg-white p-4 sm:p-6 rounded-lg shadow-md animate-fade-up">
          <div className="transition-all duration-300 transform hover:translate-x-1 focus-within:scale-[1.01]">
            <label className="block text-gray-700 mb-2 font-medium">Syllabus Title</label>
            <input
              type="text"
              placeholder="Enter syllabus title"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E74646] focus:border-transparent transition-all duration-300"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className={`transition-all duration-300 ${descriptionFocused ? 'shadow-md -mx-2 px-2' : ''}`}>
            <label className="block text-gray-700 mb-2 font-medium">Description</label>
            <div 
              className={`editor-container h-64 sm:h-64 md:max-h-72 border border-gray-300 rounded-md overflow-hidden transition-all duration-300 ${descriptionFocused ? 'border-[#E74646]' : ''}`}
              onFocus={() => setDescriptionFocused(true)}
              onBlur={() => setDescriptionFocused(false)}
              style={{ maxHeight: "350px", overflow: "hidden" }}
            >
              <ReactQuill
                value={description}
                onChange={setDescription}
                theme="snow"
                modules={{
                  toolbar: [
                    [{ header: [1, 2, 3, false] }],
                    ["bold", "italic", "underline"],
                    [{ align: [] }],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["link"],
                    ["clean"],
                  ],
                }}
                className="quill-editor"
              />
            </div>
            <p className="mt-2 text-xs text-gray-500">Content will automatically expand as you type</p>
          </div>
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
              onClick={handleAddSyllabus}
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
              ) : 'Add Syllabus'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSyllabus;
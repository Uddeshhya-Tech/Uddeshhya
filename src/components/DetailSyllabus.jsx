import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { toast } from 'react-hot-toast';
import DOMPurify from 'dompurify';

const SyllabusDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [syllabus, setSyllabus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSyllabus = async () => {
      try {
        const syllabusDoc = await getDoc(doc(db, 'syllabus', id));
        if (syllabusDoc.exists()) {
          setSyllabus({
            id: syllabusDoc.id,
            ...syllabusDoc.data()
          });
        } else {
          toast.error('Syllabus not found');
          navigate('/syllabuses');
        }
      } catch (error) {
        console.error('Error fetching syllabus:', error);
        toast.error('Failed to load syllabus');
      } finally {
        setLoading(false);
      }
    };

    fetchSyllabus();
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E74646]"></div>
      </div>
    );
  }

  if (!syllabus) {
    return null;
  }

  return (
    <div className="py-8 px-4 md:px-8 mt-20 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            <span className="text-[#E74646]">Syllabus:</span> {syllabus.title}
          </h1>
          <button
            onClick={() => navigate('/syllabuses')}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to Syllabuses
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="prose max-w-none">
            <div 
              className="syllabus-content"
              dangerouslySetInnerHTML={{ 
                __html: DOMPurify.sanitize(syllabus.description) 
              }}
            />
          </div>
          
          {syllabus.createdAt && (
            <div className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">
              Added on: {syllabus.createdAt.toDate().toLocaleDateString()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SyllabusDetail;
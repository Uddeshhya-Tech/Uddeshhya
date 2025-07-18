import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SyllabusTable = () => {
  const [syllabuses, setSyllabuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSyllabuses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'syllabus'));
        const syllabusData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setSyllabuses(syllabusData);
      } catch (error) {
        console.error('Error fetching syllabuses:', error);
        toast.error('Failed to load syllabuses');
      } finally {
        setLoading(false);
      }
    };

    fetchSyllabuses();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E74646]"></div>
      </div>
    );
  }

  return (
    <div className="py-8 px-4 md:px-8 mt-16 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">
          Course <span className="text-[#E74646]">Syllabuses</span>
        </h2>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Syllabus For Class
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Added
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {syllabuses.map((syllabus) => (
                  <tr key={syllabus.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {syllabus.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {syllabus.createdAt?.toDate().toLocaleDateString() || 'N/A'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button
                        onClick={() => navigate(`/syllabus/${syllabus.id}`)}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#E74646] hover:bg-[#d63e3e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E74646] transition-colors"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyllabusTable;
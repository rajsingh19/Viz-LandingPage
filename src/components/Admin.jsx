import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Admin() {
  const navigate = useNavigate();
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchResponses = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "usersForm"));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setResponses(data);
    } catch (error) {
      console.error("Error fetching responses:", error);
      alert("Error fetching responses");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/')}
            className="p-2 sm:p-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-2xl sm:text-3xl font-bold">Admin Dashboard</h1>
          <div></div>
        </div>
        
        <div className="text-center mb-8">
          <button
            onClick={fetchResponses}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Loading..." : "Show Responses"}
          </button>
        </div>

        {responses.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Feedback</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {responses.map((response) => (
                    <tr key={response.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{response.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{response.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{response.phone}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">{response.feedback}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {response.createdAt?.toDate?.()?.toLocaleDateString() || 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
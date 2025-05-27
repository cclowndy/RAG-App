import React, { useState } from "react";
import axios from "axios";
import "./index.css";

function App() {
    const [query, setQuery] = useState("");
    const[answer, setAnswer] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8000/ask", { query });
    setAnswer(res.data.answer);
    };
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
            <h1 className="text-3xl font-bold mb-6">🔍 RAG Q&A</h1>
             <form onSubmit={handleSubmit} className="flex space-x-4 w-full max-w-2xl">
                <input 
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring"
                />
                <button 
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" 
                >
                    Ask something
                </button>
             </form>
             <div className="mt-8 w-full max-w-2xl">
                <h2 className="text-xl font-semibold">Answer:</h2>
                <p className="mt-2 text-gray-700 whitespace-pre-wrap">{answer}</p>
             </div>
        </div>
    )
    
}

export default App;

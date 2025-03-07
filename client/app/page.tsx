// pages/index.tsx

"use client";

import { useState, useEffect, FormEvent } from "react";

type UrlData = {
  id: string;
  shortId: string;
  redirectUrl: string;
};

type AnalyticsData = {
  totalClicks: number;
  analytics: { id: string; timestamp: string | number; urlId: string }[];
};

const Home = () => {
  const [longUrl, setLongUrl] = useState("");
  const [generatedShortUrl, setGeneratedShortUrl] = useState("");
  const [allUrls, setAllUrls] = useState<UrlData[]>([]);

  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  console.log(analytics);

  // Base API URL (adjust if needed)
  const API_BASE = "http://localhost:8080";

  // Fetch all URLs from the server
  const fetchUrls = async () => {
    try {
      const res = await fetch(`${API_BASE}/get-all-url`);
      const data = await res.json();
      if (data.urls) {
        setAllUrls(data.urls);
      }
    } catch (error) {
      console.error("Error fetching URLs:", error);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  // Handle the form submission for generating a short URL
  const handleGenerate = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/generate-short-url`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: longUrl }),
      });
      const data = await res.json();
      if (data.shortUrl) {
        setGeneratedShortUrl(data.shortUrl);
        setLongUrl("");
        fetchUrls();
      }
    } catch (error) {
      console.error("Error generating short URL:", error);
    }
  };

  // Handle deleting a URL
  const handleDelete = async (id: string) => {
    try {
      await fetch(`${API_BASE}/delete-url/${id}`, { method: "DELETE" });

      fetchUrls();
    } catch (error) {
      console.error("Error deleting URL:", error);
    }
  };

  // Handle fetching analytics for a short URL
  const handleAnalytics = async (shortId: string) => {
    try {
      const res = await fetch(`${API_BASE}/get-analytics/${shortId}`);
      const data = await res.json();
      setAnalytics(data);
    } catch (error) {
      console.error("Error fetching analytics:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">URL Shortener</h1>

        {/* Form to generate short URL */}
        <form onSubmit={handleGenerate} className="mb-6">
          <input
            type="text"
            placeholder="Enter long URL"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="mt-3 w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          >
            Generate Short URL
          </button>
        </form>

        {/* Display generated short URL */}
        {generatedShortUrl && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 rounded">
            <p className="text-green-800">
              Short URL:{" "}
              <a
                href={generatedShortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                {generatedShortUrl}
              </a>
            </p>
          </div>
        )}

        {/* List all URLs */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">All URLs</h2>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Short ID</th>
                <th className="border p-2">Redirect URL</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allUrls?.map((url) => (
                <tr key={url.id} className="hover:bg-gray-100">
                  <td className="border p-2 text-center">{url.shortId}</td>
                  <td className="border p-2">{url.redirectUrl}</td>
                  <td className="border p-2 text-center">
                    <button
                      onClick={() => handleAnalytics(url.shortId)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded mr-2"
                    >
                      Analytics
                    </button>
                    <button
                      onClick={() => handleDelete(url.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Display analytics */}
        {analytics && (
          <div className="p-4 bg-white border rounded shadow">
            <h3 className="text-xl font-semibold mb-3">Analytics</h3>
            <p className="mb-2">Total Clicks: {analytics.totalClicks}</p>
            <ul className="list-disc pl-5">
              {analytics.analytics?.map((entry, idx) => (
                <li key={idx}>
                  Timestamp:{" "}
                  {new Date(Number(entry.timestamp)).toLocaleString()}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

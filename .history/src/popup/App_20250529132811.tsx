// src/App.tsx
import { useEffect, useState } from "react";
import { Tabs } from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";
import { Sun, Moon, Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";

const categories = ["Headlines", "Tech", "Movies", "Nerd Corner"];

const categoryToQuery: Record<string, string> = {
  Headlines: "general",
  Tech: "technology",
  Movies: "entertainment",
  "Nerd Corner": "anime OR gaming OR comics",
};

const API_KEY = "19fdac03e99be007425b60553981cd9d";
const BASE_URL = "https://gnews.io/api/v4/search";

type NewsArticle = {
  title: string;
  description: string;
  url: string;
  source: {
    name: string;
  };
  image?: string; // Optional field for image URL
  // Add more fields here if needed, or remove the index signature to avoid 'any'
};

export default function App() {
  const [activeTab, setActiveTab] = useState("Headlines");
  const [darkMode, setDarkMode] = useState(false);
  const [newsData, setNewsData] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const query = categoryToQuery[activeTab];
        const res = await axios.get(
          `${BASE_URL}?q=${encodeURIComponent(query)}&lang=en&apikey=${API_KEY}`
        );
        setNewsData(res.data.articles || []);
      } catch (err) {
        console.error("Error fetching news:", err);
        setNewsData([]);
      }
      setLoading(false);
    };
    fetchNews();
  }, [activeTab]);

  return (
    <div
      className={`w-[640px] h-[480px] overflow-y-auto rounded-xl shadow-xl border transition-colors duration-300 ${
    darkMode ? "bg-[#1e1e2f] text-gray-100" : "bg-white text-black"
  }`}
    >
      <header className="sticky top-0 z-10 bg-inherit flex items-center justify-between p-3 border-b backdrop-blur-md">
        <img src="../../public/icon-16.png" className="w-4 h-4 rounded-full" />
        <h1 className="text-lg font-bold font-anime">NewsBox
        <span className="text-xs text-gray-500 ml-1">v1.0</span>
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </header>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="px-3 mt-2 text-sm"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            className={`capitalize px-3 py-1 rounded transition-colors ${
              activeTab === cat
                ? "bg-blue-500 text-white"
                : "bg-transparent text-inherit hover:bg-gray-200 dark:hover:bg-gray-800"
            }`}
            onClick={() => setActiveTab(cat)}
            type="button"
          >
            {cat}
          </button>
        ))}
      </Tabs>

      <main className="p-3 space-y-3">
        {loading ? (
          <div className="text-center text-sm">Loading...</div>
        ) : newsData.length > 0 ? (
          newsData.map((news, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="rounded-xl shadow border bg-opacity-60 backdrop-blur-md">
                <CardContent className="overflow-clip">
                  <div className="flex justify-between items-start">
                    <div className="pr-2 dark:text-gray-300">
                      <a
                        href={news.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs mt-2 inline-block hover:text-blue-400 hover:underline"
                      >
                        <div className="w-[600px] h-[400px] gap-3">
                        <img
                          src={news.image}
                          alt={news.title}
                          className=" object-fill rounded-lg "
                        />
                        </div>
                        <h2 className="text-sm font-semibold mb-1 font-anime line-clamp-2">
                          {news.title}
                        </h2>
                        <p className="text-xs opacity-80 line-clamp-3">
                          {news.description}
                        </p>
                        {news.source.name}
                      </a>
                    </div>
                    <button>
                      <Bookmark size={16} />
                    </button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))
        ) : (
          <div className="text-center text-sm">No news available.</div>
        )}
      </main>
      <footer className="text-xs text-center text-gray-500 p-3 border-t">
        Made with ❤️ by{"Bhuvi"}
        </footer>
    </div>
  );
}

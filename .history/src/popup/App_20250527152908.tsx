import  { useEffect, useState } from 'react';
import NewsCard from '../components/NewsCard';

interface Article {
  title: string;
  description: string;
  image: string;
  url: string;
}

const App = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = '19fdac03e99be007425b60553981cd9d';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`https://gnews.io/api/v4/top-headlines?lang=en&token=${API_KEY}`);
        const data = await res.json();
        setArticles(data.articles);
      } catch (err) {
        console.error('Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="p-4 bg-white w-[400px]">
      <h1 className="text-xl font-bold mb-4 text-center">📰 NewsBox</h1>
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div className="flex flex-col gap-3">
          {articles.map((article, idx) => (
            <NewsCard
              key={idx}
              title={article.title}
              description={article.description}
              image={article.image}
              url={article.url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

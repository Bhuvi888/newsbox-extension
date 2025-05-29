import  { useEffect, useState } from 'react';
import NewsCard from './components/NewsCard';

const API_KEY = '19fdac03e99be007425b60553981cd9d';
const URL = `https://gnews.io/api/v4/top-headlines?lang=en&country=in&max=10&apikey=${API_KEY}`;

interface Article {
  title: string;
  source: { name: string };
  publishedAt: string;
  description: string;
}

function App() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles);
      });
  }, []);

  return (
    <div className="p-4 w-[360px] bg-gray-100 dark:bg-zinc-900 text-black dark:text-white">
      <h1 className="text-xl font-bold mb-4">📰 NewsBox</h1>
      {articles.map((a, i) => (
        <NewsCard
          key={i}
          title={a.title}
          source={a.source.name}
          time={new Date(a.publishedAt).toLocaleTimeString()}
          description={a.description}
        />
      ))}
    </div>
  );
}

export default App;

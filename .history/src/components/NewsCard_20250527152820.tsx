import React from 'react';

interface NewsCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, image, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-start gap-3 p-3 rounded-lg shadow-md bg-white hover:bg-gray-50 transition"
    >
      {image && (
        <img
          src={image}
          alt="news"
          className="w-20 h-20 object-cover rounded-md"
        />
      )}
      <div className="flex flex-col">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        <p className="text-xs text-gray-600 mt-1 line-clamp-2">{description}</p>
      </div>
    </a>
  );
};

export default NewsCard;

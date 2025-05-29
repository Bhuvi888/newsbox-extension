

interface Props {
  title: string;
  image?: string;
  source: string;
  time: string;
  description: string;
}

const NewsCard = ({ title, source, time, description }: Props) => (
  <div className="bg-white p-4 rounded-2xl shadow mb-3 dark:bg-zinc-800">
    <ima
    <h2 className="text-lg font-bold">{title}</h2>
    <div className="text-xs text-gray-500">{source} • {time}</div>
    <p className="text-sm mt-2">{description}</p>
  </div>
);

export default NewsCard;

const news = [
  {
    title: "News",
  },
];

const News = () => {
  return (
    <div className="container my-12">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {news.map(({ title }, i) => (
          <div key={i} className="flex flex-col border p-5 shadow-lg">
            <h3 className="text-lg font-medium">{title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;

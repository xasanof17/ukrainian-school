import Image from "next/image";
const news = [
  {
    image: "https://school-78.kiev.ua/wp-content/uploads/2023/09/dzvonyk.png",
    date: "01.09.2023",
    title: "1 вересня – День знань!",
  },
  {
    image: "https://school-78.kiev.ua/wp-content/uploads/2023/09/dzvonyk.png",
    date: "01.09.2023",
    title: "1 вересня – День знань!",
  },
  {
    image: "https://school-78.kiev.ua/wp-content/uploads/2023/09/dzvonyk.png",
    date: "01.09.2023",
    title: "1 вересня – День знань!",
  },
  {
    image: "https://school-78.kiev.ua/wp-content/uploads/2023/09/dzvonyk.png",
    date: "01.09.2023",
    title: "1 вересня – День знань!",
  },
];

const News = () => {
  return (
    <div className="container my-12">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {news.map(({ image, title, date }, i) => (
          <div key={i} className="flex flex-col p-5 shadow">
            <div className="relative mb-2 h-[280px] w-full">
              <Image src={image} alt={title} fill />
            </div>
            <div className="flex flex-col items-start justify-center">
              <span className="mb-2 text-base font-medium text-secondary">
                {date}
              </span>
              <h3 className="text-start text-xl font-medium text-primary">
                {title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;

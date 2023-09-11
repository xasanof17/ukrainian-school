const Banner = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center bg-[url('/assets/heroBg.svg')] object-cover py-20 relative">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <h1 className="title uppercase text-secondary z-10">{title}</h1>
    </div>
  );
};

export default Banner;

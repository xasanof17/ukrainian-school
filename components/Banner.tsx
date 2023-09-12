const Banner = ({ title }: { title: string }) => {
  return (
    <div className="relative flex h-[50vh] flex-col items-center justify-center bg-[url('/assets/heroBg.svg')] object-cover py-20">
      <div className="absolute inset-0 z-10 bg-black/50" />
      <h1 className="title z-10 uppercase text-secondary">{title}</h1>
    </div>
  );
};

export default Banner;

function HomePage() {
  return (
    <section className="bg-[#4b505b]">
      <div className="max-w-[1440px] md:mx-auto hero min-h-[calc(100vh_-_100px)] w-full">
        <div className="cover min-h-[calc(100vh_-_100px)] w-full flex justify-between">
          <div className="grid grid-cols-2 gap-10 relative z-50 place-items-center p-10">
            <div className="col-span-2 sm:col-span-1">
              <h1 className="text-[150px] text-third tracking-widest">Daisy</h1>
              <h2 className="text-[45px] text-third tracking-widest leading-10">
                The complete service for repeat protein curation
              </h2>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h1 className="text-[150px] text-third tracking-widest">Daisy</h1>
              <h2 className="text-[45px] text-third tracking-widest leading-10">
                The complete service for repeat protein curation
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;

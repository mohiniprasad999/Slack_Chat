const Home = () => {
  return (
    <main className="min-h-screen w-full p-24">
      <h1 className="text-4xl font-bold mb-4">This is Home page!</h1>
      <div className="flex gap-4 justify-start items-start">
        <button className="daisy-btn daisy-btn-primary w-64 rounded-full">
          Button
        </button>
        <button className="daisy-btn daisy-btn-primary">One</button>
        <button className="daisy-btn daisy-btn-secondary">Two</button>
        <button className="daisy-btn daisy-btn-accent daisy-btn-outline">
          Three
        </button>
        <button className="daisy-btn rounded-none px-16">Four</button>
      </div>
    </main>
  );
};

export default Home;

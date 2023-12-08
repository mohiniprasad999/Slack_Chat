const Home = () => {
  return (
    <div className="min-h-screen flex flex-col w-full p-8 md:p-24 pt-24">
      <article className="prose daisy-prose mb-8">
        <h1>This is Home page!</h1>
      </article>

      <div className="flex flex-wrap gap-4 w-full">
        <button className="daisy-btn daisy-btn-primary w-64 rounded-full">
          Zero
        </button>
        <button className="daisy-btn daisy-btn-primary">One</button>
        <button className="daisy-btn daisy-btn-secondary">Two</button>
        <button className="daisy-btn daisy-btn-accent daisy-btn-outline">
          Three
        </button>
        <button className="daisy-btn rounded-none px-16">Four</button>
      </div>
    </div>
  );
};

export default Home;

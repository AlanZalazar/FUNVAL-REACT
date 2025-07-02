import { CardsContainer } from "./components/CardsContainer";
function App() {
  return (
    <div className="bg-slate-900 min-h-screen p-10 text-white">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold">The creative crew</h1>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Who we are</h2>
            <p className="text-gray-300 max-w-md">
              We are team of creatively diverse, driven, innovative individuals
              working in various locations from the world.
            </p>
          </div>
        </header>

        <CardsContainer />
      </div>
    </div>
  );
}

export default App;

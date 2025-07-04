import { CardsContainer } from "./components/CardsContainer";
import DarkMode from "./components/DarkMode";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <div className="dark:bg-slate-900 min-h-screen p-10 dark:text-white ">
      <div className="max-w-5xl mx-auto">
        <DarkMode></DarkMode>
        <Header></Header>
        <CardsContainer />
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;

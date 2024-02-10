import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="h-screen pb-14 bg-right bg-cover">
      <Nav />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

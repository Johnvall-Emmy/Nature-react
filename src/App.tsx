import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main-section/Main";
import Service from "./Components/Service folder/Service";
import Aboutus from "./Components/Aboutus folder/Aboutus";
import Question from "./Components/Questionsection/Question";
import Footer from "./Components/Footer Folder/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Main />
        <Service />
        <Aboutus />
        <Question />
        <Footer />
      </div>
    </>
  );
}

export default App;

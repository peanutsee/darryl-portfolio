import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import AppHeader from "./Components/AppHeader";
import Banner from "./Components/Banner";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Banner />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;

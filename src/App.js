import { About } from "./components/about/About";
import Header from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { Portfolio } from "./components/Portfolio/Portfolio";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      {/* <Experience /> */}
      <Portfolio />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;

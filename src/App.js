import "./App.css";
import Home from "./Components/Page/Home/Home";
import Test from "./Components/Page/Home/Test";
import Test2 from "./Components/Page/Home/Test2";
import Footer from "./Components/Page/Share/Footer";
import Navbar from "./Components/Page/Share/Navbar";
import Navbar2 from "./Components/Page/Share/Navbar2";
import Navbar3 from "./Components/Page/Share/Navbar3";

function App() {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Navbar3 />
      <Home />

      {/* <Test />
      <Test2 /> */}
      <Footer />
    </div>
  );
}

export default App;

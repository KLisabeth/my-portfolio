import { BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Signin from "./pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about"  component={About} />
      <Route path="/contact"  component={Contact} />
      <Route path="/signin"  component={Signin} />
      <Route path="/projectlist"  component={Projects} />
    </BrowserRouter>
  );
}

export default App;

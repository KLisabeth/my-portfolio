import { BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about"  component={About} />
      <Route path="/contact"  component={Contact} />
    </BrowserRouter>
  );
}

export default App;

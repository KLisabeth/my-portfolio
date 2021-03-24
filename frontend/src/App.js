import { BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about"  component={About} />
    </BrowserRouter>
  );
}

export default App;

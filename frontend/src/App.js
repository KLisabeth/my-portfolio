import { BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact={true} component={Home} />
    </BrowserRouter>
  );
}

export default App;

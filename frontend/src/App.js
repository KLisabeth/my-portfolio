import { BrowserRouter, Route, Switch} from "react-router-dom";
import AdminRoute from "./components/AdminRoute";
import Header from "./components/Header";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Signin from "./pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about"  component={About} />
      <Route path="/contact"  component={Contact} />
      <Route path="/signin"  component={Signin} />
      <Route path="/projectlist"  component={Projects} />
      <Route path="/bloglist"  component={Blogs} />
      <AdminRoute exact path="/admin" component={Admin}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

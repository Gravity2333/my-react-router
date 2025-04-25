import NotFoundPage from "./components/NotFoundPage";
import { HashRouter, Redirect, Route, Switch } from "./lib/react-router-dom";
import About from "./pages/About";
import DocsPage from "./pages/Docs/components/Install";
import Home from "./pages/Home";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Redirect from="/" to="/home" />
        <Route path="/home" component={Home}></Route>
        <Route
          path="/about"
          render={(props: any) => <About {...props} />}
        ></Route>
        <Route path="/docs" component={DocsPage}></Route>
        <Route component={NotFoundPage}/>
      </Switch>
    </HashRouter>
  );
}

export default App;

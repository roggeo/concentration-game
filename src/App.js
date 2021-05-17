import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { routes } from "./routes";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Page404 from "./pages/Page404";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <>
              <Header/>
              <HomePage/>
            </>
          </Route>
          {routes.map((r, idx) => (
            <Route key={idx} path={r.path}>
              <>
              <Header/>
              <r.component/>
              </>
            </Route>
          ))}
          <Route path="*">
              <Page404/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React, {
  createContext,
  lazy,
  Suspense,
} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LoadingSpinner from "./components/Home/LoadingSpinner/LoadingSpinner";

// Rapped with lazy loading
const Home = lazy(() => import("./pages/Home"));
const Error = lazy(() => import("./components/Home/Error/Error.js"));

// Create User Context
export const UserContext = createContext();

const App = () => {
  return (
    <Router>
      {/* Loading Animation */}
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Suspense>
    </Router>

  );
};

export default App;

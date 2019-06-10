import React from "react";

// Screens
import AdvanceOps from "../../Screens/AdvanceOps";
import BasicsOps from "../../Screens/BasicsOps";
import Main from "../../Screens/Main";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Main />
    </div>
  );
}

function Basics() {
  return (
    <div>
      <BasicsOps />
    </div>
  );
}

function Advance() {
  return (
    <div>
      <AdvanceOps />
    </div>
  );
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/basics/">Basics</Link>
            </li>
            <li>
              <Link to="/advance/">Advances</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/basics/" component={Basics} />
        <Route path="/advance/" component={Advance} />
      </div>
    </Router>
  );
}

export default AppRouter;

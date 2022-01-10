// import logo from './logo_img.png';
// import './App.css';
// import Dashboard from './views/dashboard';
// function App() {
//   return (
//     <Dashboard />
//   );
// }

// export default App;
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import SimpleDialogDemo from './views/login';
import Layout from './Layout/layout';
import Dashboard from "./views/dashboard";
function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <SimpleDialogDemo setToken={setToken} />;
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/Dashboard">
            <Layout>
              {/* <Dashboard /> */}
            </Layout>
          </Route>
          {/* <Route path="/preferences">
            <Preferences />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <Layout></Layout>
//     </div>
//   );
// }

export default App; 
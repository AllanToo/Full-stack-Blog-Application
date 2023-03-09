import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/home/single/Single";
import Write from "./pages/home/write/Write";
import Login from "./pages/home/login/Login";

import Settings from "./pages/home/settings/Settings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SinglePost from "./components/singlePost/SinglePost";
import Register from "./pages/home/register/Register";








function App() {
  
  const currentUser = false;
  return (   
   <Router>  
     <TopBar/>
       <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
               {currentUser ? <Home/> : <Login/>}
          </Route>
          <Route path="/write">
            <SinglePost/>
          </Route>
          <Route path="/setting">
            <Settings/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/post/:postId">
            <Single/>
          </Route>
       </Switch>
        
        </Router>
   
  
  );
}

export default App;
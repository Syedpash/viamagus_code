
import './App.css';
import Layout from './hoc/Layout';
import Login from './pages/Login';
import DateComponent from './pages/DateComponent';
import Video from './pages/Video';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Router>
       <Layout>
         <Switch>
           <Route exact path="/" component={Login}/>
           <Route exact path="/video" component={Video} />
           <Route exact path="/date" component={DateComponent}/>
         </Switch>
       </Layout>
     </Router>
    </div>
  );
}

export default App;

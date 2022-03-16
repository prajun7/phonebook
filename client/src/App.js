import './App.css';
import SignUp from './components/pages/signUp/SignUp'
import Home from './components/pages/home/Home'
import ForgotPassword from './components/pages/forgotPassword/forgotPassword';
import LogIn from './components/pages/logIn/LogIn';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

import UserContextProvider from './contexts/UserContext';

// App.js is our main component that holds all other components.

function App() {
  return (
    <div>
      <Router>
        <UserContextProvider>
          <Switch>
            <Route path = "/" exact component ={Home} />
            <Route path = "/login" component = {LogIn} />
            <Route path = "/signup" component = {SignUp} />
            <Route path = "/forgotpassword" component = {ForgotPassword} />
          </Switch>
        </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;

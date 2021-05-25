import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import signin from './pages/signin';
import profile from './pages/profile';
import services from './pages/services';
import { ProductsContextProvider } from './global/ProductsContext';

 export const UserContext= createContext({
});

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    
    <UserContext.Provider value = {[loggedInUser,setLoggedInUser]}>
    {/* <h3>email:{loggedInUser.email}</h3> */}
      <ProductsContextProvider>
          <Router>
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/services" component={services} exact/>
              <Route path="/profile" component={profile} exact/>
              <Route path="/signin" component={signin} exact/>
            </Switch>
          </Router>
        </ProductsContextProvider>
    </UserContext.Provider>
  );
}

export default App;

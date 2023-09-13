import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import RegistrationForm from './components/auth/RegistrationForm';
import Home from './components/Home';

function App() {
 const [user, setUser] = useState(null); // User state, initially null

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {!user ? <LoginForm onLogin={setUser} /> : <Redirect to="/home" />}
        </Route>
        <Route path="/register">
          {!user ? <RegistrationForm onRegister={setUser} /> : <Redirect to="/home" />}
        </Route>
        <PrivateRoute path="/home" user={user}>
          <Home />
        </PrivateRoute>
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

function PrivateRoute({ children, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App; const [user, setUser] = useState(null); // User state, initially null

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {!user ? <LoginForm onLogin={setUser} /> : <Redirect to="/home" />}
        </Route>
        <Route path="/register">
          {!user ? <RegistrationForm onRegister={setUser} /> : <Redirect to="/home" />}
        </Route>
        <PrivateRoute path="/home" user={user}>
          <Home />
        </PrivateRoute>
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

function PrivateRoute({ children, user, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App;

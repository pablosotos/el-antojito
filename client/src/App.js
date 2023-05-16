import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Menu from './views/Menu';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        {/* Agrega más rutas según las necesidades de tu aplicación */}
      </Switch>
    </Router>
  );
}

export default App;

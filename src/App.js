import React from 'react';
import Hello from './Components/Hello'
import Apple from './Components/Apple'
import { Route, Switch } from 'react-router-dom'

export default function App() {
  return (
      <Switch>
          <Route exact path="/" component={Hello} />
          <Route path="/apple" component={Apple} />
      </Switch>
  );
}

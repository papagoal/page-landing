import React from 'react';
import Hello from './Components/Hello'
import Apple from './Components/Apple'
import Banana from './Components/Banana'
import Cherry from './Components/Cherry'
import { Route, Switch } from 'react-router-dom'

export default function App() {
  return (
      <Switch>
          <Route exact path="/" component={Hello} />
          <Route path="/apple" component={Apple} />
          <Route path="/banana" component={Banana} />
          <Route path="/cherry" component={Cherry} />
      </Switch>
  );
}

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CvPage from './components/stateful/CvPage/CvPage';
import LandingPage from './components/stateless/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cv" component={CvPage} />
        <Route path="/" exact component={LandingPage} />
        <Route render={() => <h1>Not found ...</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

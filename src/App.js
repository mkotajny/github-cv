import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CvContainer from './components/Cv/CvContainer/CvContainer';
import LandingPage from './components/Layout/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cv/:login" component={CvContainer} />
        <Route path="/" exact component={LandingPage} />
        <Route render={() => <h1>Not found ...</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

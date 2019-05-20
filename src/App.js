import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CvContentContainer from './components/Cv/CvContent/CvContentContainer/CvContentContainer';
import LandingPage from './components/Layout/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cv:login" component={CvContentContainer} />
        <Route path="/" exact component={LandingPage} />
        <Route render={() => <h1>Not found ...</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

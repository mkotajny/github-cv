import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CvGenerator from './components/Cv/CvCreation/CvGenerator/CvGenerator';
import LandingPage from './components/UI/LandingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cv/:login" component={CvGenerator} />
        <Route path="/" exact component={LandingPage} />
        <Route render={() => <h1>Not found ...</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

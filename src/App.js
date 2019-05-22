import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CvGenerator from './components/Cv/CvCreation/CvGenerator/CvGenerator';
import LandingPage from './components/UI/LandingPage/LandingPage';
import Modal, {} from './components/UI/Modal/Modal'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cv/:login" component={CvGenerator} />
        <Route path="/" exact component={LandingPage} />
        <Route render={() => <Modal>Url not found</Modal>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

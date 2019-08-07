import React from 'react';
import Navigation from './common/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeComponent from './home/HomeComponent';
import AboutUs from './about/AboutUs';
import ImageSearch from './images/ImageSearch';
import ImageDetails from './images/ImageDetails';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/about" component={AboutUs} />
          <Route exact path="/images" component={ImageSearch} />
          <Route path="/images/:id" component={ImageDetails} />
        </Switch>

      </BrowserRouter>
    </div>
  );
};

export default App;

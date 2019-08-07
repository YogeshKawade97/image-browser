import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import Messages from './Messages';
import Friends from './Friends';

class AboutUs extends Component {
  render() {
    const { match } = this.props;
    return (
      <div>
        <Header baseUrl={match.url} />
        <Route exact path={match.url} component={Messages} />
        <Route path={`${match.url}/friends`} component={Friends} />
      </div>
    );
  }
}

export default AboutUs;

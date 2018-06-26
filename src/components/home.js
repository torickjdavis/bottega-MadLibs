import React, { Component } from 'react';

import Header from './header';
import Card from './card';

class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header() }
        <Card />
      </div>
    );
  }
}

/* TODO
// Placeholder
// Grey and Green Number Labels
// Generate Button Space / Card Height
// Content Labels
*/

export default Home;

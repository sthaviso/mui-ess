import React from 'react';
import ConvListContainer from '../containers/ConvListContainer.js';
import AppBar from 'material-ui/AppBar';
const Home = () => (
  <main className="container">
    <ConvListContainer/>
    <div className="flex-item"><AppBar title="test"/><div>Hello</div></div>
  </main>
);

export default Home;

import React from 'react';

import './App.css';
import Layout from '../Layout/Layout';
import PizzaMaker from '../PizzaMaker/PizzaMaker';

function App() {
  return (
    <div className="App">
      <Layout>
      <PizzaMaker/>
      </Layout>
    </div>
  );
}

export default App;

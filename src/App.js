import React from 'react';
import './App.css';
import Layout from './components/Layout';

import Tasks from './containers/Tasks';

import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState';

function App() {

  const initalState = useInitialState();

  return (
    <AppContext.Provider value={initalState}>
      <Layout>
        <Tasks />
      </Layout>
    </AppContext.Provider>
  );
}

export default App;

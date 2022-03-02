import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Upload from './upload/Upload'
import { TopBar } from './topbar/TopBar';
import { Home } from './pages/home/Home';
import Setting from './pages/settings/Setting';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Preview from './preview/Preview';

const App = () => {
  return (
    <Router>
      <TopBar/>
      <Upload/>
    </Router>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Auth/login';
import Register from './components/Auth/register';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

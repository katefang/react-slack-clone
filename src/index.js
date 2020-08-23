import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Auth/login';
import Register from './components/Auth/register';
import registerServiceWorker from './registerServiceWorker';
import firebase from './firebase';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { withRouter } from 'react-router-dom';

class Root extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.history.push('/');
      }
    });
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    );
  }
}

const RootWithAuth = withRouter(Root);

ReactDOM.render(
  <BrowserRouter>
    <RootWithAuth />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Auth/login';
import Register from './components/Auth/register';
import rootReducer from './reducers/root-reducer';
import { setUser, clearUser } from './actions/user-actions';
import Spinner from './components/spinner';

import firebase from './firebase';
import { BrowserRouter, Switch, Route, withRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());

class Root extends React.Component {
  componentDidMount() {
    console.log(this.props.isLoading);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // console.log(user);
        this.props.setUser(user);
        this.props.history.push('/');
      } else {
        this.props.history.push('/login');
        this.props.clearUser();
      }
    });
  }

  render() {
    return this.props.isLoading ? (
      <Spinner />
    ) : (
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.user.isLoading
});

const RootWithAuth = withRouter(
  connect(mapStateToProps, { setUser, clearUser })(Root)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <RootWithAuth />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

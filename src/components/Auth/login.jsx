import React from 'react';
import firebase from '../../firebase';

import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    errors: [],
    loading: false
  };

  displayErrors = errors =>
    errors.map((error, idx) => <p key={idx}>{error.message}</p>);

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.isFormValid(this.state)) {
      this.setState({ errors: [], loading: true });
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(signedInUser => {
          console.log(signedInUser);
        })
        .catch(err => {
          console.error(err);
          this.setState({
            errors: this.state.errors.concat(err),
            loading: false
          });
        });
    }
  };

  isFormValid = ({ email, password }) => email && password;

  handleInputError = (errors, inputName) => {
    errors.some(error => error.message.toLowerCase().includes(inputName))
      ? 'error'
      : '';
  };

  render() {
    const { email, password, errors, loading } = this.state;

    return (
      <Grid textAlign='center' verticalAlign='middle' className='app'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h1' icon color='violet' textAlign='center'>
            <Icon name='code branch' color='violet' />
            Login for Beep
          </Header>
          <Form size='large' onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input
                fluid
                name='email'
                icon='mail'
                iconPosition='left'
                placeholder='Email'
                onChange={this.handleChange}
                value={email}
                className={this.handleInputError(errors, 'email')}
                type='email'
              />

              <Form.Input
                fluid
                name='password'
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                onChange={this.handleChange}
                value={password}
                className={this.handleInputError(errors, 'password')}
                type='password'
              />

              <Button
                disabled={loading}
                className={loading ? 'loading' : ''}
                color='violet'
                fluid
                size='large'
              >
                Submit
              </Button>
            </Segment>
          </Form>
          {this.state.errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )}
          <Message>
            Don't have an account?
            <Link to='/register'> Register</Link>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;

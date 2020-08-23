import React from 'react';
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon
} from 'semantic-ui-react';

class Register extends React.Component {
  render() {
    return (
      <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='H2' icon color='orange' textAlign='center'>
            <Icon name='puzzle piece' color='orange' />
          </Header>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;

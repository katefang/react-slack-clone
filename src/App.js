import React from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';

import ColorPanel from './components/color-panel/color-panel';
import SidePanel from './components/side-panel/side-panel';
import MetaPanel from './components/meta-panel/meta-panel';
import Messages from './components/Messages/messages';

const App = () => (
  <Grid columns='equal' className='app' style={{ background: '#eee' }}>
    <ColorPanel />
    <SidePanel />

    <Grid.Column style={{ marginLeft: 320 }}>
      <Messages />
    </Grid.Column>

    <Grid.Column width={4}>
      <MetaPanel />
    </Grid.Column>
  </Grid>
);

export default App;

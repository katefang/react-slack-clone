import { combineReducers } from 'redux';
import channel_reducer from './channel-reducer';
import user_reducer from './user-reducer';

const rootReducer = combineReducers({
  user: user_reducer,
  channel: channel_reducer
});

export default rootReducer;

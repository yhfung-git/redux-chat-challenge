// External
import { configureStore } from '@reduxjs/toolkit';
import reduxPromise from 'redux-promise';
// import { logger } from 'redux-logger';

// Internal
import channelsReducer from './channels_reducer';
import messagesReducer from './messages_reducer';
import selectedChannelReducer from './selected_channel_reducer';
import currentUserReducer from './current_user_reducer';


const reducers = configureStore({
  reducer: {
    channels: channelsReducer,
    selectedChannel: selectedChannelReducer,
    messages: messagesReducer,
    currentUser: currentUserReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(reduxPromise)
});

export default reducers;

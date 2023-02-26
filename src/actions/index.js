const link = 'https://wagon-chat.herokuapp.com';

export const SET_MESSAGES = 'SET_MESSAGES';
export const SELECTED_CHANNEL = 'SELECTED_CHANNEL';
export const CURRENT_USER = 'CURRENT_USER';
export const SET_CHANNELS = 'SET_CHANNELS';

export function setMessages(channel) {
  const url = `${link}/${channel}/messages`
  const promise = fetch(url).then(res => res.json());

  return {
    type: SET_MESSAGES,
    payload: [
      {
        "id": 1,
        "author": "Boris",
        "content": "Salut",
        "channel": "general",
        "created_at": "2014-11-06T14:23:26.104Z",
        "updated_at": "2014-11-06T14:23:26.104Z"
      },
      {
        "id": 2,
        "author": "Seb",
        "content": "Yo",
        "channel": "general",
        "created_at": "2014-11-06T14:23:49.323Z",
        "updated_at": "2014-11-06T14:23:49.323Z"
      }
    ]
  };
}

export function selectChannel(channel) {
  return {
    type: SELECTED_CHANNEL,
    payload: channel
  }
}

export function currentUser(username) {
  return {
    type: CURRENT_USER,
    payload: username
  }
}

export function setChannels() {
  return {
    type: SET_CHANNELS,
    payload: ['general', 'react', 'paris']
  }
}

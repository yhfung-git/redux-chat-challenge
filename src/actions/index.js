export const SET_MESSAGES = 'SET_MESSAGES';
export const SELECTED_CHANNEL = 'SELECTED_CHANNEL';
export const CURRENT_USER = 'CURRENT_USER';
export const SET_CHANNELS = 'SET_CHANNELS';
export const NEW_MESSAGE = 'NEW_MESSAGE';

const link = 'https://wagon-chat.herokuapp.com';

export function setMessages(channel) {
  const url = `${link}/${channel}/messages`;
  const promise = fetch(url).then(res => res.json());

  return {
    type: SET_MESSAGES,
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const url = `${link}/${channel}/messages`;
  const body = { author, content }; // ES6 destructuring
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json());

  return {
    type: NEW_MESSAGE,
    payload: promise
  }
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

import axios from "axios";

//ACTION TYPES
const ADD_MESSAGE = 'ADD_MESSAGE';

//ACTION CREATORS
const addMessage = message => ({type: ADD_MESSAGE, message})

//THUNK CREATORS
export function fetchMessages() {
  return function thunk(dispatch) {
    return axios.get('/api/messages')
      .then(res => res.data)
      .then(messages => dispatch(getMessages(messages)))
      .catch(err => console.err('error fetching messages', err))
  }
}

export function postMessage(message, ownProps) {
  return function thunk(dispatch) {
    return axios.post('/api/messages', message)
    .then(res => addMessageAndRedirect(res.data, ownProps, dispatch))
    .catch(err => console.log(err, "failed to post message"))
  }
}

//REDUCER
export default function reducer(messages = [], action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...messages, action.message]
    default:
      return messages
  }
}

//HELPER FUNCTIONS
function addMessageAndRedirect(message, ownProps, dispatch) {
  dispatch(addMessage(message));
  ownProps.history.push('/messages');
}
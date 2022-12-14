import axios from 'axios';

const fetchGreeting = async () => {
  const response = await axios.get('v1/greetings')
  return response.data
}

const initialState = {
  greeting: '',
}

const GET_GREETING_REQUEST = '/greeting/GET_GREETING_REQUEST';

const getGreeting = async (dispatch) => {
  const greeting = await fetchGreeting();
  return dispatch({
    type: GET_GREETING_REQUEST,
    payload: greeting,
  });
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING_REQUEST:
      return { ...state, greeting: action.payload };

    default:
      return state;
  }
}

export default greetingReducer;
export { getGreeting };

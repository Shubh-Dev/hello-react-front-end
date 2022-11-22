import axios from 'axios';

const GET_GREETING = 'hello-react-front-end/greetings/GET_GREETING';

const fetchGreetings = (payload) => ({
  type: GET_GREETING,
  payload,
});

const initialState = [];

export const fetchGreetingsApi = () => async (dispatch) => {
  const value = await axios.get('http://127.0.0.1:3000/api/v1/greetings');
  const greeting = value.data.message;
  dispatch(fetchGreetings(greeting));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;

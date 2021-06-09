const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

export const decrement = () => dispatch => dispatch({ type: DECREMENT });

export const increment = () => dispatch => dispatch({ type: INCREMENT });

export const reset = () => dispatch => dispatch({ type: RESET, payload: 666 });

export const counterReducer = (state = { count: 666 }, action) => {
	switch (action.type) {
		case INCREMENT:
			return { ...state, count: state.count + 1 };
		case DECREMENT:
			return { ...state, count: state.count - 1 };
		case RESET:
			return { ...state, count: action.payload };
		default:
			return state;
	}
};

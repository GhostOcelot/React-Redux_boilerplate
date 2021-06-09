const CHANGEUSER = 'CHANGEUSER';

export const changeUser = () => dispatch => {
	fetch('https://randomuser.me/api')
		.then(res => res.json())
		.then(data => {
			dispatch({ type: CHANGEUSER, payload: data });
		});
};

export const userReducer = (state = {}, action) => {
	switch (action.type) {
		case CHANGEUSER:
			return { user: action.payload.results[0] };
		default:
			return state;
	}
};

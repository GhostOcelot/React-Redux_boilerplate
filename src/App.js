import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './reducers/counterReducer';
import { changeUser } from './reducers/userReducer';

function App() {
	const count = useSelector(state => state.counterReducer.count);
	const user = useSelector(state => state.userReducer.user);
	const dispatch = useDispatch();
	useEffect(() => dispatch(changeUser()), []);

	return (
		<div className="App">
			<h1>{count}</h1>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(reset())}>reset</button>
			<button onClick={() => dispatch(changeUser())}>change user</button>
			{user && (
				<div>
					<h1>
						{user.name.first} {user.name.last}
					</h1>
					<img style={{ borderRadius: '50%' }} src={user.picture.large} alt="pic" />
				</div>
			)}
		</div>
	);
}

export default App;

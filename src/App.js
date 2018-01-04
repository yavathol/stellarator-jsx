import React, {Component} from 'react';

class App extends Component {
	render() {
		return (
			<div>
				{/*
					Component:
						Button

					Props:
						type (possible values: primary - default / secondary / disabled / loading)
				*/}



				{/*
					Component:
						Text

					Props:
						heading (possible values: true / false - default)
						size (possible values: small / medium - default / large)
				*/}



				{/*
					Component:
						Notification

					Props:
						type (possible values: success / danger / info - default)
				*/}



				{/*
					Component:
						Input

					Props:
						type (email / text - default / phone / textarea / password)
						name (string)
						placeholder (string)
						label (string)
						value (string)
						size (possible values: small / medium - default / large)
						error (string)
				*/}



				{/*
					Component:
						Form

					Props:
						config (array of objects) - required
				*/}


			</div>
		);
	}
}

export default App;

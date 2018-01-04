const formConfig = [
	{
		name: 'firstName',
		placeholder: 'Enter your first name',
		label: 'Your first name',
		size: 'large'
	},
	{
		name: 'lastName',
		placeholder: 'Enter your last name',
		label: 'Your last name',
		size: 'large'
	},
	{
		name: 'email',
		type: 'email',
		placeholder: 'Enter your email address',
		label: 'Your email',
		value: 'user@gmail.com'
	},
	{
		name: 'password',
		type: 'password',
		placeholder: 'Enter your password',
		label: 'Your password'
	},
	{
		name: 'confirmPassword',
		type: 'password',
		placeholder: 'Confirm your password',
		label: 'Confirm password',
		error: 'Your passwords don\'t match'
	}
];

export default formConfig;

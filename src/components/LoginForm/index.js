import React from 'react';
import Input from '../Input'
import Button from '../Button'
import './styles.css'


class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            pass: null
        };
        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(event) {
        event.preventDefault();
        console.log(this.state)
    }

    emailChanged(event) {
        this.setState({email: event.target.value});
    }

    passwordChanged(event) {
        this.setState({pass: event.target.value});
    }

    render() {
        return (
            <form>
                <Input label="Email address" name="email" type="email" onInputChange={(e) => this.emailChanged(e)} />
                <br />
                <Input label="Password" name="pass" type="password" onInputChange={(e) => this.passwordChanged(e)} />
                <br />
                <Button onButtonClick={(e) => this.onSubmit(e)}>Submit</Button>
            </form>
        );
    }
}

export default LoginForm;
import React, {Component} from 'react';
import Button from './components/Button';
import Text from './components/Text';
import Notification from "./components/Notification";
import Input from "./components/Input";
import LoginForm from "./components/LoginForm";
import Form from "./components/Form";
import formConfig from "./config/form.js"

function handleButtonClick() {
    alert('ButtonClicked');
}

function handleButtonHello() {
    alert('Hello')
}

function handleChange(event) {
    alert(event.target.value)
}

class App extends Component {
    render() {
        return (
            <div>
                <Button type="secondary" onButtonClick={handleButtonHello}>
                    Hello
                </Button>
                <Button disabled>Disabled button</Button>
                <Button loading/>
                <Button onButtonClick={handleButtonClick}>Click</Button>

                <br/>

                <Text>This is a sample default text</Text>
                <br/>

                <Text heading size='large'>The heading</Text>
                <Text size='small'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempus est non metus mollis
                    dignissim. Vestibulum condimentum tincidunt ultrices. Fusce a felis mattis, pellentesque nunc ac,
                    pellentesque sapien. Sed nec lectus accumsan, dignissim sem eget, facilisis mauris. Suspendisse
                    volutpat massa at risus vehicula, ac luctus ipsum placerat. Praesent eget leo nulla. Suspendisse
                    dictum et sapien a pharetra. Nunc eget rhoncus turpis. Cras quis diam dictum, pellentesque risus a,
                    blandit nibh. Nullam viverra, diam vitae auctor pellentesque, elit sem imperdiet odio, in maximus
                    augue odio id leo. Vestibulum dignissim eu enim sed eleifend. Curabitur ut nunc ut ligula malesuada
                    viverra ut vitae enim. Donec sodales, orci efficitur imperdiet tempus, magna sem blandit purus, quis
                    imperdiet libero nibh quis lorem. Sed id malesuada metus, eget pulvinar enim. Quisque vulputate
                    cursus iaculis.
                </Text>

                <br/>

                <Notification>A default notification</Notification>
                <Notification type='danger'>Something nasty happened</Notification>
                <Notification type='success'>YES!</Notification>

                <br/>

                <Input/>
                <br/>
                <form>
                    <Input type='email' size='large' placeholder='Enter email address...' label='Email address'
                           onInputChange={handleChange} name='emailAddress'/>
                    <br/>
                    <Input type='textarea' label='TextArea'/>
                    <br/>
                    <Input name='phone' type='phone' size='small' label='Phone'/>
                    <br/>
                    <Input type='password' error='Password must have at least 8 characters.'/>
                </form>

                <hr/>

                <LoginForm />
                <hr/>

                <Form config={formConfig}/>

            </div>
        );
    }
}

export default App;

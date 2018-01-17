import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import Input from "../Input";

function Form({config}) {

    const elements = config.map(element => {
        return (
            <Input key={element.name} {...element}/>
        );
    });

    return (
        <form>
            {elements}
        </form>
    );

}


Form.propTypes = {
    config: PropTypes.array.isRequired
};

export default Form;
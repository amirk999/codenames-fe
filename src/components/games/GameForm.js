import React from 'react';
import { Field, reduxForm } from 'redux-form';

class GameForm extends React.Component {

    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    renderInput = ({ input, label }) => {
        return (
            <div className="mb-3">
                <label className="form-label">{label}</label>
                <input {...input} type="text" className="form-control" />
            </div>
        );
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} autocomplete="off">
                <Field name="name" label="Game Name" component={this.renderInput} />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.name) {
        errors.name = 'Please specify a game name'
    }

    return errors;
}

export default reduxForm({
    form: 'gameForm',
    validate
})(GameForm);
import React, { Component } from 'react';

export default (WrappedComponent, getInitialState) => {
    return class FormComponent extends Component {
        state = getInitialState(this.props)

        onChangeField = field => event => {
            this.setState({
                [field]: event.target.value
            });
        }

        render() {
            return <WrappedComponent {...this.props} onChangeField={this.onChangeField} formValues={this.state} />;
        }
    }
}

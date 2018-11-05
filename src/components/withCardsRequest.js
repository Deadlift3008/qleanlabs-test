import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getCards } from '../actions/appActions';

export default WrappedComponent => {
    class RequestComponent extends Component{
        static propTypes = {
            getCards: PropTypes.func.isRequired,
            cards: PropTypes.array.isRequired
        }

        componentDidMount() {
            this.props.getCards();
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    return connect(state => ({ cards: state.cards }), { getCards })(RequestComponent);
}

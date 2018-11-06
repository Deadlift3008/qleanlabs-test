import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ModalWrap from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';

import { closeModal } from '../actions/appActions';
import CardForm from './CardForm';

class Modal extends Component {
    static propTypes = {
        modal: PropTypes.object.isRequired,
        closeModal: PropTypes.func.isRequired
    }

    render() {
        const { modal: { data, open }, closeModal } = this.props;

        return (
            <ModalWrap open={open} onClose={closeModal}>
                <Paper className="modal">
                    <CardForm data={data} />
                </Paper>
            </ModalWrap>
        );
    }
}

export default connect(state => ({ modal: state.modal }), { closeModal })(Modal);

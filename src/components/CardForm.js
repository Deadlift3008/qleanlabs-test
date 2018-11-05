import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { updateCard } from '../actions/appActions';

const Field = ({ label, text }) => (
    <div>
        <Typography component="h4">{ label }</Typography>
        <Typography component="p">{ text }</Typography>
    </div>
);

class CardForm extends Component {
    static propTypes = {
        updateCard: PropTypes.func.isRequired,
        data: PropTypes.object.isRequired
    }

    state = {
        body: this.props.data.body
    }

    onChangeBody = event => {
        this.setState({ body: event.target.value });
    }

    render() {
        const { name, email, updateCard } = this.props.data;

        return (
            <div>
                <Paper>
                    <Typography component="h2">Редактирование поля</Typography>
                    <Field label="Имя" text={name} />
                    <Field label="Email" text={email} />
                    <TextField
                        label="Поле карточки"
                        multiline
                        rowsMax="6"
                        value={this.state.body}
                        onChange={this.onChangeBody}
                    />
                    <Button onClick={() => updateCard({ ...this.props.data, body: this.state.body })} color="primary">
                        Применить
                    </Button>
                </Paper>
            </div>
        );
    }
}

export default connect(null, { updateCard })(CardForm);

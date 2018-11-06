import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import withForm from './withForm';
import { updateCard, closeModal } from '../actions/appActions';

const Field = ({ label, text }) => (
    <Grid item>
        <Typography component="h4">{ label }</Typography>
        <Typography component="p">{ text }</Typography>
    </Grid>
);

class CardForm extends Component {
    static propTypes = {
        updateCard: PropTypes.func.isRequired,
        data: PropTypes.object.isRequired,
        closeModal: PropTypes.func.isRequired,
        formValues: PropTypes.object.isRequired,
        onChangeField: PropTypes.func.isRequired
    }

    onApply = () => {
        const { updateCard, closeModal, formValues } = this.props;
        updateCard({
            ...this.props.data,
            body: formValues.body
        });
        closeModal();
    }

    render() {
        const { name, email } = this.props.data;
        const { onChangeField, formValues } = this.props;

        return (
            <div className="card-form">
                <Paper>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography component="h3" variant="h6">Редактирование поля</Typography>
                        </Grid>
                        <Field label="Имя" text={name} />
                        <Field label="Email" text={email} />
                        <Grid item>
                            <TextField
                                label="Поле карточки"
                                multiline
                                rowsMax="10"
                                value={formValues.body}
                                onChange={onChangeField('body')}
                            />
                        </Grid>
                    </Grid>
                    <Button onClick={this.onApply} color="primary" variant="contained">
                        Применить
                    </Button>
                </Paper>
            </div>
        );
    }
}

export default connect(null, { updateCard, closeModal })(
    withForm(CardForm, props => ({ body: props.data.body }))
);

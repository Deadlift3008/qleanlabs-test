import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default class CardListItem extends Component {
    static propTypes = {
        onCardClick: PropTypes.func.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        email: PropTypes.string,
        body: PropTypes.string
    }

    shouldComponentUpdate(nextProps) {
        return this.props.body !== nextProps.body;
    }

    render() {
        const { onCardClick, name, email, body, id } = this.props;

        return (
            <ListItem onClick={onCardClick} className="list-item">
                <Grid container direction="column">
                    <Grid item>
                        <Typography component="h4">Карточка номер { id }</Typography>
                    </Grid>
                    <Grid item>
                        <ListItemText
                            primary={name}
                            secondary={email}/>
                    </Grid>
                    <Grid item>
                        <Typography component="p">
                            {body}
                        </Typography>
                    </Grid>
                </Grid>
            </ListItem>
        )
    }
}

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const CardListItem = ({ onCardClick, name, email, body, id }) => (
    <ListItem onClick={onCardClick}>
        <Typography component="h4">Карточка номер { id }</Typography>
        <ListItemText
            primary={name}
            secondary={email}
        />
        <Typography component="p">
            {body}
        </Typography>
    </ListItem>
);

export default CardListItem;

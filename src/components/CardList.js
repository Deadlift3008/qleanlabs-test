import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import withCardsRequest from './withCardsRequest';
import { openModal, sendCards } from '../actions/appActions';
import CardListItem from './CardListItem';

class CardList extends Component {
    static propTypes = {
        openModal: PropTypes.func.isRequired,
        cards: PropTypes.array.isRequired,
        sendCards: PropTypes.func.isRequired
    }

    render() {
        const { cards, openModal, sendCards } = this.props;

        return (
            <div>
                <Button
                    className="button-send"
                    variant="contained"
                    color="default"
                    onClick={() => sendCards(cards)}>
                    Отправить
                </Button>
                <Grid container className="cardlist-container">
                    <List>
                        { cards.map(item => (
                            <Grid key={item.id} item xs={12} sm={6}>
                                <Paper>
                                    <CardListItem
                                        name={item.name}
                                        email={item.email}
                                        body={item.body}
                                        id={item.id}
                                        onCardClick={() => openModal(item)}
                                    />
                                </Paper>
                            </Grid>
                        )) }
                    </List>
                </Grid>
            </div>
        );
    }
}

export default withCardsRequest(
    connect(null, { openModal, sendCards })(CardList)
);

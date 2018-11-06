import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

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
                <div className="button-send">
                    <Button
                        variant="contained"
                        color="default"
                        onClick={() => sendCards(cards)}>
                        Отправить
                    </Button>
                </div>
                <List className="cardlist-container">
                    { cards.map(item => (
                        <Paper key={item.id}>
                            <CardListItem
                                name={item.name}
                                email={item.email}
                                body={item.body}
                                id={item.id}
                                onCardClick={() => openModal(item)}
                            />
                        </Paper>
                    )) }
                </List>
            </div>
        );
    }
}

export default withCardsRequest(
    connect(null, { openModal, sendCards })(CardList)
);

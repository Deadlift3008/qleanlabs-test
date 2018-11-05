import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withCardsRequest from './withCardsRequest';
import { openModal } from '../actions/appActions';
import List from '@material-ui/core/List';
import CardListItem from './CardListItem';

class CardList extends Component {
    static propTypes = {
        openModal: PropTypes.func.isRequired,
        cards: PropTypes.array.isRequired
    }

    render() {
        const { cards, openModal } = this.props;

        return (
            <div>
                <List>
                    { cards.map(item => (
                        <CardListItem
                            name={item.name}
                            email={item.email}
                            body={item.body}
                            id={item.id}
                            onCardClick={() => openModal(item)}
                        />
                    )) }
                </List>
            </div>
        );
    }
}

export default withCardsRequest(
    connect(null, { openModal })(CardList)
);

import axios from 'axios';

import {
    GET_CARDS,
    OPEN_MODAL,
    CLOSE_MODAL,
    UPDATE_CARD,
    SEND_CARDS
} from '../constants/actionTypes';
import { CARDS } from '../constants/urls';

const createAction = (type) => (payload) => ({
    type,
    payload
});

export const getCards = () => {
    return (dispatch) => {
        dispatch(() => ({
            type: GET_CARDS,
            loading: true,
            error: false
        }));

        return axios.get(CARDS)
            .then(response => {
                dispatch({
                    type: GET_CARDS,
                    loading: false,
                    error: false,
                    payload: response.data
                });
            }, response => {
                dispatch({
                    type: GET_CARDS,
                    loading: false,
                    error: true,
                    payload: response
                });
            });
    }
};

export const sendCards = payload => {
    console.log(payload);

    return {
        type: SEND_CARDS
    }
};

export const openModal = createAction(OPEN_MODAL);
export const closeModal = createAction(CLOSE_MODAL);
export const updateCard = createAction(UPDATE_CARD);

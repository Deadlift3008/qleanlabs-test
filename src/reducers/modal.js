import { OPEN_MODAL, CLOSE_MODAL } from '../constants/actionTypes';

const initialState = {
    open: false
};

export default function modal(state = initialState, action) {
    switch(action.type) {
        case OPEN_MODAL:
            return {
                open: true,
                data: action.payload
            };
        case CLOSE_MODAL:
            return {
                open: false,
                data: {}
            };
        default:
            return state;
    }
}

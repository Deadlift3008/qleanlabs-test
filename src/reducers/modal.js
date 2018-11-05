import { OPEN_MODAL, CLOSE_MODAL } from '../constants/actionTypes';

export default function modal(state = {}, action) {
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

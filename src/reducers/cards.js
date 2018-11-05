import { GET_CARDS, SEND_CARDS, UPDATE_CARD } from '../constants/actionTypes';

const copy = (obj) => JSON.parse(JSON.stringify(obj));

export default function cards(state = [], action) {
    switch (action.type) {
        case GET_CARDS:
            return action.payload;
        case UPDATE_CARD:
            const { id } = action.payload;

            let arrayIndex;
            state.forEach((item, index) => item.id === id ? arrayIndex = index : null);

            const stateCopy = copy(state);
            stateCopy.splice(arrayIndex, 1, action.payload);

            return stateCopy;
        case SEND_CARDS:
            return state;
        default:
            return state;
    }
}

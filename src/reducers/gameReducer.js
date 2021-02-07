import {
    CREATE_GAME,
    FIND_GAME,
    GET_GAME_DETAILS,
    PLAY_CARD
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case CREATE_GAME:
            return { ...action.payload };
        case FIND_GAME:
            return { ...action.payload };
        case GET_GAME_DETAILS:
            return { ...action.payload };
        case PLAY_CARD:
            return { ...action.payload };
        default:
            return state;
    }
};
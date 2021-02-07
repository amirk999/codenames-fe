import codenames from '../api/codenames';
import history from '../history';
import {
    CREATE_GAME,
    FIND_GAME,
    PLAY_CARD,
    GET_GAME_DETAILS
} from './types';



export const createGame = (formValues) => {
    return async (dispatch) => {
        const response = await codenames.post('/games', formValues);

        dispatch({
            type: CREATE_GAME,
            payload: response.data.data
        });
        history.push(`/games/play/${response.data.data.id}`);
    };
};

export const getGameDetails = (id) => {
    return async (dispatch) => {
        const response = await codenames.get(`/games/${id}`);

        dispatch({
            type: GET_GAME_DETAILS,
            payload: response.data.data
        });
    };
};

export const findGame = (formValues) => {
    return async (dispatch) => {
        const response = await codenames.post('/games/search', formValues);

        dispatch({
            type: FIND_GAME,
            payload: response.data.data
        });
        history.push(`/games/play/${response.data.data.id}`);
    };
};

export const playCard = (cardDetails) => {
    return async (dispatch) => {
        const response = await codenames.post('/games/play', cardDetails);

        dispatch({
            type: PLAY_CARD,
            payload: response.data.data
        });
    };
};
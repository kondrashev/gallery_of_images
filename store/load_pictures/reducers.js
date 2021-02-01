import { PICTURES_FETCH_DATA_SUCCESS } from './actions';

export const PicturesReducer = (state = [], action) => {
    switch (action.type) {
        case PICTURES_FETCH_DATA_SUCCESS:
            return action.pictures;
        default:
            return state;
    }
}
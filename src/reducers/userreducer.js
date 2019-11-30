import { 
    SET_USER_PURCHASES
} from '../actions/types';

const INITAL_STATE = {
    purchases: []
}

export default function(state = INITAL_STATE, action) {
    switch (action.type) {
        case SET_USER_PURCHASES:
            return {
                ...state,
                purchases: action.payload
            }
        default: return state;
    }
}
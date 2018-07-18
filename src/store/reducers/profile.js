import { FETCHED, FETCHING, FAILED } from '../actions/ProfileActions'

const initialState = {
    info:  null,
    fetched: null,
    fetching: null,
    errorMsg: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHED:
            return {
                ...state,
                info: action.payload.info,
                fetched: true,
                fetching: null,
                errorMsg: '',
            }
        case FETCHING:
            return {
                ...state,
                items: null,
                fetched: null,
                fetching: true,
                errorMsg: '',
            }
        default:
            return state
    }
}
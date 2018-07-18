import { FETCHED, FETCHING, FAILED } from '../actions/NewsActions'

const initialState = {
    items:  null,
    fetched: null,
    fetching: null,
    errorMsg: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHED:
            return {
                ...state,
                items: action.payload.items,
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
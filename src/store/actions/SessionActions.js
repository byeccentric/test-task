import { messages } from "../../config/messages"

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'

export function logIn(params) {
    return dispatch => {
        fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/validate',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: params.username, password: params.password})
            })
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                if (data.status === 'ok') {
                    localStorage.user = data.data.id;
                    dispatch({
                        type: LOG_IN,
                        payload: {
                            id: data.data.id,
                        },
                    })
                } else {
                    dispatch({
                        type: LOG_IN_FAILURE,
                        payload: {
                            errorMsg: messages[data.message],
                        },
                        error: true, // https://github.com/redux-utilities/flux-standard-action
                    })
                }
            })
            .catch(function(error) {
                dispatch({
                    type: LOG_IN_FAILURE,
                    payload: {
                        errorMsg: messages['network_error'],
                    },
                    error: true, // https://github.com/redux-utilities/flux-standard-action
                })
            })
    }
}

export function logOut() {
    return dispatch => {
        localStorage.removeItem('user');
        dispatch({
            type: LOG_OUT,
            payload: {}
        })
    }
}
import { messages } from "../../config/messages"

export const FETCHED = 'PROFILE_FETCHED'
export const FETCHING = 'PROFILE_FETCHING'
export const FAILED = 'PROFILE_FAILED'

export function getInfo() {
    return function(dispatch) {
        dispatch({
            type: FETCHING
        })
        fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/' + localStorage.getItem('user'),
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                console.log(data)
                if (data.status === 'ok') {
                    data.data.social.sort(function(a,b) {
                        if (a.label === 'web')
                            return -1;
                        else if (b.label === 'web')
                            return 1;
                        else
                            return 0;
                    })
                    console.log(1);
                    dispatch({
                        type: FETCHED,
                        payload: {
                            info: data.data
                        },
                        error: false, // https://github.com/redux-utilities/flux-standard-action
                    })
                } else {
                    console.error(data);
                }
            })
            .catch(function(error) {
                console.log(error);
            })
    }
}
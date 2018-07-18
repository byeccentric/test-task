import { messages } from "../../config/messages"

export const FETCHED = 'NEWS_FETCHED'
export const FETCHING = 'NEWS_FETCHING'
export const FAILED = 'NEWS_FAILED'

export function getNews() {
    return function(dispatch) {
        dispatch({
            type: FETCHING
        })
        fetch('https://mysterious-reef-29460.herokuapp.com/api/v1/news',
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
                if (data.status === 'ok') {
                    dispatch({
                        type: FETCHED,
                        payload: {
                            items: data.data
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
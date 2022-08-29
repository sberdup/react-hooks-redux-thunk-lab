export function fetchCats() {
    return function (dispatch) {
        dispatch({ type: 'cats/catsLoading' })
        fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
            .then(resp => resp.json())
            .then(data => {
                // instead of logging here, call dispatch and send the cat JSON data to your store
                console.log(data.images)
                dispatch({type:'cats/catsLoaded', payload:data.images})
            });
    }
}

const initialState = {
    entities: [],
    status: 'idle'
}

export default function catsReducer(state = initialState, action) {
    switch (action.type) {
        case 'cats/catsLoading':
            return {
                ...state,
                status: 'loading'
            }
        case 'cats/catsLoaded':
            return {
                ...state,
                entities: action.payload,
                status: 'idle'
            }
        default:
            return state
    }
}

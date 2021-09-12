import {
    CHANGE_SEARCH_FIELD,
    GET_ROBOTS_PENDING,
    GET_ROBOTS_SUCCESS,
    GET_ROBOTS_FAILED
} from './constants.js'


const initialStateSF = {
    searchField: ''
}

const initialStateR = {
    isPending: false,
    robots: [],
    error: ''
}

export const searchRobots = (state = initialStateSF, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload }
        default:
            return state
    }
}

export const getRobotsReducer = (state = initialStateR, action = {}) => {
    switch (action.type) {
        case GET_ROBOTS_PENDING:
            return { ...state, isPending: true }
        case GET_ROBOTS_SUCCESS:
            return { ...state, isPending: false, robots: action.payload }
        case GET_ROBOTS_FAILED:
            return { ...state, isPending: false, error: action.payload }
        default:
            return state
    }
}


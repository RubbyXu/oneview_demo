
import _ from 'lodash'
import { retrieveUsers } from '../api/apis'

export const LOAD_USERS = 'LOAD_USERS';
export const SET_SELECTED_USER = 'SET_SELECTED_USER';

export const users = (state=[], action) => {
    switch(action.type){
        case LOAD_USERS: 
        return action.payload;
        default: 
        return state
    }
}

export const user = (state='', action) => {
    switch(action.type){
        case SET_SELECTED_USER: 
        return action.payload;
        default: 
        return state
    }
}

export const setUser = (user) => {
    return dispatch => {
        dispatch({type: SET_SELECTED_USER, payload: user}) 
    }
}
 
export const loadUsers = () => {
    return dispatch => {
        return new Promise(async (resolve, reject) => {
            try {
                const results = await retrieveUsers();
                const users = _.get(results, 'data', [])
             
                dispatch({type: LOAD_USERS, payload: users})
                resolve('')
            } catch (error) {
                // Need to add to logs
                console.log(`Load user list error ${error}`)
            }
        })
    }
}


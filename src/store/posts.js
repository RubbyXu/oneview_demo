
import _ from 'lodash'
import { retrievePost } from '../api/apis'

export const LOAD_USER_POST = 'LOAD_USER_POST';

export const posts = (state=[], action) => {
    switch(action.type){
        case LOAD_USER_POST: 
        return action.payload;
        default: 
        return state
    }
}


export const loadPost = (id) => {
    return async dispatch =>  {
       try {
        const results = await retrievePost(id);
        const posts = _.get(results, 'data', [])
        dispatch({type: LOAD_USER_POST, payload: posts})
       } catch (error) {
        console.log(`Load post list error ${error}`)
       }
    }
}
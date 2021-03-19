import {ADD_LIKE, ADD_POST, LOADING, REMOVE_LIKE, UPDATE_POSTS} from "./actionsType";

export const addPost = (post, id) => {
    return {
        type: ADD_POST,
        post,
        id
    }
}

const addLike = (postId) => {
    return {
        type: ADD_LIKE,
        postId
    }
}

const loading = () => ({type: LOADING})

export const updatePost = (newPosts) => {
    return dispatch => {
        let prom = new Promise((resolve, reject ) => {
            setTimeout(() => dispatch({
                type: UPDATE_POSTS,
                newPosts
            }) ,1500)
        })
        prom.then(dispatch(loading()))




    }
}

const removeLike = (postId) => {
    return {
        type: REMOVE_LIKE,
        postId
    }
}

export const like = (postId, isLike) => {
    return (dispatch, getState) => {

        if (isLike) {
            dispatch(addLike(postId))
        } else {
            dispatch(removeLike(postId))
        }
    }
}
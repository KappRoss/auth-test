import {ADD_LIKE, ADD_POST, LOADING, REMOVE_LIKE, UPDATE_POSTS} from "../actions/actionsType";

const initialState = {
    loading: true,
    firstPost: [
        {
            id: 1,
            imgSrc: '',
            text: 'test post 1',
            likes: 1,
            isLiked: false,
            comments: [
                {
                    text: 'cool comment 1'
                },
                {
                    text: 'cooler comment 2'
                },
            ]
        },
        {
            id: 2,
            imgSrc: 'https://giphy.com/gifs/ebFG4jcnC1Ny8/html5',
            text: 'test post 1',
            likes: 20,
            comments: [
                {
                    text: 'cool comment'
                }
            ]
        },
        {
            id: 3,
            imgSrc: 'https://giphy.com/gifs/ebFG4jcnC1Ny8/html5',
            text: 'test post 1',
            likes: 20,
            comments: [
                {
                    text: 'cool comment'
                }
            ]
        },
        {
            id: 4,
            imgSrc: '',
            text: 'test post 1',
            likes: 20,
            isLiked: false,
            comments: [
                {
                    text: 'cool comment 1'
                },
                {
                    text: 'cooler comment 2'
                },
            ]
        },
        {
            id: 5,
            imgSrc: 'https://giphy.com/gifs/ebFG4jcnC1Ny8/html5',
            text: 'test post 1',
            likes: 20,
            comments: [
                {
                    text: 'cool comment'
                }
            ]
        },
    ],
    postsList: [

        {
            id: 6,
            imgSrc: 'https://giphy.com/gifs/ebFG4jcnC1Ny8/html5',
            text: 'test post 1',
            likes: 20,
            comments: [
                {
                    text: 'cool comment'
                }
            ]
        },
        {
            id: 7,
            imgSrc: '',
            text: 'test post 1',
            likes: 20,
            isLiked: false,
            comments: [
                {
                    text: 'cool comment 1'
                },
                {
                    text: 'cooler comment 2'
                },
            ]
        },
        {
            id: 8,
            imgSrc: 'https://giphy.com/gifs/ebFG4jcnC1Ny8/html5',
            text: 'test post 1',
            likes: 20,
            comments: [
                {
                    text: 'cool comment'
                }
            ]
        },
        {
            id: 9,
            imgSrc: 'https://giphy.com/gifs/ebFG4jcnC1Ny8/html5',
            text: 'test post 1',
            likes: 20,
            comments: [
                {
                    text: 'cool comment'
                }
            ]
        },
        {
            id: 10,
            imgSrc: '',
            text: 'test post 1',
            likes: 20,
            isLiked: false,
            comments: [
                {
                    text: 'cool comment 1'
                },
                {
                    text: 'cooler comment 2'
                },
            ]
        },
        {
            id: 11,
            imgSrc: 'https://giphy.com/gifs/ebFG4jcnC1Ny8/html5',
            text: 'test post 1',
            likes: 20,
            comments: [
                {
                    text: 'cool comment'
                }
            ]
        },
        {
            id: 12,
            imgSrc: 'https://giphy.com/gifs/ebFG4jcnC1Ny8/html5',
            text: 'test post 1',
            likes: 20,
            comments: [
                {
                    text: 'cool comment'
                }
            ]
        },
        {
            id: 13,
            imgSrc: '',
            text: 'test post 1',
            likes: 20,
            isLiked: false,
            comments: [
                {
                    text: 'cool comment 1'
                },
                {
                    text: 'cooler comment 2'
                },
            ]
        },
        {
            id: 14,
            imgSrc: 'https://giphy.com/gifs/ebFG4jcnC1Ny8/html5',
            text: 'test post 1',
            likes: 20,
            comments: [
                {
                    text: 'cool comment'
                }
            ]
        },
        {
            id: 3,
            imgSrc: 'https://giphy.com/gifs/ebFG4jcnC1Ny8/html5',
            text: 'test post 1',
            likes: 20,
            comments: [
                {
                    text: 'cool comment'
                }
            ]
        },
        {
            id: 1,
            imgSrc: '',
            text: 'test post 1',
            likes: 20,
            isLiked: false,
            comments: [
                {
                    text: 'cool comment 1'
                },
                {
                    text: 'cooler comment 2'
                },
            ]
        },
        {
            id: 2,
            imgSrc: 'https://giphy.com/gifs/ebFG4jcnC1Ny8/html5',
            text: 'test post 1',
            likes: 20,
            comments: [
                {
                    text: 'cool comment'
                }
            ]
        },
        {
            id: 3,
            imgSrc: 'https://giphy.com/gifs/ebFG4jcnC1Ny8/html5',
            text: 'test post 1',
            likes: 20,
            comments: [
                {
                    text: 'cool comment'
                }
            ]
        }
    ]
}

export default function postsReducer(state = initialState, action) {

    switch (action.type) {
        case UPDATE_POSTS:
            return {
                ...state,
                firstPost: state.firstPost.concat(action.newPosts)
            }
        case LOADING:
            return {
                ...state,
                loading: false
            }
        case ADD_POST:
            return {
                ...state,
                postsList: [...state.postsList, {
                    id: action.id,
                    imgSrc: '',
                    text: action.post,
                    likes: 0,
                    isLiked: false,
                    comments: []
                }]
            }
        case ADD_LIKE:

            return {
                ...state,
                postsList: state.postsList.map(post => post.id === action.postId
                    ? {...post, likes: post.likes + 1} : post)
            }
        case
        REMOVE_LIKE:
            return {
                ...state,
                postsList: state.postsList.map(post => post.id === action.postId
                    ? {...post, likes: post.likes - 1} : post)
            }
        default:
            return state
    }
}
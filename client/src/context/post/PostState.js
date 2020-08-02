import React, { useReducer } from 'react';
import axios from 'axios';
import {v4 as uuid} from 'uuid';
import postContext from './postContext';
import postReducer from './postReducer';
import {
    GET_POSTS,
    ADD_POST,
    DELETE_POST,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_POST,
    FILTER_POSTS,
    CLEAR_FILTER,
    POST_ERROR
} from '../types';

const PostState = props => {
    const initialState = {
        posts: [],
        current: null,
        filtered: null,
        error: null
    };

    const [state, dispatch] = useReducer(postReducer, initialState);

    //Get Posts
  const getPosts = async () => {
    try {
      const res = await axios.get('/api/posts');

      dispatch({
        type: GET_POSTS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err.response.msg,
      });
    }
  };

    // Add Post
        const addPost = async post => {
            const config ={
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            try {
                const res = await axios.post('/api/posts', post, config)

                dispatch({type: ADD_POST , payload: res.data});
            } catch (err) {
                dispatch({
                    type: POST_ERROR,
                    payload: err.response.msg
                })
            }
            
        }
    // Delete Post
        const deletePost = id => {
            dispatch({type: DELETE_POST , payload: id});
        }

    // Set Current Post
        const setCurrent = post => {
            dispatch({type: SET_CURRENT , payload: post});
        }

    // Clear Current Post
        const clearCurrent = () => {
            dispatch({type: CLEAR_CURRENT });
        }

    // Update Post
        const updatePost= post => {
            dispatch({type: UPDATE_POST  , payload: post});
        }


    // Filter Posts
        const filterPosts= text => {
            dispatch({type: FILTER_POSTS  , payload: text});
        }

    // Clear Filter
        const clearFilter = () => {
            dispatch({type: CLEAR_FILTER });
        }

    return (
        <postContext.Provider 
         value={{
         posts: state.posts,
         current: state.current,
         filtered: state.filtered,
         error: state.error,
         addPost,
         deletePost,
         setCurrent,
         clearCurrent,
         updatePost,
         filterPosts,
         getPosts,
         clearFilter

         }}
         >
            {props.children}
        </postContext.Provider>
    );
};

export default PostState;
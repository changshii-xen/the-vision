import {
  GET_POSTS,
  ADD_POST,
  DELETE_POST,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_POST,
  FILTER_POSTS,
  CLEAR_POSTS,
  CLEAR_FILTER,
  POST_ERROR,
} from "../types";

// "heroku-postbuild": "cd client && npm install && npm run build"

export default (state, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false,
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
        loading: false,
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(
          post => (post.id === action.payload.id ? action.payload : post)
        ),
        loading: false,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_POSTS:
      return {
        ...state,
        filtered: state.posts.filter(post => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return post.tag.match(regex) || post.content.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case POST_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

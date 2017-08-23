import { combineReducers } from 'redux';
// import { combineReducers } from 'redux-immutable';
// import { Map } from 'immutable';
import blogTypeVisibilityFilter from './blogTypeVisibilityFilter';
import data from '../data';

const initialState = data.data;


// const initState = Map(data.data)

const blogs = (state = initialState,action)=>{
  return state
}

// const todoBlog = (state={},action)=>{
//   return{
//     blogTypeVisibilityFilter:blogTypeVisibilityFilter(state.blogTypeVisibilityFilter,action),
//     blogs:blogs(state.blogs,action)
//   }
// }

const todoBlog = combineReducers({
  blogTypeVisibilityFilter,
  blogs
})

export default todoBlog;
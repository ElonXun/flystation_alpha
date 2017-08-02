import { combineReducers } from 'redux';
import blogTypeVisibilityFilter from './blogTypeVisibilityFilter';
import data from '../data';

const initState = {
  blogs:data.data,
}

const todoBlog = (state = initState,action)=>{
  return{
    blogTypeVisibilityFilter:blogTypeVisibilityFilter(state.blogTypeVisibilityFilter,action),
    blogs:state.blogs
  }
}

export default todoBlog;
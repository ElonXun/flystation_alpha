import { combineReducers } from 'redux';
// import { combineReducers } from 'redux-immutable';
import blogTypeVisibilityFilter from './blogTypeVisibilityFilter';



// const initState = Map(data.data)

const blogs = (state=[] ,action)=>{
  return state
}

// const todoBlog = (state,action)=>{
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
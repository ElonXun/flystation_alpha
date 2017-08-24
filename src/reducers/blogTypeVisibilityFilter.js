// state = 'SHOW_ALL_BLOG'

const blogTypeVisibilityFilter = (state=[], action)=>{
  switch (action.type) {
    case 'BLOG_TYPE_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default blogTypeVisibilityFilter;
const blogTypeVisibilityFilter = (state = 'SHOW_ALL_BLOG', action)=>{
  switch (action.type) {
    case 'BLOG_TYPE_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default blogTypeVisibilityFilter;
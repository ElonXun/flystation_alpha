
const blogs = (state=[] ,action)=>{
  switch (action.type){
    case 'SAVE_BLOGS':
      return action.data
    default:
      return state
  }
}

export default blogs
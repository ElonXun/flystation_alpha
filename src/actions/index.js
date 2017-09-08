import AsyncFetch from '../utils/common';

export const blogTypeVisibilityFilter = (filter) => ({
  type: 'BLOG_TYPE_VISIBILITY_FILTER',
  filter
})

//返回一个action对象，用来关联对应的reducer，将data保存到store。
const saveBlogs = (data) => ({
  type: 'SAVE_BLOGS',
  data
})

//get接口测试，传入一个参数id，请求/test/:id接口，返回response并且将数据通过指定的action保存到store。
export const getBlogs = (url) =>(dispatch) => {
  // console.log('1')
  // try {
  //   let response = await AsyncFetch('get',url)
  //   await dispatch(saveBlogs(response.data))
  // } catch (error) {
  //   console.log('error: ', error)
  // }
  return AsyncFetch('get',url).then((json)=>{
    // console.log(json.data.blogs)
    return dispatch(saveBlogs(json.data.blogs))
  })
}
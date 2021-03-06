import React from 'react';
import Navigator from '../../components/public/navigator/navigator';
import HomeContent from '../../components/public/homeContent/homeContent';
import { connect } from 'react-redux';
import { blogTypeVisibilityFilter,getBlogs } from '../../actions/index';
import AsyncFetch from '../../utils/common';
import { is } from 'immutable';
import {HOST} from '../../utils/config';

class home extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      data:this.props.blogs,
      allTags:[],
    }
  }
  componentWillMount(){
    //HOST => localhost
    this.props.getBlogs(HOST+'api/query')
    AsyncFetch('get',HOST+'api/getAllBlogTags')
        .then((res)=>{
          this.setState({
            allTags:res.data.blogTags,
          })
          // console.log('getAllBlogTags',res)
        })
  }

  componentDidMount(){
     
  }

  componentWillReceiveProps(newProps) {

  }
  /*shouldComponentUpdate(nextProps, nextState) {
    const thisProps = this.props || {};
    const thisState = this.state || {};
    nextState = nextState || {};
    nextProps = nextProps || {};

    if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
        Object.keys(thisState).length !== Object.keys(nextState).length) {
      return true;
    }

    for (const key in nextProps) {
      if (!is(thisProps[key], nextProps[key])) {
        return true;
      }
    }

    for (const key in nextState) {
      if (!is(thisState[key], nextState[key])) {
        return true;
      }
    }
    return false;
  }*/

  render(){
    return(
       <div>
         <Navigator onclick={this.props.onclick} currentTag={'home'} {...this.props}/>
         <HomeContent blogs={this.props.blogs} {...this.props} blogTags={this.state.allTags}/>
       </div>
    )
  }
}

const getVisibleBlogs = (blogs, filter) => {
  switch (filter) {
    case 'SHOW_ALL_BLOG':
      return blogs
    case 'SHOW_REALSTUFF':
      return blogs.filter(t => t.blogTape === 0)
    case 'SHOW_NOTE':
      return blogs.filter(t => t.blogTape === 1)
    case 'SHOW_TRAVEL':
      return blogs.filter(t => t.blogTape === 2)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  blogs: getVisibleBlogs(state.blogs,state.blogTypeVisibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
  onclick: (filter)=> {
    dispatch(blogTypeVisibilityFilter(filter))
  },
  getBlogs:(url)=>{
    dispatch(getBlogs(url))
  }
})


export default connect(mapStateToProps,mapDispatchToProps)(home)
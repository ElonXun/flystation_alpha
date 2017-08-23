import React from 'react';
import Navigator from '../../components/public/navigator/navigator';
import HomeContent from '../../components/public/homeContent/homeContent';
import { connect } from 'react-redux';
import { blogTypeVisibilityFilter } from '../../actions/index';
import { is } from 'immutable';


class home extends React.Component{

  constructor(props) {
    super(props);
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
    console.log('父组件 home  render ')
    return(
       <div>
         <Navigator onclick={this.props.onclick}/>
         <HomeContent blogs={this.props.blogs}/>
       </div>
    )
  }
}

const getVisibleBlogs = (blogs, filter) => {
  switch (filter) {
    case 'SHOW_ALL_BLOG':
      return blogs
    case 'SHOW_REALSTUFF':
      return blogs.filter(t => t.blogType === 0)
    case 'SHOW_NOTE':
      return blogs.filter(t => t.blogType === 1)
    case 'SHOW_TRAVEL':
      return blogs.filter(t => t.blogType === 2)
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
  }
})


export default connect(mapStateToProps,mapDispatchToProps)(home)
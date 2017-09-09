import React, { Component } from 'react';

class addBlog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      blogDetails:{}
    }
  }

  componentWillMount(){
  }

  componentDidMount(){
    // console.log(this.props.location.pathname)
    // console.log(this.props.match.params.id)
  }

  render() {
    // console.log('拿到了',this.state.blogDetails)
    return (
        <div style={{height:'100%'}}>
          添加博客
        </div>
    )
  }

}

export default addBlog
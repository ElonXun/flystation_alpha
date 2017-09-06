import React, { Component } from 'react'
import Navigator from '../navigator/navigator';
import BlogContent from '../blogContent';
import { Layout, Menu, Icon, Row, Col, Avatar } from 'antd';
import AsnycFetch from '../../../utils/common';
import styles from './a.css';

// var blogDetails = {}

class a extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      blogDetails:{}
    }
  }

  componentWillMount(){
    AsnycFetch('post','http://localhost:3001/api/blogDetails',{blogId:this.props.match.params.id})
        .then((res)=>{
          this.setState({
            blogDetails:res.data.blogDetails
          })
        })
  }

  componentDidMount(){
    // console.log(this.props.location.pathname)
    // console.log(this.props.match.params.id)
  }

  render() {
    // console.log('拿到了',this.state.blogDetails)
    return (
        <div style={{height:'100%'}}>
          <Navigator noBlogFilter={true} {...this.props}/>
          <Row className={styles.blogWrap}>
            <Col xs={0} md={6}/>
            <Col xs={24} md={12}>
              <BlogContent blogDetails={this.state.blogDetails}/>
            </Col>
            <Col xs={0} md={6}/>
          </Row>
        </div>
    )
  }

}

export default a
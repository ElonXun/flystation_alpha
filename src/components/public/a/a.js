import React, { Component } from 'react'
import Navigator from '../../../containers/filterNavigator';
import BlogContent from '../blogContent';
import { Layout, Menu, Icon, Row, Col, Avatar } from 'antd';
import styles from './a.css';

class a extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount(){
    console.log(this.props.location.pathname)
  }

  render() {
    return (
        <div>
           <Navigator/>
          <Row>
            <Col xs={0} md={6} />
            <Col xs={24} md={12}>
              <BlogContent/>
            </Col>
            <Col xs={0} md={6} />
          </Row>
        </div>
    )
  }

}

export default a
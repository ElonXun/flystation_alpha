import React, { Component } from 'react';
import styles from './editBlog.css';
import AsyncFetch from '../../../utils/common';
import { Col,Row,Form, Button, Table, Icon } from 'antd';
import { HOST } from '../../../utils/config';


// const data = [{
//   key: '1',
//   name: 'John Brown',
//   age: 32,
//   address: 'New York No. 1 Lake Park',
// }, {
//   key: '2',
//   name: 'Jim Green',
//   age: 42,
//   address: 'London No. 1 Lake Park',
// }, {
//   key: '2',
//   name: 'Jim Green',
//   age: 42,
//   address: 'London No. 1 Lake Park',
// }, {
//   key: '3',
//   name: 'Joe Black',
//   age: 32,
//   address: 'Sidney No. 1 Lake Park',
// }];
class editBlog extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      blogData:[]
    })
  }

  componentDidMount(){
    let blogData = []
    AsyncFetch('get',HOST+'api/query').then((res)=>{
      res.data.blogs.map((val,index)=>{
        blogData.push(Object.assign(val,{ key:index }))
      })
      this.setState({
        blogData:blogData,
      })
    })
  }

  columns = [{
    title: '博客标题',
    dataIndex: 'blogTitle',
    key: 'blogTitle',
    // render: text => <a href="#">{text}</a>,
  }, {
    title: '博客头图',
    dataIndex: 'blogPicture',
    key: 'blogPicture',
  }, {
    title: '是否置顶',
    dataIndex: 'isTop',
    key: 'isTop',
  }, {
    title: '博客类型',
    dataIndex: 'blogTape',
    key: 'blogTape',
  }, {
    title: '操作',
    key: 'set',
    render: (text, record) => (
        <div>
          <Button>编辑</Button>
          <Button>删除</Button>
        </div>
    ),
  }];

  render() {
    // console.log('拿到了',this.state.blogDetails)
    return (
        <div>
          <Table columns={this.columns} dataSource={this.state.blogData} />
        </div>
    )
  }

}

export default editBlog
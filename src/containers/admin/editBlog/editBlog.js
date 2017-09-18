import React, { Component } from 'react';
import styles from './editBlog.css';
import AsyncFetch from '../../../utils/common';
import { Col,Row,Form, Button, Table, Icon, Modal,Tag,Select } from 'antd';
import { HOST } from '../../../utils/config';

const Option = Select.Option;

class editBlog extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      blogData:[],
      previewImage:'',
      previewVisible:false,
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

  handleCancel = () => this.setState({ previewVisible: false })

  columns=[{
    title: '博客标题',
    dataIndex: 'blogTitle',
    key: 'blogTitle',
    // render: text => <a href="#">{text}</a>,
  }, {
    title: '博客头图',
    dataIndex: 'blogPicture',
    key: 'blogPicture',
    render: src => <img src={src}
                        width={75}
                        height={50}
                        onClick={()=>{this.setState({ previewImage:src,previewVisible: true,})}}/>
  }, {
    title: '是否置顶',
    dataIndex: 'isTop',
    key: 'isTop',
    render:(isTop)=>(
        <Select defaultValue={isTop.toString()} style={{ width: 80 }}>
           <Option value={'0'}>不置顶</Option>
           <Option value={'1'}>置顶</Option>
        </Select>
    ),
  }, {
    title: '博客类型',
    dataIndex: 'blogTape',
    key: 'blogTape',
    // width:'80px',
    render:(blogTape) =>(
        <Tag color="blue">{blogTape =='0'?'干货':(blogTape=='1'?'杂记':'游记')}</Tag>
    ),
  }, {
    title: '操作',
    key: 'set',
    render: (text, record) => (
        <div>
          <Button type="primary" onClick={()=>{
            console.log(record)
            this.props.history.push('/admin/saveDetails/'+record._id)

          }}>编辑</Button>
          <Button type="danger">删除</Button>
        </div>
    ),
  }]

  render() {
    // console.log('拿到了',this.state.blogDetails)
    return (
        <div>
          <Table columns={this.columns} dataSource={this.state.blogData} />
          <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
          </Modal>
        </div>
    )
  }

}

export default editBlog
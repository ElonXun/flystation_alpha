import React, { Component } from 'react';
import styles from './addBlog.css';
import { Col,Row,Form,Input,Select,Upload,Modal,Icon, Tag, Tooltip, Button } from 'antd';
import {uploadPicture} from '../../../utils/common';
import E from 'wangeditor'
const FormItem = Form.Item;
const Option = Select.Option;


class PicturesWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: [],
    };
  }


  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (file) => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  uploadQiniu = (res)=>{
    uploadPicture(res.file,1,(url)=>{
      let fileList = [
        {
          uid: res.file.uid,
          name: res.file.name,
          status: 'done',
          url: url,
        }
      ]
       this.setState({
         fileList:fileList,
       })
    })
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
        <div>
          <Icon type="plus" />
          <div className="ant-upload-text">Upload</div>
        </div>
    );
    return (
        <div className="clearfix">
          <Upload
              // action="//jsonplaceholder.typicode.com/posts/"
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
              customRequest={this.uploadQiniu}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
          <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
            <img alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </div>
    );
  }
}


class EditableTagGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ['Unremovable', 'Tag 2', 'Tag 3'],
      inputVisible: false,
      inputValue: '',
    };
  }

  handleClose = (removedTag) => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  }

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  handleInputConfirm = () => {
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  }

  saveInputRef = input => this.input = input

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return (
        <div>
          {tags.map((tag, index) => {
            const isLongTag = tag.length > 20;
            const tagElem = (
                <Tag key={tag} closable={index > 2} afterClose={() => this.handleClose(tag)}>
                  {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                </Tag>
            );
            return isLongTag ? <Tooltip title={tag}>{tagElem}</Tooltip> : tagElem;
          })}
          {inputVisible && (
              <Input
                  ref={this.saveInputRef}
                  type="text"
                  size="small"
                  style={{ width: 78 }}
                  value={inputValue}
                  onChange={this.handleInputChange}
                  onBlur={this.handleInputConfirm}
                  onPressEnter={this.handleInputConfirm}
              />
          )}
          {!inputVisible && <Button size="small" type="dashed" onClick={this.showInput}>+ New Tag</Button>}
        </div>
    );
  }
}

class addBlog extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      editorContent: '',
    })
  }



  componentWillMount(){
  }

  componentDidMount() {
    const elem = this.refs.editorElem
    const editor = new E(elem)
    // 通过 url 参数配置 debug 模式。url 中带有 wangeditor_debug_mode=1 才会开启 debug 模式
    editor.customConfig.debug = 1;
    editor.customConfig.uploadImgServer = '/upload'  // 上传图片到服务器
    editor.customConfig.zIndex = 0
    // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
    editor.customConfig.onchange = html => {
      this.setState({
        editorContent: html
      })
    }

    editor.customConfig.customUploadImg = function (files, insert) {
      // files 是 input 中选中的文件列表
      // insert 是获取图片 url 后，插入到编辑器的方法

      // 上传代码返回结果之后，将图片插入到编辑器中
      // insert(imgUrl)
      let file = files[0]
      //七牛上传测试
      uploadPicture(file,0,(url)=>{
        insert(url)
      })
    }
    editor.create()
  }

  clickHandle() {
    alert(this.state.editorContent)
  }

  render() {
    // console.log('拿到了',this.state.blogDetails)
    return (
        <div className={styles.addBlogWrap}>
          <Row>
            <Col span={24}>
              <Form>
                <FormItem label={<span style={{float: 'left'}}>文章标题:</span>}
                          labelCol={{span: 3}}
                          wrapperCol={{span: 21}}
                          colon={false}>
                  <Input placeholder="请输入" style={{width: 200}} size={'default'}/>
                </FormItem>
                <FormItem label={<span style={{float: 'left'}}>展示图:</span>}
                          labelCol={{span: 3}}
                          wrapperCol={{span: 21}}
                          colon={false}>
                   <PicturesWall/>
                </FormItem>
                <FormItem label={<span style={{float: 'left'}}>文章分类:</span>}
                          labelCol={{span: 3}}
                          wrapperCol={{span: 21}}
                          colon={false}>
                  <Select placeholder="类型" style={{width: '200px', display: 'inline-block'}} size={'default'}>
                    <Option value="0">干货</Option>
                    <Option value="1">杂记</Option>
                    <Option value="2">游记</Option>
                  </Select>
                </FormItem>
                <FormItem label={<span style={{float: 'left'}}>文章标签:</span>}
                          labelCol={{span: 3}}
                          wrapperCol={{span: 21}}
                          colon={false}>
                    <EditableTagGroup/>
                </FormItem>
                <FormItem label={<span style={{float: 'left'}}>文章内容:</span>}
                          labelCol={{span: 3}}
                          wrapperCol={{span: 21}}
                          colon={false}>
                  <div ref="editorElem" style={{textAlign: 'left'}}>
                  </div>
                  <button onClick={this.clickHandle.bind(this)}>获取内容</button>
                </FormItem>
              </Form>
            </Col>
          </Row>
        </div>
    )
  }

}

export default addBlog
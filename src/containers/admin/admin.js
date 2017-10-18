import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Route } from 'react-router-dom';
import styles from './admin.css';
import asyncComponent from '../../asyncComponent';
import { isNoLogined } from '../../utils/common';




const { Header, Sider, Content } = Layout;

const AddBlog = asyncComponent(() =>
    import('./addBlog/addBlog')
)
const EditBlog = asyncComponent(() =>
    import('./editBlog/editBlog')
)

const SaveDetails =  asyncComponent(() =>
    import('./saveDetails/saveDetails')
)

class admin extends React.Component {

  constructor(props){
    super(props)
    this.state = ({
      collapsed: true,
    })
  }


  componentWillMount(){
    console.log(this.props.history)
    if(isNoLogined()){
      this.props.history.push('/login')
    }else{
      // this.props.history.push('/admin/addBlog')
    }
  }


  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  handleCick =(e)=>{
    switch(e.key){
      case '1' :
        this.props.history.push(`${this.props.match.url}`+'/addBlog');
        break;
      case '2':
        this.props.history.push(`${this.props.match.url}`+'/editBlog');
        break;
      case '3':
        break;
      default:
        break;
    }
  }

  render() {
    return (
        <div style={{height:'100%'}}>
          <Layout style={{height:'auto',minHeight: '100%'}}>
            <Sider
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}
            >
              <div className={styles.logo} />
              <Menu theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={this.handleCick}>
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span>发布博客</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span>编辑博客</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="upload" />
                  <span>其他</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                    className={styles.trigger}
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                />
              </Header>
              <Content style={{ margin: '24px 16px', background: '#fff', height: 'auto' }}>
                <Route path={`${this.props.match.url}`+'/addBlog'} component={AddBlog}/>
                <Route path={`${this.props.match.url}`+'/editBlog'} component={EditBlog}/>
                <Route path={`${this.props.match.url}`+'/saveDetails/:blogId'} component={SaveDetails}/>
              </Content>
            </Layout>
          </Layout>
        </div>
    )

  }

}

export default admin
import React from 'react';
import styles from './navigator.css';
import { Layout, Menu, Icon, Row, Col } from 'antd';
import { is,Map } from 'immutable';


const { Header } = Layout;
const SubMenu = Menu.SubMenu;

class navigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:Map({current: this.props.currentTag}),
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
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
  }

  handleClick = (e) => {
    console.log('click ', `${e.key}点击`);
    // console.log(this.state.data.get('current'),e.key)
    if(e.key === this.state.data.get('current')){
      return;
    }
    this.setState({
      data:this.state.data.set('current',e.key),
    },()=>{
      switch (e.key) {
        case 'home':
          if(this.props.location.pathname.indexOf('blogs') > 0){
            this.props.history.push('/');
          }else{
            this.props.onclick('SHOW_ALL_BLOG');
          }
          break;
        case 'realStuff': this.props.onclick('SHOW_REALSTUFF');
          break;
        case 'note':this.props.onclick('SHOW_NOTE');
          break;
        case 'travel':this.props.onclick('SHOW_TRAVEL');
          break;
        default:
          break;
      }
    });
  }
  render() {
    console.log('子组件里的 navigator render')
    return (
      <Layout>
        <Header className={styles.header}>
          <div>
            <Row>
              <Col xs={0} md={3} />
              <Col xs={24} md={18}>
                <div className={styles.logo}>
                  <img src={require('./img/logo-50.png')} height={50} width={50} />
                </div>
                <div className={styles.rightNavigator}>
                  <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.data.get('current')]}
                    mode="horizontal"
                    style={{ lineHeight: '48px' }}
                  >
                    <Menu.Item key="home">
                      首页
                    </Menu.Item>
                    {!(this.props.noBlogFilter === true) &&
                        <SubMenu
                            title={
                              <span>
                            博客
                          </span>
                            }
                        >
                          <Menu.Item key="realStuff" >
                            <Icon type="book" id={styles.iconWrap} />干货
                          </Menu.Item>
                          <Menu.Item key="note"><Icon type="compass" id={styles.iconWrap} />杂记</Menu.Item>
                          <Menu.Item key="travel"><Icon type="flag" id={styles.iconWrap} />游记</Menu.Item>
                        </SubMenu>
                    }
                    <Menu.Item key="alipay">
                      关于
                    </Menu.Item>
                  </Menu>
                </div>

              </Col>
              <Col xs={0} md={3} />
            </Row>
          </div>
        </Header>
      </Layout>
    );
  }
}

navigator.propTypes = {};

export default navigator;

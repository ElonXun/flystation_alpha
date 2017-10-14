import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './login.css';
import AsyncFetch,{fGetCookieMes,fSetCookieMesCommon} from '../../utils/common';
import { HOST,TOKEN } from '../../utils/config';


const FormItem = Form.Item;


class loginForm extends React.Component {

  constructor(props){
    super(props)
    this.state = ({
       userName:'',
       passWord:'',
    })
  }


  handleSubmit = (e) => {
    // console.log(this.state.userName,this.state.passWord)
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
      }
    });
    //请求登录接口
    let data = {
      userName:this.state.userName,
      passWord:this.state.passWord,
    }
    AsyncFetch('post',HOST+'test/verifyAccount',data).then((res)=>{
      if(res.code==200&&res.status=='success'){
        // fSetCookieMesCommon(TOKEN,token)
        alert('登录成功')

      }
    })

  }

  handleClick=(key,e)=>{
    // console.log(e.target.value)
    switch (key) {
      case 'userName':
        this.setState({
          userName:e.target.value,
        })
        break; 
      case 'passWord':
        this.setState({
          passWord:e.target.value,
        })
        break;
      default:
        // statements_def
        break;
    }
  }



  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div style={{width:'100%',paddingTop:'100px'}}>
          <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                  <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" onChange={(e)=>{this.handleClick('userName',e)}}/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" onChange={(e)=>{this.handleClick('passWord',e)}}/>
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                  <Checkbox>Remember me</Checkbox>
              )}
              <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
                Log in
              </Button>
            </FormItem>
          </Form>
        </div>

    );
  }
}

const login = Form.create()(loginForm);



export default login

import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './login.css';

const FormItem = Form.Item;


class loginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
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
                  <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
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

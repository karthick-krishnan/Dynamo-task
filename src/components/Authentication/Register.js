import React, { Component } from 'react';
import { Form, Input, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { signUp } from '../../actions/authentication';
import {formItemLayout, tailFormItemLayout } from './ant-d-props'




class Register extends Component {

    constructor(props){
        super(props);
        this.state =  {isToggleOn: false};
      }

      render(){
        const onFinish = (values) => {
          this.props.signUp(values);
        };
        const Msgcomp = this.props.signingUpStatus ? this.props.signingUpStatus.code == 200 ? <h3 className="success-header">
          { this.props.signingUpStatus.msg } </h3> : <h3 className="error-header">{ this.props.signingUpStatus.msg  }</h3>: null;
        return(
            <Form
            {...formItemLayout}
            name="register"
            onFinish={onFinish}
            className="form"
            scrollToFirstError
          >
             <h1 className="header">Register</h1>
            <div>{Msgcomp}</div>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input />
            </Form.Item>
      
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if(!value || value.length > 5){
                      return Promise.resolve();
                    }      
                    return Promise.reject(new Error('Please enter atleast 6 characters!'));
                  },
                }),
                
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
      
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
      
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" className="button">
                Register
              </Button>
              <Link to="/">
              <Button type="primary" className="button">
                Login
              </Button>
              </Link>
            </Form.Item>
          </Form>
          )
      }
    }

    const mapStateToProps = (state) => {
      return {
        signingUpStatus: state.authentication.status,
        isLoading: state.authentication.isLoading
      }
 
    };
const mapDispatchToProps = dispatch => ({
  signUp: (data) => dispatch(signUp(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import {tailLayout, layout } from './ant-d-props';
import { connect } from 'react-redux'
import { login } from '../../actions/authentication'
import { withRouter } from 'react-router-dom';



class Login extends Component {

  constructor(props){
      super(props);
      this.state =  {isToggleOn: false};
    }

    render(){

      const onFinish = (values) => {
        console.log('Success:', values);
        this.props.login(values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      if(this.props.loginStatus && this.props.loginStatus.code == 200){
        const { history } = this.props;
        if(history) history.push('/launches');
      }

      const Msgcomp = this.props.loginStatus ? this.props.loginStatus.code == 401 ? <h3 className="error-header">
      { this.props.loginStatus.msg } </h3> : null : null; 

      return (
        <Form
          {...layout}
          name="basic"
          className="form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <h1 className="header">Login</h1>
          <div>{Msgcomp}</div>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" className="button">
              Login
            </Button>
            <Link to="/register">
            <Button type="primary">
              Sign up
              </Button>
            </Link>
    
          </Form.Item>
        </Form>
      );
    }
  }


const mapStateToProps = (state) => {
  return {
    loginStatus: state.authentication.loginStatus,
    isLoading: state.authentication.isLoading
  }
};
const mapDispatchToProps = dispatch => ({
login: (data) => dispatch(login(data))
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));

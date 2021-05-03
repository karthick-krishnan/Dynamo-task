import React, { Component } from 'react';
import { Typography } from 'antd';
import { PictureOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { getData } from '../../actions/api-list'
import { connect } from 'react-redux'
import TableView from '../TableView/TableView'
import GridView from '../GridView/GridView'
import { firebaseApp }  from '../../utils/firebase';
import { Button } from 'antd';
import './Launches.css'
import { withRouter } from 'react-router-dom';
const { Text, Link } = Typography;


class APIList extends Component {

  constructor(props){
    super(props);
    this.state =  {isListView: true};

    this.toggleViewMode = this.toggleViewMode.bind(this);
  }

  componentDidMount() {
    this.props.getData();
  }

  toggleViewMode(isListView) {
    return () => {
      this.setState({isListView})
    }
  }

  async logOut(){
    await firebaseApp.auth().signOut();
    console.log('this.props', this.props.history);
    this.props.history.goBack('/');
  }


  render() {
    const { isListView } = this.state;
    
    return (
      <div>
      <div className="logout-container">  
      <Link to="/">
        <Button type="primary" className="button" onClick={this.logOut.bind(this)}>
          Logout
        </Button>
      </Link>
      </div>
      <div className="container">
        <div className='toolbar'>
          <Text className='header'>Launches</Text>
          <div className='icons'>
            <PictureOutlined onClick={this.toggleViewMode(false)} />
            <UnorderedListOutlined onClick={this.toggleViewMode(true)} />
          </div>
        </div>
        { isListView ? <TableView dataSource={this.props.apiList} /> : <GridView dataSource={this.props.apiList} /> }
      </div>
      </div>
   
    )
  }
}
const mapStateToProps = state => ({
  apiList: state.publicAPI.apiList,
  isLoading: state.publicAPI.isLoading
});

const mapDispatchToProps = dispatch => ({
  getData: (searchString) => dispatch(getData(searchString))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(APIList));

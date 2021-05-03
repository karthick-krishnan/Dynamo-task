import React from 'react';
import { Table, Tag, Space, Typography } from 'antd';
import { useHistory } from "react-router";
const { Text, Link } = Typography;

export default props => {
    const history = useHistory();

    const openRecord = flight_number => {
        history.push('/launch/'+flight_number);
    }
    
    const columns = [
      {
        title: 'Mission Name',
        dataIndex: 'mission_name',
        key: 'mission_name',
        render: (text, record) => <a onClick={() => openRecord(record.flight_number)}>{text}</a>,
      },
      {
        title: 'Date',
        dataIndex: 'launch_date_utc',
        key: 'launch_date_utc',
        render: date => (
            <>
                <Text>{new Date(date).toLocaleDateString()}</Text> 
            </>
          ),
      },
      {
        title: 'State',
        dataIndex: 'launch_success',
        key: 'launch_success',
        render: state => (
          <>
            <Tag color={state ? 'green': 'red'}>
                {state ? 'SUCCESS' : 'FAILURE'}
            </Tag>
          </>
        ),
      }
    ];

    return (
        <Table dataSource={props.dataSource} columns={columns} />  
    );
}
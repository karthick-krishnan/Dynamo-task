import React from 'react'
import { useHistory } from "react-router";
import { List, Card } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import SpaceXLogo from '../../assets/spacex-logo.png'
const { Meta } = Card;

export default props => {

  const history = useHistory();
  const openRecord = flight_number => {
    history.push('/launch/'+flight_number);
}
    return(
        <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 5,
    }}
    pagination
    dataSource={props.dataSource}
    renderItem={item => (
      <List.Item>
        <Card
          cover={
            <img
            alt="example"
            src={item?.links?.mission_patch}
            onError={(e)=>{e.target.onerror = null; e.target.src=SpaceXLogo}}
          />
          }
          actions={[
            <ArrowRightOutlined key="setting" onClick={() => openRecord(item.flight_number)} />
          ]}
          >
          <Meta
            title={item?.mission_name}
          />
        </Card>
      </List.Item>
    )}
  />
    )
}
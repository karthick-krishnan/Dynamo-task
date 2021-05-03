import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { Typography } from 'antd';
import { getLaunchDataById } from '../../actions/api-list';
import YoutubeIFrame from '../YoutubeIFrame/YoutubeIFrame';
import './LaunchDetails.css'
const { Link, Text } = Typography;

const APIDetails = (props) => {
  let { flightNumber } = useParams();
  const dispatch = useDispatch();
  const launchDetails = useSelector(state => state.publicAPI?.launchDetails);
  const links = useSelector(state => state.publicAPI?.launchDetails?.links);

  useEffect(() => {
    dispatch(getLaunchDataById(flightNumber))
  }, []);

  const openLinkInNewTab = (linkAddress) => {
    return () => {
      window.open(linkAddress, '_blank').focus();
    }
  }

  return (
    <div>
      <Link className='header' onClick={openLinkInNewTab(links?.wikipedia)}>{launchDetails?.mission_name}</Link>
      <div>
        <div className='rocket-details'>
          <div>
            <span>Rocket Name:</span>
            <span>{launchDetails?.rocket?.rocket_name}</span>
          </div>
          <div>
            <span>Rocket Type:</span>
            <span>{launchDetails?.rocket?.rocket_type}</span>
          </div>
        </div>
        <div className='payloads'>
          <Text>Payloads</Text>
          {
            (launchDetails?.rocket?.second_stage?.payloads || []).map(payload => {
              return (
                <div className='payload'>
                  <div>
                    <span>Payload ID:</span>
                    <span>{payload.payload_id}</span>
                  </div>
                  <div>
                    <span>Payload Type:</span>
                    <span>{payload.payload_type || 'N/A'}</span>
                  </div>
                  <div>
                    <span>Payload Mass:</span>
                    <span>{payload.payload_mass_kg ? `${payload.payload_mass_kg} Kg` : 'N/A'}</span>
                  </div>
                  <div>
                    <span>Reused:</span>
                    <span>{payload.reused ? 'Yes' : 'No'}</span>
                  </div>
                  <div>
                    <span>Customers:</span>
                    <span>{payload.customers.join(',')}</span>
                  </div>
                  <div>
                    <span>Nationality:</span>
                    <span>{payload.nationality || 'N/A'}</span>
                  </div>
                  <div>
                    <span>Manufacturer:</span>
                    <span>{payload.manufacturer || 'N/A'}</span>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
      <div>
        {links?.youtube_id && <YoutubeIFrame embedId={links?.youtube_id} />}
      </div>
    </div>
  )
}


export default APIDetails;
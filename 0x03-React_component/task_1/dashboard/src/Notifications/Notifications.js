import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

import NotificationItemShape from './NotificationItemShape';

function Notifications ({displayDrawer, listNotifications}) {
    return(
        <>

        <div className='menuItem'>
            Your notifications
        </div>
        {displayDrawer? 
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <button 
            style={{float: "right", }}>
                arial-label = "Close"
                onClick={console.log('Close  button has been clicked')}
                <img src={closeIcon} alt='Close'></img>

            </button>

            {
              listNotifications.length !== 0 ?
                <p>Here is the list of notifications</p>
              : null
            }
            <ul>
              {
                listNotifications.length === 0 ?
                  <NotificationItem type="default" value="No new notification for now" />
                : null
              }
              {
                listNotifications.map((val, idx)=> {
                  return <NotificationItem
                  type={val.type}
                  value={val.value}
                  html={val.html}
                  key={val.id}
                />
                })
              }
            </ul>
        </div>
        : 
        null
        }
        </>


    );
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotificatons: []
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotificatons: PropTypes.arrayOf(NotificationItemShape)
};

export default Notifications;
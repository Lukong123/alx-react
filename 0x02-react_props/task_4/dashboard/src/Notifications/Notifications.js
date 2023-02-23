import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications () {
    return(
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <button 
            style={{float: "right", }}>
                arial-label = "Close"
                onClick={console.log('Close  button has been clicked')}
                <img src={closeIcon} alt='Close'></img>

            </button>

            <ul>
                <NotificationItem type="default" value="New course available"></NotificationItem>
                <NotificationItem type="urgent" value="New course available"></NotificationItem>
                <NotificationItem type="urgent" html={getLatestNotification()}></NotificationItem>
            </ul>
        </div>
    );
};

export default Notifications;
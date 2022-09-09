import React from 'react';
import './Notifications.css';
import {getLatestNotification} from './utils';
import closeIcon from './close-icon.png';

const Notifications = () => {
    return(
        <div className='Notifications'>
            <button
            style={{backgroundColor:'pink', padding: '5px'}}
            aria-label = "Close" onclick={console.log('Close button has been clicked')}>
                <img  src={closeIcon} alt="close Icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li className='default'>New Course Available</li>
                <li className='urgent'>New resume available</li>
                <li className='urgent'> dangerouslySetInnerHTML= {getLatestNotification()}</li>
                
            </ul>
        </div>
    )
}

export default Notifications;
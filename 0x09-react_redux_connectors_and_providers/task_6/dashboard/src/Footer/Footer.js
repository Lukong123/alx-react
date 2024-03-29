import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';
import { AppContext } from '../App/AppContext';
import React, { useContext } from 'react';


function Footer(props ) {
  const user = props.user;

  return (
    <div className="App-footer">
      {(user && (typeof user === 'object' ? Object.keys(user).length !== 0 : false)) && <p><a href="#">Contact us</a></p>}
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </div>
  )
}

export function mapStateToProps(state) {
  return {
    user: state.get('user')
  };
}

export default connect(mapStateToProps)(Footer);

import React, { useContext } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';
import * as uiAC from '../actions/uiActionCreators';

function Header() {
  const { user, logOut } = useContext(AppContext);

  return (
    <>
      <header className={css(headerStyles.appHeader)}>
        <img src={logo} alt="logo" className={css(headerStyles.appLogo)}/>
        <h1 className={css(headerStyles.h1)}>School dashboard</h1>
      </header>
 {
      (user && (typeof user === 'object' ? Object.keys(user).length !== 0 : false)) && <section id="logoutSection">
        <h2>Welcome<strong> {user.email} </strong><em><a href="#" onClick={logout}>(logout)</a></em>
        </h2>
      </section>
      }
    </>
  );
}

const headerStyles = StyleSheet.create({
	h1: {
		marginLeft: '10rem',
    float: 'right',
    flex: 2,
    '@media (max-width: 900px)': {
      margin: 'auto'
    }
	},

	appHeader: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		color: 'red',
		borderBottom: '1px solid #E11D3F',
    width: '100%',
    boxSizing: 'border-box'
	},

	appLogo: {
		maxHeight: '200px',
		maxWidth: '200px',
    height: 'auto',
    width: 'auto',
    flex: 1
	}
});
export function mapStateToProps(state) {
  return {
    user: state.get('user')
  };
}

export const mapDispatchToProps = {
  logout: uiAC.logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

import React from 'react';
import Header from '../Header/Header';
import Footer from  '../Footer/Footer';
import Login from '../Login/Login';
import Notification from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';
// import PropTypes from 'prop-types';
import { StyleSheet, css} from 'aphrodite';
import {user, AppContext} from './AppContext';
import { connect } from 'react-redux';
import * as uiAC from '../actions/uiActionCreators';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40},
    ];
  
    
    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
      listNotifications: [
        {id: 1, value: "New course available", type: "default"},
        {id: 2, value: "New resume available", type: "urgent"},
        {id: 3, html: {__html: getLatestNotification()}, type: "urgent"},]
     

    };
    
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);

  }

  markNotificationAsRead(id) {
    const newList = this.state.listNotifications.filter(not => not.id !== id);
    this.setState({listNotifications: newList});
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true
      }
    });
  }

  logOut() {
    this.setState({
      user: user
    });
  }

  handleDisplayDrawer() {
    this.setState({
      displayDrawer: true
    });
  }

  handleHideDrawer() {
    this.setState({
      displayDrawer: false
    })
  }

  handleKeyDown(e) {
    if(e.ctrlKey && e.key === 'h') {
    e.preventDefault();
    alert("Logging you out");
      this.logOut();
    }
  }
  

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <AppContext.Provider value={{
        user: this.state.user,
        logOut: this.state.logOut
      }}>
    <React.Fragment>
      <Notification
       listNotifications={this.state.listNotifications}
       markNotificationAsRead={this.markNotificationAsRead}
       displayDrawer = {this.state.displayDrawer}
       handleDisplayDrawer = {this.handleDisplayDrawer}
       handleHideDrawer = {this.handleHideDrawer}
        />
    <div className={css(bodyStyles.App)}>
      <Header />
      {this.state.user.isLoggedIn ? 
      <BodySectionWithMarginBottom title='Course list'><CourseList  listCourses={this.listCourses}/></BodySectionWithMarginBottom>
      :
      <BodySectionWithMarginBottom title='Log in to continue'><Login logIn={this.logIn} /></BodySectionWithMarginBottom>
      }
      <BodySection title='News from the School'>
        <p>Random text for school news</p>
      </BodySection>
      <div className={css(footerStyles.footer)}>
      <Footer /> 
      </div>
    </div>
    </React.Fragment>
    </AppContext.Provider>
  );}
}

const bodyStyles = StyleSheet.create({
  App: {

  padding: '1em',
  position: 'relative',
  minHeight: '100vh',
  }
});

const footerStyles = StyleSheet.create({
  footer: {
    borderTop: '1px solid red',
    fontStyle: 'italic',
    textAlign: 'center',
  }
})

export function mapStateToProps(state) {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
    displayDrawer: state.get('isNotificationDrawerVisible')
  };
}

const mapDispatchToProps = {
  displayNotificationDrawer: uiAC.displayNotificationDrawer,
  hideNotificationDrawer: uiAC.hideNotificationDrawer
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


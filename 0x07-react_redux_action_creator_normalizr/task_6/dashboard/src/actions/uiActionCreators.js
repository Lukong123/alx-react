import * as uiActionTypes from './uiActionTypes';

export function login(email, password) {
    return {
        type: uiActionTypes.LOGIN,
        user: {email, password}
    };
}
export const boundLogin = (email, password) => dispatch(login(index));

export function logout() {
    return {
        type: uiActionTypes.LOGOUT
    };
}

export const boundLogout = () => dispatch(logout());


export function displayNotificationDrawer() {
    return {
        type: uiActionTypes.DISPLAY_NOTIFICATION_DRAWER
    };
}
export const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer(index));

export function hideNotificationDrawer() {
    return {
        type: uiActionTypes.HIDE_NOTIFICATION_DRAWER
    };
}
export const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer(index));
